import login from "../../assests/images/login.svg";
import classes from "../../styles/Login.module.css";
import Button from "../Button";
import Form from "../Form";
import Illustration from "../Illustration";
import TextInput from "../TextInput";

export default function Login() {
  return (
    <main className="main">
      <div className="container">
        <h1>Login to your account</h1>
        <div className="column">
          <Illustration>
            <img src={login} alt="Login" />
          </Illustration>

          <Form className={`${classes.login}`}>
            <TextInput type="text" placeholder="Enter email" icon="email" />

            <TextInput
              type="password"
              placeholder="Enter password"
              icon="lock"
            />

            <Button>
              <span>Submit Now</span>
            </Button>

            <div className="info">
              Don't have an account? <a href="signup.html">Signup</a> instead.
            </div>
          </Form>
        </div>
      </div>
    </main>
  );
}
