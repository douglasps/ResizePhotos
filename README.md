# Resize Photos
Given a Webservice endpoint(http://54.152.221.29/images.json), that returns a JSON of
ten photos, consume it and generate three different photo formats for each one, that must
be small (320x240), medium (384x288) and large (640x480).
Finally, write a Webservice endpoint, which should use a non-relational
database(MongoDB preferred) and list (in JSON format) all ten photos with their
respective formats, providing their URLs.

## Why javascript:
I chose javascript because it seems to be better to use with MongoDb and Json objects. Although, I am not an expert in NodeJs and MongoDb.

## Prerequisites:
- Node.js installed
- MongoDB installed on //localhost:27017/ or it will be necessary to access the file services/imageRepository.js and change the variable mongoUrl to the current mongo database with the credentials.

## Setup
- Create the "ResizePhotosChallenge" database on Mongo, then create the "images" collection inside this database.
- Open the project in an editor of your choice (this project was created using vs code)
- Install all the prerequisite modules using the command 'npm install'
- (optional)To test the application use the command 'npm test'
- Start the application using the command 'npm start'
- Go to the browser and access the address http://127.0.0.1:9000/

## How to built it
On the first access of the server get the images and using an image processor (it was used sharp) create the resized images in any directory of the server and finally save in the database the URL to access the resized images.
