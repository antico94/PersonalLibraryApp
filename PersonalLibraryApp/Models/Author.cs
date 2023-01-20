using System.ComponentModel.DataAnnotations;

namespace TrainingEntity.Models;

public class Author
{
    [Key] public Guid AuthorId { get; set; }

    public string FirstName { get; set; }
    public string LastName { get; set; }
    public DateTime DateOfBirth { get; set; }
    public DateTime? DateOfDeath { get; set; }
    public List<Book> BooksWritten { get; set; }
}