# Scientific Calculator with Graphing

A full-stack calculator web app built with **Next.js**, **React**, and **Plotly.js**, featuring:

- Arithmetic expression evaluation
- Graph plotting from custom math expressions
- Expression history tracking
- Styled with Tailwind CSS

---

## Features

- **Calculator** for basic arithmetic operations
- **Graph Plotting** for equations like `x^2`, `sin(x)`, `x+5`, etc.
- **History Section** showing recent calculations
- **Navigation Bar** for switching between Home, History, and Graph pages
- **Validation & Error Handling** for graph input
- **Responsive UI** using Tailwind CSS

---

## Tech Stack

- **Frontend:** React (with Next.js App Router)
- **Backend:** Next.js API routes
- **Plotting Library:** `react-plotly.js`
- **Math Evaluation:** `mathjs`
- **Styling:** Tailwind CSS

---

## Project Structure
my-calculator/
├── public/
├── src/
│ ├── app/
│ │ ├── page.tsx # Home page (calculator)
│ │ ├── graph/page.tsx # Graph plotting page
│ │ ├── history/page.tsx # History page (optional)
│ │ └── components/
│ │ ├── Calculator.tsx
│ │ ├── Graph.tsx
│ │ └── Navbar.tsx
│ └── styles/
├── pages/
│ └── api/
│ └── saveEquation.ts # Handles saving history
├── README.md
├── package.json
└── tailwind.config.js
