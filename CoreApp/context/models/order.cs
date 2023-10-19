using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace Angular7;

[Table("order")]
[Index("id", Name = "IX_order")]
public partial class order
{
    [Key]
    public int id { get; set; }

    public string? fulltext { get; set; }

    [Column(TypeName = "xml")]
    public string? parsedXml { get; set; }

    [StringLength(11)]
    public string? ssn { get; set; }

    [StringLength(10)]
    public string? citizen { get; set; }

    [StringLength(10)]
    public string? dobMonth { get; set; }

    [StringLength(10)]
    public string? dobDay { get; set; }

    [StringLength(10)]
    public string? dobYear { get; set; }

    [StringLength(10)]
    public string? gender { get; set; }

    [StringLength(10)]
    public string? race { get; set; }

    [StringLength(10)]
    public string? heightFt { get; set; }

    [StringLength(10)]
    public string? heightInches { get; set; }

    [StringLength(10)]
    public string? PlaceOfBirth { get; set; }

    [StringLength(10)]
    public string? employerName { get; set; }

    [StringLength(150)]
    public string? emp2 { get; set; }

    [StringLength(150)]
    public string? firstName { get; set; }

    [StringLength(150)]
    public string? lastName { get; set; }

    [StringLength(150)]
    public string? street { get; set; }

    [StringLength(150)]
    public string? city { get; set; }

    [StringLength(150)]
    public string? state { get; set; }

    [StringLength(150)]
    public string? zip { get; set; }

    [StringLength(100)]
    public string? lat { get; set; }

    [StringLength(100)]
    public string? lng { get; set; }

    public int? age { get; set; }

    [InverseProperty("order")]
    public virtual ICollection<charge> charges { get; set; } = new List<charge>();

    [InverseProperty("ro3")]
    public virtual ICollection<linker> linkers { get; set; } = new List<linker>();
}
