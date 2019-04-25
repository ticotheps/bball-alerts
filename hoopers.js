const twilio = require('twilio')(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_AUTH_TOKEN
);

const body = 'Looks like we have enough guys for tomorrow! See you guys tomorrow, Hoopers!';

const twilioMsgService = process.env.TWILIO_MESSAGING_SERVICE_SID;
const numbers = [process.env.MY_NUMBER, process.env.KAYLE_NUMBER];

Promise.all(
    numbers.map(number => {
      return twilio.messages.create({
        to: numbers,
        from: twilioMsgService,
        body: body
      });
    })
  )
    .then(messages => {
      console.log('Messages sent!');
    })
    .catch(err => console.error(err));