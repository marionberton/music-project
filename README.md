
# Apala music discovery

Apala is a website that amplify your Spotify and allow you to discover music from around the worl in one click.

## Project status

This project is still developement, user can login with their Spotify premium account. Users still need to have their spotify open to be able to access the music. They can now play and pause from the website, however the add to favorite tracks is still in progress.

## Project screenshot

![apala-screenshot](https://user-images.githubusercontent.com/29751174/87558844-7b65c680-c6b1-11ea-8e0c-ae9bec57eda4.png)

## Getting started

### 1) Sign in your App on Spotify

* a) Sign in https://developer.spotify.com/dashboard/
* b) Use http//localhost:8888/callback as the Redirect URI
* c) Make sure to copy your Client ID, Redirect Uri and Client Secret

### 2) In Server

* a) Go to file authorization_code
* b) Replace the client_id, redirect_uri and client_secret with YOURS that your got on Spotify
* c) Run the server ``` cd authorization_code ``` ``` node app.js ```

## Installation and Setup Instructions

Clone down this repository. You will need node and npm installed globally on your machine.

Installation: 

``` npm install ```

To start the server:

``` npm start ```

Make sure you have your spotify web player open so you an play the music!


