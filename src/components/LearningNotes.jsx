import React, { useState } from "react";

const topics = [
  {
    category: "JavaScript",
    color: "#f59e0b",
    items: [
      {
        title: "var / let / const",
        done: true,
        concept: "var is function-scoped and hoisted. let and const are block-scoped. const cannot be reassigned.",
        code: `var x = 1;       // function-scoped, hoisted
let y = 2;       // block-scoped, can be reassigned
const z = 3;     // block-scoped, cannot be reassigned`,
      },
      {
        title: "Arrow Functions",
        done: true,
        concept: "A shorter syntax for functions. They do not have their own 'this'.",
        code: `// Regular
function add(a, b) { return a + b; }

// Arrow
const add = (a, b) => a + b;`,
      },
      {
        title: "Array Methods: map / filter / reduce",
        done: true,
        concept: "map() transforms each element. filter() keeps elements that pass a test. reduce() collapses an array to one value.",
        code: `const nums = [1, 2, 3, 4, 5];

nums.map(n => n * 2);          // [2, 4, 6, 8, 10]
nums.filter(n => n > 2);       // [3, 4, 5]
nums.reduce((sum, n) => sum + n, 0); // 15`,
      },
      {
        title: "Destructuring",
        done: true,
        concept: "Pull values out of arrays or objects into variables cleanly.",
        code: `// Object
const { name, age } = { name: "Lilian", age: 22 };

// Array
const [first, second] = [10, 20, 30];`,
      },
      {
        title: "Spread & Rest (...)",
        done: false,
        concept: "Spread expands an iterable. Rest collects remaining arguments into an array.",
        code: `// Spread
const a = [1, 2];
const b = [...a, 3, 4]; // [1, 2, 3, 4]

// Rest
function sum(...nums) {
  return nums.reduce((t, n) => t + n, 0);
}`,
      },
      {
        title: "Template Literals",
        done: true,
        concept: "Use backticks to embed expressions inside strings.",
        code: `const name = "Lilian";
const msg = \`Hello, \${name}! Today is \${new Date().toDateString()}\`;`,
      },
    ],
  },
  {
    category: "React",
    color: "#6366f1",
    items: [
      {
        title: "JSX",
        done: true,
        concept: "JSX lets you write HTML-like syntax inside JavaScript. It compiles to React.createElement() calls.",
        code: `// JSX
const el = <h1 className="title">Hello</h1>;

// What it compiles to
const el = React.createElement("h1", { className: "title" }, "Hello");`,
      },
      {
        title: "Components & Props",
        done: true,
        concept: "Components are functions that return JSX. Props are read-only data passed from parent to child.",
        code: `function Greet(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// Usage
<Greet name="Lilian" />`,
      },
      {
        title: "useState",
        done: false,
        concept: "useState lets a component remember and update values. Changing state re-renders the component.",
        code: `import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}`,
      },
      {
        title: "useEffect",
        done: false,
        concept: "useEffect runs side-effects (fetch, timers, subscriptions) after render. The dependency array controls when it re-runs.",
        code: `import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api/data")
      .then(r => r.json())
      .then(setData);
  }, []); // [] = run once on mount
}`,
      },
      {
        title: "Mapping Lists",
        done: true,
        concept: "Use .map() to render a list of elements. Each item needs a unique key prop.",
        code: `const fruits = ["Apple", "Banana", "Mango"];

fruits.map((fruit, i) => <li key={i}>{fruit}</li>)`,
      },
    ],
  },
  {
    category: "HTML & CSS",
    color: "#10b981",
    items: [
      {
        title: "Semantic HTML",
        done: true,
        concept: "Use meaningful tags (<header>, <main>, <section>, <article>, <footer>) for accessibility and SEO.",
        code: `<header>Logo + Nav</header>
<main>
  <section>Main content</section>
  <aside>Sidebar</aside>
</main>
<footer>Copyright</footer>`,
      },
      {
        title: "CSS Box Model",
        done: true,
        concept: "Every element is a box: content → padding → border → margin.",
        code: `.box {
  width: 200px;
  padding: 16px;    /* space inside border */
  border: 2px solid #ccc;
  margin: 24px;     /* space outside border */
  box-sizing: border-box; /* padding included in width */
}`,
      },
      {
        title: "Flexbox",
        done: true,
        concept: "A 1D layout system. Set display:flex on a parent to align children in a row or column.",
        code: `.container {
  display: flex;
  justify-content: space-between; /* horizontal */
  align-items: center;            /* vertical */
  gap: 16px;
}`,
      },
      {
        title: "CSS Grid",
        done: false,
        concept: "A 2D layout system. Define rows and columns, then place items inside the grid.",
        code: `.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}`,
      },
      {
        title: "Responsive Design",
        done: false,
        concept: "Use media queries to adapt layout to different screen sizes.",
        code: `/* Mobile first */
.card { width: 100%; }

/* Tablet and up */
@media (min-width: 768px) {
  .card { width: 48%; }
}`,
      },
    ],
  },
];

function LearningNotes() {
  const [openTopic, setOpenTopic] = useState(null);

  const total = topics.flatMap(t => t.items).length;
  const done = topics.flatMap(t => t.items).filter(i => i.done).length;
  const pct = Math.round((done / total) * 100);

  return (
    <div className="section">
      <p className="section-title">Learning Notes</p>

      {/* Progress bar */}
      <div className="learn-progress-header">
        <span className="learn-progress-label">{done} / {total} topics covered</span>
        <span className="learn-progress-pct">{pct}%</span>
      </div>
      <div className="learn-progress-bar">
        <div className="learn-progress-fill" style={{ width: `${pct}%` }} />
      </div>

      {/* Categories */}
      {topics.map(cat => (
        <div key={cat.category} className="learn-category">
          <h3 className="learn-cat-title" style={{ color: cat.color }}>{cat.category}</h3>
          <div className="learn-items">
            {cat.items.map(item => {
              const key = `${cat.category}-${item.title}`;
              const isOpen = openTopic === key;
              return (
                <div key={key} className={`learn-item ${item.done ? "learn-item--done" : ""}`}>
                  <button
                    className="learn-item-header"
                    onClick={() => setOpenTopic(isOpen ? null : key)}
                  >
                    <span className="learn-item-check">{item.done ? "✓" : "○"}</span>
                    <span className="learn-item-title">{item.title}</span>
                    <span className="learn-item-arrow">{isOpen ? "▲" : "▼"}</span>
                  </button>
                  {isOpen && (
                    <div className="learn-item-body">
                      <p className="learn-item-concept">{item.concept}</p>
                      <pre className="learn-item-code"><code>{item.code}</code></pre>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

export default LearningNotes;
