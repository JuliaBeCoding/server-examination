const bookList = document.getElementById('book-list')
const bookForm = document.getElementById('book-form')

const fetchBooks = async () => {
  try {
    const res = await fetch('/api/books')
    const books = await res.json()
    bookList.innerHTML = books.map(book => `
      <div>
        <p>${book.title}</p>
        <p>Author: ${book.author}</p>
        <p>${book.read ? 'Read' : 'Unread'}</p>
        <button onclick="deleteBook('${book._id}')">Delete</button>
      </div>
    `
    ).join('')
  } catch (error) {
    console.error('Error fetching books:', error)
  }
}

bookForm.addEventListener('submit', async (e) => {
  e.preventDefault()

  const title = document.getElementById('title').value
  const author = document.getElementById('author').value
  const read = document.getElementById('read').checked

  try {
    await fetch('/api/books', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({title, author, read})
    })
    fetchBooks()
    bookForm.reset()
  } catch (error) {
    console.error('Error adding book:', error)
  }
})

const deleteBook = async (id) => {
  try {
    await fetch(`/api/books/${id}`, {method: 'DELETE'})
    fetchBooks()
  } catch (error) {
    console.error('Error deleting book:', error)
  }
}

fetchBooks()