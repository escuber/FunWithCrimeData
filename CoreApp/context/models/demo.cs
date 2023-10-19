using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace Angular7;

[Table("demo")]
public partial class demo
{
    [Key]
    public int id { get; set; }

    [StringLength(10)]
    public string? name { get; set; }

    [StringLength(10)]
    public string? sex { get; set; }

    [StringLength(10)]
    public string? race { get; set; }

    [StringLength(10)]
    public string? birthdate { get; set; }

    [StringLength(10)]
    public string? height { get; set; }

    [StringLength(10)]
    public string? weight { get; set; }

    [StringLength(10)]
    public string? eyes { get; set; }

    [StringLength(10)]
    public string? hair { get; set; }

    [StringLength(10)]
    public string? birthplace { get; set; }

    [ForeignKey("id")]
    [InverseProperty("demo")]
    public virtual sheet idNavigation { get; set; } = null!;
}
