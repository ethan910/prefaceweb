document.addEventListener("DOMContentLoaded", function() {
	let oldNumber = window.localStorage.getItem("count")
	
	if (oldNumber === null) {
		document.querySelector(".counter").innerText = 0
	} else {
		document.querySelector(".counter").innerText = oldNumber
	}

	document.querySelector("button").onclick = function(){ 
		let userInput = prompt("password required")
		
		if (userInput == "20464597") {

			let counter = document.querySelector(".counter")

			let newNumber = parseInt(counter.innerText) + 1

			document.querySelector(".counter").innerText = newNumber

			window.localStorage.setItem("count", newNumber)
		} 
		else {
			alert("your not allowed pls stop trying")
		}
	}
})

// addEventListener
// onclick



