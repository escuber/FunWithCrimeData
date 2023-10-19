
namespace Angular7
{
    public class FPData
    {
        //off linker
        public int id { get; set; }
        // comes off sheets
        public string name { get; set; }

        //order
        public string gender { get; set; }
        public string race { get; set; }
        public string employer { get; set; }
        public virtual ICollection<charge> charges { get; set; } = new List<charge>();

        public string sheet { get; set; }


    }
    public class severityCountsWithDemos
    {
        public int id { get; set; }
        // comes off sheets
        public string name { get; set; }
        public int count { get; set; }
        public virtual ICollection<demo> kids { get; set; } = new List<demo>();
    }


    public class demo2
    {
        public int id { get; set; }
        // comes off sheets
        public string name { get; set; }
        public int count { get; set; }

        public string? sex { get; set; }

        public string? race { get; set; }

        public string? birthdate { get; set; }

        public string? height { get; set; }

        public string? weight { get; set; }

        public string? eyes { get; set; }

        public string? hair { get; set; }

        public string? birthplace { get; set; }
    }

    public class nameCount
    {


        public int id { get; set; }
        // comes off sheets
        public string name { get; set; }
        public int count { get; set; }
        public virtual ICollection<nameCount> kids { get; set; } = new List<nameCount>();
    }

    public class geoNameCount : nameCount
    {
        public string lat {get;set;}
        public string lng {get;set;}
    }


    public class NameOptions
    { 
    
        public string name { get; set; }

    
    
    }
}
