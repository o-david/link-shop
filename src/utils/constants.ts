import { AdminRouter, AppRouter } from "../routers";

export const APPS = [
    {
        subdomain: 'www',
        app:AppRouter,
        main:true
    },
    {
        subdomain: 'admin',
        app:AdminRouter,
        main:false
    },
]