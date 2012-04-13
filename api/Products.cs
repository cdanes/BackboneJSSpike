using System.Collections.ObjectModel;

namespace ProductLibrary.api
{
    public class Products : ObservableCollection<Product>
    {
        public Products()
        {
            Add(new Product { Id = 0, Name = "Samsung Galaxy", Sku = "123345345435", ShortDescription = "The latest google phone", Description = "Google wants you to have this phone" });
            Add(new Product { Id = 1, Name = "iPhoney", Sku = "654234234324", Description = "The best iPhone clone out there!" });
        }
    }
}