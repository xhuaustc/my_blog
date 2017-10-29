(function () {

    var G = window || this,
        even = G.BLOG.even,
        $ = G.BLOG.$,
        searchIco = $('#search'),
        searchWrap = $('#search-wrap'),
        keyInput = $('#key'),
        back = $('#back'),
        searchPanel = $('#search-panel'),
        searchResult = $('#search-result'),
        searchTpl = $('#search-tpl').innerHTML,
        JSON_DATA = (G.BLOG.ROOT + '/content.json').replace(/\/{2}/g, '/'),
        searchData;


    searchIco.addEventListener(even, function () {
        searchWrap.classList.toggle('in');
        keyInput.value = '';
        searchWrap.classList.contains('in') ? keyInput.focus() : keyInput.blur();
    });

    back.addEventListener(even, function () {
        searchWrap.classList.remove('in');
    });

    document.addEventListener(even, function (e) {
        if (e.target.id !== 'key' && even === 'click') {
        }
    });

    function search(e) {
        var key = e.which || e.keyCode;
        if (key === 13) { // 13 is enter
          // code for enter

        }
    }
    keyInput.addEventListener('keypress', search);

}).call(this);
