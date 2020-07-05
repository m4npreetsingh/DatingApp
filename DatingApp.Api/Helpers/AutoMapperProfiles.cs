using System.Linq;
using AutoMapper;
using DatingApp.Api.DTOs;
using DatingApp.Api.Models;

namespace DatingApp.Api.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        
        public AutoMapperProfiles()
        {
            CreateMap<User,UserForListDTO>()
            .ForMember(dest => dest.PhotoUrl , opt=> 
            opt.MapFrom(sourceMember=>sourceMember.Photos.FirstOrDefault(p=>p.IsMain).Url))
            .ForMember(des=> des.Age, opt=>
            opt.MapFrom(src=> src.DateOfBirth.CalculateAge()));
            CreateMap<User,UserDetailDTO>()
            .ForMember(dest => dest.PhotoUrl , opt=> 
            opt.MapFrom(sourceMember=>sourceMember.Photos.FirstOrDefault(p=>p.IsMain).Url))
            .ForMember(des=> des.Age, opt=>
            opt.MapFrom(src=> src.DateOfBirth.CalculateAge()));
            CreateMap<Photo,PhotoForDetailedDTO>();

        }

    }
}