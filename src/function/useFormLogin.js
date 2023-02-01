import {useState} from "react";
import {instanceAuthService} from "./auth";
import {navigate} from "gatsby";

const useForm = (RedirectPage) => {
    const [values, setValues] = useState({password: '', email: '', garbage: ''});
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [message, setMessage] = useState(null);


    // console.log('user !!!', RedirectPage);


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

        const res = await fetch(`${process.env.GATSBY_SERVERLESS_URL}/sendLogin`, {
            method: 'POST',
            headers: {
                'content-Type': 'application/json',
            },
            body: JSON.stringify(values),
        });

        const responseText = JSON.parse(await res.text() );



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

        // console.log('responseText >>>', responseText.result.status );

        // 2. перевіряємо відповідь від сервера
        if ( responseText.result.status >= 400 && responseText.result.status < 600 ) {
            setIsLoading(false);
            setError( responseText?.result?.message );
            // setMessage( responseText?.result?.message );
            // console.log('setError', responseText?.result?.message )

        } else {
            // 3. емайл успішно відправлений
            setIsLoading(false);
            setValues({
                ...values,
                email: '',
                password: '',
                garbage: ''
            });
            setMessage(responseText);

            // console.log('ddd', responseText.result.message )

            if ( responseText.result[0] + responseText?.result[1] === '1_' ) {

                const user = {
                    name: responseText?.result
                }
                instanceAuthService.saveUser(user)
                navigate(RedirectPage)

            }


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