# React App with S3 Upload and Lambda Function 🚀

This is a simple React app that allows users to upload files to Amazon S3. The file upload is handled by a Lambda function, which is triggered when the user clicks the 📂 "Upload" button. The Lambda function then saves the file to an S3 bucket.

The app is hosted on AWS Amplify, which makes it easy to deploy and manage the app.

### Requirements
- Node.js v14 or later 🔌
- npm v6 or later 📦
- AWS Amplify CLI 🛠
  
Installation
Clone the repository:

`git clone  https://github.com/Shivam-Dhaka12/file-upload-system.git`

Code snippet

2. Install the dependencies:
   
`npm install` 🚀


4. Initialize AWS Amplify:

`amplify init` 🛠


4. Add the S3 storage resource:

`amplify add storage` 🗄️


5. Deploy the app:

`amplify push` 🚀


## Usage

1. Open the app in a web browser.
2. Click the 📂 "Upload" button.
3. Select a file to upload.
4. Click the 📂 "Upload" button again.

The file will be uploaded to the S3 bucket. You can view the file in the S3 console.

## License

This project is licensed under the MIT License. 📝


