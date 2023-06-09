import { useAuth } from "@/context/AuthContext";
import React, { useState } from "react";
import { Modal } from "./Modal";

const Header = () => {
  const [openModal, setOpenModal] = useState(false);
  const {logout} = useAuth();

  return (
    <>
      {openModal && <Modal setOpenModal={setOpenModal}></Modal>}
      <div className="fixed top-0 w-full left-0 border-b  border-solid border-white sticky text-white bg-slate-900 text-3xl px-4 flex items-center justify-between p-4">
        <h1 className="text-3xl sm:text-6xl select-none">TODO LIST</h1>
        <i
          onClick={() => {
            logout()
          }}
          className="fa-solid fa-user  sm:text-4xl duration-300 hover:opacity-40 cursor-pointer"
        ></i>
      </div>
    </>
  );
};

export default Header;
