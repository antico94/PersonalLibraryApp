using Microsoft.EntityFrameworkCore;
using TrainingEntity.Data;
using TrainingEntity.Models;

public class BookDao : ISearch
{
    private readonly TrainingEntityContext _context;

    public BookDao(TrainingEntityContext dbContext)
    {
        _context = dbContext;
    }

    public async Task<Book> GetBookByIdAsync(Guid bookId)
    {
        return await _context.Book.FindAsync(bookId);
    }

    public async Task<IEnumerable<Book>> GetAllBookAsync()
    {
        return await _context.Book.ToListAsync();
    }

    public async Task AddBookAsync(Book book)
    {
        await _context.Book.AddAsync(book);
        await _context.SaveChangesAsync();
    }

    public async Task UpdateBookAsync(Book book)
    {
        _context.Book.Update(book);
        await _context.SaveChangesAsync();
    }

    public async Task DeleteBookAsync(Guid bookId)
    {
        var book = await _context.Book.FindAsync(bookId);
        _context.Book.Remove(book);
        await _context.SaveChangesAsync();
    }

    public List<string> SearchResult()
    {
        throw new NotImplementedException();
    }
}