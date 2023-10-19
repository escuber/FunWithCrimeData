using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace Angular7;

public partial class charge
{
    [Key]
    public int id { get; set; }

    public int sheet_id { get; set; }

    [StringLength(50)]
    public string? crime { get; set; }

    [StringLength(50)]
    public string? severity { get; set; }

    [StringLength(100)]
    public string? disp { get; set; }

    public string? fullLine { get; set; }

    public int? order_id { get; set; }

    [ForeignKey("order_id")]
    [InverseProperty("charges")]
    public virtual order? order { get; set; }

    [ForeignKey("sheet_id")]
    [InverseProperty("charges")]
    public virtual sheet sheet { get; set; } = null!;
}
