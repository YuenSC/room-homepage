import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

import Modal from "./common/Modal";

const Header = () => {
  return (
    <div className="absolute w-full pt-10 px-8 text-white">
      <div className="flex justify-center items-center relative">
        {/* <button
          type="button"
          className="absolute left-0"
          onClick={() => setIsOpen(true)}
        >
          <AiOutlineMenu className="w-8 h-8" />
        </button> */}
        <NavBar />

        <div className="text-4xl font-bold">room</div>
        <div className="hidden md:block">
          <NavItems />
        </div>
      </div>
    </div>
  );
};

export default Header;

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const items = [
    {
      name: "home",
      path: "/home",
    },
    {
      name: "shop",
      path: "/shop",
    },
    {
      name: "about",
      path: "/about",
    },
    {
      name: "contact",
      path: "/contact",
    },
  ];

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  return (
    <>
      <button
        type="button"
        onClick={openModal}
        className="md:hidden absolute left-0 focus:outline-none rounded-md text-sm font-medium text-white hover:bg-opacity-30 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
      >
        <AiOutlineMenu className="w-8 h-8" />
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full transform overflow-hidden bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="flex justify-between items-center py-8 w-full">
                    <button
                      type="button"
                      onClick={closeModal}
                      className="focus:outline-none rounded-md text-sm font-medium text-gray-300 hover:bg-opacity-30 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                    >
                      <AiOutlineClose className="w-8 h-8" />
                    </button>

                    <NavItems />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

const NavItems = () => {
  const items = [
    {
      name: "home",
      path: "/home",
    },
    {
      name: "shop",
      path: "/shop",
    },
    {
      name: "about",
      path: "/about",
    },
    {
      name: "contact",
      path: "/contact",
    },
  ];

  return (
    <nav>
      <ul className="flex">
        {items.map(({ name, path }) => (
          <li key={name} className="ml-12 font-bold">
            <a href="#">{name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
