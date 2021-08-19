// const prettyjson = require('prettyjson');

// const options = {
//     noColor: false
// };

// const requestHook = (req, res) => {
//     try {
//         // create our webhook endpoint to recive webhooks from Safaricom
//         console.log('-----------Received M-Pesa webhook-----------');

//         // format and dump the request payload recieved from safaricom in the terminal
//         console.log(prettyjson.render(req.body, options));
//         console.log('-----------------------');

//         let message = {
//             "ResponseCode": "00000000",
//             "ResponseDesc": "success"
//         };

//         // respond to safaricom servers with a success message
//         res.json(message);
//     } catch (e) {
//         console.log(e);
//     }
// }

// module.exports = {
//     requestHook
// }