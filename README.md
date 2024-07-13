# BookExchange: A Responsive Web Application for Used Book Exchange

## Introduction
BookExchange is a responsive web application designed to facilitate the exchange of used books among authenticated users. The project focuses on creating a multi-platform front-end using Bootstrap and NodeJS, aiming to provide a seamless user experience across various devices.

## Features
- **Responsive Design**: Optimized for different screen sizes (small, medium, large, very large, extremely large).
- **Landing Page**: A welcoming page summarizing the application's functionalities.
- **Book Cards**: Display latest and exchanged books with details such as title, author, publisher, year, user description, and cover photo.
- **Authors Page**: List of authors with details and a link to their books.
- **Books Page**: Similar to Authors Page but focused on books.
- **Users Page**: List of application users with relevant details.
- **Account Page**: Allows users to add new books with the option to capture or upload a photo.
- **Bootstrap Form Design:**
   - Create a form with fields for book title, author, publication year, description, and an illustration field for uploading photos.
   - Use a file input for selecting photos from the device library and a button to capture photos using the device camera.
- **Local Storage Handling:**
   - Implement a function to save book details, including the uploaded photo, locally using `localStorage` upon form submission.
   - Ensure the photo is displayed in a preview area within the form for user confirmation.



## Technologies Used
- **Bootstrap**: For responsive design and components.
- **NodeJS**: For back-end functionality (in future phases).
- **HTML/CSS/JavaScript**: Core web technologies for front-end development.
- **Cordova**: For Android compatibility.

## Installation

1- **Clone the repository:**
- git clone https://github.com/your-username/BookExchange.git
- cd BookExchange

2- **Install dependencies:**
- npm install
3- **Run the application:**
- npm start

## Usage
- Open http://localhost:3000 in your browser to view the application.
- Navigate through the menu to explore different sections: Home, Authors, Books, Users, My Account.
- Use the account page to add new books with photos.

## Responsiveness  
- Small screens: 1 book per row.
- Medium screens: 2 books per row.
- Large screens: 3 books per row.
- Very large screens: 4 books per row.
- Extremely large screens: 6 books per row.

## Future Enhancements
Back-end Integration: Connect the front-end with a NodeJS back-end.
Advanced Search: Implement a search functionality for books and authors.
User Authentication: Enhance user login and registration system.
Improved UI/UX: Continuously refine the user interface and experience.

## client order details:

### Project Tasks

#### Exercise 2
1. Set up a new project, remove default CSS, install Bootstrap.
2. Add a Bootstrap menu using Bootstrap 5 snippets.
3. Ensure the project works in browsers.
4. Verify compatibility with Android.
5. Copy necessary code from a previous Bootstrap project.

#### Exercise 3
1. Add a Bootstrap form for adding a used book with fields including "illustration" and a button for taking or choosing a photo from the smartphone library.
   - Display the chosen photo in a dedicated div.
   - Provide editing capability if the photo is too large.
2. Implement a function triggered by the 'submit' button to save book data in the browser (local storage).
3. Implement a function to send data from the browser to a remote endpoint "/books" using the POST method.
4. Develop a basic backend to receive and display sent data in the form.
