import React from "react";
import { Link } from "react-router-dom";
import { Button, Label, TextInput } from "flowbite-react";

function Signup() {
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        <div className="flex-1">
          <Link
            to="/"
            className="self-center whitespace-nowrap sm:text-xl font-bold dark:text-white text-6xl"
          >
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-full">
              dotDomain's
            </span>
            Blog
          </Link>
          <p className="text-sm mt-5">
            Front-end vulnerabilities, while often overlooked, can pose
            significant risks to web applications. These vulnerabilities exploit
            weaknesses in the client-side code, such as JavaScript, HTML, and
            CSS. Sign up for more info...
          </p>
        </div>
        <div className="flex-1">
          <form className="flex flex-col gap-4">
            <div>
              <Label value="Your username" />
              <TextInput type="text" placeholder="Username" id="username" />
            </div>
            <div>
              <Label value="Your email" />
              <TextInput type="text" placeholder="name@company.com" id="email" />
            </div>
            <div>
              <Label value="Your password" />
              <TextInput type="text" placeholder="Email" id="password" />
            </div>
            <Button gradientDuoTone="purpleToPink" type="submit">
              Sign Up
            </Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Have an account?</span>
            <Link to='/sign-in' className="text-blue-500">Sign in</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
