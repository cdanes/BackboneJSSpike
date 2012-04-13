define(
    [
        'jQuery',
        'Underscore',
        'Backbone',
        'collections/products',
        'text!templates/products/list.html'
    ],
    function ($, _, Backbone, products, productListTemplate) {
        var productListView = Backbone.View.extend(
            {
                el: $("#page"),

                events: {
                    "change #filter": "loadFilteredData"
                },

                initialize: function () {
                    //Needed to allow the callbacks inside fetch to have the right context!!!!
                    _.bindAll(this);
                },

                loadData:
                    function () {
                        products.fetch(
                            {
                                success: this.render,
                                error: this.loadFailure
                            });
                    },

                loadFilteredData:
                    function () {
                        var filter = $("#filter").val();
                        products.applyFilter(filter);
                        this.loadData();
                    },

                loadFailure:
                    function () {
                        alert("Failed to load product list!");
                    },

                render:
                    function (eventName) {
                        var data = {
                            products: products.models,
                            _: _
                        };

                        var compiledTemplate = _.template(productListTemplate, data);
                        this.el.html(compiledTemplate);
                    }
            });

        return new productListView;
    });