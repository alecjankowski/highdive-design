// ContactForm.jsx — full-bleed green contact section
const { useState: useStateC } = React;

function ContactForm() {
  const [sent, setSent] = useStateC(false);
  const [name, setName] = useStateC("");
  const [email, setEmail] = useStateC("");
  const [brief, setBrief] = useStateC("");

  function submit(e){
    e.preventDefault();
    if (!name || !email) return;
    setSent(true);
  }

  return (
    <section className="contact" id="contact">
      <div className="kit-container contact-grid">
        <div>
          <div className="section-eyebrow" style={{color: "var(--hd-orange)"}}>— Say hi</div>
          <h2>Got a brief?<br/>Got a brave one?</h2>
          <p className="lede">Tell us a little about what you're making. We'll come back to you inside two working days — usually quicker.</p>
          <div className="contact-locations">
            <div className="contact-loc">
              <div className="lbl">Chicago</div>
              <div className="addr">435 N Michigan Ave<br/>Chicago, IL 60611</div>
            </div>
            <div className="contact-loc">
              <div className="lbl">New York</div>
              <div className="addr">75 Broad Street<br/>New York, NY 10004</div>
            </div>
          </div>
        </div>
        <form className="contact-form" onSubmit={submit}>
          <div className="field">
            <label className="lbl">Your name</label>
            <input className="input" value={name} onChange={e=>setName(e.target.value)} placeholder="Alex Rivera" />
          </div>
          <div className="field">
            <label className="lbl">Email</label>
            <input className="input" type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="you@brand.com" />
          </div>
          <div className="field">
            <label className="lbl">The brief</label>
            <textarea className="input" value={brief} onChange={e=>setBrief(e.target.value)} placeholder="A few sentences is plenty."></textarea>
          </div>
          <div className="submit-row">
            <button className="btn btn-orange" type="submit">{sent ? "Sent · we'll be in touch" : "Send it"}</button>
            {sent && <span style={{fontSize:13, opacity:0.85}}>Thanks — keep an eye on your inbox.</span>}
          </div>
        </form>
      </div>
    </section>
  );
}
Object.assign(window, { ContactForm });
