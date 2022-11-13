import { getToken as getT } from "next-auth/jwt"

export const getToken = (args: any) => (
    process.env.NODE_ENV === 'production' ? getT(args) : (
        {
            name: 'zihan',
            email: 'me@zihan.ga',
            
        }
    )
)