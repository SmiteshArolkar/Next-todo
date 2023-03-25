import { useAuth } from "@/context/AuthContext";
import { useAmp } from "next/amp";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [Login, setIsLogin] = useState(true);
  const { login, signUp , currentUser } = useAuth();

  console.log(currentUser)

  async function submitHandler() {
    if (!email || !password) {
      setError("Please Enter Username Password");
    } else {
      setError(null);
      if (Login) {
        console.log("Loging In");
        try {
          return await login(email, password);
        } catch (error) {
          setError(error.message);
        }
      } else {
        console.log("Logging In");
        try {
          return await signUp(email, password);
        } catch (error) {
          setError(error.message);
        }
      }
    }
  }
  return (
    <>
      <div className="flex-1 text-white flex gap-6 text-xs flex-col sm:text-sm justify-center bg-inherit items-center">
        <h1 className="font-extrabold text-2xl select-none sm:text-4xl">
          {Login ? "LOGIN" : "REGISTER"}
        </h1>
        {error && (
          <div className="w-full text-center max-w-[65ch] border-rose-300 border border-solid text-rose-400 py-2">
            Error : {error}
          </div>
        )}
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          className="outline-none border-solid focus:border-cyan-500 border-white border-b-2 duration-300 text-black  p-1 w-full max-w-[65ch]"
          placeholder="Email Address...."
        ></input>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          className="outline-none border-solid focus:border-cyan-500 border-white border-b-2 duration-300 text-black   p-1 w-full max-w-[65ch]"
          placeholder="Password"
        ></input>
        <button
          onClick={submitHandler}
          className="w-full max-w-[65ch] border-solid p-1 py-2 b overflow-hidden border duration-300  relative after:absolute after:right-full
         after:bg-gradient-to-tr after:from-pink-800  after:to-red-300 after:via-purple-600 after:z-10 after:w-full after:h-full   hover:after:translate-x-full after:duration-300 transition-all after:-translate-y-6 md:after:-translate-y-7"
        >
          <h2 className="relative z-20">SUBMIT</h2>
        </button>
        <h2
          className="duration-300 hover:scale-110 cursor-pointer"
          onClick={(e) => setIsLogin(!Login)}
        >
          {!Login ? "LOGIN" : "REGISTER"}
        </h2>
      </div>
    </>
  );
}
