MyApp.Views.SearchBar = Backbone.View.extend({
    
    tmpl: MyApp.Templates.search_bar,

    // 初期処理
    initialize: function() {
        this.$el.html(this.tmpl());
    }
    
});
    