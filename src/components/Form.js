import React, { useState } from "react";

function Form(props) {
  const [firstName, setFirstName] = useState("Sylvia");
  const [lastName, setLastName] = useState("Woods");
  const [submittedData, setSubmittedData] = useState([]);
  const [errors,setErrors] = useState([]);


  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  function handleSubmit(event){
    event.preventDefault();
    if(firstName.length>0){
        const formData = {
          firstName: firstName,
          lastName: lastName
        };
        const dataArray = [
          ...submittedData,
          formData
        ];


        console.log(submittedData);
        setSubmittedData(dataArray)
        setFirstName("");
        setLastName("");
        setErrors([]);
      
    } else {
      let fnError = "First name is required"
      setErrors([fnError]);
      console.log(errors)
    }

    

  }

  const listOfSubmissions = submittedData.map((data, index) => {
    return (
      <div key={index}>
        <li>
        First Name: {data.firstName}  
        Last Name: {data.lastName}
        </li>
      </div>
    )
  })


  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleFirstNameChange} value={firstName} />
        <input type="text" onChange={handleLastNameChange} value={lastName} />
        <button type="submit">Submit</button>
      </form>
      {
        errors.length > 0 ? errors.map((error, index) => (
          <p key={index} style={{color:"red"}}>{console.log(index)}{error}</p>
        )):(null)
      }
      <h3>Submissions</h3>
      <ol>
        {listOfSubmissions}
      </ol>
      
    </>
  );
}

export default Form;
