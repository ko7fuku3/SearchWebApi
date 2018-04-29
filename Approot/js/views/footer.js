MyApp.Views.Footer = Backbone.View.extend({
    
  tmpl: MyApp.Templates.footer,

  // 初期処理
  initialize: function() {
    this.$el.html(this.tmpl());
  }
    
});    