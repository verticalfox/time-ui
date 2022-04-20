import React from 'react';
import { FormGroup, Label } from "reactstrap";

const FieldGroup = props => {
  const { labelText, labelFor, children } = props;
  return (
    <FormGroup>
      <Label for={labelFor}>{labelText}</Label>
      {children}
    </FormGroup>
          
  )
}

export default FieldGroup;