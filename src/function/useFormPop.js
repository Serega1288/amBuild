import {useState} from "react";
// import {navigate} from "gatsby";

const useForm = (ArrField, setPopBox, setPopBoxThanks) => {
    const [values, setValues] = useState(ArrField);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [message, setMessage] = useState(null);


    // console.log('values !!!', values)


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

        const res = await fetch(`${process.env.GATSBY_SERVERLESS_URL}/sendFormPop`, {
            method: 'POST',
            headers: {
                'content-Type': 'application/json',
            },
            body: JSON.stringify(values),
        });

        const responseText = JSON.parse(await res.text() );

        // console.log('responseText >>>', responseText);

        // 2. перевіряємо відповідь від сервера
        if (res.status >= 400 && res.status < 600 ) {
            setIsLoading(false);
            setError(responseText.message);
        } else {
            // 3. емайл успішно відправлений
            setIsLoading(false);
            setValues({
                ...values,
                ...ArrField,
                garbage: ''
            });
            setMessage(responseText);

            if( responseText.result === '1_' ) {
                setPopBox(false)
                setPopBoxThanks(true)
            }

        }

        // setPopBox(!popBox)

        // console.log(' values >>>', responseText);
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