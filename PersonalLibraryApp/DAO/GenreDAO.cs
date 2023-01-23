using Microsoft.EntityFrameworkCore;
using TrainingEntity.Data;
using TrainingEntity.Models;

public class GenreDao: ISearch
{
    private readonly TrainingEntityContext _context;

    public GenreDao(TrainingEntityContext dbContext)
    {
        _context = dbContext;
    }

    public async Task<Genre> GetGenreByIdAsync(Guid genreId)
    {
        return await _context.Genre.FindAsync(genreId);
    }

    public async Task<IEnumerable<Genre>> GetAllGenreAsync()
    {
        return await _context.Genre.ToListAsync();
    }

    public async Task AddGenreAsync(Genre genre)
    {
        await _context.Genre.AddAsync(genre);
        await _context.SaveChangesAsync();
    }

    public async Task UpdateGenreAsync(Genre genre)
    {
        _context.Genre.Update(genre);
        await _context.SaveChangesAsync();
    }

    public async Task DeleteGenreAsync(Guid genreId)
    {
        var genre = await _context.Genre.FindAsync(genreId);
        _context.Genre.Remove(genre);
        await _context.SaveChangesAsync();
    }

    public List<string> SearchResult()
    {
        throw new NotImplementedException();
    }
}