import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { FormRow, Logo } from "../components";
const Register = () => {
  return (
    <Wrapper>
      <form className="form">
        <Logo />
        <h4>Register</h4>
        <FormRow type="text" name="firstName" defaultValue="John" labelText="First name"/>
        <FormRow type="text" name="lastName" defaultValue="Smith" labelText="Last name" />
        <FormRow type="text" name="location" defaultValue="Bergen" labelText="Location"/>
        <FormRow type="email" name="email" defaultValue="john@email.com" labelText="Email" />
        <FormRow type="password" name="password" defaultValue="secret123" labelText="Password" />
        <button type="submit" className="btn btn-block">Submit</button>
        <p>
          Already member?
          <Link to="/login" className="member-btn">Login</Link>
        </p>
      </form>
    </Wrapper>
  );
};
export default Register;
