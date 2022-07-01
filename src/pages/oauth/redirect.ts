import { useStoreIntoAPP } from "app.store/intoAPP/store.intoAPP";
import { useRouter } from "next/router";
import { useEffect } from "react";

const PageOauthRedirect = () => {
    const router = useRouter();
    // const requestAuthUser = useStoreIntoAPP((state) => state.requestAuthUser);

    const setUserInfo = useStoreIntoAPP((state) => state.setUserInfo);

    useEffect(() => {
        setUserInfo({token : router.query.token});
        router.push('/');
    }, []);
}

export default PageOauthRedirect;
