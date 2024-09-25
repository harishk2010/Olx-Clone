import { useContext, useRef, useState } from "react";
import AuthContext from "../contexts/Authcontext.jsx";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner.jsx";
import { toast } from "react-toastify";

const Login = () => {
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  const name = useRef("");
  const email = useRef("");
  const password = useRef("");
  const [spinner, setSpinner] = useState(false);

  const { user, logIn, signUp } = useContext(AuthContext);
  console.log(user, "user");

  const [signIn, setSignIn] = useState(false);
  const navigate = useNavigate();

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setSpinner(true);
    let data = await logIn(email?.current?.value, password.current.value);

    if (data.success) {
      navigate("/");
      setSpinner(false);
    } else {
      console.log(data);
      toast.error(data.error.code.slice(5).split("-").join(" "));
      setSpinner(false);
    }
  };

  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    console.log("Name:", name.current.value);
    console.log("Email:", email.current.value);
    console.log("Password:", password.current.value);

    if (!name.current.value) {
      toast.error("Username cannot be empty!");
      return;
    }
    setSpinner(true);
    let data = await signUp(
      name.current.value,
      email.current.value,
      password.current.value
    );
    if (data.success) {
      navigate("/");
    } else {
      console.log(data);
      toast.error(data.error.code.slice(5).split("-").join(" "));
      setSpinner(false);
    }
  };

  const handleSignIn = () => {
    console.log(signIn);
    setSignIn(() => !signIn);
  };
  return (
    <div
      className="h-screen"
      
    >
      
      <div className="flex w-full h-full justify-center items-center">
        <form
          action=""
          className="bg-gray-100 w-[25rem] py-20 px-16 opacity-80 rounded-sm"
        >
          {signIn ? (
            <h1 className="text-3xl pb-5 text-center text-black">Sign Up</h1>
          ) : (
            <h1 className="text-3xl pb-5 text-center text-black">Log In</h1>
          )}

          <div className="py-2">
            <input
              required
              type="email"
              ref={email}
              className="text-center py-3 border text-white rounded-md w-full outline-offset-1 outline-white"
              placeholder="email"
              style={{ color: "black" }}
            />
          </div>
          {signIn ? (
            <div className="py-2">
              <input
                required
                ref={name}
                type="text"
                className="text-center py-3 border text-black  rounded-md w-full outline-offset-1 outline-white"
                placeholder="Username"
                style={{ color: "black" }}
              />
            </div>
          ) : (
            ""
          )}

          <div className="py-2">
            <input
              required
              type="password"
              ref={password}
              placeholder="Password"
              className="text-center py-3 border rounded-md w-full outline-offset-1 outline-white"
              style={{ color: "black" }}
            />
          </div>
          {signIn ? (
            spinner ? (
              <>
                <Spinner />
              </>
            ) : (
              <button
                onClick={handleSignUpSubmit}
                className="bg-green-700 hover:bg-green-600 font-bold w-full rounded-md py-2 my-2 text-white"
              >
                Sign Up
              </button>
            )
          ) : spinner ? (
            <>
              <Spinner />
            </>
          ) : (
            <button
              onClick={handleLoginSubmit}
              className="bg-green-700 hover:bg-green-600 font-bold w-full rounded-md py-2 my-2 text-white"
            >
              Log In
            </button>
          )}

          {signIn ? (
            <p
              className="text-black text-center cursor-pointer"
              onClick={handleSignIn}
            >
              Existing User?{" "}
              <span className="underline text-green-600 font-bold ">
                {" "}
                Login Now!
              </span>
            </p>
          ) : (
            <p
              className="text-black text-center cursor-pointer"
              onClick={handleSignIn}
            >
              New User?{" "}
              <span className="underline text-green-600 font-bold ">
                Register Now!
              </span>
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;
