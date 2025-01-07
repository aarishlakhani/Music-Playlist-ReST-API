# Music Playlist ReST API

This project is focused on creating a Node.js and Express-based music playlist application. The lab demonstrates skills in ReST API design, front-end integration, and deployment, as part of the Software Engineering curriculum at the University of Western Ontario.

## Table of Contents

- [Description](#description)
- [Objectives](#objectives)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [Deployment](#deployment)

## Description

This project is a **Music Playlist ReST API** that enables users to:
- Retrieve information on artists, albums, tracks, and genres
- Search for music metadata through various endpoints (e.g., track title, artist name)
- Create and manage personalized track lists (like playlists)

Both the back-end (Node.js + Express) and a simple front-end (HTML/CSS/JavaScript) are served from a single endpoint to showcase secure ReSTful design and input handling.

## Objectives

- **Build a Node.js/Express back-end** offering ReSTful routes for music data
- **Develop a front-end** using HTML, CSS, and vanilla JavaScript (no external libraries)
- **Leverage asynchronous requests** (e.g., fetch) for interacting with the API
- **Enforce user input sanitization** to mitigate XSS or injection attacks
- **Deploy** the application on a public URL (e.g., AWS EC2)
- **Manage version control** using Git with meaningful commits and a clear repository structure

## Features

### ReST API Endpoints
- Getting all genres, artists, albums, and tracks
- Searching tracks by title/album or artists by name
- Creating, retrieving, updating, and deleting playlists

### Front-end
- **Search** functionality for artists, albums, and tracks
- **Playlist management**: create, update, display, and delete lists
- **Input validation** to prevent malformed requests
- **Sorting** results by artist, track, album, or track length

### Security Features
- Single endpoint for both static front-end and API routes
- Sanitized input to prevent attacks
- Appropriate HTTP status codes (400, 404, 500, etc.)
- UTF-8 support for multilingual input

## Technologies Used

- **Node.js (Express)**: For the back-end ReST API and route handling
- **HTML5 & CSS3**: For structuring and styling the front-end
- **JavaScript (ES6)**: For front-end logic (fetch calls, DOM manipulation) and input validation
- **AWS EC2**: Hosting and deploying the application on a public URL
- **Git**: Source code management and deployment workflow

## Setup and Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/<your-username>/music-playlist-rest-api.git
    cd music-playlist-rest-api
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Start the server**:
    ```bash
    npm start
    ```

## Usage

### Accessing the Front-end
Open `http://localhost:3000/` (or your deployed URL) in a browser to browse/search tracks, artists, or playlists and manage your custom lists.

### Testing the API
Use curl, Postman, or Insomnia to send requests. For example:

```bash
curl http://localhost:3000/api/tracks/123
```

Adjust endpoints and IDs as needed for your queries.

### Managing Playlists
- Use the UI (or API endpoints) to create lists by name
- Update lists with new track IDs
- Delete lists you no longer need

### Server Logs
Check the server console output for requests, errors, and debug info.

## Deployment

1. Set up an AWS EC2 instance (or similar) and ensure Node.js is installed

2. Clone the repository on your server:
    ```bash
    git clone https://github.com/<your-username>/music-playlist-rest-api.git
    cd music-playlist-rest-api
    npm install
    ```

3. Start the server (using `npm start`, or pm2 / screen if running in the background)

4. Configure your AWS security settings to allow inbound traffic on the port (e.g., 3000)

5. Visit the public URL (e.g., `http://<EC2-IP>:3000/`) to confirm it's live
