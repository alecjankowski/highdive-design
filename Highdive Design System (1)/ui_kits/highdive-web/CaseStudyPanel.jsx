// CaseStudyPanel.jsx — slide-over panel that opens when you click a work tile.
function CaseStudyPanel({ open, work, onClose }) {
  // Use an effect to lock body scroll
  React.useEffect(()=>{
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
  }, [open]);

  return (
    <React.Fragment>
      <div className={"panel-scrim" + (open ? " open" : "")} onClick={onClose}></div>
      <aside className={"panel" + (open ? " open" : "")} aria-hidden={!open}>
        <div className="panel-head">
          <span className="panel-eyebrow" style={{margin:0}}>Case Study</span>
          <button className="panel-close" onClick={onClose}>Close ✕</button>
        </div>
        {work && (
          <div className="panel-body">
            <div className={"panel-hero thumb-" + (work.thumb || "ink")}>
              {work.thumb === "diver" && (
                <div className="thumb-diver" style={{height:"100%"}}><img src="../../assets/logos/Diver/Diver_White.png" alt="" /></div>
              )}
            </div>
            <div className="panel-eyebrow">{work.eyebrow}</div>
            <h2 className="panel-title">{work.title}</h2>
            <p className="panel-lede">
              A short, plain-English summary of the work, the problem, and what changed when it went live.
              The voice stays declarative — no hedging, no jargon, no "ideated" anything.
            </p>
            <div className="panel-meta">
              <div><div className="lbl">Client</div><div className="val">{work.client}</div></div>
              <div><div className="lbl">Year</div><div className="val">{work.year}</div></div>
              <div><div className="lbl">Scope</div><div className="val">Brand · Campaign · Film</div></div>
            </div>
            <p className="panel-lede">
              We spent six months in market and another two in the edit suite. The work shipped on broadcast,
              social, OOH, and an internal rallying cry the client now uses on day one of every onboarding.
            </p>
            <div style={{display:"flex", gap:14, marginTop: 32}}>
              <button className="btn btn-primary">Watch the film</button>
              <button className="btn btn-ghost">Read the brief</button>
            </div>
          </div>
        )}
      </aside>
    </React.Fragment>
  );
}
Object.assign(window, { CaseStudyPanel });
