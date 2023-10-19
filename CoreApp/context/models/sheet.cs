using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace Angular7;

public partial class sheet
{
    [Key]
    public int id { get; set; }

    public string? sheets { get; set; }

    [StringLength(9)]
    public string? type { get; set; }

    [StringLength(12)]
    public string? ssn2 { get; set; }

    [StringLength(100)]
    public string? name { get; set; }

    [InverseProperty("sheet")]
    public virtual ICollection<charge> charges { get; set; } = new List<charge>();

    [InverseProperty("idNavigation")]
    public virtual demo? demo { get; set; }

    [InverseProperty("sheets")]
    public virtual ICollection<linker> linkers { get; set; } = new List<linker>();
}
