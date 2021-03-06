import  {useField} from 'formik'

const TextInput = ({label,type, ...props}) => {
  const [field, meta] = useField(props)

  return(
    <div className="form-control">
      <label className="form-label">{label}</label>
      <input className="form-input" type={type} {...field}  />
      {meta.touched && meta.error ? <div className="form-error">{meta.error}</div> : null }
    </div>
  )

}

export default TextInput