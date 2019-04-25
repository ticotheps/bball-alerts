const twilio = require('twilio')(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_AUTH_TOKEN
);

const body = "Get READY! We'll be hooping tomorrow, Fellas!";

const twilioNumber = process.env.TWILIO_NUMBER;
const myNumber = process.env.MY_NUMBER;

twilio.messages
    .create({
        to: myNumber,
        from: twilioNumber,
        body: body
    })
    .then(message => {
        console.log(message.sid);
    })
    .catch(err => console.error(err));