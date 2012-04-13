using System.Linq;

namespace ProductLibrary.api
{
    public class ProductsContext
    {
        private readonly Products _products = new Products();

        public IQueryable<Product> Products
        {
            get { return _products.AsQueryable(); }
        }
    }
}