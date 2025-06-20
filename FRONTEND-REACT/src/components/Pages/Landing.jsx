import Hero from "../Layout/Hero";
import PreviewCard from "../Projects/PreviewCard";
function Landing() {
  return (
    <>
      {" "}
      <Hero />
      <ul className="landing_card">
        <li>
          <PreviewCard
            name="proyecto 1"
            demo="htpps://google.es/"
            repo="htpps://github.com/"
          />
        </li>
        <li>
          <PreviewCard
            name="proyecto 2"
            demo="htpps://google.es/"
            repo="htpps://github.com/"
          />
        </li>
        <li>
          <PreviewCard
            name="proyecto 3"
            demo="htpps://google.es/"
            repo="htpps://github.com/"
          />
        </li>
        <li>
          <PreviewCard
            name="proyecto 4"
            demo="htpps://google.es/"
            repo="htpps://github.com/"
          />
        </li>
      </ul>
    </>
  );
}

export default Landing;
