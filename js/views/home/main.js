define(
    [
        'jQuery',
        'Backbone',
        'text!templates/home/main.html'
    ],
    function($, Backbone, mainHomeTemplate)
    {
        var mainHomeView = Backbone.View.extend(
            {
                el: $("#page"),
                render:
                    function()
                    {
                        this.el.html(mainHomeTemplate);
                        $("#details").html("");
                    }
            });

        return new mainHomeView;
    });