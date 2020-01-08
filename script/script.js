function resizing() {
    var header = document.getElementsByClassName("header-section")[0];
    header.style.minHeight = window.innerHeight - (28 * 2) + 'px';
}
resizing();
window.onresize = function () {
    resizing();
}



var data = {
    "avatar": "./images/avatar.jpg",
    "profile": "http://github.com/abdalgaderserag",
    "pinterest": "#",
    "twitter": "#",
    "youtube": "#"
};

document.getElementById("avatar").src = data.avatar;
document.getElementsByClassName("soc")[0].href = data.pinterest;
document.getElementsByClassName("soc")[1].href = data.twitter;
document.getElementsByClassName("soc")[2].href = data.youtube;