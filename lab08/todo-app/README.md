# To-Do List Application

A simple and elegant To-Do List application built with React. This application allows users to add, edit, complete, and delete tasks. Completed tasks are moved to the bottom of the list and can be marked as incomplete if edited.

## Features

- **Add Task**: Users can add new tasks to the list.
- **Edit Task**: Users can edit existing tasks. Edited tasks are moved back to the active list if they were previously completed.
- **Complete Task**: Users can mark tasks as complete by clicking anywhere on the task box (except the buttons).
- **Delete Task**: Users can delete tasks from the list.
- **Keyboard Support**: Users can save edits by pressing the Enter key on the keyboard.

## Installation

1. **Install Node.js and npm**
   - Node.js is the JavaScript runtime, and npm is the package manager for Node.js. You'll need both to create and manage your React project.
   - **Download Node.js**: Go to the [Node.js download page](https://nodejs.org/) and download the LTS version for your operating system.
   - **Install Node.js**: Run the installer and follow the prompts.
   - Once installed, you can check the versions by running the following commands in your terminal or command prompt:
     ```sh
     node -v
     npm -v
     ```

2. Clone the repository:
    ```sh
    git clone https://github.com/ShahariarRabby/CS_621Q_assignments.git
    ```

3. Navigate to the project directory:
    ```sh
    cd lab08/todo-app
    ```

4. Install the dependencies:
    ```sh
    npm install
    ```

## Running the Application

1. Start the development server:
    ```sh
    npm start
    ```

2. Open your browser and navigate to `http://localhost:3000` to see the application in action.

## Project Structure

```plaintext
todo-app/
│
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── Task.js
│   │   ├── TaskList.js
│   │   ├── TaskForm.js
│   │   └── styles.css
│   ├── App.js
│   ├── index.js
│   └── ...
├── package.json
└── README.md
```

## Components

### Task.js

This component represents a single task. It handles the display of the task text, and the edit and delete buttons. It also handles toggling the completion status of the task.

### TaskList.js

This component manages and displays the list of tasks. It filters tasks into completed and incomplete categories and renders them appropriately.

### TaskForm.js

This component handles the form for adding new tasks. It includes an input field and a submit button.

### App.js

This is the main component that manages the state of the application, including the list of tasks. It passes down the necessary props and functions to the child components.

## Styles

The application uses a single CSS file (`styles.css`) for styling. It provides a clean and modern look to the application.
