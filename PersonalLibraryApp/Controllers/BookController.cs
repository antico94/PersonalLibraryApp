using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TrainingEntity.Data;
using TrainingEntity.Models;

namespace TrainingEntity.Controllers;

[Route("api/[controller]")]
[ApiController]
public class BookController : ControllerBase
{
    private readonly TrainingEntityContext _context;
    private readonly IMapper _mapper;

    public BookController(TrainingEntityContext context, IMapper mapper)
    {
        _context = context; 
        _mapper = mapper;
    }

    // GET: api/Book
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Book>>> GetBook()
    {
        if (_context.Book == null) return NotFound();

        Console.WriteLine("called");
        return await _context.Book.ToListAsync();
    }

    // GET: api/Book/5
    [HttpGet("{id}")]
    public async Task<ActionResult<Book>> GetBook(Guid id)
    {
        if (_context.Book == null) return NotFound();

        var book = await _context.Book.FindAsync(id);

        if (book == null) return NotFound();

        return book;
    }

    // PUT: api/Book/5
    // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
    [HttpPut("{id}")]
    public async Task<IActionResult> PutBook(Guid id, Book book)
    {
        if (id != book.ISBN) return BadRequest();

        _context.Entry(book).State = EntityState.Modified;

        try
        {
            await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!BookExists(id))
                return NotFound();
            throw;
        }

        return NoContent();
    }

    // POST: api/Book
    // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
    [HttpPost]
    public async Task<ActionResult<Book>> PostBook(Book book)
    {
        if (_context.Book == null) return Problem("Entity set 'TrainingEntityContext.Book'  is null.");

        _context.Book.Add(book);
        await _context.SaveChangesAsync();

        return CreatedAtAction("GetBook", new { id = book.ISBN }, book);
    }

    // DELETE: api/Book/5
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteBook(Guid id)
    {
        if (_context.Book == null) return NotFound();

        var book = await _context.Book.FindAsync(id);
        if (book == null) return NotFound();

        _context.Book.Remove(book);
        await _context.SaveChangesAsync();

        return NoContent();
    }
    
    //
    // [HttpGet]
    // public async Task<IActionResult> Get([FromQuery]string search)
    // {
    //     var books = await _context.SearchAsync(search);
    //     if (books == null)
    //         return NotFound();
    //     return Ok(books);
    // }
    //
    

    private bool BookExists(Guid id)
    {
        return (_context.Book?.Any(e => e.ISBN == id)).GetValueOrDefault();
    }
}