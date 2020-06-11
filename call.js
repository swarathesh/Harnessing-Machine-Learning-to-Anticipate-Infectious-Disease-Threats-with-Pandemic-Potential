// const accountSid = 'AC0f92e68a0ece8c9bf64cd75b8f2dfff5';
// const authToken = 'be7eed6ae65f39fbbe66d6565d8caf6a';
// const client = require('twilio')(accountSid, authToken);
//
// client.calls
//       .create({
//          url: 'http://demo.twilio.com/docs/voice.xml',
//          to: '+18073575252',
//          from: '+13092710698'
//        })
//       .then(call => console.log(call.sid))
//       .done();
// const http = require('http');
// const VoiceResponse = require('twilio').twiml.VoiceResponse;
// const express = require('express');
// const twilio = require('twilio');
// const request = require('request');
//
// const accountSid = 'AC0f92e68a0ece8c9bf64cd75b8f2dfff5' ;//your twilio account SID
// const authToken = 'be7eed6ae65f39fbbe66d6565d8caf6a'; //your twilio auth token
// const client = require('twilio')(accountSid, authToken);
//
// http.createServer((req, res) => {
//     // let twiml = new twilio.TwimlResponse();
//   // twiml.say('Hello. Please say us your symptoms');//to speak a robot recorded voice message
//
//   // // Use <Record> to record and transcribe the caller's message
//   // twiml.record({
//   //   transcribe: true, //I am leaving the transcription in here so I can compare twilio transcriptions to google ones. In your app, this can be omitted or set to false
//   //   maxLength: 30, //seconds to record
//   // });
//   // // End the call with <Hangup>
//   // twiml.hangup();
//
//     const response = new VoiceResponse();
//     response.gather();
//
//     console.log(response.toString());
//
//         res.writeHead(200, { 'Content-Type': 'text/xml' });
//         res.end(response.toString());
//     })
//     .listen(1337, '127.0.0.1');
//
// console.log('TwiML server running at http://127.0.0.1:1337/');

const http = require('http');
const VoiceResponse = require('twilio').twiml.VoiceResponse;

http.createServer((req, res) => {
        // Create TwiML response
        const twiml = new VoiceResponse();

        twiml.say('Hi there welcome to pan help , please tell us your symptoms. please note this call is being recorded. ' +
            'press any key to stop the recording, thank you have a great day');
        twiml.record({
            timeout:5,
            maxLength:49,
            transcribe:true,
            trim:"trim-silence"
        });
        twiml.say('did not receive your message, try again');

        res.writeHead(200, { 'Content-Type': 'text/xml' });
        res.end(twiml.toString());
    })
    .listen(1337, '127.0.0.1');

console.log('TwiML server running at http://127.0.0.1:1337/');

