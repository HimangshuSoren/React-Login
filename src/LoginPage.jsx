import Eye from "./assets/eye.svg"
import Eyeoff from "./assets/eyeoff.svg"
import { useState, useTransition } from "react"


function LoginPage() {
    const [text, setText] = useState()
    const [pass, setPass] = useState()
    const [dis, setDis] = useState(false)
    const [loading, startLoading] = useTransition()
    const [warning, setWarning] = useState("")

    function toggleEye() {
        setDis(!dis)

    }

    function Login(){
        if(text && pass){
            setWarning("")
            startLoading(
                async ()=>{
                   await new Promise (res=>setTimeout(res,3000))
                   console.log("LoginDone")
               }
           )
        }
        else if(!text && pass){
            setWarning("Enter a valid userman or email")
        }
        else if(!pass && text){
            setWarning("Enter a valid userman or email")
        }
        else if (!text && !pass){
            setWarning("Enter a valid username and password")
        }
    }

    return (
        <>
                <div className="w-screen h-screen flex items-center justify-center" >


                    <div className="w-[30%] min-h-[40%] py-6 shadow-lg rounded-2xl overflow-hidden portrait:h-screen portrait:w-screen pb-10 portrait:rounded-0 flex flex-col items-center justify-center" >

                        <div className="text-emerald-500 font-bold text-5xl mb-5 " >Login</div>

                        <div className="relative py-5 flex items-center group w-[70%] portrait:w-[85%]" >
                            <input type="text" onChange={(e) => setText(e.target.value)} className="border-2 w-full text-gray-600 border-gray-400  h-15 outline-none focus:border-3 rounded-md p-4 text-xl md focus:border-emerald-500 transition-all duration-100 ease-in-out" />
                            <div className={`absolute border-gray-400 text-xl bg-white font-medium text-gray-500 left-4 -z-22 
                        transition-all duration-150 ease-in-out group-focus-within:-translate-y-8 group-focus-within:-translate-x-5 group-focus-within:scale-[0.8] group-focus-within:text-xl group-focus-within:text-emerald-600 group-focus-within:px-1 group-focus-within:z-22 ${text ? "-translate-y-8 -translate-x-5 scale-[0.8] text-xl text-emerald-600 px-1 z-22 border-emerald-500" : ""} `}>
                                Enter username or email
                            </div>
                        </div>

                        <div className="relative pt-5 flex items-center group w-[70%] portrait:w-[85%]" >
                            <input type={dis ? "text" : "password"} onChange={(e) => setPass(e.target.value)} className={` border-2 border-gray-400 w-full  text-gray-600  h-15 outline-none focus:border-3 rounded-md p-4 text-xl  focus:border-emerald-500 transition-all duration-100 ease-in-out `} />
                            <div className={`absolute border-gray-400 text-gray-500  text-xl bg-white font-medium  left-4 -z-22 
                        transition-all duration-150 ease-in-out group-focus-within:-translate-y-8 group-focus-within:-translate-x-5 group-focus-within:scale-[0.8] group-focus-within:text-xl group-focus-within:text-emerald-600 group-focus-within:px-1 group-focus-within:z-22 ${pass ? "-translate-y-8 -translate-x-5 scale-[0.8] text-xl text-emerald-600 px-1 z-22 border-emerald-500" : ""} `}>
                                Enter Password
                            </div>
                            <img src={dis ? Eye : Eyeoff} alt="" className="absolute right-0 px-4 cursor-pointer" onClick={toggleEye} />
                        </div>
                        <div className="w-[70%] portrait:w-[85%] pt-2 " >
                            <div className="text-emerald-600 font-medium" ><a href="#">Forgot Password?</a></div>
                        </div>
                        <div className="text-red-600 w-[70%] portrait:w-[85%] text-sm font-medium my-2">
                            {warning}
                        </div>

                        <button onClick={Login} className={`w-[70%] portrait:w-[85%] my-4 cursor-pointer  text-white py-3 mb-4 rounded-md border-1  font-bold text-3xl hover:bg-emerald-600 ${loading?"bg-zinc-400 border-zinc-400":"bg-emerald-500 border-emerald-400"} `} disabled={loading} >{loading?"Please Wait":"Login"}</button>
                        <div className="w-[70%] portrait:w-[85%] " >
                            <div className=" font-medium text-gray-600 mx-1" > Do not have an account? <a href="#" className="text-emerald-600">Sign up</a></div>
                        </div>
                    </div>
                </div >
        </>
    )
}


export default LoginPage
