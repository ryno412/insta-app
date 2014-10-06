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
                $("#tag").val();
                var tag = $("#tag").val() || "dog";
                $.ajax({
                    url: 'https://api.instagram.com/v1/tags/'+ tag +'/media/recent?client_id=4338f91f3dc247a48840875426772da6&callback',
                    /*   jsonp: "JSON_CALLBACK",*/

                    // tell jQuery we're expecting JSONP
                    dataType: "jsonp",
                    success: function( response ) {
                        console.log( response ); // server response
                        if (response && response.data) {
                            self.displayPhotos(response.data);
                        }
                    },
                    error : function () {

                    }
                });
            });
        },
        displayPhotos : function (images) {
            var source   = $("#photos").html();
            var template = Handlebars.compile(source);
            //var template = Handlebars.templates['home'];
            var html    = template({images : images});
            var $photoContainer = $("#content");
            $photoContainer.html(html);
        }


    };

    SimpleApp.IndexView = IndexView;

})();


$(document).ready(function (){
    var indexView = new SimpleApp.IndexView();
    indexView.init();
});