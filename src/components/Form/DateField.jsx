import React from 'react';

import FieldGroup from './FieldGroup';

const DateField = props => {
  const { id, labelText, name,type, register, rules, ...rest } = props;
  const fieldId = id || name;
  
  return (
    <FieldGroup labelFor={fieldId} labelText={labelText}>
      <input
        id={fieldId}
        type={type}
        name={name}
        defaultValue=""
        className="form-control"
        {...register(name, rules)}
        {...rest}
      ></input>
  </FieldGroup>
  )
}

DateField.defaultProps = {
  rules: { required: false }
}

export default DateField;
