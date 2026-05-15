// Hero.jsx — Highdive landing hero. Massive display headline + Diver.
function Hero({ onCTA }) {
  return (
    <section className="hero">
      <div className="kit-container hero-inner">
        <div className="hero-eyebrow"><span className="dot"></span><span>EST 2016 · CHI / NYC</span></div>
        <h1 className="hero-headline">
          <span className="line">Fearless</span>
          <span className="line">creative for</span>
          <span className="line">the <span className="accent">brave</span>.</span>
        </h1>
        <img className="hero-diver" src="../../assets/logos/Diver/Diver_Orange.png" alt="" />
        <p className="hero-tagline">
          We're an independent agency making the work other agencies wish they made.
          Brand, campaign, content, and the occasional unreasonable idea.
        </p>
        <div className="hero-ctas">
          <button className="btn btn-orange" onClick={()=>onCTA("Work")}>See the work</button>
          <button className="btn btn-ghost-light" onClick={()=>onCTA("Contact")}>Get in touch</button>
        </div>
      </div>
      <div className="hero-meta">
        <span>Scroll · The Work</span>
        <span>Reel · 2026</span>
      </div>
    </section>
  );
}
Object.assign(window, { Hero });
