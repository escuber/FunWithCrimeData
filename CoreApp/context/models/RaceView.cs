using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace Angular7;

[Keyless]
public partial class RaceView
{
    public int id { get; set; }

    [StringLength(50)]
    public string? crime { get; set; }

    [StringLength(50)]
    public string? severity { get; set; }

    [StringLength(100)]
    public string? disp { get; set; }

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

    public int Expr1 { get; set; }

    [StringLength(12)]
    public string? ssn2 { get; set; }
}
