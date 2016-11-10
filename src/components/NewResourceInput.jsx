import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const NewResourceInput = ({ title, name, value, onChange }) => (
  <div className="form-group">
    <label className="col-sm-2 control-label">{title}</label>
    <div className="col-sm-10">
      <input
        type="text"
        className="form-control"
        value={value}
        name={name}
        onChange={onChange}
        placeholder={`Add ${title}`}
      />
    </div>
  </div>
);

export default NewResourceInput;

NewResourceInput.propTypes = {
  title: React.PropTypes.string,
  name: React.PropTypes.string,
  value: React.PropTypes.string,
  onChange: React.PropTypes.func,
};
