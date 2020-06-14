using DatingApp.Api.Models;
using Microsoft.EntityFrameworkCore;

namespace DatingApp.Api.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options):base (options)
        {
            
        }

        public DbSet<Value> Values { get; set; }
    }
}