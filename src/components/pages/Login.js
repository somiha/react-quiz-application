import login from "../../assests/images/login.svg";
import Illustration from "../Illustration";
import LoginForm from "../LoginForm";

export default function Login() {
  return (
    <main className="main">
      <div className="container">
        <h1>Login to your account</h1>
        <div className="column">
          <Illustration>
            <img src={login} alt="Login" />
          </Illustration>

          <LoginForm />
        </div>
      </div>
    </main>
  );
}
