import { Link } from "react-router";
import { motion } from "framer-motion";

function Btn({ text, link }) {
  return (
    <motion.div whileHover={{ y: -5, scale: 1.1 }} whileTap={{ y: -3, scale: 1.05 }} className="action-btn">
      <Link className="link" to={link}>
        {text}
      </Link>
    </motion.div>
  );
}

export default Btn;
