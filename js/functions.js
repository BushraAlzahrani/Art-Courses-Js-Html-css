


function changeToGouacheCourse() { 

    let vid = document.getElementById("course-vid");

        isSupp = vid.canPlayType("video/mp4");
        if (isSupp == "") {
            vid.src = "media/videos/sticker_course.mp4";
        } else {
            vid.src = "media/videos/Gouache_course.mp4";
        }
        vid.load();


    let title = document.getElementById("course-title");

    title.innerText = "Gouache 101 · Tips and Techniques";

    let desc = document.getElementById("course-desc");

    desc.innerText = "What is gouache paint and how do you use it? Which brushes and paper should you use? Do you need to invest in the pricier brands or can the cheap ones perform just as well? Here is everything you need to know.";

    let img1 = document.getElementById("course-img1")
    img1.src= "https://m.media-amazon.com/images/I/81vYtTHFjaL._AC_SX679_.jpg"


    let img2 = document.getElementById("course-img2")
    img2.src= "https://m.media-amazon.com/images/I/51fCYIYw8vL._AC_SX679_.jpg"

    let img3 = document.getElementById("course-img3")
    img3.src= "https://m.media-amazon.com/images/I/81ho1PVzq+L._AC_SX679_.jpg"



    }



function changeToStickerCourse() { 

    let vid = document.getElementById("course-vid");

        isSupp = vid.canPlayType("video/mp4");
        if (isSupp == "") {
            vid.src = "media/videos/Gouache_course.mp4";
        } else {
            vid.src = "media/videos/sticker_course.mp4";
        }
        vid.load();


    let title = document.getElementById("course-title");

    title.innerText = "5 Ways to Make Stickers at Home!";

    let desc = document.getElementById("course-desc");

    desc.innerText = "I hope you enjoyed seeing all the ways I have made stickers at home for my small business! I hope one of these methods will help you begin your sticker-making journey :)";

    let img1 = document.getElementById("course-img1")
    img1.src= "https://cdn.shopify.com/s/files/1/2652/5526/products/1_1d94f88f-90c5-4c0a-b630-2349cc9d324f_800x800.jpg?v=1652684062"


    let img2 = document.getElementById("course-img2")
    img2.src= "https://m.media-amazon.com/images/I/41K7CJa3kqL._AC_SX679_.jpg"

    let img3 = document.getElementById("course-img3")
    img3.src= "https://cdn.shopify.com/s/files/1/2652/5526/products/1_355f35ac-79ab-4a24-8f9a-2a3306d42359_800x800.jpg?v=1612431546"



    }



    function changeBgColor() {
        let bodyColor = document.body;
        bodyColor.classList.toggle("dark-mode");
        
      }
    








