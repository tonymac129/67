import { motion } from "framer-motion";
import Hero from "../components/Hero";

function Scp() {
  return (
    <motion.div initial={{ y: 200, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
      <title>SCP-67 | 67</title>
      <Hero title="SCP-67" description="67 kid became analog horror" />
      <h1 className="main-title">SCP-67 is the New Horror Monster</h1>
      <p className="fact">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quasi fuga sit laboriosam, esse et, error culpa alias
        labore tenetur temporibus! Facilis dolor quae porro nesciunt libero sit? Non, sunt!
      </p>
    </motion.div>
  );
}

export default Scp;
