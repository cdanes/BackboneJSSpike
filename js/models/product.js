define(
    [
        'Backbone'
    ],
    function (Backbone) {
        var productModel = Backbone.Model.extend(
            {
                defaults:
                    {
                        Name: "",
                        ShortDescription: "Some default short description"
                    },

                urlRoot: "ProductLibrary.svc/Products",

                // Overrdien to support OData
                url: function () {
                    return this.id ? this.urlRoot + "(" + this.id + ")" : this.urlRoot;
                },

                // Overrdien to support OData
                parse: function (response) {
                    return response.d;
                }

            });

        return productModel;
    });