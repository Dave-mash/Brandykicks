// /*
// * This file contains the logic to handle Lipa Na Mpesa transaction
// */

import axios from 'axios';
let unirest = require('unirest');

import { pass_key, consumer_key, consumer_secret } from '../../../../config';
import requestHook from './webHook';

const auth_url = "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials",
    url = "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest",
    callBackURL = "https://8984-102-166-203-195.ngrok.io/hooks/mpesa";

let auth = "Basic " + Buffer.from(consumer_key + ":" + consumer_secret).toString("base64");

const processLipaNaMpesaRequest = async (req, res) => {
    const {
        phoneNumber = "254729710290",
        shortCode = "174379",
        amount = "1",
        vendor = "174379"
    } = req.body;

    // Get auth token
    try {
        const tokenResponse = await axios.get(auth_url, {
            headers: { 'Authorization': auth }
        });
        let token = tokenResponse.data.access_token;
        const access_token = `Bearer ${token}`;
        const timestamp = new Date().toISOString().slice(-24).replace(/\D/g, '').slice(0, 14);
        const b64string = shortCode + pass_key + timestamp;
        const bufferToEncrypt = Buffer.from(b64string);
        const encryptedKey = bufferToEncrypt.toString('base64');

        const lipaNaMpesaRes = await axios.post(url, {
            "BusinessShortCode": shortCode, // (Paybill or Buygoods)
            "Password": encryptedKey,
            "Timestamp": timestamp,
            "TransactionType": "CustomerPayBillOnline",
            "Amount": amount,
            "PartyA": phoneNumber, // number sending money
            "PartyB": vendor, // organisation receiving the funds
            "PhoneNumber": phoneNumber, // Number to receive the STK Pin Prompt
            "CallBackURL": callBackURL,
            "AccountReference": "test",
            "TransactionDesc": "test"
        }, {
            headers: { 'Authorization': access_token }
        })

        console.log('lipaNaMpesaRes: ', lipaNaMpesaRes.data);


        // unirest('POST', callBackURL)
        //     .headers({ 'Content-Type': 'application/json' })
        //     .send(JSON.stringify({ test: 123 }))
        //     .end(response => {
        //         if (res.error) console.log('Err here: ',res.error);

        //         const hook = requestHook(req, res);
        //         console.log('response: ', response);
        //         console.log('hook: ', hook);
        //     });




        axios.post(callBackURL, { test: 123 })
            .then(response => {
                console.log('response: ', response);
                // const hook = requestHook(req, res);
                // console.log('hook: ', hook);
            })
            .catch(e => {
                console.log('Err here: ', e);
            })

        return res.json({
            "status": 200,
            "message": 'Success',
            "body": lipaNaMpesaRes.data
        });
    } catch (e) {
        const data = e.response.data;
        console.log('----> ', data);
    }
}

export default processLipaNaMpesaRequest;