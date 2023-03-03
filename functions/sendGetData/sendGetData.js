//const nodemailer = require('nodemailer');
const axios = require('axios')


function pause() {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 1000);
    });
}

// send the email
exports.handler = async (event, context) => {
    // Делаем паузу - 2сек.
    const body = JSON.parse(event.body);
    // const URL = `${process.env.URL_WOO_REST_API}${body.get}`;
    // let URL = `https://americanbuilds.awbs.dev/wp-json/wc/v3/orders`;

    // Проверка "мусорного" поля input
    // if (body.garbage) {
    //     return {
    //         statusCode: 400,
    //         body: JSON.stringify({ message: 'Spam !!!' }),
    //     };
    // }


    // let msg = ''
    // let email = ''
    //
    // Object.entries(body).forEach(field => {
    //     const [key, value] = field;
    //     if ( key !== 'garbage' ) {
    //         msg += key + ': ' + value +  '\n'
    //         email += '<strong>' + key + '</strong>' + ': ' + value +  '<br>'
    //     }
    // })
    //
    // msg = encodeURI(msg)
    // console.log('body >>', body);
    //

    //
    // let date = '';
    // let m='';
    //
    // axios({
    //     method: 'get',
    //     url: `${process.env.URL_AJAX}?action=sendFormPop&token=${process.env.AUTH_TOKEN}&body=${email}&email=${process.env.MAIL_USER}`,
    // })
    //     .then(function (response) {
    //         date = response.data.split('{')[1].split('}')[0];
    //         console.log('fine >>>',  date)
    //
    //
    //         if ( date === '01' || date === '02' || date === '04' ) {
    //             m = `Sorry, but an error has occurred, please contact technical support. Error code: ${date}`;
    //         }
    //
    //         if ( date[0] + date[1] === '1_' ) {
    //             m = 'Message sent...';
    //         }
    //
    //         console.log('Mail >>', m);
    //
    //     }).catch((error) => {
    //     date = error;
    //     console.error(error, 'error >>>')
    // });

    let m='';
    let date = '';


    if ( body.type === 'order' || body.type === 'product' || body.type === 'coupons' || body.type === 'account' || body.type === 'coupon' ) {

        axios.get(`${process.env.URL_WOO_REST_API}${body.get}`, {
            auth: {
                username: process.env.CONSUMER_KEY,
                password: process.env.CONSUMER_SECRET,
            },
        }).then(response => {
            m = response.data;
            console.log('>>>', response.data.result );
        }).catch(error => {
            //console.error(error);
            return {
                statusCode: 400,
                body: JSON.stringify({ m: body, result: error}),
            };
        });


    }

    if ( body.type === 'setDataAccount' ) {

        axios({
            method: 'get',
            url: `${process.env.URL_AJAX}?action=setDataAccount&token=${process.env.AUTH_TOKEN}&set=${body.set}&ud=${body.ud}&type=${body.type}`,
        })
            .then(function (response) {
                date = response.data.split('{')[1].split('}')[0];
                console.log('fine >>>',  date)



                if ( date === '01' || date === '02' || date === '03' ) {
                    m = `Sorry, but an error has occurred, please contact technical support. Error code: ${date}`;
                }


                // if ( date === '04' ) {
                //     m = 'Invalid password.';
                // }

                if ( date[0] + date[1] === '1_' ) {
                    m = date.split('ud=')[1];
                }

                console.log('Mail >>', m);

            }).catch((error) => {
            date = error;
            console.error(error, 'error >>>')
        });

    }

    if ( body.type === 'getCouponsActive' ) {


        axios({
            method: 'get',
            url: `${process.env.URL_AJAX}?action=setDataAccount&token=${process.env.AUTH_TOKEN}&set=${body.set}&ud=${body.ud}&type=${body.type}`,
        })
            .then(function (response) {
                if (response) {
                    date = response.data.split('{')[1].split('}')[0];
                    console.log('fine >>>',  date)
                    if ( date === '01' || date === '02' || date === '03' ) {
                        m = `Sorry, but an error has occurred, please contact technical support. Error code: ${date}`;
                    }
                    if ( date[0] + date[1] === '1_' ) {
                        m = date.split('ud=')[1];
                    }
                    console.log('getCouponsActive >>', m);

                }




            }).catch((error) => {
            date = error;
            console.error(error, 'error >>>')
        });




        // let activeCoupotID = m;

        // console.log('activeCoupotID', m)



    }


    if ( body.type === 'getCouponsActive' ) {



    }
    // console.log('send !!!!!!!!!!!!!', m)

    await pause();


    return {
        statusCode: 200,
        body: JSON.stringify({ m: body, result: m}),
    };
};
