using System.ComponentModel.DataAnnotations;

namespace TrainingEntity.Models;

public class Genre
{
    [Key] public string Title { get; set; }
    public string Description { get; set; }
}