import {NextRequest, NextResponse} from 'next/server'

export default function middleware(req: NextRequest){
   const token = req.cookies.get('auth_token')?.value

   const signInUrl = new URL('/', req.url )

   if(!token){
      if(req.nextUrl.pathname === '/') {
        return NextResponse.next()
      }

      return NextResponse.redirect(signInUrl)
   }
}

export const config = {
    matcher: ['/', '/navbar', '/navbar/profile']
}