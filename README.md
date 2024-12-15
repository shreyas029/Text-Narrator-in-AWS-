# Text Narrator using Amazon Polly

## Description:
Developed a text narrator using Amazon Polly which can be uplaoaded in an Amazon S3 bucket and converted to speech.

## Architecture

![aws polly](https://github.com/user-attachments/assets/4aca3737-47b4-423b-942e-6e116113aac5)

## Services Used:
* Amazon Polly: Used for converting text to sppech with options to change the voice and langauges.
* AWS IAM: This feature is used to ensure secure acess of users by managing their permissions.

## Brief introduction to Amazon Polly:
Amazon Polly enables developers to generate human like speech from text. It turns written text into spoken words and can say it out loud in natural voice. The speech created by Amazon Polly sounds like a real  person and there are are plenty of options to customize such as speech sounds, different accesnts and langauges. These can use soecial codes called SSML to control exactly how the speech sounds and emphasize certain words.


## Creating Text to Speech using Amazon Polly
1. Log into the Aamzon Console and search for 'Amazon Polly'.
2. There are different engines according to the requirements of the user.
* Neural Engine: Used for expressive speech or natural sounding interactions.
* Standard Engine: It provides good quality speech for applications.
* Long Form Engine: It is optimized for longer texts like blogs or books to provide quality throughout the content.
3. Choose the desired langauge and voice model along with the content that is to be translated in audio form in the text box.
4. The output voice can be downloaded or saved it in a S3 bucket.

## Creating an IAM Role
1. The audio output will be saved in a S3 bucket using a Lambda function.
2. To execute this, we need an IAM role with suitable policies attached to it.
3. Search for 'IAM Role' in the AWS Management Console and Navigate to                    Access Management->Roles->Create Role.
4. Choose Lambda as the trusted entity type and click Next.
5. From the list of permission policies, choose these 3 policies 'AmazonPollyFullAccess, AmazonS3FullAccess, AWSLambdaBasicExecutionRole' and click Next.
6. Provide a suitable name and description for the IAM role and click Create Role.

## Creating S3 Bucket
1. Serach for 'S3' under AWS Management Console and click Create Bucket.
2. Provide a suitable name for the bucket and let the remaining settings be default and click on Create Bucket.
3. The audio files from Amazon Polly will be stored in this bucket with help of AWS Lambda.

## Creating Lambda Function
1. Search for "AWS Lambda" under the AWS Management Console, and click on Create Function.
2. Provide a name for the function and choose 'Node.js' 16.x as the runtime.
3. Choose 'Use existin role' amd select the role which was created in the previous step.
4. The program for the Lambda fumction is provided under 'index.js' file and includes the explaination as well.

## Configuring the Lambda Program
1. Click on the 'Test' tab and onfigure an event for the Lambda function.
2. Provide the name for the text configuration and in the event JSON provide the text that hast to be converted to audio in the form and let the rest of configurations be default.

```json
{
  "text": "The text to be converted to Audio"
}
```
3. Click on Test button again to invoke the event.
4. And check for the output.
5. The audio file can  be accessed by checking the previously created S3 bucket.

Key Highlighhts of this Project
* Amazon Polly Capabilities:
- Converts text to speech with options to change langauge, voice and accent.
- SSML (Speech Synthesis Markup Langauge) enhances control over speech and pronounciation adjustments along with tone aspects.
* AWS Services
- IAM (Identity and Access Management): Configured roles and policies to ensure secure and limited access to resources.
- Amazon S3: Used for storage service for generated audio files.
- AWS Lambda: Automated text to speech functionality and linked Amazon Polly's output to Amazon S3 storage.
* Multi Service Coordination: Successfully combined IAM, S3 and Lambda to create durable and functional solution 
