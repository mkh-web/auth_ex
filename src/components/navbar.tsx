import Link from "next/link";
import LogOutForm from "./logoutForm";
import { getSession } from "@/actions";


export default async function Navbar() {
    const session = await getSession()//استدعي السيشن

    return (
        <>
            <nav className="flex justify-center items-center gap-5 my-4">
                <Link href="/HomePage">HomePage</Link>
                <Link href="Premium">Premium</Link>
                <Link href="Profile">Profile</Link>

                {session.isLoggedIn && <LogOutForm />}
                {!session.isLoggedIn && <Link href="Login">Login</Link>}
            </nav>
        </>
    );
}