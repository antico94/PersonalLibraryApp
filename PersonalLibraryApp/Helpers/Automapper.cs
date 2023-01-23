using AutoMapper;
using TrainingEntity.DTO;
using TrainingEntity.Models;

public class AutoMapperProfiles : Profile
{
    public AutoMapperProfiles()
    {
        CreateMap<Book, BookDTO>();
        CreateMap<BookDTO, Book>();

        CreateMap<Author, AuthorDTO>();
        CreateMap<AuthorDTO, Author>();

        CreateMap<Genre, GenreDTO>();
        CreateMap<GenreDTO, Genre>();
    }
}