using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace Angular7;

[Table("log2")]
public partial class log2
{
    [Key]
    public int id { get; set; }

    [Column(TypeName = "datetime")]
    public DateTime lineDate { get; set; }

    [StringLength(7)]
    public string? type { get; set; }

    [StringLength(70)]
    public string? taskId { get; set; }

    [StringLength(100)]
    public string? location { get; set; }

    [StringLength(200)]
    public string? message { get; set; }

    [StringLength(50)]
    public string? logfile { get; set; }

    public string? messageExtend { get; set; }
}
