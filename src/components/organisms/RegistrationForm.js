import React from "react";

import Form from "#/components/molecules/Form/Form";

const RegistrationForm = ({ onRegister, style }) => {
  return (
    <div style={style}>
      <h2>Register to lunchplanner</h2>
      <Form
        fields={[
          { name: "email", title: "Email" },
          { name: "password", title: "Password" },
        ]}
        onSubmit={onRegister}
        submitButton="Register"
      />
    </div>
  );
};

export default RegistrationForm;
