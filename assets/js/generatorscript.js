function linkvertisedynamic(userid, url) {
    var base_url = "https://link-to.net/" + userid + "/" + Math.random() * 1000 + "/dynamic/";
    var href = base_url + "?r=" + btoa(encodeURI(url));
    document.getElementById("output").href = ""
    document.getElementById("output").innerHTML = href
}