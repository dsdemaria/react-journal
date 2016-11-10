import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const NewResourceTextarea = ({ title, name, value, onChange }) => (
  <div className="form-group">
    <label className="col-sm-2 control-label">{title}</label>
    <div className="col-sm-10">
      <textarea
        title="description"
        name="descriptionValue"
        className="form-control"
        value={value}
        onChange={onChange}
        placeholder={`Add ${title}`}
      />
    </div>
  </div>
);

export default NewResourceTextarea;

NewResourceTextarea.propTypes = {
  title: React.PropTypes.string,
  name: React.PropTypes.string,
  value: React.PropTypes.string,
  onChange: React.PropTypes.func,
};
