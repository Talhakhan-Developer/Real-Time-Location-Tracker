# Real-Time Location Tracker using Node.js, Socket.io, and EJS

## Project Overview

This project is a real-time location tracking application built with Node.js, Socket.io, and EJS. It allows users to share their real-time location on a map when they access the application through a web browser. The application listens for connections on port 5000 and dynamically updates the map as users connect, move, and disconnect.

## Features

- **Real-Time Location Sharing**: When a user connects to the application, their precise location is shown on a map with a marker. The marker updates in real time as the user moves.
- **Unique User Identification**: Each user is assigned a unique ID, which is displayed in the server console when they connect or disconnect.
- **Dynamic Map Updates**: As users connect, move, or disconnect, the map updates dynamically to reflect these changes in real time.
- **Console Logging**: The server console logs important events such as user connections, disconnections, and the assignment of user IDs.

## Technology Stack

- **Node.js**: Used as the server-side runtime environment.
- **Socket.io**: Enables real-time, bi-directional communication between the web clients and the server.
- **EJS**: Embedded JavaScript templating used to render dynamic content on the frontend.
- **HTML5 Geolocation API**: Requests location permissions from the user to obtain their real-time location.
- **Leaflet.js**: A JavaScript library used to display the map and markers.

## How It Works

1. **Starting the Application**:

   - Run the application by executing `node app.js` in your terminal.
   - The server starts listening on port `5000`.

2. **Connecting to the Application**:

   - Open your web browser and navigate to `http://localhost:5000`.
   - The browser will prompt you to allow location access.

3. **Displaying the Map**:

   - Once location access is granted, a map will appear on the screen with a marker at your current location.
   - In the server console, a message will be displayed: `"User connected, User_id: <unique_id>"`.

4. **Real-Time Updates**:

   - If a new user connects, a new marker will appear on the map for the new user's location, and the server console will log: `"New user connected, User_id: <new_unique_id>"`.
   - As the user moves, their marker on the map will update in real time to reflect their new location.

5. **Disconnecting**:
   - When a user disconnects, their marker is removed from the map, and the server console logs: `"User Disconnected, User_id: <unique_id>"`.

## Getting Started

### Prerequisites

- Node.js and npm (Node Package Manager) installed on your system.

### Installation

#### 01 Clone the repository to your local machine.

```bash
git clone https://github.com/Talhakhan-Developer/Real-Time-Location-Tracker.git
 ```

#### 02 Navigate to the project directory:

```
cd realtime-tracker
```

#### 03. Install dependencies:

```npm
npm install
```

#### 04. Start the development server:

```npm
node app.js
```

#### 05. Open your web browser and navigate to:

```
http://localhost:5000
```

## Acknowledgements

- **Socket.io** for enabling real-time communications.
- **Leaflet.js** for providing the map interface.
- **EJS** for the templating engine.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests to contribute to the project.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

- Linkedin-[Talha khan](https://linkedin.com/in/imtalhakhan)
- Github - [Talha Khan](https://github.com/Talhakhan-Developer)
- Facebook-[Talha khan](https://www.facebook.com/iamTalhaKhn/)
- Instagram-[Talha khan](https://www.instagram.com/i_am_talhakhan/)
- Frontend Mentor - [@Talhakhan-Developer](https://www.frontendmentor.io/profile/Talhakhan-Developer)
- Twitter - [@i_am_Talhakhan](https://twitter.com/i_am_Talhakhan)
