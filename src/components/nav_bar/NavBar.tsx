import { useState } from "react";
import { Link } from "react-router-dom";
import { Transition } from "@headlessui/react";
import jtc from "../../images/jtc.svg";


const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div className={`md:bg-pale-yellow ${isOpen ? "bg-moderate-blue" : "bg-pale-yellow"}`}>
        <nav>
          <div className="max-w-7xl mb-5 px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img
                    src={jtc}
                    alt="JTC's logo"
                  />
                </div>
                <div className="hidden md:block">
                  <div  className="ml-[40rem] flex items-baseline space-x-4">
                    <Link
                      to="/"
                      className="text-dark-blue px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Home
                    </Link>
  
                    <Link
                      to="classes"
                      className="text-dark-blue px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Classes
                    </Link>
                    <Link
                      to="records"
                      className="text-dark-blue px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Records
                    </Link>
                  </div>
                </div>
              </div>
              <div className="-mr-2 flex md:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className=" inline-flex items-center justify-center p-2 rounded-md text-desaturated-cyan focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  {!isOpen ? (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
  
          <Transition
            show={isOpen}
            enter="transition ease-out duration-100 transform"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-75 transform"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
            className="bg-moderate-blue"
          >
            {(ref) => (
              <div className="h-screen md:hidden" id="mobile-menu">
                <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link
                  to="/"
                  className="text-l-gray-orange block px-3 py-2 rounded-md text-base font-medium"
                >
                  Home
                </Link>
  
                <Link
                    to="classes"
                    className="text-l-gray-orange block px-3 py-2 rounded-md text-base font-medium"
                >
                    Classes
                </Link>

                <Link
                    to="records"
                    className="text-l-gray-orange px-3 py-2 rounded-md text-sm font-medium"
                >
                    Records
                </Link>

                </div>
              </div>
            )}
          </Transition>
        </nav>
  
      </div>
    )
};

export default NavBar;