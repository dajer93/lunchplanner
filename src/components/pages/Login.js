import React, { useState } from "react";

import Button from "#/components/atoms/Button";
import AuthTemplate from "#/components/templates/AuthTemplate";

const Login = ({ onLogin, onRegister }) => {
  const [isRegistration, setIsRegistration] = useState(false);

  const showRegistration = () => setIsRegistration(true);
  const showLogin = () => setIsRegistration(false);

  const authTemplateProps = {
    isRegistration,
    onLogin,
    onRegister,
  };

  return (
    <div style={{ display: "block" }}>
      <div>
        <AuthTemplate {...authTemplateProps} />
      </div>
      <div>
        --- or ---
      </div>
      <div>
        {!isRegistration && (
          <Button title="Register" onClick={showRegistration} />
        )}
        {isRegistration && <Button title="Login" onClick={showLogin} />}
      </div>
    </div>
  );
};

export default Login;
