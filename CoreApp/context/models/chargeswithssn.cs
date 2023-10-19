using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace Angular7;

[Keyless]
public partial class chargeswithssn
{
    [StringLength(50)]
    public string? crime { get; set; }

    [StringLength(50)]
    public string? severity { get; set; }

    public int? order_id { get; set; }

    [StringLength(12)]
    public string? ssn2 { get; set; }

    public int id { get; set; }

    public int chargesid { get; set; }
}
