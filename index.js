const AWS = require('aws-sdk');

const polly = new AWS.Polly();
const s3 = new AWS.S3();

exports.handler = async (event) => {
    try {
        // Extract text input from the event
        const text = event.text;

//When the function gets message with text, that will make it into speech and decide how speech will sound
        // Specify parameters for Polly
        const params = {
            Text: text,
            OutputFormat: 'mp3',
            VoiceId: 'Joanna' // You can change this to the desired voice
        };
//The text is sent to Polly and asked to turn it into speech.
        // Synthesize speech using Polly
        const data = await polly.synthesizeSpeech(params).promise();

        // Generate a unique key for the audio file
        const key = `audio-${Date.now()}.mp3`;
//Save the message in S3 storage
        // Specify parameters for S3
        const s3Params = {
            Bucket: 'your-bucket-name', // Replace with your S3 bucket name
            Key: key,
            Body: data.AudioStream,
            ContentType: 'audio/mpeg'
        };

        // Upload audio file to S3
        await s3.upload(s3Params).promise();
//Message saying the speech has been saved successfully with its special name in storage or there is an error message
        const outputMessage = `The audio file has been successfully stored in the S3 bucket by the name ${key}`;

        return {
            statusCode: 200,
            body: JSON.stringify({ message: outputMessage })
        };
    } catch (error) {
        console.error('Error:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Internal server error' })
        };
    }
};
