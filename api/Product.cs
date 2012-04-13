using System.Data.Services.Common;

namespace ProductLibrary.api
{
    [DataServiceKey("Id")]
    public class Product
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Sku { get; set; }
        public string Description { get; set; }
        public string ShortDescription { get; set; }
    }
}