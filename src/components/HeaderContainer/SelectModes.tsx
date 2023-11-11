import css from "./SelectModes.module.css"

const SelectModes = () => {
    return (
        <div className={css.SelectModes}>
           <button>Light</button>
           <button>Dark</button>
        </div>
    );
};

export {SelectModes};