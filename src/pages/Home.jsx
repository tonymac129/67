import { motion } from "framer-motion";
import Hero from "../components/Hero";
import Section from "../components/Section";

function Home() {
  return (
    <motion.div initial={{ y: 200, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
      <Hero title="67" description="Meme of the year: the number that changed the world" />
      <h1 className="main-title">What Does 67 Mean?</h1>
      <div className="intro">
        <img src="/67/history/h0.jpg" />
        <p className="intro-text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam voluptatem rem itaque adipisci incidunt officiis fuga.
          Esse totam iste adipisci? Cumque deleniti voluptatum animi dolores mollitia. Quo, aspernatur. Dicta, odio?
        </p>
      </div>
      <h1 className="main-title">6 or 7 Events of 67's History</h1>
      <div className="history">
        <Section
          title="Doot Doot: The Song that Started it All"
          time="Feb 07, 2025"
          text="
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur unde ullam temporibus non atque, dolorum quae necessitatibus eos corporis autem, laudantium dicta aliquam similique neque ipsum nihil magnam id recusandae!"
          img="/67/history/h1.jpg"
        />
        <Section
          title={"Lamelo Ball is 6'7\""}
          time="Feb 08, 2025"
          text="
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur unde ullam temporibus non atque, dolorum quae necessitatibus eos corporis autem, laudantium dicta aliquam similique neque ipsum nihil magnam id recusandae!"
          img="/67/history/h2.jpg"
        />
        <Section
          title={"The Fluffy Hair Kid Changed the Meme Forever"}
          time="Apr 06, 2025"
          text="
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur unde ullam temporibus non atque, dolorum quae necessitatibus eos corporis autem, laudantium dicta aliquam similique neque ipsum nihil magnam id recusandae!"
          img="/67/history/h3.jpg"
        />
        <Section
          title={"Mango and Mustard"}
          time="Jun 5, 2025"
          text="
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur unde ullam temporibus non atque, dolorum quae necessitatibus eos corporis autem, laudantium dicta aliquam similique neque ipsum nihil magnam id recusandae!"
          img="/67/history/h4.png"
        />
        <Section
          title={"Analog Horror Revived 67"}
          time="Aug 28, 2025"
          text="
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur unde ullam temporibus non atque, dolorum quae necessitatibus eos corporis autem, laudantium dicta aliquam similique neque ipsum nihil magnam id recusandae!"
          img="/67/history/h5.png"
        />
        <Section
          title={"SCP-067 Appears"}
          time="Aug 28, 2025"
          text="
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur unde ullam temporibus non atque, dolorum quae necessitatibus eos corporis autem, laudantium dicta aliquam similique neque ipsum nihil magnam id recusandae!"
          img="/67/history/h6.jpg"
        />
      </div>
    </motion.div>
  );
}

export default Home;
