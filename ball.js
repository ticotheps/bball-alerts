const twilio = require('twilio')(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_AUTH_TOKEN
);

const body = "Get READY! We'll be BALLIN' tomorrow, Fellas!";

const twilioNumber = process.env.TWILIO_NUMBER;
const number = process.env.MY_NUMBER;

twilio.messages
    .create({
        to: number,
        from: twilioNumber,
        body: body
    })
    .then(message => {
        console.log(message.sid);
        console.log(body);
    })
    .catch(err => console.error(err));