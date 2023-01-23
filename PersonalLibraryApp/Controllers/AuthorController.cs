using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TrainingEntity.Data;
using TrainingEntity.Models;

namespace TrainingEntity.Controllers;

[Route("api/[controller]")]
[ApiController]
public class AuthorController : ControllerBase
{
    private readonly TrainingEntityContext _context;
    private readonly IMapper _mapper;

    public AuthorController(TrainingEntityContext context, IMapper mapper)
    {
        _context = context;
        _mapper = mapper;
    }

    // GET: api/Author
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Author>>> GetAuthor()
    {
        if (_context.Author == null) return NotFound();
        return await _context.Author.ToListAsync();
    }

    // GET: api/Author/5
    [HttpGet("{id}")]
    public async Task<ActionResult<Author>> GetAuthor(Guid id)
    {
        if (_context.Author == null) return NotFound();
        var author = await _context.Author.FindAsync(id);

        if (author == null) return NotFound();

        return author;
    }

    // PUT: api/Author/5
    // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
    [HttpPut("{id}")]
    public async Task<IActionResult> PutAuthor(Guid id, Author author)
    {
        if (id != author.AuthorId) return BadRequest();

        _context.Entry(author).State = EntityState.Modified;

        try
        {
            await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!AuthorExists(id))
                return NotFound();
            throw;
        }

        return NoContent();
    }

    // POST: api/Author
    // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
    [HttpPost]
    public async Task<ActionResult<Author>> PostAuthor(Author author)
    {
        if (_context.Author == null) return Problem("Entity set 'TrainingEntityContext.Author'  is null.");
        _context.Author.Add(author);
        await _context.SaveChangesAsync();

        return CreatedAtAction("GetAuthor", new { id = author.AuthorId }, author);
    }

    // DELETE: api/Author/5
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteAuthor(Guid id)
    {
        if (_context.Author == null) return NotFound();
        var author = await _context.Author.FindAsync(id);
        if (author == null) return NotFound();

        _context.Author.Remove(author);
        await _context.SaveChangesAsync();

        return NoContent();
    }

    private bool AuthorExists(Guid id)
    {
        return (_context.Author?.Any(e => e.AuthorId == id)).GetValueOrDefault();
    }
}