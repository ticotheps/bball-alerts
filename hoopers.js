const twilio = require('twilio')(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_AUTH_TOKEN
);


const body = `This is a TEST BBALL ALERT from Tico's RSVP-bot. If you have received this text message, it indicates that the test was successful. 
Please send "1" in a separate text message to TICO's PHONE NUMBER (NOT to this number!) to confirm a successful test case. Thanks!`;


const tico = process.env.MY_NUMBER;
const logan = process.env.LOGAN_COLLISON;




const twilioMsgService = process.env.TWILIO_MESSAGING_SERVICE_SID;
const numbers = [tico, logan];

Promise.all(
    numbers.map(number => {
      return twilio.messages.create({
        to: number,
        from: twilioMsgService,
        body: body
      });
    })
    )
    .then(messages => {
      console.log('Messages sent!');
      console.log(body);
    })
    .catch(err => console.error(err));