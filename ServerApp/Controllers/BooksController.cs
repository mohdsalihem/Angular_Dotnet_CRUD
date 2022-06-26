using System.Net.Http;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ServerApp.Interfaces;
using ServerApp.Models;

namespace ServerApp.Controllers
{
    [Route("[controller]/[action]")]
    public class BooksController : Controller
    {
        private readonly IBooksService _booksService;

        public BooksController(IBooksService booksService)
        {
            _booksService = booksService;
        }

        [HttpGet]
        public IActionResult GetAllBooks()
        {
            var books = _booksService.GetAllBooks();
            return Ok(books);
        }

        [HttpGet]
        public IActionResult GetBook(int id)
        {
            try
            {
                var book = _booksService.GetBookById(id);
                return Ok(book);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }
        }

        [HttpPut]
        public IActionResult UpdateBook([FromBody] Book book)
        {
            try
            {
                _booksService.UpdateBook(book);
                return Ok();
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }
        }

        [HttpDelete]
        public IActionResult DeleteBook(int id)
        {
            _booksService.DeleteBook(id);
            return Ok();
        }

        [HttpPost]
        public IActionResult AddBook([FromBody] Book book)
        {
            _booksService.AddBook(book);
            return Ok(book);
        }
    }
}