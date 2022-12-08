
let API_key = "AIzaSyAZAtHB547Fq6vLg-Yp9nGIK7L0NhUH04M"

let div1 = document.getElementById("container")

search()

async function search() {
    let input = document.getElementById("searchbar").value;
    let url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=IN&key=${API_key}&maxResults=30`
    let res = await fetch(url)
    let data = await res.json();
    console.log(data)
    let videos = data.items
    appendVideos(videos)
}

let appendVideos = (x) => {
x.forEach(({ snippet, id: { videoId } }) => {

    let div = document.createElement("div")
    let url = snippet.thumbnails.medium.url

    let img = document.createElement("img")
    img.src = url

    let p = document.createElement("p")
    p.innerText = snippet.title

    let video_data = {
        snippet,
        videoId,
    }

    div1.onclick = () => {
        show_video(video_data)

    }

    div.append(img, p)
    div1.append(div)
});
}

let show_video = (video_data) => {
localStorage.setItem("storeVideos", JSON.stringify(video_data))
window.location.href = "video.html"
}



async function searchData() {
div1.innerHTML = ""
let input = document.getElementById("searchbar").value;
let url = `https://youtube.googleapis.com/youtube/v3/search?q=${input}&key=${API_key}&type=video&part=snippet&maxResults=30`
let res = await fetch(url)
let data = await res.json();
console.log(data)
let videos = data.items
searchvedio(videos)
}
let  searchvedio = (x) => {
div1.innerText = ""
x.forEach(({ snippet, id: { videoId } }) => {

    let div = document.createElement("div")
    let url = snippet.thumbnails.medium.url

    let img = document.createElement("img")
    img.src = url

    let p = document.createElement("p")
    p.innerText = snippet.title
    p.setAttribut=("id","titel")

    let video_data = {
        snippet,
        videoId,
    }
    div1.onclick = () => {
        showVideo(video_data)
    }
    div.append(img, p)
    div1.append(div)
});
}
let showVideo = (video_data) => {
localStorage.setItem("storeVideos", JSON.stringify(video_data))
window.location.href = "video.html"
}