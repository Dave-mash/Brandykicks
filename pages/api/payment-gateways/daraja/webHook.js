import axios from 'axios';
const prettyjson = require('prettyjson');
const callBackURL = "https://8984-102-166-203-195.ngrok.io/hooks/mpesa";

console.log('.....................................')
console.log('starting')

const requestHook = (req, res) => {
    const options = {
        noColor: false
    };

    try {
        // create our webhook endpoint to recive webhooks from Safaricom
        console.log('-----------Received M-Pesa webhook-----------');

        // axios.post(callBackURL, { test: 123 })
        //     .then(response => {
        //         const hook = requestHook(req, res);
        //         console.log('response: ', response);
        //         console.log('hook: ', hook);
        //     })
        //     .catch(e => {
        //         console.log('Err here: ', e);
        //     })
        // console.log('req.body: ',req.body);

        // // format and dump the request payload recieved from safaricom in the terminal
        // console.log(prettyjson.render(req.body, options));
        // console.log('-----------------------');

        // let message = {
        //     "ResponseCode": "00000000",
        //     "ResponseDesc": "success"
        // };

        // // respond to safaricom servers with a success message
        // res.status(200).json(message);

        // return res.json(req.body);
    } catch (e) {
        console.log('====> ', e);
    }
}
console.log('.....................................')
console.log('ending')

export default requestHook;