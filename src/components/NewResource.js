import React from 'react';
import NewResourceInput from './NewResourceInput.js';
import NewResourceTextarea from './NewResourceTextarea.js';
import NewResourceSelect from './NewResourceSelect.js';

import 'bootstrap/dist/css/bootstrap.css';

const NewResource = (props) => (
  <div className='form-horizontal'>
    <NewResourceInput
      name={'Title'}
      value={props.titleValue}
      onChange={props.handleTitleChange}
    />
    <NewResourceInput
      name={'Link'}
      value={props.linkValue}
      onChange={props.handleLinkChange}
    />
    <NewResourceTextarea
      name={'Description'}
      value={props.descriptionValue}
      onChange={props.handleDescriptionChange}
    />
    <NewResourceSelect
      name={'Select Week'}
      value={props.optionValue}
      onChange={props.handleOptionChange}
    />
    <div className='form-group'>
      <div className='col-sm-offset-2 col-sm-10 col-md-offset-3 col-md-8 col-lg-offset-4 col-lg-6'>
        <button
          style={{width: '100%'}}
          type='button'
          className='btn btn-primary'
          onClick={props.addResource}
          >
          Add!
        </button>
      </div>
    </div>
  </div>
)

export default NewResource
