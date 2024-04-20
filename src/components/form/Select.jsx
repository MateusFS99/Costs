import styles from './FormControl.module.css'

function Select({ text, name, options, handleOnChange, value }) {
  return (
    <div className={styles.formControl}>
      <label htmlFor={name}>{text}</label>
      <select id={name} name={name} value={value}>
        <option value="" disabled>
          Selecione...
        </option>
      </select>
    </div>
  )
}

export default Select
