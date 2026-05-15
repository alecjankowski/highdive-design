// WorkGrid.jsx — case-study grid. Hover swaps title to Orange.
const WORK = [
  { id: "ditka", eyebrow: "Campaign · 2025", title: "Ditka's All In: a brand that bets on you.", client: "Ditka", year: "2025", tag: "New", thumb: "wavey", size: "feature" },
  { id: "buick", eyebrow: "Brand · 2024", title: "Buick — See Me Now.", client: "Buick", year: "2024", thumb: "ink-spot", size: "half" },
  { id: "skittles", eyebrow: "Spot · 2024", title: "Skittles, but make it lawful.", client: "Skittles", year: "2024", thumb: "diver", size: "half" },
  { id: "statefarm", eyebrow: "Film · 2025", title: "Like a good neighbor, but louder.", client: "State Farm", year: "2025", thumb: "ink", size: "third" },
  { id: "popeyes", eyebrow: "Identity · 2024", title: "Popeyes — Love That.", client: "Popeyes", year: "2024", thumb: "cream", size: "third" },
  { id: "powerade", eyebrow: "Campaign · 2025", title: "Powerade — Pause is power.", client: "Powerade", year: "2025", thumb: "wavey", size: "third" },
];

function WorkGrid({ onOpen }) {
  return (
    <section className="work" id="work">
      <div className="kit-container">
        <div className="section-head">
          <div>
            <div className="section-eyebrow">— Selected Work</div>
            <h2 className="section-title">Brands worth being brave for.</h2>
          </div>
          <a className="section-link" href="#all">All work →</a>
        </div>

        <div className="work-grid">
          {WORK.map(w => (
            <article
              key={w.id}
              className={"work-tile " + (w.size === "feature" ? "feature" : w.size === "third" ? "third" : "")}
              onClick={()=>onOpen(w)}
            >
              <div className={"work-thumb thumb-" + w.thumb}>
                {w.thumb === "diver" && (
                  <div className="thumb-diver"><img src="../../assets/logos/Diver/Diver_White.png" alt="" /></div>
                )}
                {w.tag && <span className="work-tag" style={{position:"absolute", top:16, left:16}}>{w.tag}</span>}
              </div>
              <div>
                <div className="work-meta">
                  <span>{w.eyebrow}</span>
                </div>
                <h3 className="work-title">{w.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { WorkGrid, WORK });
