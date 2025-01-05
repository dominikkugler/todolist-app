# TodoList Fullstack Application

## Description
A fullstack TodoList application built with React for the frontend, Spring Boot for the backend, and MySQL as the database. This application allows users to manage tasks effectively by providing features such as adding, editing, deleting, sorting, searching, and filtering tasks.

![screen for readme](https://github.com/user-attachments/assets/87a5de3a-f910-4a93-b992-baa750bab766)

## Features
- **Add Tasks**: Create new tasks with a name and description.
- **Edit Tasks**: Modify existing tasks.
- **Delete Tasks**: Remove tasks from the list.
- **Sort Tasks**: Unchecked tasks are displayed at the top, while completed tasks are listed at the bottom.
- **Search Tasks**: Quickly find tasks by name using the search field.
- **Filter Tasks**: Easily filter tasks to show all, completed, or incomplete tasks.

## Technologies Used
- **Frontend**: React
- **Backend**: Spring Boot
- **Database**: MySQL (configured via XAMPP)
- **Environment**: XAMPP for managing the MySQL database

## Setup Instructions

### Prerequisites
- Node.js and npm installed
- Java Development Kit (JDK) installed
- Apache Maven installed
- XAMPP installed and running (for MySQL database)

### Database Setup
1. Start XAMPP and ensure MySQL is running.
2. Open phpMyAdmin and create a new database named `todolist`.
3. A table will automatically be created as long as the database name is correct.

### Backend Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/dominikkugler/todolist-app.git
   cd todolist-app/todolist_backend
   ```
2. Configure the `application.properties` file:
   - Update the database credentials:
     ```properties
     spring.datasource.url=jdbc:mysql://localhost:3306/todolist
     spring.datasource.username=root
     spring.datasource.password=yourpassword
     ```
3. For building and running the backend, in IntelliJ Idea just click the Build and Run button.

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd ../todolist_frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

The frontend will be available at `http://localhost:3000`.

### Usage
1. Open the app in your browser at `http://localhost:3000`.
2. **Add Tasks**: Click the "Add Task" button to open the add task page. Fill in the task details and submit.
3. **Edit Tasks**: Click the edit icon next to a task to modify it.
4. **Delete Tasks**: Click the delete icon next to a task to remove it.
5. **Sort Tasks**: The tasks are automatically sorted based on their checked status.
6. **Search Tasks**: Use the search bar at the top to find a task by name.
7. **Filter Tasks**:
   - Click the "All" button to view all tasks.
   - Click the "Done" button to filter and view only completed tasks.
   - Click the "Not done yet" button to filter and view only incomplete tasks.

## Contact
Feel free to contact me for any questions or suggestions at dominikkugler0@icloud.com.

---
Thank you for using the TodoList app! If you have any questions or feedback, please reach out.

