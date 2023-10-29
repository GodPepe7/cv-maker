function Input({ title, type, value, onChange }) {
  return (
    <label htmlFor={title}>
      {title}
      <input
        type={type}
        id={title}
        name={title}
        onChange={onChange}
        value={value}
        required
      />
    </label>
  );
}

export default Input;
