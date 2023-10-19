using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace Angular7;

[Table("linker")]
public partial class linker
{
    [Key]
    public int id { get; set; }

    public int? ro3id { get; set; }

    public int? sheetsid { get; set; }

    [ForeignKey("ro3id")]
    [InverseProperty("linkers")]
    public virtual order? ro3 { get; set; }

    [ForeignKey("sheetsid")]
    [InverseProperty("linkers")]
    public virtual sheet? sheets { get; set; }
}
