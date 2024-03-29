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

    // Проверка "мусорного" поля input
    if (body.garbage) {
        return {
            statusCode: 400,
            body: JSON.stringify({ message: 'Spam !!!' }),
        };
    }

    //console.log('!!!>> s', body)

    const fieldsRequired = ['pool', 'cart', 't'];

    // Email - обязательное поле
    for (const field of fieldsRequired) {
        if (!body[field]) {
            return {
                statusCode: 400,
                body: JSON.stringify({
                    message: `${field}!`,
                }),
            };
        }
    }

    let msg = ''

    Object.entries(body).forEach(field => {
        const [key, value] = field;
        if ( key !== 'garbage' ) {
            msg += key + ': ' + value +  '\n'
        }
    })

    msg = encodeURI(msg)

    // token=${process.env.AUTH_TOKEN}
    // axios
    //     .get(`${process.env.URL_AJAX}?action=authLogin`, {
    //       token: process.env.AUTH_TOKEN,
    //     })
    //     .then((res) => {
    //       // JSON.parse(res.data)
    //       console.log('>>', res, 'ok')
    //       //console.log(res)
    //     })
    //     .catch((error) => {
    //       console.error(error, 'error')
    //     })


    // axios({
    //   method: 'POST',
    //   responseType: 'json',
    //   url: `${process.env.URL_AJAX}?action=onCheckout&token=${process.env.AUTH_TOKEN}&token=${}`,
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // })
    // .then((res) => {
    //
    //   // JSON.parse(res.data)
    //   console.log(res, 'ok res')
    //   //console.log(res)
    // })
    //     .catch((error) => {
    //       console.error(error, 'error >>')
    //     })

    // console.log('body >>', body  );

    // user_id



    let date = '';
    let m='';

    await axios({
        method: 'get',
        url: `${process.env.URL_AJAX}?action=onCheckout&token=${process.env.AUTH_TOKEN}&user_id=${body.t.name}&email=${body.t.email}&pool=${body.pool}&product_id=${body.cart[0].id}&product_step=${body.cart[0].step}`,
    })
        .then(function (response) {
            date = response.data.split('{')[1].split('}')[0];
            console.log('fine >>> 1',  response.data )

            if ( date === '01' || date === '02' || date === '03' || date === '04' || date === '05' ) {
                m = `Sorry, but an error has occurred, please contact technical support. Error code: ${date}`;
            }


            // if ( date === '04' ) {
            //     m = 'Invalid password.';
            // }

            if ( date[0] + date[1] === '1_' ) {
                m = 'The order has been created.';
            }

            //console.log('Mail >>', m);

        }).catch((error) => {
        date = error;
        console.error(error, 'error >>>')
    });



    // \x05\x07�{

    //  \x03


    // axios({
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    //   url: `${process.env.URL_AJAX}?action=authLogin&token=${process.env.AUTH_TOKEN}`,
    //   data: {
    //     action: 'authLogin',
    //     token: process.env.AUTH_TOKEN
    //   },
    //   responseType: 'json'
    // }).then((res) => {
    //
    //   // JSON.parse(res.data)
    //   console.log(res, 'ok res')
    //   //console.log(res)
    // })
    //     .catch((error) => {
    //       console.error(error, 'error >>')
    //     })

    // fetch(`${process.env.URL_AJAX}?action=authLogin&token=${process.env.AUTH_TOKEN}`)
    //     .then(response => response.json())
    //     .then(data => console.log(data));




    // axios({
    //   method: 'GET',
    //   url: process.env.URL_AJAX,
    //   headers: {
    //     'action': 'authLogin',
    //     'token': process.env.AUTH_TOKEN,
    //   }
    // }).then(resp => {
    //   console.log(resp.data);
    // }).catch(err => {
    //   // Handle Error Here
    //   console.error(err, 'err');
    // });



    // await pause();


    //let emailHtml='';

    // body.forEach(([key, value]) => {
    //   console.log(key + ' - ' + value) // key - value
    // });

    // event.body.forEach((obj) => {
    //   Object.entries(obj).forEach(([key, value]) => {
    //     console.log(`${key} ${value}`);
    //   });
    // });

    // Object.entries(body).forEach(entry => {
    //   const [key, value] = entry;
    //   //console.log(key, value);
    //   if ( key !== 'garbage' ) {
    //     if ( key === 'title' ) {
    //       emailHtml = emailHtml + '<br><strong>Title form send:</strong> ' + value + '<br>'
    //     } else {
    //       emailHtml = emailHtml + '<br><strong>' + key + ':</strong> ' + value
    //     }
    //
    //   }
    // });


    //console.log('body >>>>', emailHtml)

    // Object.keys( JSON.stringify(body) ).forEach(key => {
    //   console.log(key, obj[key]);
    // });

    // const mailOptions = {
    //   from: 'Victoria Soprano Group <info@victoriasoprano.com>',
    //   to: `<${body.email}>`,
    //   subject: body.title,
    //   html: emailHtml,
    // };
    //
    // await transporter.sendMail(mailOptions, function (err, info) {
    //   if(err)
    //     console.log(err)
    //   else
    //     console.log(info);
    // })



    return {
        statusCode: 200,
        body: JSON.stringify({ message: m, result: date }),
    };
};
