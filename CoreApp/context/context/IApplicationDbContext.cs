using Microsoft.EntityFrameworkCore;

namespace Angular7
{
    public interface IApplicationDbContext
    {


        DbSet<RaceView> RaceViews { get; set; }
        DbSet<v1> v1s { get; set; }
        Task<int> SaveChanges();
    }
}