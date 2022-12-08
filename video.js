

import { navbar } from './components/navbar.js';
console.log('navbar:', navbar);

let navbar_div = document.getElementById('navbar');
navbar_div.innerHTML = navbar();

// const video_details_div = document.getElementById("video_details");

// const playVideo = () =>{
//     let { videoId } = JSON.parse(localStorage.getItem("clicked_item"));
//     // console.log(data);

//     let iframe = document.createElement("iframe")

//     iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`;
//     iframe.height="100%";
//     iframe.width="100%";
//     iframe.setAttribute("allowfullScreen", true);

//     let p = document.createElement("h3")
//     p.innerText=showVideos.snippet.title
//     video_details_div.append(iframe,p)

// };

let showVideos = JSON.parse(localStorage.getItem("clicked_item"))
        console.log(showVideos);

    let video_details_div = document.getElementById("video_details")

    let iframe = document.createElement("iframe")

    iframe.src = `https://www.youtube.com/embed/${showVideos.videoId}?`
    iframe.height="100%";
    iframe.width="100%";
    iframe.setAttribute("allowfullScreen",true)

    let p = document.createElement("h3")
    p.innerText=showVideos.snippet.title
    video_details_div.append(iframe,p);