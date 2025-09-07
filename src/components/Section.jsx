import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import YouTube from "react-youtube";
import Btn from "./Btn";

function Section({ title, time, text, img = null, vid = null, link = null }) {
  const [name, setName] = useState(false);
  const [date, setDate] = useState(false);
  const opts = {
    height: "200",
    width: "300",
    playerVars: {
      autoplay: 1,
      start: vid?.start,
      controls: 0,
    },
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setName(Math.random() * 10 < 0.4);
      setDate(Math.random() * 10 > 9.6);
    }, 400);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div className="section" initial={{ y: 150 }} whileInView={{ y: 0 }} viewport={{ once: true }}>
      <div className="section-content">
        <h2 className="section-title">{name ? "67" : title}</h2>
        <p className="section-time">First sighting: {date ? "67" : time}</p>
        <p className="section-text">{text}</p>
        {link && <Btn text={link.text} link={link.link} />}
      </div>
      <div className="section-media">
        {img && <img src={img} className="section-img" />}
        {vid && (
          <div className="section-vid">
            <YouTube
              videoId={vid.src}
              opts={opts}
              style={{ borderRadius: "10px" }}
              onReady={(e) => {
                e.target.setVolume(15);
                e.target.pauseVideo();
              }}
            />
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Section;
