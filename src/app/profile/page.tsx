import { changePremium, changeUsername, getSession } from "@/actions";
import { redirect } from "next/navigation";



export default async function ProfilePage() {

    const session = await getSession()

    if(!session.isLoggedIn){
        redirect("/")
    }


    return (
        <>
            <div>
                <p>welcome to profile page</p>
                <p>hey <b>{session.username}</b></p>
                <span>you are a <b>{session.isPro ? ("premium"):("Free")} user</b></span>

                <form action={changePremium}>
                    <button>{session.isPro ? ("cancel"):("buy")} premium</button>
                </form>
            </div>

            <form action={changeUsername}>
                <input type="text" name="username" required placeholder={session.username} />
                <button>update</button>
            </form>
        </>
    );
}