import { useEffect, useState } from "react";

function Section({ title, time, text, img }) {
  const [name, setName] = useState(false);
  const [date, setDate] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setName(Math.random() * 10 < 0.4);
      setDate(Math.random() * 10 > 9.6);
    }, 400);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="section">
      <div className="section-content">
        <h2 className="section-title">{name ? "67" : title}</h2>
        <p className="section-time">First sighting: {date ? "67" : time}</p>
        <p className="section-text">{text}</p>
      </div>
      <img src={img} className="section-img" />
    </div>
  );
}

export default Section;
