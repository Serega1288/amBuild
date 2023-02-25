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


    // const body = JSON.parse(event.body);

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

    console.log('send !!!!!!!!!!!!!')

    await pause();


    return {
        statusCode: 200,
        body: JSON.stringify({ m: 'test'}),
    };
};
