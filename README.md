
# Melvin's Library

---

## Live Site
[Melvin's Library](https://melvinslibrary.netlify.app/)

---

## Table of Contents

- [Technologies Used](#technologies-used)
- [Approach Taken](#approach-taken)
- [Usage Instructions](#usage-instructions)
- [Unsolved Problems/Future Fixes](#unsolved-problemsfuture-fixes)
- [Conclusion](#conclusion)


---

## Technologies Used

- **React**: A JavaScript library for building the front end, creating reusable components, and managing state.
- **Google Books API**: This API was used to fetch book information to display dynamic content such as book titles, authors, and descriptions.
- **Netlify**: Used for hosting and deploying the project.
- **HTML/CSS**: Markup and styling languages used for structuring and styling the web pages.
- **JavaScript**: Object-oriented programming language used for interactivity of website.

---

## Approach Taken

1. **Initial Planning**:
   - The project began with planning out the features and layout for a library website that fetches book data using the Google Books API. I wanted to do this to showcase my love for reading, and share with friends what I'm reading.

2. **React Programming**:
   - React was used to build the front-end. I organized components that helped with different routes of the website.
   - Different components such as `Favorites` and `HaveRead` expressed the routing logic within each page of the website. They also linked to different portions of my Google Books Library, called *shelves*.

3. **Fetching Data**:
   - The Google Books API was integrated into the app to allow users to search for books by title and fetch related details.
   - API calls were managed using the fetchBook helper function inside the `fetchBooks.js` file.

4. **Styling**:
   - The book objects in each page were organized as individual cards to give better separation between the different books and for aesthetics. I have been a huge fan of using the card style of organizing different objects since learning of it from a Udemy course.

4. **Deployment**:
   - The project was deployed online using Netlify, which has access to my GitHub repository.

---

## Usage Instructions

**Explore What I'm reading**:
   - In each section, I have a different category of my books:
      - `Favorites` which is the main collection, shelf in Google Books speak, which shows my favorite books that I have read.
      - `Reading Now` has the book(s) I'm in the middle of reading presently
      - `To Read` has book(s) I would like to read soon that I have already purchased.
      - `Have Read` is the largest collection. This is every book in Google Books, that I have read recently.

---

## Unsolved Problems/Future Fixes

1. **Book Summaries**:
   - The summaries are cut off. I would like to either see how I make extract the entire text, while not cluttering my page, or perhaps give an optional link to click on to continue reading the rest of the summary.

2. **Add More Books**:
   - The power in using an API like Google Books, is reusability in code to fetch many similar pieces of data (JSON objects representing books). I honestly never used Google Books before this project, so I would like to make this library more indictative of my readings, by adding every book from my Audible/Kindle apps as well as paper ones. 

3. **Add Shopping Capabilities**:
   - Would like to perhaps connect to Amazon API as well to get links for every book so readers can quickly purchase any book they may be interested in.

---

## Conclusion

This project allowed me to expand my knowledge of React, APIs, and overall web development. While there are some aspects to improve upon, I’m excited about the potential to grow this application into something of higher complexity and interactivity so I can really share my love of reading with others. Feel free to connect with me on [LinkedIn](https://www.linkedin.com/in/melvingonzalezjr) if you have any comments or suggestions on improving my personal library site.

