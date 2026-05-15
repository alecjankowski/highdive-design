// StudioStrip.jsx — orange band between sections with the Stamp.
function StudioStrip() {
  return (
    <section className="strip">
      <div className="kit-container strip-inner">
        <div className="strip-text">
          Brave brands.<br/>Bold work.
        </div>
        <div className="strip-stamp">
          <img src="../../assets/logos/Stamp/HD_Stamp_Black.png" alt="Highdive — Fearless creative for the brave" />
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { StudioStrip });
