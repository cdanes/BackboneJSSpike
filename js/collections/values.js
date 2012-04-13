define(
    [
        'Backbone',
        'models/value'
    ], 
    function (Backbone, ValueModel) 
    {
        var valueCollection = Backbone.Collection.extend(
        {
            model: ValueModel,
            url: "http://localhost:27905/api/values"
        });

        return new valueCollection;
    });