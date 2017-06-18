import React from 'react'

export const Apply = (formType) => {
  const { form_type } = formType.match.params;

  const volunteersForm = {
    URL: "https://cyf.typeform.com/to/ah1IJ8"
  }
  const mentorsForm = {
    URL: "https://cyf.typeform.com/to/Cx23Wk"
  }
  const StudentForm = {
    URL: "https://cyf.typeform.com/to/DmL54Y"
  }

  let formURL = '';
  switch(form_type){
    case "volunteer":
      formURL = volunteersForm.URL
      break;
    case "mentor":
      formURL = mentorsForm.URL
      break;
    case "student":
      formURL = StudentForm.URL
      break;
    default:
      break;
  }

  return (
    <div className="section-container top-section">
      <div className="container">
        <iframe
          id="typeform-full"
          title="typeform-full"
          width="100%"
          height="100%"
          frameBorder="0"
          src={formURL}>
        </iframe>
      </div>
    </div>
  )
}