import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
} from "@nextui-org/react";
import { UserIcon } from "@heroicons/react/24/outline";
import { EyeFilledIcon } from "../../Utilities/Icon";
import { EyeSlashFilledIcon } from "../../Utilities/Icon";

function ProfileModal() {
  const [isOpen, setIsOpen] = useState(false);
  const LoginMethod = [
    { Icon: "/google.png", text: "Sign Up with Google" },
    { Icon: "/fb.png", text: "Sign Up with Facebook" },
    { Icon: "/apple.png", text: "Sign Up with Apple" },
  ];

  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  const handelOpen = () => {
    setIsOpen(true);
  };

  const handelClose = () => {
    setIsOpen(false);
  };
  return (
    <section>
      <div className="sm:block hidden">
        <Button
          variant="none"
          className="text-Dark_Indigo text-[18px]"
          onPress={handelOpen}
        >
          <UserIcon className="text-Dark_Indigo size-6" /> Account
        </Button>
      </div>

      <Modal
        isOpen={isOpen}
        backdrop="blur"
        onClose={handelClose}
        placement="top"
        size="5xl"
        className="mx-2 mt-10"
      >
        <ModalContent>
          <ModalBody className="px-0 py-0">
            <div className="flex md:flex-row flex-col w-full h-full md:max-h-[90vh] overflow-y-auto md:overflow-visible">
              {/* left part */}
              <div className="bg-[url('/LoginImg.png')] bg-center bg-cover bg-no-repeat text-white sm:flex hidden flex-col w-full md:w-1/3 px-7 pt-24">
                <h3 className="font-extrabold text-5xl">Sign Up</h3>
                <p className="text-sm  py-7">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  tellus ullamcorper hendrerit quis purus pellentesque. Ac
                  sagittis, convallis non tincidunt interdum eu nullam aliquam
                  maecenas. Enim sed tortor morbi ut suspendisse.{" "}
                </p>
              </div>

              {/* right part */}

              <div className="w-full md:w-2/3 px-[50px] py-20">
                <div>
                  {" "}
                  <img src="/logo.png" alt="Logo" className="w-fit mx-auto" />
                  <h2 className="text-Dark_Indigo font-bold text-[32px]">
                    Sign up and get exploring!
                  </h2>
                  <p className="font-medium text-sm">
                    Already have an account?{" "}
                    <a href="" className="text-Dodger_Blue">
                      Sign In
                    </a>
                  </p>
                </div>

                {/* Login Methods  */}
                <div className="flex flex-col space-y-5 py-5">
                  {LoginMethod.map(({ Icon, text }, index) => (
                    <button
                      className="text-Dark_Indigo font-bold flex items-center justify-center w-full gap-2 rounded-[8px] py-2 border border-Dodger_Blue hover:bg-[#1d3557] hover:text-white transition-colors duration-300 ease-in-out"
                      key={index}
                    >
                      <img src={Icon} alt="GoogleIcon" />
                      {text}
                    </button>
                  ))}
                </div>
                {/* Divider */}
                <div className="flex items-center text-Dark_Indigo font-medium">
                  <div className="flex-grow border-t border-[#E4E7EC]" />
                  <span className="px-2">or continue with</span>
                  <div className="flex-grow border-t border-[#E4E7EC]" />
                </div>

                {/* Inputs */}
                <form className="flex flex-col py-5">
                  <div>
                    <Input
                      label="Email"
                      type="text"
                      labelPlacement="outside"
                      placeholder="e.g. johndoe@email.com"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <Input
                      label="Password"
                      type={isVisible ? "text" : "password"}
                      labelPlacement="outside"
                      placeholder="................"
                      endContent={
                        <button
                          aria-label="toggle password visibility"
                          className="focus:outline-none"
                          type="button"
                          onClick={toggleVisibility}
                        >
                          {isVisible ? (
                            <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                          ) : (
                            <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                          )}
                        </button>
                      }
                      className="w-full pt-3"
                    />
                  </div>

                  <div className="flex flex-col items-center justify-center py-3">
                    <Button
                      className="font-bold w-full text-white "
                      color="primary"
                    >
                      Sign Up
                    </Button>

                    <p className="text-Dark_Indigo text-xs pt-2">
                      By creating an account, you agree to our{" "}
                      <span className="text-Dodger_Blue">
                        Terms & Conditions
                      </span>{" "}
                      and{" "}
                      <span className="text-Dodger_Blue">Privacy Policy</span>.
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </section>
  );
}

export default ProfileModal;
