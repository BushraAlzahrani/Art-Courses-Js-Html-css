




// document.querySelector('course-vid').addEventListener('click', (evt) => {
//   const currentVideo = evt.target.getAttribute('src')

//   if (currentVideo === gouacheCourse) {
//     evt.target.setAttribute('src', stickerCourse)
//   } else {
//     evt.target.setAttribute('src', gouacheCourse)
//   }
// })


// function changeVideo(){
    

//     const gouacheCourse = "videos/Gouache_course.mp4"
//     const stickerCourse = "videos/sticker_course.mp4"
    
//      vid = document.querySelector('course-vid')

//         const currentVideo = vid.getAttribute('src')
      
//         if (currentVideo === gouacheCourse) {
//             vid.setAttribute('src', stickerCourse)
//         } else {
//             vid.setAttribute('src', gouacheCourse)
//         }


// }





function changeToStickerCourse() { 

    let vid = document.getElementById("course-vid");

        isSupp = vid.canPlayType("video/mp4");
        if (isSupp == "") {
            vid.src = "Gouache_course.mp4";
        } else {
            vid.src = "videos/sticker_course.mp4";
        }
        vid.load();


    let title = document.getElementById("course-title");

    title.innerText = "5 Ways to Make Stickers at Home!";

    let desc = document.getElementById("course-desc");

    desc.innerText = "I hope you enjoyed seeing all the ways I have made stickers at home for my small business! I hope one of these methods will help you begin your sticker-making journey :)";

    
    
    
    
    }









