import { useState } from "react";


export default function Form(){

  const [dataForm, setDataForm] = useState({
    name: '',
    email: '',
    description: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataForm({...dataForm, [name]: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(dataForm, 'Data has been fetched');
    // reset
    setDataForm({ name: '', email: '', description: '', })
  }

  return (
    <>
    <h1>FORM</h1>
    <form onSubmit={handleSubmit}>
      <input type="text" 
      value={dataForm.name}
      placeholder="Ihr Name"
      className="border"
      onChange={handleChange}
      name="name"/>
      <input type="email" 
      value={dataForm.email}
      className="border"
      placeholder="Ihre e-mail"
      onChange={handleChange}
      name="email"/>
      <textarea
      value={dataForm.description}
      className="border"
      placeholder="Ihre Nachricht"
      onChange={handleChange}
      name="description">
      </textarea>
      <button type="submit">Send</button>
    </form>
    </>
  )
}