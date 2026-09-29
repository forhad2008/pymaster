# -*- coding: utf-8 -*-
"""
Generate 100% Pure English topicsDataGenerated.ts for PyMaster Academy Topics Explorer
Ensures clean, universal translation without mixed-language artifacts.
"""
import json
import os
from generate_pure_encyclopedia_en import CHAPTERS_MASTER

topics_data = []

categories = ["beginner", "beginner", "beginner", "beginner", "beginner",
              "intermediate", "intermediate", "intermediate", "intermediate", "intermediate",
              "intermediate", "intermediate", "intermediate", "intermediate", "intermediate",
              "advanced", "advanced", "advanced", "advanced",
              "advanced", "advanced", "advanced", "advanced", "advanced", "advanced", "advanced",
              "applied", "applied", "applied",
              "applied", "applied", "applied", "applied", "applied", "applied", "projects"]

for idx, ch in enumerate(CHAPTERS_MASTER, 1):
    cat = categories[idx - 1] if idx - 1 < len(categories) else "applied"
    cat_label = (
        "Beginner Foundations" if cat == "beginner" else
        "Core Primitives & Logic" if cat == "intermediate" else
        "OOP & Advanced Architecture" if cat == "advanced" else
        "Applied & AI Engineering" if cat == "applied" else "Capstone Projects"
    )
    
    subtopics_cleaned = []
    for s in ch["subtopics"]:
        subtopics_cleaned.append({
            "name": s["name"],
            "desc": s["desc"],
            "code": s["code"]
        })
        
    topic_obj = {
        "id": f"topic-{ch['num']}",
        "num": ch["num"],
        "title": f"Topic {ch['num']}: {ch['title']}",
        "category": cat,
        "categoryLabel": cat_label,
        "icon": "Compass" if idx <= 5 else "Database" if idx <= 10 else "Cpu" if idx <= 15 else "Sparkles" if idx <= 19 else "Terminal" if idx <= 26 else "Zap" if idx <= 29 else "Globe",
        "summary": ch["summary"],
        "conceptSimple": ch["conceptSimple"],
        "conceptTechnical": ch["conceptTechnical"],
        "exampleCode": ch["subtopics"][0]["code"] if ch["subtopics"] else "# Python Code\nprint('Topic Initialized')",
        "expectedOutput": "Code executed with status 200 OK (0)",
        "practiceTask": ch["challenge"]["task"],
        "subtopics": subtopics_cleaned
    }
    topics_data.append(topic_obj)

output_path = os.path.join(os.path.dirname(__file__), "src", "topicsDataGenerated.ts")

content = f"""// 100% Pure English Master Dataset for PyMaster Academy Topics Explorer
// Provides crystal-clear text that translates cleanly without mixed-language artifacts.

export const TOPICS_DATA: any[] = {json.dumps(topics_data, indent=2, ensure_ascii=False)};
"""

with open(output_path, "w", encoding="utf-8") as f:
    f.write(content)

print(f"Successfully wrote {len(topics_data)} topics to {output_path}!")
