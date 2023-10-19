using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace Angular7;

public partial class atContext : DbContext, IatContext
{
    public atContext()
    {
    }

    public atContext(DbContextOptions<atContext> options)
        : base(options)
    {
    }

    public virtual DbSet<RaceView> RaceViews { get; set; }

    public virtual DbSet<TOP10> TOP10s { get; set; }

    public virtual DbSet<charge> charges { get; set; }

    public virtual DbSet<chargeswithssn> chargeswithssns { get; set; }

    public virtual DbSet<demo> demos { get; set; }

    public virtual DbSet<linker> linkers { get; set; }

    public virtual DbSet<log> logs { get; set; }

    public virtual DbSet<log2> log2s { get; set; }

    public virtual DbSet<log3> log3s { get; set; }

    public virtual DbSet<order> orders { get; set; }

    public virtual DbSet<sheet> sheets { get; set; }

    public virtual DbSet<v1> v1s { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Data Source=.;Initial Catalog=at;Integrated Security=True;Trusted_Connection=True;TrustServerCertificate=true; MultipleActiveResultSets=true; ");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<RaceView>(entity =>
        {
            entity.ToView("RaceView");

            entity.Property(e => e.birthdate).IsFixedLength();
            entity.Property(e => e.birthplace).IsFixedLength();
            entity.Property(e => e.crime).IsFixedLength();
            entity.Property(e => e.disp).IsFixedLength();
            entity.Property(e => e.eyes).IsFixedLength();
            entity.Property(e => e.hair).IsFixedLength();
            entity.Property(e => e.height).IsFixedLength();
            entity.Property(e => e.race).IsFixedLength();
            entity.Property(e => e.severity).IsFixedLength();
            entity.Property(e => e.sex).IsFixedLength();
            entity.Property(e => e.ssn2).IsFixedLength();
            entity.Property(e => e.weight).IsFixedLength();
        });

        modelBuilder.Entity<TOP10>(entity =>
        {
            entity.ToView("TOP10");

            entity.Property(e => e.ssn2).IsFixedLength();
        });

        modelBuilder.Entity<charge>(entity =>
        {
            entity.HasKey(e => e.id).HasName("PK_chanrges2");

            entity.Property(e => e.crime).IsFixedLength();
            entity.Property(e => e.disp).IsFixedLength();
            entity.Property(e => e.severity).IsFixedLength();

            entity.HasOne(d => d.order).WithMany(p => p.charges).HasConstraintName("FK_charges_order");

            entity.HasOne(d => d.sheet).WithMany(p => p.charges)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_chanrges2_sheets");
        });

        modelBuilder.Entity<chargeswithssn>(entity =>
        {
            entity.ToView("chargeswithssn");

            entity.Property(e => e.crime).IsFixedLength();
            entity.Property(e => e.severity).IsFixedLength();
            entity.Property(e => e.ssn2).IsFixedLength();
        });

        modelBuilder.Entity<demo>(entity =>
        {
            entity.Property(e => e.id).ValueGeneratedNever();
            entity.Property(e => e.birthdate).IsFixedLength();
            entity.Property(e => e.birthplace).IsFixedLength();
            entity.Property(e => e.eyes).IsFixedLength();
            entity.Property(e => e.hair).IsFixedLength();
            entity.Property(e => e.height).IsFixedLength();
            entity.Property(e => e.name).IsFixedLength();
            entity.Property(e => e.race).IsFixedLength();
            entity.Property(e => e.sex).IsFixedLength();
            entity.Property(e => e.weight).IsFixedLength();

            entity.HasOne(d => d.idNavigation).WithOne(p => p.demo)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_demo_sheets");
        });

        modelBuilder.Entity<linker>(entity =>
        {
            entity.HasOne(d => d.ro3).WithMany(p => p.linkers).HasConstraintName("FK_linker_order");

            entity.HasOne(d => d.sheets).WithMany(p => p.linkers).HasConstraintName("FK_linker_sheets");
        });

        modelBuilder.Entity<log>(entity =>
        {
            entity.HasKey(e => e.id).HasName("PK_dbo.logs");
        });

        modelBuilder.Entity<log2>(entity =>
        {
            entity.HasKey(e => e.id).HasName("PK_dbo.log2");
        });

        modelBuilder.Entity<log3>(entity =>
        {
            entity.HasKey(e => e.id).HasName("PK_dbo.log3");
        });

        modelBuilder.Entity<order>(entity =>
        {
            entity.Property(e => e.PlaceOfBirth).IsFixedLength();
            entity.Property(e => e.citizen).IsFixedLength();
            entity.Property(e => e.city).IsFixedLength();
            entity.Property(e => e.dobDay).IsFixedLength();
            entity.Property(e => e.dobMonth).IsFixedLength();
            entity.Property(e => e.dobYear).IsFixedLength();
            entity.Property(e => e.emp2).IsFixedLength();
            entity.Property(e => e.employerName).IsFixedLength();
            entity.Property(e => e.firstName).IsFixedLength();
            entity.Property(e => e.gender).IsFixedLength();
            entity.Property(e => e.heightFt).IsFixedLength();
            entity.Property(e => e.heightInches).IsFixedLength();
            entity.Property(e => e.lastName).IsFixedLength();
            entity.Property(e => e.lat).IsFixedLength();
            entity.Property(e => e.lng).IsFixedLength();
            entity.Property(e => e.race).IsFixedLength();
            entity.Property(e => e.ssn).IsFixedLength();
            entity.Property(e => e.state).IsFixedLength();
            entity.Property(e => e.street).IsFixedLength();
            entity.Property(e => e.zip).IsFixedLength();
        });

        modelBuilder.Entity<sheet>(entity =>
        {
            entity.Property(e => e.ssn2).IsFixedLength();
        });

        modelBuilder.Entity<v1>(entity =>
        {
            entity.ToView("v1");

            entity.Property(e => e.employerName).IsFixedLength();
            entity.Property(e => e.gender).IsFixedLength();
            entity.Property(e => e.race).IsFixedLength();
            entity.Property(e => e.ssn).IsFixedLength();
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
