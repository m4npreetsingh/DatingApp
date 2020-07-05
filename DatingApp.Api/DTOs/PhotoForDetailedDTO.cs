using System;

namespace DatingApp.Api.DTOs
{
    public class PhotoForDetailedDTO
    {
    public int Id { get; set; }
    public string Url { get; set; }
    public string Description { get; set; }
    public DateTime Created { get; set; }
    public bool IsMain { get; set; }
    }
}