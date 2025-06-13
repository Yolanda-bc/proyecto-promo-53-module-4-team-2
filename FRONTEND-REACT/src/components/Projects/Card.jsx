import Preview from "./PreviewCard";

function Card(props) {
  return (
    <>
      <section className="preview">
        <div
          className="projectImage"
          style={{
            backgroundImage: props.photo ? `url(${props.photo})` : null
          }}
        ></div>
        <Preview
          name={props.name}
          slogan={props.slogan}
          repo={props.repo}
          demo={props.demo}
          technologies={props.technologies}
          desc={props.desc}
          author={props.author}
          job={props.job}
          image={props.image}
        />
      </section>
    </>
  );
}

export default Card;
