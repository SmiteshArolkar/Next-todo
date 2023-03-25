import { useState , useEffect} from "react";
import { ReactPortal } from "react";
import { ReactDom } from 'react-dom'
import { ReactDOM } from "react";

export  function Modal( props ){
    const { setOpenModal } = props
    const [_document , set_document] = useState(null)
    
    useEffect(() => {
        set_document(document)
    }, []);

    if(!_document){
        return null
    }
   

    return ReactDOM.createPortal(
       
        <div className=" fixed w-screen h-screen top-0 left-0 bg-white text-slate-900 border border-solid border-slate-900">
            <div className="flex items-center justify-between p-4">
                <h1>Menu</h1>
                <i class="fa-solid fa-xmark"/>

            </div>
            <div className="p-4 flex flex-col gap-3">
                <h2>Logout</h2>
            </div>

        </div>
        ,
        _document.getElementById("portal")
    )
}