import React from 'react';

import FieldGroup from './FieldGroup';

const SelectField = props => {
  const { id, labelText, name, options, register, includeBlank, rules, ...rest } = props;
  const fieldId = id || name;

  return (
    <FieldGroup labelFor={fieldId} labelText={labelText}>
      <select
        id={fieldId}
        name={name}
        className="form-control"
        defaultValue=""
        {...register(name, rules)}
        {...rest}
      >
        {includeBlank && <option value="" disabled></option>}
        {options.map((option, index) => (
          <option 
            value={option.value} 
            key={`${option.value}_${index}`}
          >
            {option.label}
          </option>
        ))}
      </select>
  </FieldGroup>
  )
}

SelectField.defaultProps = {
  rules: { required: false },
  includeBlank: true,
}

export default SelectField;
