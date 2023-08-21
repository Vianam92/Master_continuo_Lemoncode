//Read Books

const books = [
  { title: "Harry Potter y la piedra filosofal", isRead: true },
  { title: "Canción de hielo y fuego", isRead: false },
  { title: "Devastación", isRead: true },
  {title: "mujercitas", isRead: true},
];

function isBookRead(books, titleToSearch) {
  return books.some(book => book.title === titleToSearch && book.isRead);
}

console.log(isBookRead(books, "mujercitas")); //true
console.log(isBookRead(books, "Pulgarcita")); //false
