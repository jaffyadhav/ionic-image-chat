# Ionic Image Chat

##Introduction

This is a real time image sharing chat application built using Ionic and socket.io. Images can be shared from both the camera and local file system.

##Installation

**Note**: This is on an assumption that you already have ionic and cordova installed locally.

1) Clone the repo

`git clone https://github.com/jaffyadhav/ionic-image-chat.git`

2) Enter the app directory and enter

`ionic state restore`

`ionic platform add android` or `ionic platfrom add ios`

##Running the application

1) Run the server in the server directory

`node server`

The server is now up and running.

2) Go to the app folder and run

`ionic serve --lab`

3) To run it on a emulator 

`ionic emulate android` or `ionic emulate ios`
