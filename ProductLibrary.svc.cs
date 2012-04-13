using System.Data.Services;
using System.Data.Services.Common;
using System.ServiceModel;
using ProductLibrary.api;

namespace ProductLibrary
{
    [JSONPSupportBehavior]
    public class ProductLibrary : DataService<ProductsContext>
    {
        public static void InitializeService(DataServiceConfiguration config)
        {
            config.UseVerboseErrors = true;
            config.SetEntitySetAccessRule("Products", EntitySetRights.AllRead);
            // config.SetServiceOperationAccessRule("MyServiceOperation", ServiceOperationRights.All);
            config.DataServiceBehavior.MaxProtocolVersion = DataServiceProtocolVersion.V2;
        }
    }
}
