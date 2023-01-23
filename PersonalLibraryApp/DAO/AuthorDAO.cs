using Microsoft.EntityFrameworkCore;
using TrainingEntity.Data;
using TrainingEntity.Models;

public class AuthorDAO : ISearch
{
    private readonly TrainingEntityContext _context;

    public AuthorDAO(TrainingEntityContext dbContext)
    {
        _context = dbContext;
    }

    public async Task<Author> GetAuthorByIdAsync(Guid authorId)
    {
        return await _context.Author.FindAsync(authorId);
    }

    public async Task<IEnumerable<Author>> GetAllAuthorAsync()
    {
        return await _context.Author.ToListAsync();
    }

    public async Task AddAuthorAsync(Author author)
    {
        await _context.Author.AddAsync(author);
        await _context.SaveChangesAsync();
    }

    public async Task UpdateAuthorAsync(Author author)
    {
        _context.Author.Update(author);
        await _context.SaveChangesAsync();
    }

    public async Task DeleteAuthorAsync(Guid authorId)
    {
        var author = await _context.Author.FindAsync(authorId);
        _context.Author.Remove(author);
        await _context.SaveChangesAsync();
    }

    public List<string> SearchResult()
    {
        throw new NotImplementedException();
    }
}