import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Alert from "./Alert";
const PostUpdates = () => {
  let navigate = useNavigate();
  let [credentials, setCredentials] = useState({
    eventname: "",
    typeofevent: "",
    link: "",
    date: "",
  });
  const handleonChange = (e) => 
  {
    setCredentials({
      ...credentials,
      typeofevent: e.target.value,
    });
  };
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  const onSubmit = async(e) => {
    e.preventDefault();
    console.log(credentials);
    const {eventname,typeofevent,link,date} = credentials
    // update userid laterx
    let authorid =   "";
   
    try{
      const response = await axios.post("http://localhost:8080/data", {
        authorid,
        eventname,
        typeofevent,
        link,
        date,
      });
      console.log(response)
      if(response.status === 200)
      {alert("Post will be reviewed by Admin please wait for 48hrs");
      
      navigate("/");
    }
      else
      {console.log("unable to upload post ,Internal server issue")}
      

    }
    catch(err)
    {
        console.log(err);
    }

  };
  return (
    <div>
      <div>
        <section className="absolute top-40 right-20 left-20 ">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-black">
                  <h1>Post a</h1>
                  Workshop/Hackathon/Job
                </h1>
                <form className="space-y-4 md:space-y-6" onSubmit={onSubmit}>
                  {/* for name */}
                  <div>
                    <label
                      for="name"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                    >
                      Event name
                    </label>
                    <input
                      type="name"
                      name="eventname"
                      onChange={onChange}
                      id="eventname"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Byte"
                      required={true}
                    />
                  </div>
                  {/* for email */}
                  <div>
                    <label
                      for="eventtype"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                    >
                      Typeof event
                    </label>
                    <select
                      name="typeofevent"
                      id="typeofevent"
                      value={credentials.typeofevent}
                      onChange={handleonChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option disabled={true} value="">Typeofevent</option>
                      <option value="workshop">Workshop</option>
                      <option value="job">Job</option>
                      <option value="hackathon">Hackathon</option>
                    </select>
                  </div>
                  <div>
                    {/* send otp {otpcomponent && <Otp data={credentials.email}/>} */}
                  </div>
                  <div>
                    <div>
                      <label
                        for="link"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                      >
                        Link of event
                      </label>
                      <input
                        type="name"
                        onChange={onChange}
                        name="link"
                        id="link"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required=""
                      />
                    </div>
                    {/* confirmPassword */}
                    <div>
                      <label
                        for="Date"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                      >
                        Date
                      </label>
                      <input
                        type="date"
                        name="date"
                        onChange={onChange}
                        id="date"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required={true}
                      />
                    </div>
                    <div className="flex items-center justify-between"></div>
                    <button
                      type="submit"
                      className="w-full text-black bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    >
                      create
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PostUpdates;
