# Apala music discovery

Apala is a website that amplify your Spotify and allow you to discover music from around the worl in one click.

## Project status

This project is still developement, user can login with their Spotify premium account. Users still need to have their spotify open to be able to access the music. They can now play/pause, click on previous/next and add to their favorite tracks. Some adding feature and UI are still in progress.

## Project screenshot

![apalaa-landing](https://user-images.githubusercontent.com/29751174/89523974-ac7e7600-d7db-11ea-9fd3-5c0edddb6cd2.png)
![apalaa-home](https://user-images.githubusercontent.com/29751174/89523966-aa1c1c00-d7db-11ea-832e-fa3c907a42d8.png)

## Getting started

### 1) Sign in your App on Spotify

- a) Sign in https://developer.spotify.com/dashboard/
- b) Use http://localhost:3000/api/callback as the Redirect URI
- c) Make sure to copy your Client ID, Redirect Uri and Client Secret

### 2) In server.js

- a) Replace the client_id, redirect_uri and client_secret with YOURS that your got on Spotify
- b) Run the server `node server.js`

## Installation and Setup Instructions

Clone down this repository. You will need node and npm installed globally on your machine.

Installation:

`npm install`

To start the server:

`npm start`

Make sure you have your spotify web player open so you an play the music!
