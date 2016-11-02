import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'

const NewResourceSelect = ({ name, value, onChange }) => (
  <div className='form-group'>
    <label className='col-sm-2 control-label'>{name}</label>
    <div className='col-sm-10'>
      <select value={value} onChange={onChange}>
        <option value='week1'>Week 1</option>
        <option value='week2'>Week 2</option>
        <option value='week3'>Week 3</option>
        <option value='week4'>Week 4</option>
      </select>
    </div>
  </div>
)

export default NewResourceSelect
