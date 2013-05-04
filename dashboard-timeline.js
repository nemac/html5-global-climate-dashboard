(function ($) {
    "use strict";

    var dashboardGraphTpl = (
        ''
            + '<div class="dashboard-timeline">'
            +   '<div class="dashboard-timeline-multigraph-wrapper">'
            +     '<div class="dashboard-timeline-multigraph"></div>'
            +   '</div>'
            + '</div>'
    );

    var methods = {
        init : function(options) {
            return this.each(function() {
                var $this = $(this),
                    data = $this.data('dashboard_timeline'),
                    settings = $.extend({
                    }, options);
                if ( ! data ) {
                    $this.html(Mustache.to_html(dashboardGraphTpl, {
                        title       : settings.title,
                        description : settings.description
                    }));
                    $this.find('.dashboard-timeline-multigraph').multigraph(settings);
                }
                return this;
            });
        }
    };

    $.fn.dashboard_timeline = function( method ) {
        if ( methods[method] ) {
            return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else if ( typeof method === 'object' || ! method ) {
            return methods.init.apply( this, arguments );
        } else {
            $.error( 'Method ' +  method + ' does not exist on jQuery.dashboard_timeline' );
            return null;
        }    
    };
    
}(jQuery));
