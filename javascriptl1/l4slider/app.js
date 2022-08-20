var slides = document.querySelectorAll(".carousel-item");
// console.log(slides); //nodelist
var dots = document.getElementsByClassName("dot");
// console.log(dots); //html collection
var currslide = 1;

carousel(currslide);

// Prev btn
document.getElementById("prev").addEventListener("click",function(){
    carousel(currslide -= 1)
});
// next btn
document.getElementById("next").addEventListener("click",function(){
    carousel(currslide += 1)
});

for(var q=0; q<dots.length;q++){
    dots[q].addEventListener("click",function(){
        // console.log(this.getAttribute("data-bs-slide-to"));
        currslide = this.getAttribute("data-bs-slide-to")
        carousel(currslide);
    })
}

function carousel(slidenum){

	var x;
	// hide all slides
	for(x=0; x < slides.length; x++){
		slides[x].style.display = "none"
	}

	for(y=0; y < dots.length; y++){
		// dots[y].classList.remove("active");
		// dots[y].className = "dot";
		dots[y].className = dots[y].className.replace('active','');
		// class ="dot "
	}

	// res for currslide 1 to 3 & 3 to 1 ( 4 to 1 ) ( 0 to 4 )
    if(slidenum > slides.length){
        currslide = 1;
    }else if(slidenum < 1){
        currslide = slides.length
    }

    // console.log(currslide);

    slides[currslide-1].style.display = "block";

    // dots[currslide-1].className = "dot active";
    dots[currslide-1].className += "active";
    // dots[currslide-1].classList.add("active");

}

//slide         0         1          2
//currslide     1-1=0     2-1=1    3-1=2

