using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TrainingEntity.Data;
using TrainingEntity.Models;

namespace TrainingEntity.Controllers;

[Route("api/[controller]")]
[ApiController]
public class GenreController : ControllerBase
{
    private readonly TrainingEntityContext _context;
    private readonly IMapper _mapper;

    public GenreController(TrainingEntityContext context, IMapper mapper)
    {
        _context = context;
        _mapper = mapper;
    }

    // GET: api/Genre
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Genre>>> GetGenre()
    {
        if (_context.Genre == null) return NotFound();
        return await _context.Genre.ToListAsync();
    }

    // GET: api/Genre/5
    [HttpGet("{id}")]
    public async Task<ActionResult<Genre>> GetGenre(string id)
    {
        if (_context.Genre == null) return NotFound();
        var genre = await _context.Genre.FindAsync(id);

        if (genre == null) return NotFound();

        return genre;
    }

    // PUT: api/Genre/5
    // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
    [HttpPut("{id}")]
    public async Task<IActionResult> PutGenre(string id, Genre genre)
    {
        if (id != genre.Title) return BadRequest();

        _context.Entry(genre).State = EntityState.Modified;

        try
        {
            await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!GenreExists(id))
                return NotFound();
            throw;
        }

        return NoContent();
    }

    // POST: api/Genre
    // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
    [HttpPost]
    public async Task<ActionResult<Genre>> PostGenre(Genre genre)
    {
        if (_context.Genre == null) return Problem("Entity set 'TrainingEntityContext.Genre'  is null.");
        _context.Genre.Add(genre);
        try
        {
            await _context.SaveChangesAsync();
        }
        catch (DbUpdateException)
        {
            if (GenreExists(genre.Title))
                return Conflict();
            throw;
        }

        return CreatedAtAction("GetGenre", new { id = genre.Title }, genre);
    }

    // DELETE: api/Genre/5
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteGenre(string id)
    {
        if (_context.Genre == null) return NotFound();
        var genre = await _context.Genre.FindAsync(id);
        if (genre == null) return NotFound();

        _context.Genre.Remove(genre);
        await _context.SaveChangesAsync();

        return NoContent();
    }

    private bool GenreExists(string id)
    {
        return (_context.Genre?.Any(e => e.Title == id)).GetValueOrDefault();
    }
}