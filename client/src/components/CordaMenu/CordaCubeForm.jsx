import React from 'react'
import { useForm } from 'react-hook-form'

export default function FancyForm(props) {
  const { register, handleSubmit, errors } = useForm()

  let note = ""

  return (
    <form onSubmit={handleSubmit(props.onSubmit)}>
    {/* register your input into the hook by invoking the "register" function */}
      <h3>Cube Identifier: { props.moveQueue.cubeId }</h3>
      <h3>Moves Made: { JSON.stringify(props.moveQueue.movesMade) }</h3>
      <label>Note</label>
      <input name="note" ref={register} value={note}/>

      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>At least one owner is required</span>}

      <button type="submit">Submit</button>
    </form>
  )
}