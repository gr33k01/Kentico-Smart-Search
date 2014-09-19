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
                kenticoSmartSearch.search();
                e.preventDefault();
            }
        });

        $(kenticoSmartSearch.config.buttonSelector).on('click', kenticoSmartSearch.search);
    },

    search: function() {

        var keywords = $(kenticoSmartSearch.config.inputSelector).val();

        if (keywords == '') return false;

        var url = kenticoSmartSearch.config.searchUrl;
        var queryString = '?searchtext=' + encodeURI(keywords) + '&searchmode=' + kenticoSmartSearch.config.searchMode;

        switch (kenticoSmartSearch.config.newWindow) {

            case true:
                window.open(url + queryString, '_blank');
                break;

            case false:
                window.location.href = url + queryString;
                break;
        }
    }
}