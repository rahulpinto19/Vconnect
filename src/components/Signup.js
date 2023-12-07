import React from "react";
import { useState } from "react";
import Otp from "./Otp";
import axios from "axios";
const Signup = () => {
  const [otpcomponent, setOtpcomponent] = useState(false);
  const [validatedOtp, setValidatedOtp] = useState(false);
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    otp: "",
    password: "",
  });
  const otpSentFromServer = "";
  const CreateuUser = (e) => {
    e.preventDefault();
    console.log("form submitted");
    const { name, email, otp, password } = credentials;
    console.log({ name, email, otp, password });
    const response = axios
      .post("http://localhost:8080/signup", { name, email, otp, password })
      .then((res) => {
        console.log("successfully registered");
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleOtpChange = (e) => {
    //the sent otp from the server  and user entered are same then go forward
    if (e.target.value.length == 6) {
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
    const { name, email } = credentials;

    console.log("onclickotp");
    setOtpcomponent(true);
    const response = axios
      .post("http://localhost:8080/sendotpreg", { name: name, email: email })
      .then((res) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });

    setTimeout(function () {
      setOtpcomponent(false);
    }, 60000);
  };
  return (
    <div>
      <div className="login-image"></div>
      <img
        src="E:\react\project\images\sampleImage2.jpeg"
        alt="Image"
        class="w-64 h-64"
      />
      {/* <h1 className="text-white top-20 right-0 ">Creating a new user</h1> */}
      <div>
        <section class="absolute top-40 right-20 left-20 ">
          <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-black">
                  create a New account
                </h1>
                <form class="space-y-4 md:space-y-6" onSubmit={CreateuUser}>
                  {/* for name */}
                  <div>
                    <label
                      for="name"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                    >
                      Enter your name
                    </label>
                    <input
                      type="name"
                      name="name"
                      id="name"
                      onChange={onChange}
                      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="xyz"
                      required="true"
                    />
                  </div>
                  {/* for email */}
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
                      onChange={onChange}
                      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="name@company.com"
                      required=""
                    />
                  </div>
                  <div>
                    <button
                      className="text-black"
                      id="otpButton"
                      onClick={onClickOtp}
                    >
                      send otp
                      </button>
                      {otpcomponent && (
                        <input
                          className="border-solid border-2 border-blue-500 ..."
                          type="text"
                          name="otp"
                          id="otp"
                          maxLength={6}
                          onChange={(event) => 
                          {
                            onChange(event);
                            handleOtpChange(event);
                          }}
                        />
                      )}
                      {/* send otp {otpcomponent && <Otp data={credentials.email}/>} */}
                  </div>
                  {validatedOtp && (
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
                      <div>
                        <label
                          for="cpassword"
                          class="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                        >
                          confirm password
                        </label>
                        <input
                          type="password"
                          name="cpassword"
                          id="cpassword"
                          placeholder="••••••••"
                          class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          required=""
                        />
                      </div>
                      <div class="flex items-center justify-between"></div>
                      <button
                        type="submit"
                        class="w-full text-black bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                      >
                        create
                      </button>
                    </div>
                  )}
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
