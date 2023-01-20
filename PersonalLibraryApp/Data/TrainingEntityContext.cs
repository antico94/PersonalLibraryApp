using Microsoft.EntityFrameworkCore;
using TrainingEntity.Models;

namespace TrainingEntity.Data;

public class TrainingEntityContext : DbContext
{
    public TrainingEntityContext(DbContextOptions<TrainingEntityContext> options)
        : base(options)
    {
    }

    public DbSet<Book> Book { get; set; } = default!;

    public DbSet<Author>? Author { get; set; }

    public DbSet<Genre>? Genre { get; set; }
}