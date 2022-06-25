


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

    //course product images

    let img1 = document.getElementById("product-img1")
    img1.src= "https://m.media-amazon.com/images/I/81vYtTHFjaL._AC_SX679_.jpg"

    let img2 = document.getElementById("product-img2")
    img2.src= "https://m.media-amazon.com/images/I/51fCYIYw8vL._AC_SX679_.jpg"

    let img3 = document.getElementById("product-img3")
    img3.src= "https://m.media-amazon.com/images/I/81ho1PVzq+L._AC_SX679_.jpg"


    // course products links 

    let link1 = document.getElementById('product-link-1')
    link1.href = "https://www.amazon.com/dp/B00FZVEVV8?ref_=cm_sw_r_cp_ud_dp_VY69VZV43VBQNKMK13AV"

    let link2 = document.getElementById('product-link-2')
    link2.href = "https://www.amazon.co.uk/dp/B0027A5BSW?ref_=cm_sw_r_cp_ud_dp_P4QWK8A0V1GHVH6BX0VQ"

    let link3 = document.getElementById('product-link-3')
    link3.href = "https://www.amazon.com/dp/B00GMH9JO8?ref_=cm_sw_r_cp_ud_dp_VNKAGB29RVWXGW0P1YGN"



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

    //course product images

    let img1 = document.getElementById("product-img1")
    img1.src= "https://cdn.shopify.com/s/files/1/2652/5526/products/1_1d94f88f-90c5-4c0a-b630-2349cc9d324f_800x800.jpg?v=1652684062"


    let img2 = document.getElementById("product-img2")
    img2.src= "https://m.media-amazon.com/images/I/41K7CJa3kqL._AC_SX679_.jpg"

    let img3 = document.getElementById("product-img3")
    img3.src= "https://cdn.shopify.com/s/files/1/2652/5526/products/1_355f35ac-79ab-4a24-8f9a-2a3306d42359_800x800.jpg?v=1612431546"

    // course products links 

    let link1 = document.getElementById('product-link-1')
    link1.href = "https://munbyn.com/products/2-sticker-labels-on-1-core-compatible-with-shipping-label-printers-750-labels-per-roll"

    let link2 = document.getElementById('product-link-2')
    link2.href = "https://www.amazon.com/dp/B01GSOMVRG?ref_=cm_sw_r_cp_ud_dp_MQ6S56MNN4ERXJF9K75Z"

    let link3 = document.getElementById('product-link-3')
    link3.href = "https://munbyn.com/products/label-printer-commercial-grade-direct-thermal-high-speed-printer-compatible-with-amazon-ebay-etsy-shopify-4-6-label-printer?variant=42146940911854"


    }





      function changeBgColor() {
        let bodyColor = document.body;
        bodyColor.classList.toggle("dark-mode");

      }

    
    
    function changeDarkMode() { 

        let bodyColor = document.body.style.background= "black";
        localStorage.setItem('bgStoredValue', document.body.style.backgroundColor = bodyColor);

        let textColor = document.body.style.color= "white";
        localStorage.setItem('textColorStoredValue', document.body.style.color = textColor);
      }
      
      if(localStorage.bgStoredValue) {
        document.body.style.backgroundColor = localStorage.bgStoredValue;
        document.body.style.color   = localStorage.textColorStoredValue;


      }
    

      function changeLightMode() { 

        let bodyColor = document.body.style.background= "white";
        localStorage.setItem('bgStoredValue', document.body.style.backgroundColor = bodyColor);

        let textColor = document.body.style.color= "black";
        localStorage.setItem('textColorStoredValue', document.body.style.color = textColor);
      }
      
      if(localStorage.bgStoredValue) {
        document.body.style.backgroundColor = localStorage.bgStoredValue;
        document.body.style.color   = localStorage.textColorStoredValue;


      }



 
var objPeople = [
	{
		username: 'bushra',
		password: 'bushra22'
	}
]


function login() {

	var username = document.getElementById('Username').value
	var password = document.getElementById('Password').value

  objPeople.forEach(function(item){
    if(username == item.username && password == item.password) {
			console.log(username + ' is logged in!!!')
			return

		} else {
			console.log('incorrect username or password')
		}
    
  });

	
}


function registerUser() {

	var registerUsername = document.getElementById('newUsername').value
	var registerPassword = document.getElementById('newPassword').value
	
	var newUser = {
		username: registerUsername,
		password: registerPassword
	}
	


	objPeople.push(newUser)
  console.log(objPeople)
}







