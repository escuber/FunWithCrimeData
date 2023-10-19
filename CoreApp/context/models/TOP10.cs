using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace Angular7;

[Keyless]
public partial class TOP10
{
    public int id { get; set; }

    [StringLength(12)]
    public string? ssn2 { get; set; }

    public int? Expr1 { get; set; }
}
