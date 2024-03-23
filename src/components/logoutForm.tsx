import { logout } from "@/actions";

export default function LogOutForm() {
return (
<>
<form action={logout}>
    <button className=" bg-zinc-950 p-1 rounded-full text-white font-bold
     border-2 border-opacity-5 border-gray-950">Log out</button>
     </form>
</>
);
}