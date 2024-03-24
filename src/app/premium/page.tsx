import { getSession } from "@/actions";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function PremiumPage() {
  
    const session = await getSession()

    if (!session.isLoggedIn) {
        redirect("/")
    }
    if (!session.isPro) {

return(
    <div>
        <p className=" bg-red-500 p-10 text-white">your are not sub</p>
        <Link href="/Profile">go and sub</Link>
    </div>
)
    }

    return (
        <>
                <div>hello to Premium content</div>
        </>
    );
}