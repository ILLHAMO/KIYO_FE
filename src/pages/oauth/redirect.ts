import { useStoreIntoAPP } from "app.store/intoAPP/store.intoAPP";
import { useRouter } from "next/router";
import { parseCookies } from "nookies";
import { useEffect } from "react";

const PageOauthRedirect = () => {
    const router = useRouter();
    const cookies = parseCookies();
    const requestAuthUser = useStoreIntoAPP((state) => state.requestAuthUser);

    useEffect(() => {
        requestAuthUser();
        router.push('/');
    }, []);
}

export default PageOauthRedirect;

// import { parse, serialize } from 'cookie';

// const _dvtCookieKey = '_dvt';

// export default function handler(req, res) {
//   /* 로그아웃 */

//   if (req.method === 'DELETE' || req.method === 'delete') {
//     res.setHeader('Set-Cookie', serialize(_dvtCookieKey, '', {
//       path: '/',
//       expires: new Date(0)
//     }));

//     return res.status(200).json({
//       result: true
//     })
//   }

//   const cookies = parse(req?.headers?.cookie || '');
//   res.status(200).json({
//     result: cookies[_dvtCookieKey],
//   })
// }
