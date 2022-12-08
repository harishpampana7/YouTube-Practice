
const navbar = () => {
    return `<div id="logo">
                <img src="https://cdn.icon-icons.com/icons2/1659/PNG/512/3844438-hamburger-menu-more-navigation_110319.png"  alt="">
                <a href="index.html"><img src="https://1000logos.net/wp-content/uploads/2017/05/YouTube-Logo-2011.jpg" style="width:120px"; alt=""></a>
            </div>

            <div id="search">
                <input type="text" placeholder="Search"/>
                
                <button id="btn" onclick="searchVideos()"><i id="icon" class="fa fa-search" ></i></button>
            </div>

            <div id="options">
                <a style="color:black" href="index.html"><i class="fa fa-home" style="font-size:30px"></i></a>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYlPT5rWa7WIGGPvh3IFKp5u2ghtP4z8LvsrzLkqeILj2mMQOv-VDLoLnercyDEHMceWg&usqp=CAU" style="width:32px"; alt="" />
                <img src="https://img.icons8.com/ios/500/appointment-reminders--v2.png" style="width:25px"; alt="" />
                <a><button><i class="gg-add-r"></i></button></a>
                <img src="https://i.ibb.co/SrSGP5b/81621823-633453304127762-4773713006388159486-n.jpg" style="width:30px"; alt="" />
            </div>`
}

export { navbar }