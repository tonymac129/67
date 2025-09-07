import { motion } from "framer-motion";
import Hero from "../components/Hero";

function Facts() {
  return (
    <motion.div initial={{ y: 200, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
      <title>67 Facts | 67</title>
      <Hero title="67 Facts" description="Here are 6 or 7 facts about 67" />
      <h1 className="main-title">#1: 67 is the New 69</h1>
      <p className="fact">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quasi fuga sit laboriosam, esse et, error culpa alias
        labore tenetur temporibus! Facilis dolor quae porro nesciunt libero sit? Non, sunt!
      </p>
      <h1 className="main-title">#2: The Hand Motion</h1>
      <p className="fact">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quasi fuga sit laboriosam, esse et, error culpa alias
        labore tenetur temporibus! Facilis dolor quae porro nesciunt libero sit? Non, sunt!
      </p>
      <h1 className="main-title">#3: YouTubers Predicting It</h1>
      <p className="fact">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quasi fuga sit laboriosam, esse et, error culpa alias
        labore tenetur temporibus! Facilis dolor quae porro nesciunt libero sit? Non, sunt!
      </p>
    </motion.div>
  );
}

export default Facts;
