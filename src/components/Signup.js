import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Signup = () => {
  const OTP = 0;
  const [otpcomponent, setOtpcomponent] = useState(false);
  const [validatedOtp, setValidatedOtp] = useState(false);
  const [credentials, setCredentials] = useState({
    fname: "",
    lname: "",
    rollno: "",
    email: "",
    otp: "",
    password: "",
  });
  let navigate = useNavigate();
  const CreateuUser = (e) => {
    e.preventDefault();
    console.log("form submitted");
    const { fname, lname, rollno, email, otp, password } = credentials;
    // console.log({ name, email, otp, password });
    const Name = fname + " " + lname;
    const response = axios
      .post("http://localhost:8080/signup", {
        Name,
        email,
        rollno,
        otp,
        password,
      })
      .then((res) => {
        alert(res.data.message);
        localStorage.setItem("token", response.authtoken);
      })
      .catch((err) => {
        alert("internal server issue");
      });
    navigate("/");
  };
  const handleOtpChange = (e) => {
    //the sent otp from the server  and user entered are same then go forward
    if (e.target.value.length === 6) {
      setValidatedOtp(true);
    } else {
      setValidatedOtp(false);
    }
  };
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  const onClickOtp = async (e) => {
    e.preventDefault();
    const { fname, lname, email } = credentials;

    const Name = fname + " " + lname;
    console.log("onclickotp");
    setOtpcomponent(true);
    const response = axios
      .post("http://localhost:8080/sendotpreg", { name: Name, email: email })
      .then((res) => {
        alert(res.data.message);
        OTP = res.data.otp;
      })
      .catch((err) => {
        console.log(err);
      });

    setTimeout(function () {
      setOtpcomponent(false);
    }, 60000);
  };
  function isValidEmail(email) {
    // Regular expression for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  return (
    <div>
      <div className="mt-[-1rem]">
        <section class="absolute  right-20 left-20 ">
          <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-black">
                  create a New account
                </h1>
                <form class="space-y-4 md:space-y-6" onSubmit={CreateuUser}>
                  {
                    <div>
                      {/* for first name */}
                      <div>
                        <label
                          for="fname"
                          class="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                        >
                          First Name
                        </label>
                        <input
                          type="name"
                          name="fname"
                          disabled={otpcomponent}
                          id="fname"
                          onChange={onChange}
                          class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="First name"
                          required="true"
                        />
                      </div>
                      {/* for last name */}
                      <div>
                        <label
                          for="lname"
                          class="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                        >
                          Last Name
                        </label>
                        <input
                          type="name"
                          name="lname"
                          disabled={otpcomponent}
                          id="lname"
                          onChange={onChange}
                          class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="last name"
                          required="true"
                        />
                      </div>
                      <div>
                        <label
                          for="rollno"
                          class="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                        >
                          Roll No
                        </label>
                        <input
                          type="name"
                          name="rollno"
                          disabled={otpcomponent}
                          id="rollno"
                          onChange={onChange}
                          class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="xyz"
                          required="true"
                        />
                      </div>
                      <div>
                        <label
                          for="email"
                          class="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                        >
                          Your email
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          disabled={otpcomponent}
                          onChange={onChange}
                          class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="name@company.com"
                          required="true"
                        />
                      </div>
                    </div>
                  }
                  {isValidEmail(credentials.email) &&
                    credentials.rollno &&
                    credentials.fname && (
                      <div>
                        <button
                          className="text-black hover:bg-blue-100"
                          id="otpButton"
                          onClick={onClickOtp}
                        >
                          {!otpcomponent ? "send otp" : "Enter otp"}
                        </button>
                        {otpcomponent && (
                          <input
                            className="border-solid border-2 border-blue-500 ... "
                            type="text"
                            name="otp"
                            id="otp"
                            minLength={6}
                            maxLength={6}
                            placeholder="xxx-xxx"
                            onChange={(event) => {
                              onChange(event);
                              handleOtpChange(event);
                            }}
                          />
                        )}
                      </div>
                    )}
                  {
                    // validatedOtp &&
                    <div>
                      <div>
                        <label
                          for="password"
                          class="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                        >
                          Password
                        </label>
                        <input
                          type="password"
                          name="password"
                          id="password"
                          onChange={onChange}
                          placeholder="••••••••"
                          class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          required=""
                        />
                      </div>
                      {/* confirmPassword */}
                      <div class="flex items-center justify-between"></div>
                      <button
                        type="submit"
                        class="w-full text-black bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                      >
                        create
                      </button>
                    </div>
                  }
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Signup;
