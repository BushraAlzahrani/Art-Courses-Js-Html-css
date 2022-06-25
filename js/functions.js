
function changeToStickerCourse() { 

    let vid = document.getElementById("course-vid");

        isSupp = vid.canPlayType("video/mp4");
        if (isSupp == "") {
            vid.src = "Gouache_course.mp4";
        } else {
            vid.src = "media/videos/sticker_course.mp4";
        }
        vid.load();


    let title = document.getElementById("course-title");

    title.innerText = "5 Ways to Make Stickers at Home!";

    let desc = document.getElementById("course-desc");

    desc.innerText = "I hope you enjoyed seeing all the ways I have made stickers at home for my small business! I hope one of these methods will help you begin your sticker-making journey :)";

    img1 = document.getElementById("course-img1")
    img1.src= "https://cdn.shopify.com/s/files/1/2652/5526/products/1_1d94f88f-90c5-4c0a-b630-2349cc9d324f_800x800.jpg?v=1652684062"


    img1 = document.getElementById("course-img2")
    img1.src= "https://m.media-amazon.com/images/I/41K7CJa3kqL._AC_SX679_.jpg"

    img1 = document.getElementById("course-img3")
    img1.src= "https://cdn.shopify.com/s/files/1/2652/5526/products/1_355f35ac-79ab-4a24-8f9a-2a3306d42359_800x800.jpg?v=1612431546"



    }









