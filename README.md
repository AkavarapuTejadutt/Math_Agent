
# 📚 Math Tutor Agent

> 🤖 An AI-powered math tutor that gives **step-by-step solutions** with a modern, interactive UI.  
> Built with **FastAPI + React + RAG pipelines**, designed for learning as much as solving.

---

## 📝 Project Description
The **Math Tutor Agent** is a full-stack AI web application designed to help students, educators, and math enthusiasts by providing **clear, structured, step-by-step solutions** to mathematical problems.  

Unlike a regular calculator, this agent acts like a **tutor**. You can enter problems from **algebra, calculus, trigonometry, or linear algebra**, and the system returns both the **final answer** and a **detailed explanation of steps**.  

This project integrates:
- 🎯 **Frontend**: A modern React + TypeScript UI styled with TailwindCSS and Framer Motion for animations.  
- ⚡ **Backend**: FastAPI powered by embeddings, vector search, and RAG pipelines for reasoning.  
- 🧠 **AI Models**: Sentence Transformers for semantic understanding, ChromaDB for knowledge retrieval, and rule-based math solvers.  

The result is a sleek, interactive app that feels like a **personal math professor**.

---

## 🚀 Tech Stack & Why

### 🔹 Frontend
- **React + TypeScript** → component-driven UI with type safety.  
- **Vite** → lightning-fast bundler for dev & prod.  
- **TailwindCSS** → utility-first CSS for consistent design.  
- **Framer Motion** → smooth animations (floating icons, fade-ins).  
- **Lucide Icons** → crisp SVG icons.  
- **React Markdown + KaTeX** → beautifully renders math formulas.  

### 🔹 Backend
- **FastAPI + Uvicorn** → async, high-performance API layer.  
- **Sentence Transformers (`all-MiniLM-L6-v2`)** → semantic embeddings for math queries.  
- **ChromaDB** → vector database for storing and retrieving math knowledge.  
- **DuckDuckGo Search (`ddgs`)** → optional web search for external math references.  
- **PyPDF2 / pypdf** → import PDF knowledge bases.  

### 🔹 Architecture
- **RAG (Retrieval-Augmented Generation)** pipeline:
  1. User submits a math question via frontend.  
  2. FastAPI backend embeds the query (`Sentence Transformers`).  
  3. Embedding compared in **ChromaDB** → fetch relevant math facts/examples.  
  4. Answer generated + structured (final solution + steps).  
  5. Frontend renders result in a styled UI card with collapsible explanations.  

---

## 🔄 Project Flow

```mermaid
flowchart TD
    A[User Input in Frontend] --> B[FastAPI Backend]
    B --> C[Sentence Transformer Embedding]
    C --> D[ChromaDB Vector Search]
    D --> E[Math Solver + Reasoning Engine]
    E --> F[Final Answer + Steps]
    F --> G[React Frontend UI Display]
````

---

## 🛠 Installation

### 1. Clone Repository

```bash
git clone https://github.com/AkavarapuTejadutt/Math_Agent.git
cd Math_Agent
```

### 2. Backend Setup

```bash
pip install -r requirements.txt
uvicorn app2:app --reload --port 9000
```

### 3. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

* Frontend → [http://localhost:5173](http://localhost:5173)
* Backend → [http://127.0.0.1:9000](http://127.0.0.1:9000)

---

## 🧪 Example Queries

* Solve: `x² - 5x + 6 = 0`
* Differentiate: `f(x) = x³ + 5x²`
* Integrate: `∫ (2x³ + 3x² + x) dx`
* Solve system: `{2x + y = 10, 3x - y = 5}`

---

## 🎨 UI Features

* 🌌 Gradient dark theme with background orbs.
* ✨ Floating animated icons using Framer Motion.
* 🎭 Collapsible step-by-step explanations.
* 📦 Modern card components with glowing shadows.
* 📱 Responsive layout (desktop + mobile).

---


## 🔮 Future Improvements

* Add voice-based input for math questions.
* Support for graph plotting (via D3.js / Chart.js).
* Export solutions as PDF.
* Multi-language support for global learners.

---

## 🙌 Contributing

Contributions are welcome 🎉

* Fork the repo
* Create a feature branch
* Submit a pull request

This project is meant for **learning & experimenting** with AI + full-stack development.

---

## 📝 License

MIT License © 2025 [Akavarapu Tejadutt](https://github.com/AkavarapuTejadutt)
