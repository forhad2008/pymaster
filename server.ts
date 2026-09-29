import express from 'express';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI, Type } from '@google/genai';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Initialize modern Google GenAI SDK
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    }
  }
});

async function startServer() {
  const app = express();
  app.use(express.json());

  // API Route for Gemini code explanation
  app.post('/api/explain', async (req: express.Request, res: express.Response): Promise<any> => {
    try {
      const { code } = req.body;
      if (!code) {
        return res.status(400).json({ error: 'Code is required' });
      }

      const response = await ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: `You are an expert Python tutor. Provide a detailed, highly intuitive, and clean explanation of the following Python code for PyMaster Academy.

Structure your response into these exact sections with clean headings:
1. 🧠 Core Logic & Working Principle (What the code does step-by-step, simple and intuitive)
2. 🛠️ Python Elements Breakdown (A bulleted list of functions, keywords, operators, and types used, with explanations)
3. ⚠️ Common Beginner Pitfalls (Show typical mistakes developers make when writing this specific logic and how to avoid them)
4. 🚀 Real-Life Production Use Case (Where this is used in actual software, like SaaS backends, APIs, games, or data science)
5. ✨ Suggested Enhancements (A bulleted list of 1-2 ways to optimize or expand the code)

Keep it engaging, visual, and educational. Format with beautiful markdown and bold labels. Here is the code:

\`\`\`python
${code}
\`\`\``,
      });

      res.json({ explanation: response.text });
    } catch (error: any) {
      console.error('Gemini call failed:', error);
      res.status(500).json({ error: error.message || 'Failed to generate explanation' });
    }
  });

  // API Route for pytest assertion validation via Gemini
  app.post('/api/validate-pytest', async (req: express.Request, res: express.Response): Promise<any> => {
    try {
      const { targetCode, testCode } = req.body;
      if (!targetCode || !testCode) {
        return res.status(400).json({ error: 'Both targetCode and testCode are required' });
      }

      const response = await ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: `You are an automated Python pytest validation harness. Your job is to analyze the provided target Python function and the user's written pytest assertion statements, and evaluate their validity, correctness, and potential coverage.

Target function code to be tested:
\`\`\`python
${targetCode}
\`\`\`

User's custom pytest code containing assertion statements:
\`\`\`python
${testCode}
\`\`\`

Perform the following validation steps:
1. Parse the user's tests. Ensure there is correct pytest structure (e.g. valid syntax, functions beginning with "test_", proper assertions).
2. For each assertion written by the user, verify if it is logically and mathematically CORRECT against the target function's logic. Explain why it is correct or incorrect.
3. Assess the estimated coverage percent of the target function covered by the user's assertions.
4. Suggest what edge cases or boundary conditions are missing from the tests (e.g. empty lists, zero, negative numbers, overflow).
5. Provide a perfectly correct, complete, and robust pytest script ("improvedTestCode") that includes the corrected user's tests plus additional tests for all uncovered edge cases.

Respond in strict JSON format matching the schema provided.`,
        config: {
          responseMimeType: 'application/json',
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              valid: {
                type: Type.BOOLEAN,
                description: 'True if the pytest syntax and structure are generally valid and follow pytest standards.'
              },
              summary: {
                type: Type.STRING,
                description: 'A 1-2 sentence high-level overview of the test suite quality and logical validity.'
              },
              results: {
                type: Type.ARRAY,
                description: 'A list of validation results for each individual assertion statement identified in the user\'s test code.',
                items: {
                  type: Type.OBJECT,
                  properties: {
                    assertion: {
                      type: Type.STRING,
                      description: 'The assertion statement (e.g. "assert divide(10, 2) == 5").'
                    },
                    status: {
                      type: Type.STRING,
                      description: 'The status of the assertion against the target function. One of: "passed", "failed", "syntax_error".'
                    },
                    explanation: {
                      type: Type.STRING,
                      description: 'Detailed explanation of why this assertion logically holds true or fails against the target function.'
                    }
                  },
                  required: ['assertion', 'status', 'explanation']
                }
              },
              coveragePercent: {
                type: Type.INTEGER,
                description: 'The estimated test coverage percentage (0-100) of the target function covered by the user\'s assertions.'
              },
              missingCases: {
                type: Type.ARRAY,
                description: 'A list of edge cases, boundary conditions, or inputs that were NOT tested by the user\'s assertions.',
                items: {
                  type: Type.STRING
                }
              },
              improvedTestCode: {
                type: Type.STRING,
                description: 'A beautiful, clean, and complete pytest script with proper imports, containing the corrected tests and robust edge cases.'
              }
            },
            required: ['valid', 'summary', 'results', 'coveragePercent', 'missingCases', 'improvedTestCode']
          }
        }
      });

      // Parse and respond with the JSON text
      const resultText = response.text || '{}';
      res.json(JSON.parse(resultText.trim()));
    } catch (error: any) {
      console.error('Pytest validation failed:', error);
      res.status(500).json({ error: error.message || 'Failed to validate pytest logic' });
    }
  });

  // Create Vite server in middleware mode and configure the app type as 'spa'
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'spa',
  });

  // Use vite's connect instance as middleware
  app.use(vite.middlewares);

  const port = process.env.PORT ? parseInt(process.env.PORT) : 5173;
  app.listen(port, '0.0.0.0', () => {
    console.log(`PyMaster Academy server is running at http://localhost:${port}`);
  });
}

startServer();
