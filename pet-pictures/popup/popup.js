var key="563492ad6f91700001000001cbf2f9b601b54cfc94dd6d78843a0d2b";
function getImage() {
    try {
        // Get PEXELs Image
        var page = Math.random()*7000;
        var url = "https://api.pexels.com/v1/search?query=cute+pets&page="+page.toString()+"&per_page=1";
        var headers = new Headers();
        headers.append('Authorization', key);
        var er = new Request(url, {headers:headers})
        var fr = fetch(er)
            .then((res) => res.json())
        var r = fr.then((json)=>{
            print("json", json)
            var photos = json.photos
            console.log("photos", photos)
            var raw = photos[0].src.original;
            console.log("raw", raw);
            document.getElementById("image").src=raw;
        })
    } catch(e) {
        console.log("[Cute Pet Pictures] [LOG/ERROR]", e);
    }
}

function onBLoad() {
    document.getElementById("gi").addEventListener("click", getImage);
    getImage();
}
document.addEventListener("DOMContentLoaded", onBLoad, false);
