import { useCallback, useState } from 'react';
import { validate } from '../utils/validators';

/**
 * Gestion d'un formulaire contrôlé : valeurs, erreurs, état d'envoi.
 * @param {object} initialValues
 * @param {object} schema   { champ: [règles] } (voir utils/validators)
 * @param {(values) => Promise<any>} onSubmit
 */
const useForm = (initialValues, schema, onSubmit) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [result, setResult] = useState(null);

  // Revalide un champ seulement s'il est déjà en erreur ou a été quitté
  const revalidate = useCallback((name, nextValues, force = false) => {
    if (!force && !errors[name]) return;
    const { [name]: fieldError } = validate({ [name]: schema[name] || [] }, nextValues);
    setErrors((errs) => {
      const { [name]: _removed, ...rest } = errs;
      return fieldError ? { ...rest, [name]: fieldError } : rest;
    });
  }, [errors, schema]);

  const setField = useCallback((name, value) => {
    const next = { ...values, [name]: value };
    setValues(next);
    revalidate(name, next);
  }, [values, revalidate]);

  const handleChange = useCallback((e) => {
    const { name, type, value, checked } = e.target;
    setField(name, type === 'checkbox' ? checked : value);
  }, [setField]);

  const handleBlur = useCallback((e) => {
    const { name } = e.target;
    setTouched((t) => ({ ...t, [name]: true }));
    revalidate(name, values, true);
  }, [values, revalidate]);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    // Piège anti-robots : champ invisible rempli = envoi ignoré silencieusement
    if (e.target.elements?.website_confirm?.value) { setStatus('success'); return; }

    const found = validate(schema, values);
    setErrors(found);
    setTouched(Object.keys(schema).reduce((acc, k) => ({ ...acc, [k]: true }), {}));
    if (Object.keys(found).length) {
      const first = e.target.querySelector(`[name="${Object.keys(found)[0]}"]`);
      first?.focus();
      return;
    }

    setStatus('sending');
    try {
      setResult(await onSubmit(values));
      setStatus('success');
    } catch (err) {
      console.error('[formulaire]', err);
      setStatus('error');
    }
  }, [schema, values, onSubmit]);

  const reset = useCallback(() => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
    setStatus('idle');
    setResult(null);
  }, [initialValues]);

  // Propriétés à étaler sur un champ : <FormField {...field('email')} />
  const field = (name) => ({
    name,
    value: values[name],
    error: touched[name] ? errors[name] : undefined,
    onChange: handleChange,
    onBlur: handleBlur,
    required: (schema[name] || []).some((r) => r.isRequired),
  });

  return { values, errors, status, result, field, setField, handleSubmit, reset };
};

export default useForm;
