import { useId } from 'react';
import { LuCircleAlert } from 'react-icons/lu';

/**
 * Champ de formulaire accessible : libellé, aide, erreur, état invalide.
 * as = 'input' (défaut) | 'textarea' | 'select'
 */
const FormField = ({
  label, name, as = 'input', type = 'text', value, error, hint, required,
  options = [], placeholder, className = '', icon: Icon, ...rest
}) => {
  const id = useId();
  const hintId = hint ? `${id}-hint` : undefined;
  const errorId = error ? `${id}-error` : undefined;
  const describedBy = [hintId, errorId].filter(Boolean).join(' ') || undefined;

  const common = {
    id,
    name,
    value: value ?? '',
    'aria-invalid': Boolean(error),
    'aria-describedby': describedBy,
    'aria-required': required || undefined,
    placeholder,
    ...rest,
  };

  return (
    <div className={`form-field ${error ? 'has-error' : ''} ${Icon ? 'has-icon' : ''} ${className}`}>
      <label htmlFor={id}>
        {label}
        {required && <span className="form-field__req" aria-hidden> *</span>}
      </label>
      <div className="form-field__control">
        {Icon && <Icon className="form-field__icon" aria-hidden />}
        {as === 'textarea' && <textarea rows={5} {...common} />}
        {as === 'select' && (
          <select {...common}>
            <option value="" disabled>{placeholder || 'Sélectionnez…'}</option>
            {options.map((o) => {
              const opt = typeof o === 'string' ? { value: o, label: o } : o;
              return <option key={opt.value} value={opt.value}>{opt.label}</option>;
            })}
          </select>
        )}
        {as === 'input' && <input type={type} {...common} />}
      </div>
      {hint && !error && <p id={hintId} className="form-field__hint">{hint}</p>}
      {error && (
        <p id={errorId} className="form-field__error" role="alert">
          <LuCircleAlert aria-hidden /> {error}
        </p>
      )}
    </div>
  );
};

export default FormField;
