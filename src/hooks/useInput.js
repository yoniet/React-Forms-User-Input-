import { useState } from "react";

export function useInput(defaultValue, validationFn) {
    const [enteredValue, setEnteredValue] = useState(defaultValue);
    const [didEdit, setDidEdit] = useState(false);

    const valueIsValid = validationFn(enteredValue);

    function handleSubmit(event) {
        event.preventDefault();
        console.log('Submitted!')
      }
      
      function handleInputChange(event) {
        setEnteredValue(event.target.value);
        setDidEdit(false);
      }

    //   const handleInputChange = name => event => {
    //     setEnteredValue(prevValues => ({
    //       ...prevValues,
    //       [name]: event.target.value
    //     }))
    //     // update blur on change input
    //     setDidEdit(false);
    //   }
    
      function handleInputBlur() {
        setDidEdit(true)
      }
    
      return {
        value: enteredValue,
        handleInputChange,
        handleInputBlur,
        hasError: didEdit && !valueIsValid,
      };
}
