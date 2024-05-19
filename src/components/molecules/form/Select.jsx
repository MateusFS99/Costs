function Select({ text, name, options, handleOnChange, value }) {
  return (
    <div className="formControl">
      <label htmlFor={name}>{text}</label>
      <select id={name} name={name} onChange={handleOnChange} value={value}>
        <option value="" disabled>
          Selecione...
        </option>
        {options.map((option) => (
          <option value={option.id} key={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Select
