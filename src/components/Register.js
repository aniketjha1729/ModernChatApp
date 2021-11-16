import { useSelector, useDispatch } from "react-redux";
import { testAction, userRegister } from "../redux/actions/user";

const Register = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state);
  console.log(user);

  const onSubmit = () => {
    console.log("in submit button");
    dispatch(userRegister("aniket", "aniket@gmail.com", "hello@world"));
  };

  return (
    <div>
      {user.isAuthenticated ? <p>hello</p> : ""}
      <button onClick={onSubmit}>Test</button>
    </div>
  );
};

export default Register;
