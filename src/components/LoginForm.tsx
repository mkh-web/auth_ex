"use client"


import { login } from "@/actions";
import { useFormState } from "react-dom";

export default function LoginForm() {

    const [state,formAction] = useFormState<any,FormData>(login,undefined)

    return (
        <form action={formAction} className="flex justify-center flex-col gap-5 m-10">
            <input type="text" name="username" required placeholder="username" className=" text-black outline-none"/>
            <input type="password" name="password" required placeholder="password"  className=" text-black outline-none"/>
            <input type="text" name="nothing" required placeholder="nothing"  className=" text-black outline-none"/>
            <button>login</button>
            {/*state && <p>{state.error}</p>*/}
            {state && <p className=" text-center rounded-md p-5  bg-green-200 translate-x-1 text-green-900">worng password or email </p>}
        </form>
    );
}