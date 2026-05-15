// Nav.jsx — Highdive top bar
const { useState } = React;

const NAV_LINKS = ["Work", "Studio", "Culture", "News", "Contact"];

function Nav({ active, onNavigate }) {
  return (
    <header className="nav">
      <div className="kit-container nav-inner">
        <a className="nav-wordmark" href="#" onClick={(e)=>{e.preventDefault(); onNavigate("Home");}}>
          <img src="../../assets/logos/Primary_Logo/Highdive_PrimaryLogo_Black.png" alt="Highdive" />
        </a>
        <nav className="nav-links">
          {NAV_LINKS.map(l => (
            <a key={l} className={"nav-link" + (active === l ? " is-active" : "")}
               href={"#" + l.toLowerCase()}
               onClick={(e)=>{e.preventDefault(); onNavigate(l);}}>
              {l}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

Object.assign(window, { Nav });
