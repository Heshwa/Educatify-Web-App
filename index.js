function YTHomePage() {
    var hp = window.open("https://www.youtube.com", '_blank');
    hp.focus();
}

function SearchYT() {
    var qry = document.getElementById("inputtext").value;
    var url = "https://www.youtube.com/results?search_query=" + qry;
    var search = window.open(url, '_blank');
    search.focus();
}

function YTTrending() {
    var trending = window.open("https://www.youtube.com/trending", '_blank');
    trending.focus();
}

function YTSubs() {
    var trending = window.open("https://www.youtube.com/feed/subscriptions", '_blank');
    trending.focus();
}

function YTLib() {
    var lib = window.open("https://www.youtube.com/feed/library", '_blank');
    lib.focus();
}

function Googleacc() {
    var gacc = window.open("https://myaccount.google.com", '_blank');
    gacc.focus();
}