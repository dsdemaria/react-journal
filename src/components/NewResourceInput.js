import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'

const NewResourceInput = ({ name, value, onChange }) => (
  <div className='form-group'>
    <label className='col-sm-2 control-label'>{name}</label>
    <div className='col-sm-10'>
      <input
        type='text'
        className='form-control'
        value={value}
        onChange={onChange}
        placeholder={`Add ${name}`}
      />
    </div>
  </div>
)

export default NewResourceInput
