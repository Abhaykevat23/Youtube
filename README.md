# YouTube Clone

A feature-rich YouTube clone built to mimic the core functionalities of the popular video-sharing platform. This project is designed to provide users with the ability to search for videos, watch content, and experience a simplified version of YouTube's UI and functionality.

## Features

- **Search Functionality**: Allows users to search for videos.
- **Video Playback**: Watch videos with an embedded player.
- **Responsive Design**: Optimized for devices of all sizes.
- **Dynamic Content**: Video data is dynamically fetched and displayed.

## Technologies Used

- **Frontend**: React.js, HTML, CSS
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **API**: YouTube Data API v3

## Installation

Follow these steps to run the project locally:

### Prerequisites
- Node.js installed
- MongoDB installed and running

### Steps

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/Abhaykevat23/Youtube.git
    cd Youtube
    ```

2. **Install Dependencies**:
    ```bash
    npm install
    cd client
    npm install
    cd ..
    ```

3. **Set Up Environment Variables**:
    Create a `.env` file in the root directory with the following keys:
    ```env
    PORT=5000
    MONGO_URI=<your_mongodb_connection_string>
    YOUTUBE_API_KEY=<your_youtube_data_api_key>
    ```

4. **Run the Server**:
    ```bash
    npm start
    ```

5. **Run the Client**:
    Navigate to the `client` folder and start the frontend:
    ```bash
    cd client
    npm start
    ```

6. **Access the Application**:
    Open your browser and navigate to `http://localhost:3000`.

## Folder Structure

```
Youtube/
├── client/                # Frontend code (React.js)
├── server/                # Backend code (Node.js, Express)
├── models/                # Database models
├── routes/                # API routes
├── public/                # Static assets
├── .env                   # Environment variables
├── package.json           # Node.js dependencies
└── README.md              # Project documentation
```

## Future Improvements

- Add user authentication for personalized features.
- Implement video upload functionality.
- Enable comments and likes on videos.
- Create playlists and subscriptions.

## Contributions

Contributions are welcome! Feel free to fork the repository and submit a pull request with your enhancements.

## License

This project is licensed under the [MIT License](LICENSE).

---

### Author

**Abhay Kevat**  
[GitHub Profile](https://github.com/Abhaykevat23)
