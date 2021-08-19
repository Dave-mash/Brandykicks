// /*
// * This file contains the logic to handle Lipa Na Mpesa transaction
// */

// const express = require('express');
// const unirest = require('unirest');
// const bodyParser = require('body-parser');
// const { pass_key, consumer_key, consumer_secret, port } = require('../../config');
// const app = express();

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// const auth_url = "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials",
//     auth = "Basic " + Buffer.from(consumer_key + ":" + consumer_secret).toString("base64");

// const processLipaNaMpesaRequest = ({
//     phoneNumber = null,
//     shortCode = null,
//     amount = null,
//     vendor = null
// }, resp) => {
//     unirest('GET', auth_url) // Get auth token
//         .headers({ 'Authorization': auth })
//         .send()
//         .end(res => {
//             if (res.error) console.log('Error: ', res.error);
            
//             const response = JSON.parse(res.raw_body);
//             let access_token = `Bearer ${response.access_token}`;
//             const url = "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest";
//             const callBackURL = "https://02813dde7a3f.ngrok.io/hooks/mpesa";
//             const timestamp = new Date().toISOString().slice(-24).replace(/\D/g, '').slice(0, 14);
//             const b64string = shortCode + pass_key + timestamp;
//             const bufferToEncrypt = Buffer.from(b64string);
//             const encryptedKey = bufferToEncrypt.toString('base64');
//             console.log('password: ',base64.encode(shortcode+pass_key+timestamp));

//             unirest('POST', url) // process payment
//                 .headers({
//                     'Content-Type': 'application/json',
//                     'Authorization': access_token
//                 })
//                 .send(JSON.stringify({
//                     "BusinessShortCode": 174379,
//                     "Password": encryptedKey,
//                     "Timestamp": timestamp,
//                     "TransactionType": "CustomerPayBillOnline",
//                     "Amount": amount,
//                     "PartyA": phoneNumber,
//                     "PartyB": vendor,
//                     "PhoneNumber": phoneNumber,
//                     "CallBackURL": callBackURL,
//                     "AccountReference": "Brandykicks",
//                     "TransactionDesc": "Payment of X"

//                     // {
//                     //     "BusinessShortCode": 174379,
//                     //     "Password": "MTc0Mzc5YmZiMjc5ZjlhYTliZGJjZjE1OGU5N2RkNzFhNDY3Y2QyZTBjODkzMDU5YjEwZjc4ZTZiNzJhZGExZWQyYzkxOTIwMjEwNzE3MTYzMzE3",
//                     //     "Timestamp": "20210717163317",
//                     //     "TransactionType": "CustomerPayBillOnline",
//                     //     "Amount": 1,
//                     //     "PartyA": 254729710290,
//                     //     "PartyB": 174379,
//                     //     "PhoneNumber": 254729710290,
//                     //     "CallBackURL": "https://d4ca14a43ca9.ngrok.io/hooks/mpesa",
//                     //     "AccountReference": "CompanyXLTD",
//                     //     "TransactionDesc": "Payment of X"
//                     // }
//                 }))
//                 .end(res => {
//                     if (res?.error) console.log(res.error);
//                     console.log(res.raw_body);
//                 });
//         });


//     /*
//     *


        

//     {
//         "BusinessShortCode": 174379,
//         "Password": "MTc0Mzc5YmZiMjc5ZjlhYTliZGJjZjE1OGU5N2RkNzFhNDY3Y2QyZTBjODkzMDU5YjEwZjc4ZTZiNzJhZGExZWQyYzkxOTIwMjEwNzE3MTYzMzE3",
//         "Timestamp": "20210717163317",
//         "TransactionType": "CustomerPayBillOnline",
//         "Amount": 1,
//         "PartyA": 254729710290,
//         "PartyB": 174379,
//         "PhoneNumber": 254729710290,
//         "CallBackURL": "https://d4ca14a43ca9.ngrok.io/hooks/mpesa",
//         "AccountReference": "CompanyXLTD",
//         "TransactionDesc": "Payment of X" 
//     }

//     */

//     // (error, response, body) => {
//     //         console.log('===> ', body);
//     //         let res = JSON.parse(body);
//     //         
//     //         console.log('===> ', access_token);

//     //         request(
//     //             {
//     //                 method: 'POST',
//     //                 url,
//     //                 headers: {
//     //                     "Authorization": access_token
//     //                 },
//     //                 json: {
//     //                     "BusinessShortCode": shortCode, // (Paybill or Buygoods)
//     //                     "Password": encryptedKey,
//     //                     "Timestamp": timestamp,
//     //                     "TransactionType": "CustomerPayBillOnline",
//     //                     "Amount": amount,
//     //                     "PartyA": phoneNumber, // number sending money
//     //                     "PartyB": vendor, // organisation receiving the funds
//     //                     "PhoneNumber": phoneNumber, // Number to receive the STK Pin Prompt
//     //                     "CallBackURL": "https://d1ee2632aab0.ngrok.io/hooks/mpesa",
//     //                     "AccountReference": "test",
//     //                     "TransactionDesc": "test"
//     //                 }
//     //             },
//     //             (error, response, body) => {
//     //                 // console.log(body)
//     //                 return resp.json({
//     //                     "status": 200,
//     //                     "message": 'Success',
//     //                     "body": body
//     //                 });
//     //             }
//     //         )
//     //     }

//     // } catch (error) {
//     //     console.error('error: ', error);
//     // }


//     // await request(
//     //     {
//     //         url,
//     //         headers: {
//     //             "Authorization": auth
//     //         }
//     //     },
//     //     (error, response, body) => {
//     //         console.log('===> ', body);
//     //         let res = JSON.parse(body);
//     //         let access_token = "Bearer " + res.access_token;
//     //         console.log('===> ', access_token);
//     //         let url = "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest";

//     //         const timestamp = new Date().toISOString().slice(-24).replace(/\D/g, '').slice(0, 14);
//     //         const b64string = shortCode + pass_key + timestamp;
//     //         const bufferToEncrypt = Buffer.from(b64string);
//     //         const encryptedKey = bufferToEncrypt.toString('base64');

//     //         request(
//     //             {
//     //                 method: 'POST',
//     //                 url,
//     //                 headers: {
//     //                     "Authorization": access_token
//     //                 },
//     //                 json: {
//     //                     "BusinessShortCode": shortCode, // (Paybill or Buygoods)
//     //                     "Password": encryptedKey,
//     //                     "Timestamp": timestamp,
//     //                     "TransactionType": "CustomerPayBillOnline",
//     //                     "Amount": amount,
//     //                     "PartyA": phoneNumber, // number sending money
//     //                     "PartyB": vendor, // organisation receiving the funds
//     //                     "PhoneNumber": phoneNumber, // Number to receive the STK Pin Prompt
//     //                     "CallBackURL": "https://d1ee2632aab0.ngrok.io/hooks/mpesa",
//     //                     "AccountReference": "test",
//     //                     "TransactionDesc": "test"
//     //                 }
//     //             },
//     //             (error, response, body) => {
//     //                 // console.log(body)
//     //                 return resp.json({
//     //                     "status": 200,
//     //                     "message": 'Success',
//     //                     "body": body
//     //                 });
//     //             }
//     //         )
//     //     }
//     // )
// }


// module.exports = {
//     processLipaNaMpesaRequest
// }