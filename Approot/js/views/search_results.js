MyApp.Views.SearchResults = Backbone.View.extend({

    // 初期処理
    initialize: function () {
        this.$el.html(this.options.tmpl());
    }
    
});    