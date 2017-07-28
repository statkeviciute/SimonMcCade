var image  = ["images/slides/slide1.jpg", "images/slides/slide2.jpg",
			  "images/slides/slide3.jpg", "images/slides/slide4.jpg"];


// 		var imageNumber = 0;
// 		var imageLength = image.length -1;


// function changeImage(x) {
// 	imageNumber+= x;

// 	//if you reached end of array - start over
// 	if (imageNumber> imageLength){
// 		imageNumber = 0;
// 	}
		
// 	document.getElementById("slideshow").src = image[imageNumber];

// 	return false;
// }

// function autoRun() {
// 	setInterval("changeImage(1)", 2000)
// }	

var currentIndex = 0;

function changeImage() {
	document.querySelector('#slideshow').className += 'fadeOut';
	
	setTimeout(function() {
		document.querySelector('#slideshow').src = image[currentIndex];
		document.querySelector('#slideshow').className = "";
	}, 1500);



	currentIndex++;
	if (currentIndex >= image.length) {
		currentIndex = 0;
	}

	setTimeout(changeImage, 3000);
}

