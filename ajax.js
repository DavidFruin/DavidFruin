
     const form = document.getElementById("form");
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        checkEmail();
	checkPass();
    });
    function checkEmail() {
        var email = document.getElementById("email").value
        const params = new URLSearchParams();
        params.append("email", email);
        fetch(`script.php? ${ params }`, {
                "method": "GET"
}).then(function (response) {
    if (response.status >= 200 && response.status < 300) {
            return response.json();
    } else {
        return response.json().then(json => { throw new Error(json) });
    }
}).then(function (response) {
    console.log(response)
		if (response == true) {
			var passwordfield = document.getElementById("password")
			passwordfield.style.display = "block";
			var submitEmail = document.getElementById("submitEmail")
			submitEmail.style.display = "none";
			var submitPass = document.getElementById("submitPass")
			submitPass.style.display = "block";
		} else {
				console.log("not a user");
		}
});

    }

	 function checkPass() {
        var password = document.getElementById("password").value
        const params = new URLSearchParams();
        params.append("password", password);
        fetch(`script.php? ${ params }`, {
                "method": "GET"
}).then(function (response) {
    if (response.status >= 200 && response.status < 300) {
            return response.json();
    } else {
        return response.json().then(json => { throw new Error(json) });
    }
}).then(function (response) {
    console.log(response)
		if (response == true) {
			console.log(password)		
		} else {
				console.log("Failed Login");
		}
});

    }
