const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { processLipaNaMpesaRequest } = require('./payment-gateways/daraja/lipaNaMpesa');
const { requestHook } = require('./payment-gateways/daraja/webHook');
const { port } = require('./config');
const PORT = port || 5500;


// create an express app and configure it with bodyParser middleware
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());


app.post('/lipaNaMpesa', (req, res) => {
    try {
        let lipaNaMpesaReq = processLipaNaMpesaRequest(req.body, res);

        return lipaNaMpesaReq;
        // switch (req.body.exampleRadios) {
        //     case 'lipaNaMpesa':
        //         let lipaNaMpesaReq = processLipaNaMpesaRequest({
        //             phoneNumber: '0729710290',
        //             shortCode: '5445',
        //             amount: '1',
        //             vendor: '0714026472'
        //         }, res);
        //         return lipaNaMpesaReq;
        //     case 'paypal':
        //         return;
        //     default:
        //         return;
        // }
    } catch (e) {
        console.log(e);
    }
});

app.post('/hooks/mpesa', (req, res) => {
    try {
        requestHook(req, res);
    } catch (e) {
        console.log(e);
    }
});

app.listen(PORT, console.log(`server listening on port ${PORT}`));
