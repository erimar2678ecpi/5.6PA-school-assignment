import './App.css';

const highlights = [
  {
    eyebrow: 'Plan',
    title: 'Build a calm routine',
    description:
      'Map your time blocks, track small wins, and keep your week organized without clutter.',
  },
  {
    eyebrow: 'Focus',
    title: 'Protect deep work',
    description:
      'Use a simple structure that helps you prioritize the next task instead of juggling everything at once.',
  },
  {
    eyebrow: 'Review',
    title: 'See real progress',
    description:
      'Spot what is finished, what needs attention, and what should move into tomorrow.',
  },
];

const agenda = [
  {
    time: '8:30 AM',
    title: 'Warm-up review',
    detail: 'Scan notes, set one goal, and clear the first easy task.',
  },
  {
    time: '10:00 AM',
    title: 'Deep focus block',
    detail: 'Work distraction-free on the task that matters most.',
  },
  {
    time: '1:30 PM',
    title: 'Quick reset',
    detail: 'Step away, regroup, and outline the next steps in plain language.',
  },
];

function App() {
  return (
    <div className="app-shell">
      <main className="app">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Simple React app for GitHub Pages</p>
            <h1>Plan your day with a calm, simple routine.</h1>
            <p className="hero-text">
              This sample app presents a clean personal dashboard with a calm
              visual style, responsive layout, and lightweight content that
              deploys well to GitHub Pages.
            </p>
            <div className="hero-actions">
              <a className="primary-action" href="#planner">
                View planner
              </a>
              <a
                className="secondary-action"
                href="https://pages.github.com/"
                target="_blank"
                rel="noreferrer"
              >
                GitHub Pages docs
              </a>
            </div>
          </div>

          <aside className="hero-panel" aria-label="Project snapshot">
            <div className="panel-card glass">
              <p className="panel-label">Weekly focus</p>
              <p className="panel-value">Frontend deployment</p>
              <p className="panel-note">
                Create, polish, publish, and verify a small React experience.
              </p>
            </div>

            <div className="panel-grid">
              <article className="stat-card">
                <span>Build status</span>
                <strong>Ready</strong>
              </article>
              <article className="stat-card">
                <span>Layout</span>
                <strong>Responsive</strong>
              </article>
              <article className="stat-card">
                <span>Style</span>
                <strong>Modern</strong>
              </article>
              <article className="stat-card">
                <span>Hosting</span>
                <strong>GitHub Pages</strong>
              </article>
            </div>
          </aside>
        </section>

        <section className="highlights" aria-label="Core features">
          {highlights.map((item) => (
            <article className="info-card" key={item.title}>
              <p className="card-eyebrow">{item.eyebrow}</p>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </article>
          ))}
        </section>

        <section className="planner-section" id="planner">
          <div className="section-heading">
            <p className="eyebrow">Daily planner</p>
            <h2>A short structure that keeps the day moving.</h2>
          </div>

          <div className="planner-grid">
            {agenda.map((item) => (
              <article className="timeline-card" key={item.time}>
                <p className="timeline-time">{item.time}</p>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="cta-banner">
          <div>
            <p className="eyebrow">Deployment-ready</p>
            <h2>Built to be small, clear, and easy to use.</h2>
          </div>
          <p className="cta-text">
            The page uses a single React view, custom styling, and a GitHub
            Pages deployment flow that stays simple to maintain.
          </p>
        </section>
      </main>
    </div>
  );
}

export default App;
