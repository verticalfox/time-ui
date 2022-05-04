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
 console.log(formData);
      setSubmitting(true);
      postRequest({
        url: 'time_entries',
        data: formData,
      }).then(function (response) {
        console.log(response);
      setSubmitting(false);
      window.alert("you have successfully inserted your work entry !!");
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
