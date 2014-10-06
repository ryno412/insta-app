var SimpleApp = {};

(function () {

    function IndexView () {};

    IndexView.prototype = {

        init : function () {
         this.initEvents();
        },
        initEvents : function () {
            var self = this;
           $('#do-something').click(function (e) {
              self.displayView();
           });
        },
        displayView : function () {
            var $content = $('#content');
            //in page template
            //var source = $('#view-one').html();
            //var template = Handlebars.compile(source);
             //complied template
            var template = Handlebars.templates['home'];
            var html = template({name:'ryan'});
            $content.html(html);

        }


    };

    SimpleApp.IndexView = IndexView;

})();


$(document).ready(function (){
    var indexView = new SimpleApp.IndexView();
    indexView.init();
});