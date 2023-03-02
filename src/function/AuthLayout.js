import { instanceAuthService } from './auth'
import { navigate } from 'gatsby'
import {localStoreService} from "./hook";

export const AuthLayout = ({children, page, go, logIn, redirectGoLogIn, href, triger}) => {

    // console.log('isLogined', instanceAuthService.isLogined(), page, go, redirectGoLogIn );

    // const [c, setC] = useState(href)
    // useEffect(() => {
    //
    //     const x = href.split('?tabs=')[1]?.split('#')[0];
    //     // console.log('href >>>',  x )
    //     setC(x)
    // })
    //
    // console.log('url', )

    // const get = localStoreService.getLocal('CartBuy')
    // console.log('!!!!!!!!!!!!!!!get', get)

    if ( instanceAuthService.isLogined() === logIn ) {

        if ( typeof window !== "undefined" ) {



            if ( redirectGoLogIn ) {
                navigate('/' + go + '/?r=' + redirectGoLogIn)
            } else {
                navigate('/' + go + '/')
            }
        }
        return null
    }

    // if ( triger === "checkout" ) {
    //     const CartLocal = localStoreService.getLocal('CartBuy')
    //     if (CartLocal === null) {
    //         if ( typeof window !== "undefined" ) {
    //             navigate('/shop/cloud-mining/')
    //         }
    //     }
    //
    // }

    // if ( page === 'account' ) {
    //     if ( !instanceAuthService.isLogined() ) {
    //         navigate('/' + go + '/')
    //         return null
    //     }
    // } else if( page === 'sign-in' || page === 'sign-up' ) {
    //     if ( instanceAuthService.isLogined() ) {
    //         navigate('/' + go + '/')
    //         return null
    //     }
    // }

    if ( instanceAuthService.isLogined() ) {

        // if ( url[0] == "{" ) {
        //     console.log('url', url);
        //     navigate(url)
        //     return null
        // } else {
        //     navigate('/')
        //     return null
        // }

    } else {


        // if ( url[0] == "{" ) {
        //     console.log('url', url);
        //     navigate(url)
        //     return null
        // } else {
        //     navigate('/')
        //     return null
        // }

        // navigate('/')
        // return null

    }



    return children
}