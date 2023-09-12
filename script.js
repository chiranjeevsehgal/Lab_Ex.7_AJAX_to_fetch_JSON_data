document.addEventListener('DOMContentLoaded', function() {
    var fetchButton = document.getElementById('fetchbtn');
    fetchButton.addEventListener('click', fetchBooks);
});

function fetchBooks() {
fetch('books.json') 
    .then(response => {
        if (!response.ok) {
            throw new Error('Error!');
        }
        return response.json();
    })
    .then(data => {
        // Handle the JSON data here
        displayBooks(data);
    })
    .catch(error => console.error('Error:', error));
}

function displayBooks(data) {
var booklst = document.getElementById('bookList');

// Create an unordered list element to hold the books
var ul = document.createElement('ul');

// Loop through the books data
data.forEach(function(book) {

    // Create list item for each book
    var li = document.createElement('li');

    // Create elements for book properties
    var title = document.createElement('h3');
    title.textContent = 'Title: ' + book.title;

    var author = document.createElement('p');
    author.textContent = 'Author: ' + book.author;

    var genre = document.createElement('p');
    genre.textContent = 'Genre: ' + book.genre;
    
    var language = document.createElement('p');
    language.textContent = 'Language: ' + book.language;

    // Append title, author, and isbn elements to the list item
    li.appendChild(title);
    li.appendChild(author);
    li.appendChild(genre);
    li.appendChild(language);

    // Append the list item to the unordered list
    ul.appendChild(li);
});

// Append the unordered list to the resultDiv
bookList.appendChild(ul);

}document.addEventListener('DOMContentLoaded', function() {
    var fetchButton = document.getElementById('fetchbtn');
    fetchButton.addEventListener('click', fetchBooks);
});

function fetchBooks() {
fetch('books.json') 
    .then(response => {
        if (!response.ok) {
            throw new Error('Error!');
        }
        return response.json();
    })
    .then(data => {
        // Handle the JSON data here
        displayBooks(data);
    })
    .catch(error => console.error('Error:', error));
}

function displayBooks(data) {
var booklst = document.getElementById('bookList');

// Create an unordered list element to hold the books
var ul = document.createElement('ul');

// Loop through the books data
data.forEach(function(book) {

    // Create list item for each book
    var li = document.createElement('li');

    // Create elements for book properties
    var title = document.createElement('h3');
    title.textContent = 'Title: ' + book.title;

    var author = document.createElement('p');
    author.textContent = 'Author: ' + book.author;

    var genre = document.createElement('p');
    genre.textContent = 'Genre: ' + book.genre;
    
    var language = document.createElement('p');
    language.textContent = 'Language: ' + book.language;

    // Append title, author, and isbn elements to the list item
    li.appendChild(title);
    li.appendChild(author);
    li.appendChild(genre);
    li.appendChild(language);

    // Append the list item to the unordered list
    ul.appendChild(li);
});

// Append the unordered list to the resultDiv
bookList.appendChild(ul);

}