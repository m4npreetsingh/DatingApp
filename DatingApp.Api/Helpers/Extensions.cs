using System;
using Microsoft.AspNetCore.Http;

namespace DatingApp.Api.Helpers
{
    public static class Extensions
    {
        public static void AddApplicationError(this HttpResponse response,string message)
        {
            response.Headers.Add("Application-Error",message);
            response.Headers.Add("Access-Control-Expose-Headers","Application-Error");
            response.Headers.Add("Access-Contorl-Allow-Origin","*");

        }
        public static int CalculateAge(this DateTime theDateTime)
        {
            var age = DateTime.Now.Year - theDateTime.Year;
            if (DateTime.Now> theDateTime.AddYears(age))
            {
                age--;
            }
            return age;
        }
    }
}