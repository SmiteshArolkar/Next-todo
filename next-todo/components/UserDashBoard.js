import { useAuth } from "@/context/AuthContext";
import { useState , useEffect } from "react";

export function UserDashBoard() {
  const { userInfo } = useAuth();
  const [addTodo, setAddTodo] = useState(false);
  const [Todo, setTodo] = useState("");

  useEffect(() => {
    if(!userInfo || Object.keys(userInfo).length === 0)
    {
        setAddTodo(true)
    }
  }, [userInfo]);

  return (
    <>
      <div className="text-white text-center text-4xl m-2">
        <h3>DASHBOARD</h3>
      </div>
      <div className="w-full max-w-[65ch] mx-auto flex flex-col gap-3 sm:gap-5">
        {addTodo && <div className="flex items-stretch gap-1">
          <input
            type="text"
            placeholder="Enter Todo"
            className="outline-none p-3 my-2 text-base sm:text-lg text-slate-900 flex-1"
            value={Todo}
            onChange={(e) => setTodo(e.target.value)}
          ></input>
          <button className="w-fit px-6 my-2 bg-amber-400 text-white text-2xl text-bold duration-300 hover:opacity-40">+</button>
        </div>
}

        {userInfo && <></>}
        {!addTodo && <button onClick={() => setAddTodo(true)} className="text-cyan-300 py-2 text-center uppercase font-bold border border-solid text-sm m-2 duration-300 hover:opacity-30">
          Add Todo
        </button>
}
      </div>
  
    </>
  );
}
