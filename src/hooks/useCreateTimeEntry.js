import { useState } from "react";
import { postRequest } from "../utils/http";

export const useCreateTimeEntry = () => {
  const [submitting, setSubmitting] = useState(false);

  const onCreate = (formData) => {
    console.log(formData);
      setSubmitting(true);

    //hit time_entry post request here..
    
      // postRequest({
      //   url: '.. add url here',
      //   data: formData,
      // }).then(function (response) {
      //   // console.log(response);
      // setSubmitting(false);
      // })
      // .catch(function (error) {
      //   console.log(error);
      // });       
  }

  return {
    submitting,
    onCreate
  }
}
