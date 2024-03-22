import Link from "next/link";
import LogOutForm from "./logoutForm";


export default function Navbar() {
return (
<>
    <nav className="flex justify-center items-center gap-5 my-4">
    <Link href="/HomePage">HomePage</Link>
    <Link href="Premium">Premium</Link>
    <Link href="Profile">Profile</Link>
    <Link href="Login">Login</Link>
    <LogOutForm />
    </nav>
</>
);
}