import { Footer, FooterTitle } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import {BsFacebook, BsInstagram, BsTwitterX, BsGithub} from 'react-icons/bs'

export default function FooterComponent() {
  return (
    <Footer container className="border-t-8 border-teal-500">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-4 ">
            <Link
              to="/"
              className="self-center whitespace-nowrap sm:text-xl font-semibold dark:text-white text-lg"
            >
              <span className="px-3 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-full">
                dotDomain's
              </span>
              Blog
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="About" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="/about"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  dotDomain's Blog
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://github.com/akramjunaid/dotdomain-blogs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Privacy" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright href="#" by="dotDomain's blog" year={new Date().getFullYear()}/>
            <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
                <Footer.Icon href="#" icon={BsFacebook}/>
                <Footer.Icon href="#" icon={BsInstagram}/>
                <Footer.Icon href="#" icon={BsTwitterX}/>
                <Footer.Icon href="#" icon={BsGithub}/>
            </div>
        </div>
      </div>
    </Footer>
  );
}
