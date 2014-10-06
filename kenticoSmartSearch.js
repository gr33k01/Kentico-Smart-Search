/* v1 by gr33k01 */

var kenticoSmartSearch = {

    config: {
        inputSelector: '.searchInput',
        buttonSelector: '.searchButton',
        searchUrl: '/Search',
        searchMode: 'anyword',
        newWindow: false
    },

    init: function(settings) {

        $.extend(kenticoSmartSearch.config, settings);

        $(kenticoSmartSearch.config.inputSelector).on('keydown', function(e) {
            if (e.keyCode == 13) {
                e.preventDefault();
                kenticoSmartSearch.search();
            }
        });

        $(kenticoSmartSearch.config.buttonSelector).on('click', kenticoSmartSearch.search);
    },

    search: function() {

        var keywords = $(kenticoSmartSearch.config.inputSelector).val(),
            url = kenticoSmartSearch.config.searchUrl,
            queryString = '?searchtext=' + encodeURI(keywords) + '&searchmode=' + kenticoSmartSearch.config.searchMode;
        
        if (!keywords) return;

        if(kenticoSmartSearch.config.newWindow){
            window.open(url + queryString, '_blank');
            return;
        }

        window.location.href = url + queryString;
    }
}