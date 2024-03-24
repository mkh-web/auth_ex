import { SessionOptions } from "iron-session"//باستخدام iron session



export interface SessionData {//تعريف تايب عشان تايب سكربت
    userid?: string,
    username?: string,
    img?: string
    isPro?: Boolean,
    isLoggedIn:boolean,
    isblocked:boolean
}

export const defaultSession:SessionData={
    isLoggedIn: false,
    isblocked: false
} 

export const sessionOptions: SessionOptions = {//متطلبات السيشن 
    password: process.env.SEACRT_KEY!,
    cookieName:"mk_session",
    cookieOptions:{
        httpOnly:true,//ما يخليهم يدخلون بالجافا سكربت للكوكيز
        secure: process.env.NODE_ENV === "production"

    }
}