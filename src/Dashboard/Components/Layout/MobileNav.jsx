import React from 'react';
import { GoogleLogin } from 'react-google-login';

function LoginWithGoogle() {
  const responseGoogle = (response) => {
    console.log(response);
    // Here,  handle the response from Google and perform further actions
    // such as logging in the application.
  };

  return (
    <div>
      <h2>Login with Google</h2>
      <GoogleLogin
        clientId="YOUR_GOOGLE_CLIENT_ID"
        buttonText="Login with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  );
}

export default LoginWithGoogle;
