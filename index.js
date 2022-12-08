
// import { navbar } from './components/navbar.js';
// console.log('navbar:', navbar);

// let navbar_div = document.getElementById('navbar');
// navbar_div.innerHTML = navbar();


let API = "AIzaSyAZAtHB547Fq6vLg-Yp9nGIK7L0NhUH04M"

let search_results_div = document.getElementById("search_results");



async function searchVideos() {
    try{
        let inp = document.getElementById("search").value;
        // let url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=IN&key=${API_key}&maxResults=30`
        // https://youtube.googleapis.com/youtube/v3/search?q=${inp}&key=${API}&type=video&maxResults=30&part=snippet&order=viewCount&videoEmbeddable=true
        
         let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?q=${inp}&key=${API}&type=video&part=snippet&maxResults=30`);

        let data = await res.json();
        // console.log(data)

        let array_of_videos = data.items;
        console.log(array_of_videos)
        
        appendVideos(array_of_videos)
    }
    catch(err){
        console.log(err)
    }
    
}

const appendVideos = (arr) => {
    search_results_div.innerHTML = null;
    
    arr.forEach(({ snippet, id: { videoId } }) => {

        let url = snippet.thumbnails.medium.url;

        let titel = snippet.title;
        let channel_titel = snippet.channelTitle;
        let description = snippet.description;


        let div = document.createElement("div")
        let img = document.createElement("img")
        img.src = url;

        let name = document.createElement("h4");
        name.innerText=titel;

        let c_name = document.createElement("h5");
        c_name.innerText=channel_titel;

        let c_dec = document.createElement("h6");
        c_dec.innerText=description;

        let data = {
            videoId,
            snippet,
        };

        div.onclick = () => {
            storeClickedvideo(data)
        }

        div.append(img,name,c_name)
        search_results_div.append(div);
    });
}

// const showvideo = (x) => {
//     window.location.href = "video.html"
//     localStorage.setItem("clicked_video", JSON.stringify(x))
//     }



async function storeClickedvideo(data) {
        search_results_div.innerHTML = ""
        localStorage.setItem("clicked_item", JSON.stringify(data))
        window.location.href = "video.html"
    }

    // *******mostpopular*********
    
    let mostpop_div = document.getElementById("main")

    mostpop()

    async function mostpop() {
        let input = document.getElementById("search").value;
        let url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=IN&key=${API}&maxResults=30`
        let res = await fetch(url)
        let data = await res.json();
        console.log(data)
        let videos = data.items
        appendVideos(videos)
    }
