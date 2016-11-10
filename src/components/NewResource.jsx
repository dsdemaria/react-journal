import 'bootstrap/dist/css/bootstrap.css';

import React from 'react';
import NewResourceInput from './NewResourceInput';
import NewResourceTextarea from './NewResourceTextarea';
import NewResourceSelect from './NewResourceSelect';

const NewResource = props => (
  <div className="form-horizontal">
    <NewResourceInput
      title={'Title'}
      name={'titleValue'}
      value={props.titleValue}
      onChange={props.handleInputChange}
    />
    <NewResourceInput
      title={'Link'}
      name={'linkValue'}
      value={props.linkValue}
      onChange={props.handleInputChange}
    />
    <NewResourceTextarea
      title={'Description'}
      name={'descriptionValue'}
      value={props.descriptionValue}
      onChange={props.handleInputChange}
    />
    <NewResourceSelect
      title={'Select Week'}
      name={'optionValue'}
      value={props.optionValue}
      onChange={props.handleInputChange}
    />
    <div className="form-group">
      <div className="col-sm-offset-2 col-sm-10 col-md-offset-3 col-md-8 col-lg-offset-4 col-lg-6">
        <button style={{ width: '100%' }} type="button" className="btn btn-primary" onClick={props.addResource}>
          Add!
        </button>
      </div>
    </div>
  </div>
);

export default NewResource;

NewResource.propTypes = {
  titleValue: React.PropTypes.string,
  linkValue: React.PropTypes.string,
  descriptionValue: React.PropTypes.string,
  optionValue: React.PropTypes.string,
  handleInputChange: React.PropTypes.func,
  addResource: React.PropTypes.func,
};
