import { useEffect, useState } from "react";
import { USER_STORAGE_KEY } from "../utils/constant";
import { getRequest, postRequest } from "../utils/http";

export const useCreateTimeEntry = () => {
  const [submitting, setSubmitting] = useState(false);
  console.log(USER_STORAGE_KEY);
  const[userData, setUserData] = useState([]);
  
  useEffect(() => {
    getRequest({
      url: `users`,
    })
    .then(function (response) {
      setUserData(response.data.users);
    })
  }, [])

  const onCreate = (formData) => {
//  formData={...formData,created_by_id:"f32f25c2-b695-41fb-b485-c79e45cebff1"}

  //below form data should get updated by logged in user ...
  //improvement needed.
  formData={...formData,created_by_id:userData[0].id}
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
