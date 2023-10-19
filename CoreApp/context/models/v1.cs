using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace Angular7;

[Keyless]
public partial class v1
{
    [StringLength(11)]
    public string? ssn { get; set; }

    [StringLength(10)]
    public string? gender { get; set; }

    [StringLength(10)]
    public string? race { get; set; }

    [StringLength(10)]
    public string? employerName { get; set; }

    public string? sheets { get; set; }
}
