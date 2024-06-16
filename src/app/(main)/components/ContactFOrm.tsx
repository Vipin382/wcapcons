import React from "react";

const ContactFOrm = () => {
  return (
    <div className="my-10 bg-formimage grid transition-all xl:grid-cols-3 bg-cover bg-no-repeat  h-[860px]">
      <div className="lg:col-span-2 hidden xl:grid transition-all grid-cols-3 ">
        <div className="border-4 border-black border-t-transparent border-l-transparent"></div>
        <div className="border-4 border-black border-t-transparent"></div>
        <div className="border-4 border-black border-t-transparent border-r-transparent"></div>
        <div className="border-4 border-black border-l-transparent"></div>
        <div className="border-4 border-black"></div>
        <div className="border-4 border-black border-r-transparent"></div>
        <div className="border-4 border-black border-l-transparent"></div>
        <div className="border-4 border-black"></div>
        <div className="border-4 border-black border-r-transparent"></div>
        <div className="border-4 border-black border-l-transparent border-b-transparent"></div>
        <div className="border-4 border-black border-b-transparent"></div>
        <div className="border-4 border-black border-r-transparent border-b-transparent"></div>
      </div>

      <div className="bg-black/60 flex flex-col justify-center items-center px-8 md:px-32">
        <div>
          {" "}
          <div className="sm:mx-auto space-y-4 sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-4xl whitespace-nowrap font-bold leading-9 tracking-tight text-white">
              Join with an invitation!
            </h2>
            <div className="text-sm font-medium text-white text-justify">
              If you don’t yet have an invite, provide us your another social
              media, then get started and we will send you an invitation mail.
            </div>
          </div>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <div className="mt-2">
                  <input
                    name="name"
                    type="text"
                    placeholder="Name Social media Platform"
                    required
                    className="block w-full border-0 py-2 text-gray-900 shadow-sm bg-transparent ring-1 ring-inset ring-gray-300/80 placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="mt-2">
                  <input
                    name="username"
                    type="text"
                    placeholder="Your username"
                    required
                    className="block w-full  border-0 py-2 text-gray-900 shadow-sm bg-transparent ring-1 ring-inset ring-gray-300/80 placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="Email Id"
                    required
                    className="block w-full border-0 py-2 text-gray-900 shadow-sm bg-transparent ring-1 ring-inset ring-gray-300/80 placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-[200px] mx-auto  justify-center rounded-md bg-primary-800 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
                >
                  Get Started
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactFOrm;
