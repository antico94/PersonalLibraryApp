using System.ComponentModel.DataAnnotations;

namespace TrainingEntity.Models;

public class Genre
{
    public Genre(string title, string description)
    {
        Title = title;
        Description = description;
    }

    [Key] public string Title { get; set; }
    public string Description { get; set; }
}