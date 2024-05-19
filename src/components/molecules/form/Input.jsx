function Input({ type, text, name, placeholder, handleOnChange, value }) {
  return (
    <div className='formControl'>
      <label htmlFor={name}>{text}</label>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleOnChange}
      />
    </div>
  )
}

export default Input
