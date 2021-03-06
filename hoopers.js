const twilio = require('twilio')(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_AUTH_TOKEN
);


const body = `This is a TEST BBALL ALERT from Tico's RSVP-bot. If you have received this text message, it indicates that your phone number passes the test!  
Please send "success" in a separate text message to TICO's PHONE NUMBER (NOT to this number!) to confirm a successful test case. Thank you for your help!`;


const unknown_number = process.env.UNKNOWN_NUMBER,
const bailey_krzeszewski = process.env.BAILEY_KRZESZEWSKI;
const tico = process.env.MY_NUMBER;
const logan_collison = process.env.LOGAN_COLLISON;
const brian_keim = process.env.BRIAN_KEIM;
const matt_esch = process.env.MATT_ESCH;
const kendal_truemner = process.env.KENDAL_TRUEMNER;
const chase_voelker = process.env.CHASE_VOELKER;
const dandre_cook = process.env.DANDRE_COOK;
const mike_wehner = process.env.MIKE_WEHNER;
const jacob_heck = process.env.JACOB_HECK;
const heath_krohn = process.env.HEATH_KROHN;
const jared_schuette = process.env.JARED_SCHUETTE;
const deandre_morris = process.env.DEANDRE_MORRIS;
const jeff_smith = process.env.JEFF_SMITH;
const chris_suggit = process.env.CHRIS_SUGGIT;
const craig_sears = process.env.CRAIG_SEARS;
const jay_dubs = process.env.JAY_DUBS;
const hunter_keim = process.env.HUNTER_KEIM;
const mike_krzeszewski = process.env.MIKE_KRZESZEWSKI;
const mike_sage = process.env.MIKE_SAGE;
const mike_richmond = process.env.MIKE_RICHMOND;
const caleb_coop = process.env.CALEB_COOP;
const scott_miklovic = process.env.SCOTT_MIKLOVIC;
const shawn_gayari = process.env.SHAWN_GAYARI;
const mason_williams = process.env.MASON_WILLIAMS;
const scott_smith = process.env.SCOTT_SMITH;
const reggie_ignash = process.env.REGGIE_IGNASH;
const trent_gascho = process.env.TRENT_GASCHO;
const paul_zwemmer = process.env.PAUL_ZWEMMER;
const josh_fritch = process.env.JOSH_FRITCH;
const mason_pasek = process.env.MASON_PASEK;


const twilioMsgService = process.env.TWILIO_MESSAGING_SERVICE_SID;

const numbers = [
    unknown_number,
    bailey_krzeszewski,
    tico, 
    logan_collison,
    brian_keim,
    kendal_truemner,
    chase_voelker,
    dandre_cook,
    mike_wehner,
    jacob_heck,
    heath_krohn,
    jared_schuette,
    deandre_morris,
    jeff_smith,
    chris_suggit,
    craig_sears,
    jay_dubs,
    hunter_keim,
    mike_krzeszewski,
    mike_sage,
    mike_richmond,
    caleb_coop,
    scott_miklovic,
    shawn_gayari,
    mason_williams,
    scott_smith,
    reggie_ignash,
    trent_gascho,
    paul_zwemmer,
    josh_fritch,
    mason_pasek
];

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