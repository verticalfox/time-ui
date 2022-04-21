import { useState } from "react";
import { postRequest } from "../utils/http";

export const useCreateTimeEntry = () => {
  const [submitting, setSubmitting] = useState(false);

  const onCreate = (formData) => {
   
 formData={...formData,created_by_id:"9bb9b458-296f-485e-be07-8186434c29e1"}
 console.log(formData);
      setSubmitting(true);

    //hit time_entry post request here..
    
      postRequest({
        url: 'time_entries',
        data: formData,
      }).then(function (response) {
        console.log(response);
      setSubmitting(false);
      })
      .catch(function (error) {
        console.log(error);
      });   
      
    
  }

  return {
    submitting,
    onCreate
  }
}
