define(
    [
        'Backbone',
        'models/product'
    ],
    function (Backbone, ProductModel) {
        var productsCollection = Backbone.Collection.extend(
        {
            model: ProductModel,
            urlRoot: "ProductLibrary.svc/Products",
            
            
            applyFilter: function (filter) {
                if (!filter || filter.trim() == "")
                    this.filter = null;
                else
                    this.filter = filter;

            },

            url: function () {
                return this.filter ? this.urlRoot + "?$filter=startswith(Name,'" + this.filter + "')" : this.urlRoot;
            },

            // Overrdien to support OData
            parse: function (response) {
                return response.d;
            }
        });

        return new productsCollection;
    });