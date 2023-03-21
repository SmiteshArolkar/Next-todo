export default function Login() {
    return (
        <>
        <div className="flex-1 text-white flex gap-4 text-xs flex-col sm:text-sm justify-center items-center">
            <h1 className="font-extrabold text-2xl select-none sm:text-4xl">LOGIN</h1>
            <input type="text" className="outline-none border-solid focus:border-cyan-500 border-white border-b-2 duration-300 text-black  p-1 w-full max-w-[65ch]" placeholder="Email Address...."></input>
            <input type="text" className="outline-none border-solid focus:border-cyan-500 border-white border-b-2 duration-300 text-black   p-1 w-full max-w-[65ch]" placeholder="Password"></input>
            <button className="w-full max-w-[65ch] border-solid p-1 py-2 border-white border duration-300 relative after:absolute after:right-full after:bg-white after:z-10 after:w-full after:h-full overflow-hidden hover:after:-translate-x-full after:duration-300">
                <h2 className="relative z-20">SUBMIT</h2>
                </button>
        </div>
      
        </>
    )
}