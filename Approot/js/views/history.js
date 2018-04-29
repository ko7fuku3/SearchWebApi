MyApp.Views.History = Backbone.View.extend({
    
  tmpl: MyApp.Templates.history,

  // 初期処理
  initialize: function () {
    this.$el.html(this.tmpl());
  }
    
});    