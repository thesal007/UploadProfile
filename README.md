# File Upload Application

This is a simple React application that allows users to upload files to a backend server. The backend is expected to handle file storage, potentially using AWS S3 or another file storage service.

## Features

- Users can select a file from their device and upload it to the server.
- Displays the upload status to the user, including any errors encountered during the upload process.

## Prerequisites

- **Node.js** and **npm** or **Yarn** should be installed on your machine.
- A backend server that handles the file uploads (API endpoint `/api/s3-upload`).

## Getting Started

### Installation

1. **Clone the repository:**
    git clone https://github.com/your-username/your-repo-name.git

2. **Install dependencies:**
    npm install

### Running the Application

1. **Start the development server:**
    npm run dev

2. **Open your browser and navigate to:**

    http://localhost:3000


### Using the Application

- Select a file using the "Choose File" button.
- Click the "Upload" button to upload the file.
- The status message will display the result of the upload process.

