import React from "react";
import guitar from "../assets/guitar2.webp";
import google from "../assets/google.png";
import phone from "../assets/phone.png";
import { auth, googleProvider } from "../firebase/setup";
import {
  signInWithPopup,
  User,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { X } from "lucide-react";
import { useState, useEffect } from "react";

type popupProp = {
  setLoginPop: any;
};
const Login = (props: popupProp) => {

 
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Track user state
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const googleSignin = async () => {
    try {
      let result = await signInWithPopup(auth, googleProvider);
      console.log(user,"user from state in login");
      setUser(result.user);
      props.setLoginPop(false);

      // navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="fixed inset-0 bg-zinc-950 bg-opacity-75 transition-opacity"
        aria-hidden="true"
      ></div>

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all  sm:w-96 sm:max-w-lg">
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div
                onClick={() => props?.setLoginPop(false)}
                className="font-semibold text-3xls cursor-pointer flex flex-row-reverse "
              >
                <X size={44} strokeWidth={1.25} />
              </div>
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <div className="mt-2">
                    <img src={guitar} className="w-20 h-20 ml-32 " alt="" />
                    <p className=" text-center text-base font-medium mt-4">
                      Help us become one of the safest places <br /> to buy and
                      sell{" "}
                    </p>

                    <div className="flex gap-2 w-72 mt-12 border-2 border-black p-2 rounded-md cursor-pointer">
                      <img src={phone} className="w-5 h-5" alt="" />
                      <h1 className="font-semibold  "> Continue with Phone </h1>
                    </div>


                    <div onClick={googleSignin} className="flex border-2 border-gray-300 p-2 rounded-md mt-4 cursor-pointer">
                    <img src={google} className="w-6 h-6" alt="" />
                    <h1 className="font-semibold ml-12 "> Continue with Google </h1>
                  </div>
                  <h1 className="text-center mt-4">OR</h1>
                  <h1 className="text-center mt-4 underline cursor-pointer">
                    Login with Email
                  </h1>
                  <h1 className="text-center mt-28 text-xs">
                    All your personal details are safe with us.
                  </h1>
                  <h1 className="text-center mt-4 text-xs">
                    If you continue, you are accepting{" "}
                    <span className="text-blue-600">
                      {" "}
                      OLX Terms and <br /> Conditions and Privacy Policy
                    </span>
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Login;
