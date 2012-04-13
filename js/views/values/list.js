define(
    [
        'jQuery',
        'Underscore',
        'Backbone',
        'collections/values',
        'text!templates/values/list.html'
    ],
    function($, _, Backbone, values, valueListTemplate)
    {
        var valueListView = Backbone.View.extend(
            {
                el: $("#page"),

                initialize: function () 
                {
                    //Needed to allow the callbacks inside fetch to have the right context!!!!
                    _.bindAll(this);
                },
                
                loadData: 
                    function()
                    {
                        values.fetch(
                            {
                                success: this.render,
                                error: this.loadFailure
                            });
                    },
                
                loadFailure:
                    function()
                    {
                        alert("Failed to load value list!");
                    },
                
                render:
                    function(eventName)
                    {
                        var data = {
                                        values: values.models,
                                        _: _
                                    };
                                        
                        var compiledTemplate = _.template(valueListTemplate, data);
                        this.el.html(compiledTemplate);
                    }
            });

            return new valueListView;
    });