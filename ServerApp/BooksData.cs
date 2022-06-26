using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ServerApp.Models;

namespace ServerApp
{
    public class BooksData
    {
        public static List<Book> Books = new List<Book>()
        {
            new Book()
            {
                id = 1,
                title = "In Search of Lost Time",
                description = "Swann's Way, the first part of A la recherche de temps perdu, Marcel Proust's seven-part cycle, was published in 1913. In it, Proust introduces the themes that run through the entire work.",
                author = "Marcel Proust",
                rating = 7
            },
            new Book()
            {
                id = 2,
                title = "One Hundred Years of Solitude",
                description = "One of the 20th century's enduring works, One Hundred Years of Solitude is a widely beloved and acclaimed novel known throughout the world, and the ultimate achievement in a Nobel Prize–winning",
                author = "Gabriel Garcia Marquez",
                rating = 8.3
            },
            new Book()
            {
                id = 3,
                title = "Hamlet",
                description = "The Tragedy of Hamlet, Prince of Denmark, or more simply Hamlet, is a tragedy by William Shakespeare, believed to have been written between 1599 and 1601.",
                author = "William Shakespeare",
                rating = 9
            },
            new Book()
            {
                id = 4,
                title = "The Odyssey",
                description = "The Odyssey is one of two major ancient Greek epic poems attributed to Homer. It is, in part, a sequel to the Iliad, the other work traditionally ascribed to Homer.",
                author = "Homer",
                rating = 6
            },
            new Book()
            {
                id = 5,
                title = "Test Book",
                description = "Test Book Description",
                author = "Test Book Author",
                rating = 6
            }
        };
    }
}