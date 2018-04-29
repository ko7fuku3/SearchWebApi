MyApp.Views.Tabs = Backbone.View.extend({
    
    tmpl: MyApp.Templates.tabs,

    // 初期処理
    initialize: function () {
        
        this.$el.html(this.tmpl());

        this.twitters = new MyApp.Views.SearchResults({
            el: this.$el.find('#twitter_list'),
            tmpl: MyApp.Templates.twitter
        });

        this.hotppepers = new MyApp.Views.SearchResults({
            el: this.$el.find('#hotpepper_list'),
            tmpl: MyApp.Templates.hotpepper
        });

    }
    
});