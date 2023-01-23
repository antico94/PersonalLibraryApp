using TrainingEntity.DTO;

public class BookDTO
{
    public Guid ISBN { get; set; }
    public string Title { get; set; }
    public AuthorDTO Author { get; set; }
    public GenreDTO Genre { get; set; }
    public int Pages { get; set; }
    public string Summary { get; set; }
}