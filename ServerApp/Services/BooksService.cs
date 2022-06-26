using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ServerApp.Interfaces;
using ServerApp.Models;

namespace ServerApp.Services
{
    public class BooksService : IBooksService
    {
        public List<Book> GetAllBooks()
        {
            return BooksData.Books;
        }

        public Book GetBookById(int id)
        {
            var book = BooksData.Books.FirstOrDefault(x => x.id == id);
            if (book is null)
            {
                throw new Exception("Book not found for this ID.");
            }
            return book;
        }

        public void UpdateBook(Book book)
        {
            var oldBook = BooksData.Books.FirstOrDefault(x => x.id == book.id);
            if (oldBook is null)
            {
                throw new Exception("Book not found for this ID. Can't update data.");
            }

            oldBook.title = book.title;
            oldBook.description = book.description;
            oldBook.author = book.author;
            oldBook.rating = book.rating;
        }

        public void DeleteBook(int id)
        {
            BooksData.Books.RemoveAll(x => x.id == id);
        }

        public void AddBook(Book book)
        {
            book.id = BooksData.Books.Max(x => x.id) + 1;
            BooksData.Books.Add(book);
        }
    }
}