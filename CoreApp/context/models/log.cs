using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace Angular7;

public partial class log
{
    [Key]
    public int id { get; set; }

    public string? logFileName { get; set; }

    public string? fileDate { get; set; }

    public int logId { get; set; }

    [Column(TypeName = "datetime")]
    public DateTime lineDate { get; set; }

    public string? type { get; set; }

    public string? taskId { get; set; }

    public string? location { get; set; }

    public string? message { get; set; }

    public string? raw { get; set; }
}
