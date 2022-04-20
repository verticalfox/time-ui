import React from 'react';

import FieldGroup from './FieldGroup';

const TextAreaField = props => {
  const { id, labelText, name, register, rules, ...rest } = props;
  const fieldId = id || name;
  
  return (
    <FieldGroup labelFor={fieldId} labelText={labelText}>
      <textarea
        id={fieldId}
        name={name}
        className="form-control"
        {...register(name, rules)}
        {...rest}
      />
  </FieldGroup>
  )
}

TextAreaField.defaultProps = {
  rules: { required: false }
}


export default TextAreaField;
