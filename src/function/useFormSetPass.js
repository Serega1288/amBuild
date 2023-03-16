import {useState} from "react";
import {instanceAuthService} from "./auth";
import {localStoreService} from "./hook";
import {navigate} from "gatsby";

function pause() {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 6000);
    });
}

const useForm = () => {
    const [values, setValues] = useState({passwordCurrent: '', password_1: '', password_2: '', garbage: '', type:'setPass', t: localStoreService.getLocal(process.env.LOCAL_TOKEN) });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [message, setMessage] = useState(null);


    // console.log('user !!!', localStoreService.getLocal(process.env.LOCAL_TOKEN) );


    const captureInput = e => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        })
        // console.log('name > ', e.target.name )
        // console.log('value > ', e.target.value )
    }

    const submitForm = async e => {
        e.preventDefault();
        setIsLoading(true);
        setMessage(null);
        setError(null);

        const res = await fetch(`${process.env.GATSBY_SERVERLESS_URL}/sendGetData`, {
            method: 'POST',
            headers: {
                'content-Type': 'application/json',
            },
            body: JSON.stringify(values),
        });

        const responseText = JSON.parse( await res.text() );



        // const handleLogin =  async () => {
        //     //request to natify
        //
        //     const user = {
        //         name: message?.result
        //     }
        //
        //     instanceAuthService.saveUser(user)
        //     navigate('/search')
        // }

        // console.log('responseText >>>', responseText );

        // 2. перевіряємо відповідь від сервера
        if ( responseText.result >= 400 && responseText.result < 600 ) {
            setIsLoading(false);
            setError( responseText?.result?.message );
            // setMessage( responseText?.result?.message );
            // console.log('setError', responseText?.result?.message )

        } else {
            // 3. емайл успішно відправлений


            // console.log('setPAss !!!!!!!!!!!!', responseText )

            if ( responseText.statusCode[0] + responseText?.statusCode[1] === '1_' ) {

                await pause();
                // console.log('setPAss !!!!!!!!!!!!')
                instanceAuthService.logout();
                navigate('/sign-in/')

            }

            setIsLoading(false);
            setValues({
                ...values,
                passwordCurrent: '',
                password_1: '',
                password_2: '',
                garbage: ''
            });
            setMessage(responseText);


        }

        //console.log(' values >>>', values);
    }

    //console.log('error', error);

    return {
        values,
        captureInput,
        submitForm,
        isLoading,
        error,
        message
    }
}

export default useForm;