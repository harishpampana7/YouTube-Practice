


let showVideos = JSON.parse(localStorage.getItem("storeVideos"))
console.log(showVideos);

let playvideo = document.getElementById("Video")

let iframe = document.createElement("iframe")

iframe.src = `https://www.youtube.com/embed/${showVideos.videoId}?autoplay=1`
iframe.height="100%";
iframe.width="100%";
iframe.setAttribute("allowfullScreen",true)

let p = document.createElement("h3")
p.innerText=showVideos.snippet.title
playvideo.append(iframe,p)

