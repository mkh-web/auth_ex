"use server"
import { sessionOptions, SessionData, defaultSession } from "@/lib"
import { getIronSession } from "iron-session"
import { revalidatePath } from "next/cache"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

let username = "mohnd"
let password = "100"
let isPro = true
let isblocked = true


export const getSession = async () => {
    const session = await getIronSession<SessionData>(cookies(), sessionOptions)//عملية باس للسيشن مع الكوكيز

    if (!session.isLoggedIn) {//الغرض من هذا الكود هو اني ادخل قيمة الفولس للمتغير لما ما يكون مسجل
        session.isLoggedIn = defaultSession.isLoggedIn
    }

    session.isblocked = isblocked//ممكن تستخدمهم عشان تحقق
    session.isPro = isPro

    return session
}

//login
export const login = async (prevstate:{error:undefined | string},fromData: FormData) => {
    const session = await getSession()//summoing the session

    const formUSername = fromData.get("username") as string//form.get يستخدم عشان تسحب البيانات من الفورم حقك
    const formPassword = fromData.get("password") as string
    const som = fromData.get("nothing") as string

    console.log(som)

    //check user in db]
    if (formUSername !== username && formPassword !== password) {
        return {error : "worng pass"  }
    }
    //خزن قيم بس 
    session.userid = "1"
    session.username = formUSername
    session.isPro = isPro
    session.isLoggedIn = true


    await session.save()//save seesion
    redirect("/")

}


//logout
export const logout = async () => {
    const session = await getSession()//summoing the session

    session.destroy()
    redirect("/")
 }

 //change premium

 export const changePremium = async ()=>{
    const seesion = await getSession()

    isPro = !seesion.isPro
    seesion.isPro = isPro
    await seesion.save()
    revalidatePath("/Profile")
 }
 export const changeUsername = async (fromData:FormData)=>{
    const seesion = await getSession()

    const newUSername = fromData.get("username") as string//form.get يستخدم عشان تسحب البيانات من الفورم حقك

    username = newUSername
    seesion.username = username
    await seesion.save()
    revalidatePath("/Profile")
 }