define(
    [
        'jQuery',
        'Underscore',
        'Backbone',
        'models/product',
        'text!templates/products/item.html'
    ],
    function($, _, Backbone, ProductModel, productTemplate)
    {
        var productView = Backbone.View.extend(
            {
                el: $("#details"),
                initialize: function()
                {
                    //Needed to allow the callbacks inside fetch to have the right context!!!!
                    _.bindAll(this);
                },

                loadData:
                    function(id)
                    {
                        this.product = new ProductModel({ id: id });
                        this.product.fetch(
                            {
                                success: this.render,
                                error: this.loadFailure
                            });
                    },

                loadFailure:
                    function () {
                        alert("Failed to load product with id: '" + this.id + "'!");
                    },
                
                render:
                    function(eventName)
                    {
                        var data = {
                                       product: this.product
                                   };

                        var compiledTemplate = _.template(productTemplate, data);
                        this.el.html(compiledTemplate);
                    }
            });

        return new productView;
    });