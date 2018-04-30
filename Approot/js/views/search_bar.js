MyApp.Views.SearchBar = Backbone.View.extend({
    
    tmpl: MyApp.Templates.search_bar,

    // ローカルイベントのハンドリング
    events: {
        'click #btn_search': 'search'
    },
    // 初期処理
    initialize: function() {
        this.$el.html(this.tmpl());
        this.$el.find('#twitter').attr('checked', true);
    },
    search: function(e) {
        
        var $checked = this.$el.find('input[type=radio]:checked'),
            query = $('#query').val(),
            service = $checked.val(),
            search = {};

        e.preventDefault();

        search.query = query;
        search.service = service;

        // 「search」イベントを発火する
        MyApp.mediator.trigger('search', search);
    }
});
    