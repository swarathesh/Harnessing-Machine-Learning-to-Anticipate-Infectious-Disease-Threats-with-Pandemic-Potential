const accountSid = 'AC0f92e68a0ece8c9bf64cd75b8f2dfff5';
const authToken = 'be7eed6ae65f39fbbe66d6565d8caf6a';
const client = require('twilio')(accountSid, authToken);
const fs = require('fs');


client.transcriptions.each(transcriptions =>

    fs.writeFile("CallConversationText.txt",transcriptions.transcriptionText, function(err) {
    if(err) {
        return console.log(err);
    }

    console.log(transcriptions.transcriptionText);
}));


