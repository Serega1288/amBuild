//const nodemailer = require('nodemailer');
const axios = require('axios')

// const transporter = nodemailer.createTransport({
//   host: process.env.MAIL_HOST,
//   port: process.env.MAIL_PORT,
//   auth: {
//     user: process.env.MAIL_USER,
//     pass: process.env.MAIL_PASS,
//   },
// });

// var transporter = nodemailer.createTransport({
//   host: "smtp.gmail.com",
//   port: 587,
//   auth: {
//     user: "victoriasoprano.com",
//     pass: "U7=3rZ*q8"
//   }
// });

// var transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'info@victoriasoprano.com',
//     pass: 'U7=3rZ*q8'
//   }
// });

// var transporter = nodemailer.createTransport({
//   host: "smtp.gmail.com",
//   port: 465,
//   auth: {
//     user: "info@victoriasoprano.com",
//     pass: "U7=3rZ*q8",
//   },
// });





function pause() {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 1000);
    });
}

// send the email
exports.handler = async (event, context) => {
    // Делаем паузу - 2сек.


    const body = JSON.parse(event.body);
    //
    // // Проверка "мусорного" поля input
    // if (body.garbage) {
    //     return {
    //         statusCode: 400,
    //         body: JSON.stringify({ message: 'Spam !!!' }),
    //     };
    // }

    console.log('>>> star !!!!!!!!!!!!!', body)

    // const fieldsRequired = ['d'];
    //
    // // Email - обязательное поле
    // for (const field of fieldsRequired) {
    //     if (!body[field]) {
    //         return {
    //             statusCode: 400,
    //             body: JSON.stringify({
    //                 message: `${field}!`,
    //             }),
    //         };
    //     }
    // }


    // let msg = ''
    //
    // Object.entries(body).forEach(field => {
    //     const [key, value] = field;
    //     if ( key !== 'garbage' ) {
    //         msg += key + ': ' + value +  '\n'
    //     }
    // })
    //
    // msg = encodeURI(msg)

    let date = '';
    let m='';

    console.log('axios >>', m);

    await axios({
        method: 'get',
        url: `${process.env.URL_AJAX}?action=sendStar&token=${process.env.AUTH_TOKEN}&baseID=${body.baseID}&op=${body.op}`,
    })
        .then(function (response) {
            date = response.data.split('{')[1].split('}')[0];
            // console.log('fine >>>',  date)



            if ( date === '01' || date === '02' ) {
                m = `Sorry, but an error has occurred, please contact technical support. Error code: ${date}`;
            }

            // if ( date === '04' ) {
            //     m = 'Invalid password.';
            // }

            if ( date[0] + date[1] === '1_' ) {
                m = 'Set Star done !!';
            }

            console.log('axios >>', m);

        }).catch((error) => {
        date = error;
        console.error(error, 'error >>>')
    });



    // \x05\x07�{

    //  \x03

    // await pause();

    return {
        statusCode: 200,
        body: JSON.stringify({ message: m, result: date }),
    };

    // return {
    //     statusCode: 200,
    //     body: JSON.stringify({ message: 'test', result: 'test result' }),
    // };
};
