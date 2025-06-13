import GetAvatar from "../Pages/GetAvatar";

function Form(props) {
  const handleInput = (ev) => {
    const field = ev.target.id;
    const value = ev.target.value;

    props.changeState(field, value);
  };

  return (
    <>
      <form className="addForm">
        <h2 className="title">Información</h2>
        <fieldset className="addForm__group">
          <legend className="addForm__title">
            Cuéntanos sobre el proyecto
          </legend>
          <input
            className="addForm__input"
            type="text"
            name="name"
            id="name"
            placeholder="Nombre del proyecto"
            value={props.data.name}
            onInput={handleInput}
          />
          <input
            className="addForm__input"
            type="text"
            name="slogan"
            id="slogan"
            placeholder="Slogan"
            value={props.data.slogan}
            onInput={handleInput}
          />
          <div className="addForm__2col">
            <input
              className="addForm__input"
              type="url"
              name="repo"
              id="repo"
              placeholder="Repositorio"
              value={props.data.repo}
              onInput={handleInput}
            />
            <input
              className="addForm__input"
              type="url"
              name="demo"
              id="demo"
              placeholder="Demo"
              value={props.data.demo}
              onInput={handleInput}
            />
          </div>
          <input
            className="addForm__input"
            type="text"
            name="technologies"
            id="technologies"
            placeholder="Tecnologías"
            value={props.data.technologies}
            onInput={handleInput}
          />
          <textarea
            className="addForm__input"
            type="text"
            name="desc"
            id="desc"
            placeholder="Descripción"
            value={props.data.desc}
            rows="5"
            onInput={handleInput}
          ></textarea>
        </fieldset>

        <fieldset className="addForm__group">
          <legend className="addForm__title">Cuéntanos sobre la autora</legend>
          <input
            className="addForm__input"
            type="text"
            name="author"
            id="author"
            placeholder="Nombre"
            value={props.data.author}
            onInput={handleInput}
          />
          <input
            className="addForm__input"
            type="text"
            name="job"
            id="job"
            placeholder="Trabajo"
            value={props.data.job}
            onInput={handleInput}
          />
        </fieldset>

        <fieldset className="addForm__group--upload">
          <GetAvatar
            updateAvatar={props.updatePhoto}
            text="Subir foto del proyecto"
          />
          <GetAvatar
            updateAvatar={props.updateImage}
            text="Subir foto de la autora"
          />

          {/*<label className="button">
            Subir foto del proyecto
            <input className="addForm__hidden" type="file" />
          </label>
          <label className="button">
            Subir foto de la autora
            <input className="addForm__hidden" type="file" />
          </label>*/}
          <button onClick={props.handleSubmit} className="button--large">
            Guardar proyecto
          </button>
        </fieldset>
      </form>
    </>
  );
}

export default Form;
