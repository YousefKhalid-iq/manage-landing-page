const toggleOn = document.querySelector(".toggle-on-cont");
const active = document.querySelector(".menu-container");
const toggleOff = document.querySelector(".toggle-off-cont");
const shadow = document.querySelector(".dark-cont");
const shadow2 = document.querySelector(".header-text-cont");

toggleOn.addEventListener("click", function () {
	active.classList.toggle("press");
});

toggleOn.addEventListener("click", function () {
	toggleOff.classList.toggle("press2");
});

toggleOn.addEventListener("click", function() {
	toggleOn.classList.toggle("press3")
});

toggleOff.addEventListener("click", function() {
	active.classList.toggle("press")
});

toggleOff.addEventListener("click", function() {
	toggleOff.classList.toggle("press2")
});

toggleOff.addEventListener("click", function() {
	toggleOn.classList.toggle("press3")
});

toggleOn.addEventListener("click", function() {
	shadow.classList.toggle("shadow")
});

toggleOff.addEventListener("click", function() {
	shadow.classList.toggle("shadow")
});

toggleOn.addEventListener("click", function() {
	shadow2.classList.toggle("shadow")
});

toggleOff.addEventListener("click", function() {
	shadow2.classList.toggle("shadow")
});

const opinion1 = document.querySelector("#opinion-1");
const opinion2 = document.querySelector("#opinion-2");
const opinion3 = document.querySelector("#opinion-3");
const opinion4 = document.querySelector("#opinion-4");

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");

function toggleFirst() {
	if (opinion1.style.display === "none") {
		opinion1.style.display = "block";
		opinion2.style.display = "none";
		opinion3.style.display = "none";
		opinion4.style.display = "none";
		btn1.style.backgroundColor = "hsl(12, 88%, 59%)"
		btn2.style.backgroundColor = "transparent";
		btn3.style.backgroundColor = "transparent";
		btn4.style.backgroundColor = "transparent";
	} else {
		opinion1.style.display = "block"
		opinion2.style.display ="none";
		opinion3.style.display = "none";
		opinion4.style.display = "none";
		btn1.style.backgroundColor = "hsl(12, 88%, 59%)"
		btn2.style.backgroundColor = "transparent";
		btn3.style.backgroundColor = "transparent";
		btn4.style.backgroundColor = "transparent";
		btn1.addEventListener("click", function() {
			opinion1.classList.toggle("select-1")
		});
	}
}
		
function toggleSecond() {
	if (opinion2.style.display === "none") {
		opinion2.style.display = "block";
		opinion1.style.display = "none";
		opinion3.style.display = "none";
		opinion4.style.display = "none";
		btn2.style.backgroundColor = "hsl(12, 88%, 59%)"
		btn1.style.backgroundColor = "transparent";
		btn3.style.backgroundColor = "transparent";
		btn4.style.backgroundColor = "transparent";
	} else {
		opinion2.style.display = "block";
		opinion1.style.display = "none";
		opinion3.style.display = "none";
		opinion4.style.display = "none";
		btn2.style.backgroundColor = "hsl(12, 88%, 59%)"
		btn1.style.backgroundColor = "transparent";
		btn3.style.backgroundColor = "transparent";
		btn4.style.backgroundColor = "transparent";
		btn2.addEventListener("click", function() {
			opinion2.classList.toggle("select-1")
		});
	}	
}
		
function toggleThird() {
	if (opinion3.style.display === "none") {
		opinion3.style.display = "block";
		opinion1.style.display = "none";
		opinion2.style.display = "none";
		opinion4.style.display = "none";
		btn3.style.backgroundColor = "hsl(12, 88%, 59%)"
		btn2.style.backgroundColor = "transparent";
		btn1.style.backgroundColor = "transparent";
		btn4.style.backgroundColor = "transparent";
	} else {
		opinion1.style.display = "none";
		opinion2.style.display = "none";
		opinion3.style.display = "block";
		opinion4.style.display = "none";
		btn3.style.backgroundColor = "hsl(12, 88%, 59%)"
		btn2.style.backgroundColor = "transparent";
		btn1.style.backgroundColor = "transparent";
		btn4.style.backgroundColor = "transparent";
		btn3.addEventListener("click", function() {
			opinion3.classList.toggle("select-1")
		});
	}
}

function toggleFourth() {
	if (opinion4.style.display === "none") {
		opinion4.style.display = "block";
		opinion1.style.display = "none";
		opinion2.style.display = "none";
		opinion3.style.display = "none";
		btn4.style.backgroundColor = "hsl(12, 88%, 59%)"
		btn2.style.backgroundColor = "transparent";
		btn3.style.backgroundColor = "transparent";
		btn1.style.backgroundColor = "transparent";
	} else {
		opinion1.style.display = "none";
		opinion2.style.display = "none";
		opinion4.style.display = "block";
		opinion3.style.display = "none";
		btn4.style.backgroundColor = "hsl(12, 88%, 59%)"
		btn2.style.backgroundColor = "transparent";
		btn3.style.backgroundColor = "transparent";
		btn1.style.backgroundColor = "transparent";
		btn4.addEventListener("click", function() {
			opinion4.classList.toggle("select-1")
		});
	}
}
