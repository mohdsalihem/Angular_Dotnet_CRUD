using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ServerApp.Models;

namespace ServerApp.Interfaces
{
    public interface IBooksService
    {
        List<Book> GetAllBooks();
        Book GetBookById(int id);
        void UpdateBook(Book book);
        void DeleteBook(int id);
        void AddBook(Book book);
    }
}