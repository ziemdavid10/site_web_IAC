import { LuCheck } from 'react-icons/lu';

// Groupe de cases à cocher présentées sous forme de pastilles (choix multiples)
const ChoiceChips = ({ legend, name, options, value = [], onChange, error, hint }) => {
  const toggle = (opt) => {
    const next = value.includes(opt) ? value.filter((v) => v !== opt) : [...value, opt];
    onChange(name, next);
  };

  return (
    <fieldset className={`form-chips ${error ? 'has-error' : ''}`}>
      <legend>{legend}</legend>
      {hint && <p className="form-field__hint">{hint}</p>}
      <div className="form-chips__list">
        {options.map((opt) => {
          const checked = value.includes(opt);
          return (
            <label key={opt} className={`form-chip ${checked ? 'is-checked' : ''}`}>
              <input type="checkbox" name={name} checked={checked} onChange={() => toggle(opt)} />
              {checked && <LuCheck aria-hidden />}
              {opt}
            </label>
          );
        })}
      </div>
      {error && <p className="form-field__error" role="alert">{error}</p>}
    </fieldset>
  );
};

export default ChoiceChips;
