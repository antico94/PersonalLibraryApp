using System.ComponentModel.DataAnnotations;

namespace TrainingEntity.Models;

public class Book
{
    [Key] public Guid ISBN { get; set; }

    public string Title { get; set; }
    public Author Author { get; set; }
    public Genre Genre { get; set; }
    public int Pages { get; set; }
    public string Summary { get; set; }
}