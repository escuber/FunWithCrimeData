using Microsoft.EntityFrameworkCore;

namespace Angular7
{
    public interface IatContext
    {
        DbSet<charge> charges { get; set; }
        DbSet<chargeswithssn> chargeswithssns { get; set; }
        DbSet<demo> demos { get; set; }
        DbSet<linker> linkers { get; set; }
        DbSet<log2> log2s { get; set; }
        DbSet<log3> log3s { get; set; }
        DbSet<log> logs { get; set; }
        DbSet<order> orders { get; set; }
        DbSet<RaceView> RaceViews { get; set; }
        DbSet<sheet> sheets { get; set; }
        DbSet<TOP10> TOP10s { get; set; }
        DbSet<v1> v1s { get; set; }
    }
}