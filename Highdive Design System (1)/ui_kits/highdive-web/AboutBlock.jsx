// AboutBlock.jsx — editorial about section + stats.
function AboutBlock() {
  return (
    <section className="about" id="studio">
      <div className="kit-container">
        <div className="section-head">
          <div>
            <div className="section-eyebrow">— The Studio</div>
            <h2 className="section-title">Independent. Chicago + New York.</h2>
          </div>
        </div>
        <div className="about-grid">
          <div className="about-body">
            <p>We started Highdive in 2016 with a simple idea: brave brands deserve work that earns its place in culture. No bloat, no jargon, no decks built to survive the elevator.</p>
            <p>We're a 120-person studio across two cities, working with clients from one-person teams to Fortune 50s. We make brand, campaign, content, and the occasional unreasonable spec ad just to keep ourselves honest.</p>
            <p>If you've got a brief, a problem, or a half-formed instinct — we'd love to hear it.</p>
            <div className="about-script">— The crew</div>
          </div>
          <div className="about-stats">
            <div className="about-stat"><div className="num">120</div><div className="lbl">Crew</div></div>
            <div className="about-stat"><div className="num">2</div><div className="lbl">Cities</div></div>
            <div className="about-stat"><div className="num">14</div><div className="lbl">Cannes Lions</div></div>
            <div className="about-stat"><div className="num">9</div><div className="lbl">Years on the Board</div></div>
          </div>
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { AboutBlock });
