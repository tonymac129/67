import { useState, useEffect } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";

function Nav() {
  const [mode, setMode] = useState(() => JSON.parse(localStorage.getItem("67-mode") || "false"));

  useEffect(() => {
    if (mode) {
      document.body.classList.add("light");
    } else {
      document.body.className = "";
    }
    localStorage.setItem("67-mode", JSON.stringify(mode));
  }, [mode]);

  return (
    <nav className="nav">
      <Link to="/" className="nav-logo">
        Home
      </Link>
      <div className="nav-links">
        <Link className="nav-link">67 Facts</Link>
        <Link className="nav-link">67 Kid</Link>
        <Link className="nav-link">SCP-67</Link>
        <motion.img
          whileHover={{ scale: 1.3, rotate: 20 }}
          whileTap={{ scale: 1.1, rotate: 10 }}
          src={mode ? "/67/icons/dark.svg" : "/67/icons/light.svg"}
          title="Toggle light mode"
          onClick={() => setMode(!mode)}
          className="nav-icon"
        />
      </div>
    </nav>
  );
}

export default Nav;
