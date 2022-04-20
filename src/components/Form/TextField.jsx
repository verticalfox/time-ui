import React from 'react';

import FieldGroup from './FieldGroup';

const TextField = props => {
  const { id, labelText, name, register, rules, ...rest } = props;
  const fieldId = id || name;
  
  return (
    <FieldGroup labelFor={fieldId} labelText={labelText}>
      <input
        id={fieldId}
        name={name}
        className="form-control"
        {...register(name, rules)}
        {...rest}
      />
  </FieldGroup>
  )
}

TextField.defaultProps = {
  rules: { required: false }
}

export default TextField;
