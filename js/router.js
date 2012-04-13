define(
    [
        'jQuery',
        'Underscore',
        'Backbone',
        'views/home/main',
        'views/products/list',
        'views/products/item',
        'views/values/list'
    ],
    function ($, _, Backbone, mainHomeView, productListView, productDetails, valueListView) {
        var AppRouter = Backbone.Router.extend(
            {
                routes:
                    {
                        '/products': 'showProducts',
                        '/productDetails/:id': 'productDetails',
                        '/values': 'showValues',

                        // Default
                        '*actions': 'defaultAction'
                    },

                showProducts:
                    function () {
                        productListView.loadFilteredData();
                    },

                productDetails:
                    function (id) {
                        productDetails.loadData(id);
                    },

                showValues:
                    function () {
                        valueListView.loadData();
                    },

                defaultAction:
                    function (actions) {
                        mainHomeView.render();
                    }
            });

        var initialize = function () {
            var app_router = new AppRouter;
            Backbone.history.start();
        };

        return { initialize: initialize };
    });