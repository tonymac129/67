function Hero({ title, description, home = false }) {
  return (
    <div className="hero">
      <h1 className={home ? "hero-title home-hero" : "hero-title"}>{title}</h1>
      <p className="hero-description">{description}</p>
    </div>
  );
}

export default Hero;
