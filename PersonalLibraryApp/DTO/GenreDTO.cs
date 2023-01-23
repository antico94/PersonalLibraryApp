namespace TrainingEntity.DTO;

public class GenreDTO
{
    public string Title { get; set; }
    public string Description { get; set; }

    public GenreDTO(string title, string description)
    {
        Title = title;
        Description = description;
    }
}