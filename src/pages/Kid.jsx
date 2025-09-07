import { motion } from "framer-motion";
import Hero from "../components/Hero";

function Kid() {
  return (
    <motion.div initial={{ y: 200, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
      <title>67 Kid | 67</title>
      <Hero title="67 Kid" description="Who is Mason?" />
      <h1 className="main-title">The Basketball Game that Made Him Famous</h1>
      <p className="fact">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quasi fuga sit laboriosam, esse et, error culpa alias
        labore tenetur temporibus! Facilis dolor quae porro nesciunt libero sit? Non, sunt!
      </p>
    </motion.div>
  );
}

export default Kid;
