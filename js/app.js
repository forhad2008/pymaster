// PyMastery Application Logic
let pyodideInstance = null;
let pyodideLoadingPromise = null;

// State Management
const STATE = {
  activeTopicId: "topic-1",
  activeCategoryFilter: "all",
  searchQuery: "",
  completedTopics: new Set(JSON.parse(localStorage.getItem("pymaster_completed_topics") || "[]")),
  theme: localStorage.getItem("pymaster_theme") || "dark"
};

// Initialize App
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  renderSidebar();
  renderTopics();
  setupEventListeners();
  updateProgressUI();
  
  // Auto-open first topic or topic from URL hash
  const hash = window.location.hash.replace("#", "");
  if (hash && document.getElementById(hash)) {
    openTopic(hash, true);
  } else {
    openTopic("topic-1", false);
  }
});

// Theme Management
function initTheme() {
  document.documentElement.setAttribute("data-theme", STATE.theme);
  updateThemeIcon();
}

function toggleTheme() {
  STATE.theme = STATE.theme === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", STATE.theme);
  localStorage.setItem("pymaster_theme", STATE.theme);
  updateThemeIcon();
}

function updateThemeIcon() {
  const icon = document.querySelector("#theme-toggle i");
  if (icon) {
    icon.className = STATE.theme === "dark" ? "fa-solid fa-moon" : "fa-solid fa-sun";
  }
  const prismTheme = document.getElementById("prism-theme");
  if (prismTheme) {
    prismTheme.href = STATE.theme === "dark" 
      ? "https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-tomorrow.min.css" 
      : "https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism.min.css";
  }
}

// Render Sidebar Navigation
function renderSidebar() {
  const nav = document.getElementById("sidebar-nav");
  if (!nav) return;
  
  nav.innerHTML = "";
  
  let currentCat = "";
  
  TOPICS_DATA.forEach(topic => {
    // Check filter
    if (STATE.activeCategoryFilter !== "all" && topic.category !== STATE.activeCategoryFilter) {
      return;
    }
    
    // Category header separator
    if (topic.categoryLabel !== currentCat) {
      currentCat = topic.categoryLabel;
      const groupHeader = document.createElement("div");
      groupHeader.className = "sidebar-group-title";
      groupHeader.innerHTML = `<i class="fa-solid fa-folder-closed"></i> ${currentCat}`;
      nav.appendChild(groupHeader);
    }
    
    const isCompleted = STATE.completedTopics.has(topic.id);
    const isActive = STATE.activeTopicId === topic.id;
    
    const item = document.createElement("div");
    item.className = `sidebar-item ${isActive ? 'active' : ''}`;
    item.id = `sidebar-item-${topic.id}`;
    item.onclick = (e) => {
      e.preventDefault();
      openTopic(topic.id, true);
    };
    
    item.innerHTML = `
      <div class="sidebar-item-left">
        <span class="sidebar-num">${topic.num}</span>
        <span class="sidebar-text" title="${topic.title}">${topic.title}</span>
      </div>
      <i class="fa-solid fa-circle-check sidebar-item-check ${isCompleted ? 'checked' : ''}" 
         onclick="event.stopPropagation(); toggleCompleteTopic('${topic.id}')"
         title="${isCompleted ? 'Completed' : 'Mark as done'}"></i>
    `;
    nav.appendChild(item);
  });
}

// Render Main Topics Content Area
function renderTopics() {
  const container = document.getElementById("topics-container");
  if (!container) return;
  
  container.innerHTML = "";
  
  TOPICS_DATA.forEach((topic) => {
    const isCompleted = STATE.completedTopics.has(topic.id);
    const card = document.createElement("section");
    card.className = "topic-card";
    card.id = topic.id;
    
    // Subtopics HTML builder
    let subtopicsHTML = "";
    if (topic.subtopics && topic.subtopics.length > 0) {
      subtopicsHTML = `
        <div class="subtopics-list">
          ${topic.subtopics.map(sub => `
            <div class="subtopic-item">
              <div class="subtopic-head">
                <i class="fa-solid fa-angle-right"></i>
                <span>${sub.name}</span>
              </div>
              <div class="subtopic-desc">
                ${sub.desc}
                ${sub.code ? `
                  <div class="code-wrapper" style="margin-top: 8px;">
                    <div class="code-header">
                      <span>Python Snippet</span>
                      <button class="code-btn" onclick="copyCodeSnippet(this)"><i class="fa-regular fa-copy"></i> Copy</button>
                    </div>
                    <div class="code-content">
                      <pre><code class="language-python">${escapeHTML(sub.code)}</code></pre>
                    </div>
                  </div>
                ` : ''}
              </div>
            </div>
          `).join("")}
        </div>
      `;
    }
    
    card.innerHTML = `
      <div class="topic-header" onclick="toggleTopicCard('${topic.id}')">
        <div class="topic-title-group">
          <div class="topic-badge-num">#${topic.num}</div>
          <div class="topic-name-wrap">
            <span class="topic-category-tag">${topic.categoryLabel}</span>
            <h2 class="topic-title">${topic.title}</h2>
          </div>
        </div>
        <div class="topic-actions">
          <button class="topic-complete-btn ${isCompleted ? 'completed' : ''}" 
                  onclick="event.stopPropagation(); toggleCompleteTopic('${topic.id}')">
            <i class="fa-solid ${isCompleted ? 'fa-circle-check' : 'fa-circle'}"></i>
            <span>${isCompleted ? 'Completed' : 'Mark Done'}</span>
          </button>
          <i class="fa-solid fa-chevron-down topic-chevron"></i>
        </div>
      </div>
      
      <div class="topic-body">
        <!-- Dual Concept Overview -->
        <div class="concept-grid">
          <div class="concept-box simple">
            <div class="concept-header">
              <i class="fa-solid fa-lightbulb"></i>
              <span>সহজ ভাষায় ধারণা (Simple Concept)</span>
            </div>
            <p class="concept-text">${topic.conceptSimple}</p>
          </div>
          <div class="concept-box technical">
            <div class="concept-header">
              <i class="fa-solid fa-microchip"></i>
              <span>Technical Deep-Dive (Engineering View)</span>
            </div>
            <p class="concept-text">${topic.conceptTechnical}</p>
          </div>
        </div>
        
        <!-- Main Code Example with Live Execution & Copy -->
        <div class="code-wrapper">
          <div class="code-header">
            <span><i class="fa-brands fa-python"></i> Full Code Example — Module ${topic.num}</span>
            <div class="code-actions">
              <button class="code-btn run-btn" onclick="runCodeInPlayground('${topic.id}')">
                <i class="fa-solid fa-play"></i> Run Code
              </button>
              <button class="code-btn" onclick="copyCodeSnippet(this)">
                <i class="fa-regular fa-copy"></i> Copy
              </button>
            </div>
          </div>
          <div class="code-content">
            <pre><code class="language-python">${escapeHTML(topic.exampleCode)}</code></pre>
          </div>
        </div>
        
        <!-- Expected Output -->
        <div class="output-box">
          <div class="output-label"><i class="fa-solid fa-terminal"></i> Expected Execution Output:</div>
          <div class="output-text">${escapeHTML(topic.expectedOutput)}</div>
        </div>
        
        <!-- Granular Subtopics List -->
        <div style="margin-top: 24px;">
          <h4 style="font-size: 0.95rem; margin-bottom: 12px; color: var(--text-main); display: flex; align-items: center; gap: 6px;">
            <i class="fa-solid fa-list-check" style="color: var(--accent-blue);"></i> Granular Topics & Syntax Reference
          </h4>
          ${subtopicsHTML}
        </div>
        
        <!-- Hands-on Practice Task -->
        <div class="practice-banner">
          <i class="fa-solid fa-dumbbell practice-icon"></i>
          <div class="practice-text">
            <strong>🎯 Hands-on Practice Challenge:</strong>
            <p>${topic.practiceTask}</p>
          </div>
        </div>
      </div>
    `;
    
    container.appendChild(card);
  });
  
  if (window.Prism) {
    Prism.highlightAll();
  }
}

// 1-Click Topic Jump & Auto-Open Functionality
function openTopic(topicId, shouldScroll = true) {
  STATE.activeTopicId = topicId;
  const topicData = TOPICS_DATA.find(t => t.id === topicId);
  if (!topicData) return;
  
  // 1. Update Breadcrumbs
  const crumbCategory = document.getElementById("crumb-category");
  const crumbTopic = document.getElementById("crumb-topic");
  if (crumbCategory) crumbCategory.textContent = topicData.categoryLabel;
  if (crumbTopic) crumbTopic.textContent = `${topicData.num}. ${topicData.title}`;
  
  // 2. Open Target Card
  const targetCard = document.getElementById(topicId);
  if (targetCard) {
    targetCard.classList.add("open");
    targetCard.classList.remove("highlight-pulse");
    void targetCard.offsetWidth; // Trigger reflow
    targetCard.classList.add("highlight-pulse");
    
    if (shouldScroll) {
      targetCard.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
  
  // 3. Highlight in Sidebar
  document.querySelectorAll(".sidebar-item").forEach(el => el.classList.remove("active"));
  const activeSidebarItem = document.getElementById(`sidebar-item-${topicId}`);
  if (activeSidebarItem) {
    activeSidebarItem.classList.add("active");
    activeSidebarItem.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
  
  // Update URL hash without reload
  history.replaceState(null, "", `#${topicId}`);
}

function toggleTopicCard(topicId) {
  const card = document.getElementById(topicId);
  if (card) {
    const wasOpen = card.classList.contains("open");
    if (!wasOpen) {
      openTopic(topicId, false);
    } else {
      card.classList.remove("open");
    }
  }
}

function toggleCompleteTopic(topicId) {
  if (STATE.completedTopics.has(topicId)) {
    STATE.completedTopics.delete(topicId);
  } else {
    STATE.completedTopics.add(topicId);
    showToast("🎉 Topic marked as completed!");
  }
  
  localStorage.setItem("pymaster_completed_topics", JSON.stringify(Array.from(STATE.completedTopics)));
  
  // Update UI everywhere
  updateProgressUI();
  renderSidebar();
  
  const card = document.getElementById(topicId);
  if (card) {
    const btn = card.querySelector(".topic-complete-btn");
    const isCompleted = STATE.completedTopics.has(topicId);
    if (btn) {
      btn.className = `topic-complete-btn ${isCompleted ? 'completed' : ''}`;
      btn.innerHTML = `
        <i class="fa-solid ${isCompleted ? 'fa-circle-check' : 'fa-circle'}"></i>
        <span>${isCompleted ? 'Completed' : 'Mark Done'}</span>
      `;
    }
  }
}

function updateProgressUI() {
  const count = STATE.completedTopics.size;
  const total = TOPICS_DATA.length;
  const pct = Math.round((count / total) * 100);
  
  const text = document.getElementById("progress-text");
  const fill = document.getElementById("progress-fill");
  
  if (text) text.textContent = `${count}/${total} Done (${pct}%)`;
  if (fill) fill.style.width = `${pct}%`;
}

// Expand / Collapse All
function expandAllTopics() {
  document.querySelectorAll(".topic-card").forEach(c => c.classList.add("open"));
}

function collapseAllTopics() {
  document.querySelectorAll(".topic-card").forEach(c => c.classList.remove("open"));
}

// Quick Global Search
function setupSearch() {
  const input = document.getElementById("global-search");
  const clearBtn = document.getElementById("clear-search");
  const panel = document.getElementById("search-results-panel");
  const resultsList = document.getElementById("results-list");
  const countBadge = document.getElementById("results-count");
  
  if (!input) return;
  
  input.addEventListener("input", (e) => {
    const q = e.target.value.trim().toLowerCase();
    STATE.searchQuery = q;
    
    if (q.length > 0) {
      clearBtn.classList.remove("hidden");
      const matched = TOPICS_DATA.filter(t => {
        const titleMatch = t.title.toLowerCase().includes(q);
        const numMatch = String(t.num) === q || `topic-${t.num}` === q;
        const conceptMatch = t.conceptSimple.toLowerCase().includes(q) || t.conceptTechnical.toLowerCase().includes(q);
        const subtopicMatch = t.subtopics.some(s => s.name.toLowerCase().includes(q) || s.desc.toLowerCase().includes(q));
        const codeMatch = t.exampleCode.toLowerCase().includes(q);
        return titleMatch || numMatch || conceptMatch || subtopicMatch || codeMatch;
      });
      
      panel.classList.remove("hidden");
      countBadge.textContent = matched.length;
      resultsList.innerHTML = matched.map(t => `
        <div class="result-item" onclick="openTopic('${t.id}', true); hideSearchResults();">
          <div class="result-info">
            <strong>#${t.num} ${t.title}</strong>
            <span>${t.categoryLabel} — ${t.summary}</span>
          </div>
          <i class="fa-solid fa-arrow-right" style="color: var(--accent-blue);"></i>
        </div>
      `).join("");
      
      if (matched.length === 0) {
        resultsList.innerHTML = `<div style="padding: 12px; color: var(--text-dim); text-align: center;">No matching topics found for "${q}"</div>`;
      }
    } else {
      clearBtn.classList.add("hidden");
      panel.classList.add("hidden");
    }
  });
  
  clearBtn.addEventListener("click", () => {
    input.value = "";
    input.focus();
    clearBtn.classList.add("hidden");
    panel.classList.add("hidden");
  });
  
  document.getElementById("close-search-results")?.addEventListener("click", () => {
    input.value = "";
    clearBtn.classList.add("hidden");
    panel.classList.add("hidden");
  });
}

function hideSearchResults() {
  document.getElementById("search-results-panel")?.classList.add("hidden");
}

// Copy Code Snippet
function copyCodeSnippet(btnElement) {
  const wrapper = btnElement.closest(".code-wrapper");
  if (!wrapper) return;
  const code = wrapper.querySelector("code")?.innerText || "";
  navigator.clipboard.writeText(code).then(() => {
    showToast("✅ Code copied to clipboard!");
  });
}

// Toast Notification
function showToast(message) {
  const toast = document.getElementById("toast");
  const msg = document.getElementById("toast-message");
  if (toast && msg) {
    msg.textContent = message;
    toast.classList.remove("hidden");
    setTimeout(() => {
      toast.classList.add("hidden");
    }, 2500);
  }
}

// Pyodide WebAssembly Sandbox Runner
async function initPyodide() {
  if (pyodideInstance) return pyodideInstance;
  if (!pyodideLoadingPromise) {
    const out = document.getElementById("live-code-output");
    if (out) out.textContent = "⏳ Initializing Pyodide Python 3.12 WebAssembly Engine (downloading runtime)...\\n";
    pyodideLoadingPromise = loadPyodide({
      stdout: (text) => {
        const o = document.getElementById("live-code-output");
        if (o) o.textContent += text + "\\n";
      },
      stderr: (text) => {
        const o = document.getElementById("live-code-output");
        if (o) o.textContent += "[ERROR] " + text + "\\n";
      }
    }).then(py => {
      pyodideInstance = py;
      if (out) out.textContent += "✅ Python 3.12 WebAssembly Runtime Ready!\\n\\n";
      return py;
    }).catch(err => {
      if (out) out.textContent += "❌ Pyodide loading error: " + err + "\\n";
      throw err;
    });
  }
  return pyodideLoadingPromise;
}

function runCodeInPlayground(topicId) {
  const topic = TOPICS_DATA.find(t => t.id === topicId);
  if (!topic) return;
  
  const modal = document.getElementById("playground-modal");
  const input = document.getElementById("live-code-input");
  const output = document.getElementById("live-code-output");
  
  if (modal && input) {
    input.value = topic.exampleCode;
    modal.classList.remove("hidden");
    if (output) output.textContent = `--- Executing Code for Module #${topic.num}: ${topic.title} ---\\n`;
    executeLiveCode();
  }
}

async function executeLiveCode() {
  const input = document.getElementById("live-code-input");
  const output = document.getElementById("live-code-output");
  if (!input || !output) return;
  
  const code = input.value;
  try {
    const py = await initPyodide();
    output.textContent += ">>> Executing script...\\n";
    const startTime = performance.now();
    await py.runPythonAsync(code);
    const duration = ((performance.now() - startTime) / 1000).toFixed(4);
    output.textContent += `\\n[Process completed in ${duration}s with exit code 0]\\n`;
  } catch (err) {
    output.textContent += `\\nTraceback (most recent call last):\\n${err.message || err}\\n`;
  }
}

// Next Topic Navigation
function goToNextTopic() {
  const currentIndex = TOPICS_DATA.findIndex(t => t.id === STATE.activeTopicId);
  if (currentIndex >= 0 && currentIndex < TOPICS_DATA.length - 1) {
    const nextTopic = TOPICS_DATA[currentIndex + 1];
    openTopic(nextTopic.id, true);
  } else {
    showToast("🎉 You have reached the final module (Module 36)!");
  }
}

// Event Listeners Setup
function setupEventListeners() {
  // Theme Toggle
  document.getElementById("theme-toggle")?.addEventListener("click", toggleTheme);
  
  // Next Topic Button
  document.getElementById("btn-next-topic")?.addEventListener("click", goToNextTopic);
  
  // Expand / Collapse Controls
  document.getElementById("expand-all-btn")?.addEventListener("click", expandAllTopics);
  document.getElementById("collapse-all-btn")?.addEventListener("click", collapseAllTopics);
  
  // Category Pills Filtering
  document.querySelectorAll("#category-pills .pill").forEach(pill => {
    pill.addEventListener("click", () => {
      document.querySelectorAll("#category-pills .pill").forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      STATE.activeCategoryFilter = pill.getAttribute("data-filter") || "all";
      renderSidebar();
    });
  });
  
  // Sidebar Mobile/Desktop Toggle
  const sidebar = document.getElementById("sidebar");
  document.getElementById("sidebar-toggle")?.addEventListener("click", () => {
    sidebar?.classList.toggle("collapsed");
  });
  
  // Interactive Playground Modal
  const modal = document.getElementById("playground-modal");
  document.getElementById("btn-run-playground")?.addEventListener("click", () => {
    modal?.classList.remove("hidden");
    initPyodide();
  });
  
  document.getElementById("close-playground")?.addEventListener("click", () => {
    modal?.classList.add("hidden");
  });
  
  document.getElementById("modal-run-btn")?.addEventListener("click", executeLiveCode);
  document.getElementById("modal-clear-output")?.addEventListener("click", () => {
    const o = document.getElementById("live-code-output");
    if (o) o.textContent = "";
  });
  
  // Close modal when clicking backdrop
  modal?.addEventListener("click", (e) => {
    if (e.target === modal) modal.classList.add("hidden");
  });
  
  // Search
  setupSearch();
  
  // Global Keyboard Shortcuts
  window.addEventListener("keydown", (e) => {
    if (e.key === "/" && document.activeElement?.tagName !== "INPUT" && document.activeElement?.tagName !== "TEXTAREA") {
      e.preventDefault();
      document.getElementById("global-search")?.focus();
    } else if (e.key === "Escape") {
      modal?.classList.add("hidden");
      hideSearchResults();
    } else if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "b") {
      e.preventDefault();
      sidebar?.classList.toggle("collapsed");
    }
  });
}

function escapeHTML(str) {
  if (!str) return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
