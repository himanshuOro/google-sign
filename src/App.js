import { useEffect, useState } from 'react';
import GoogleLogin from 'react-google-login';
import { gapi } from "gapi-script";
function App() {
  const [values, setValue] = useState({});
  const handleChange = (e) => {
    setValue({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };
  // password type change
  const [passwordType, setPasswordType] = useState(false);

  const responseGoogle = (response) => {
    console.log("Successfully Message:", response);
  };
  const resFailed = (res) => {
    console.log("Failed:", res);
  };
  // old client ID :"703838845315-pupcra229gno6qnotq37tlj3vvq5l26l.apps.googleusercontent.com",
  useEffect(()=>{
    gapi.load("client:auth2", () => {
      gapi.client.init({
        clientId:
          "60537513293-qhv2m7nqalh8kd1jlur15iua76lajik4.apps.googleusercontent.com",
        plugin_name: "faucets-app",
      });
    });
  },[])
  return (
    <div className="auth_page_wrapper">
        <div className="container">
          <div className="auth_form">
            <div className="title">
              <h2>Sign Up</h2>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="form_group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  onChange={handleChange}
                />
              </div>
              <div className="form_group">
                <label htmlFor="password">Password</label>
                <input
                  type={passwordType ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  onChange={handleChange}
                />
              </div>
              <div className="form_group">
                <button type="submit">Sign Up</button>
              </div>
            </form>
            <div className="auth_footer">
              <GoogleLogin
                clientId="60537513293-qhv2m7nqalh8kd1jlur15iua76lajik4.apps.googleusercontent.com"
                buttonText="Sign in with google"
                onSuccess={responseGoogle}
                onFailure={resFailed}
                cookiePolicy={"single_host_origin"}
              />
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;
