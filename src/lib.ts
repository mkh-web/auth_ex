import { SessionOptions } from "iron-session"//باستخدام iron session



export interface SessionData {
    userid?: string,
    username?: string,
    img?: string
    isPro?: Boolean
}

export const sessionOptions: SessionOptions = {//متطلبات السيشن 
    password: process.env.SEACRT_KEY!,
    cookieName:"mk_session",
    cookieOptions:{
        httpOnly:true,//ما يخليهم يدخلون بالجافا سكربت للكوكيز
        secure: process.env.NODE_ENV === "production"
    }
}