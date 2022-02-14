function showMessage(input, message, type) {
	const msg = input.parentNode.querySelector("small");
	msg.innerText = message;
	input.className = type ? "success" : "error";
	return type;
}

function showError(input, message) {
	return showMessage(input, message, false);
}

function showSuccess(input) {
	return showMessage(input, "", true);
}

function funcValidate(input, req_msg, invalid_msg) {
	if (input.value.trim() === "") {
		return showError(input, req_msg);
	}
    else{
        if(input.value.trim()<0){
            return showError(input, invalid_msg);
        }
        return showSuccess(input);
    }
}

const form = document.querySelector("#form");

const REQUIRED_MSG = "Please enter your value";
const INVALID_MSG = "Invalid Number";

form.addEventListener("submit", function (event) {
	// stop form submission
	event.preventDefault();

	// validate the form
	let topValid = funcValidate(form.elements["top"], REQUIRED_MSG, INVALID_MSG);
	let bottomValid = funcValidate(form.elements["bottom"], REQUIRED_MSG, INVALID_MSG);
	let heightValid = funcValidate(form.elements["height"], REQUIRED_MSG, INVALID_MSG);
	let densityValid = funcValidate(form.elements["density"], REQUIRED_MSG, INVALID_MSG);
	// if valid, submit the form.
	if (topValid && bottomValid && heightValid && densityValid) {
        let top = form.elements["top"].value;
        let bottom = form.elements["bottom"].value;
        let height = form.elements["height"].value;
        let density = form.elements["density"].value;

        let finalResult = (Math.PI*density*height*(top*top+top*bottom+bottom*bottom))/12000
        let result = document.querySelector("#result-id");
        result.innerText = finalResult.toFixed(2)
	}
});