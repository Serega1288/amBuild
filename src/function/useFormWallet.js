import {useState} from "react";
import {localStoreService} from "./hook";
import {navigate} from "gatsby";
// import {instanceAuthService} from "./auth";



const useFormCheckout = () => {

    // console.log('localStoreService.getLocal(process.env.LOCAL_TOKEN)', localStoreService.getLocal(process.env.LOCAL_TOKEN))

    const [values, setValues] = useState({garbage: '', currency: '', wallet: '', t: localStoreService.getLocal(process.env.LOCAL_TOKEN)  });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [message, setMessage] = useState(null);


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

        // console.log('responseText >>> qqq', values );

        // 2. перевіряємо відповідь від сервера
        if ( responseText.result >= 400 && responseText.result < 600 ) {
            setIsLoading(false);
            setError( responseText?.result?.message );
            // setMessage( responseText?.result?.message );
            // console.log('setError', responseText?.result?.message )

        } else {
            // 3. емайл успішно відправлений
            setIsLoading(false);
            setValues({
                ...values,
                garbage: '',
                wallet: '',
                currency: ''
            });
            setMessage(responseText);

            // console.log('ddd', responseText.result, responseText.result.message )

            if ( responseText?.result[0] + responseText?.result[1] === '1_' ) {
                // navigate('/order/')
                // /account/settings/

                // const get = localStoreService.getLocal('CartBuy');
                // console.log('get ProductSave', get)


                // navigate('/account/settings/')
                // const user = {
                //     name: responseText?.result
                // }
                // instanceAuthService.saveUser(user)
                // navigate(RedirectPage)

            }


        }

        //console.log(' values >>>', values);
    }

    //console.log('error', error);

    // const valuesCode = values,
    //     captureInputCode = captureInput,
    //     submitFormCode = submitForm,
    //     isLoadingCode = isLoading,
    //     errorCode = error,
    //     messageCode = message
    //
    // return {
    //     valuesCode,
    //     captureInputCode,
    //     submitFormCode,
    //     isLoadingCode,
    //     errorCode,
    //     messageCode
    // }

    return {
        values,
        captureInput,
        submitForm,
        isLoading,
        error,
        message,
        setMessage,
    }
}

export default useFormCheckout;