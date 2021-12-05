var key="563492ad6f91700001000001cbf2f9b601b54cfc94dd6d78843a0d2b";
function getImage() {
    // Get PEXELs Image
    var erequest = new XMLHttpRequest();
    var page = Math.random()*250
    erequest.open("GET", "https://api.pexels.com/v1/search?query=cute+pets&page="+page.toString()+"&per_page=1", false);
    erequest.setRequestHeader("Authorization", key);  
    erequest.send();
    var res = JSON.parse(erequest.response);
    var photo = res.photos[0].src;
    var raw = photo.original;
    console.log(raw)
    document.getElementById("image").src=raw
}