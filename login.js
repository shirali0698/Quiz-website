var objusers = [
	{
		username: "Shirali",
		password: "Shirali98"
	},
	{
		username: "Shreya",
		password: "Shreya98"
	}
]

function login()
{
	var username = document.getElementById("username").value
	var password = document.getElementById("password").value
	
	for(i=0; i <objusers.length; i++)
	{
		if(username == objusers[i].username && password == objusers[i].password)
		{
			console.log(username+ "is logged in")
			window.location.href = 'HTML.html'
			return
		}
		else
		{
			alert("Incorrect username or password!!!")
			console.log("Incorrect username or password!!!")
			
		}
	}
	
}

function register()
{
	var registerusername = document.getElementById("newusername").value
	var registerpassword = document.getElementById("newpassword").value
	
	var newUser = {
		username: registerusername,
		password: registerpassword
	}
	
	for(i=0; i<objusers.length; i++)
	{
		if(registerusername == objusers[i].username)
		{
			alert("username is already in use, Please select different")
		return
		}
		else if(registerpassword.length < 8)
		{
			alert("Password is short, Please use more than 8 characters")
		return
		}
		else
		{
			
			alert("Register successful")
			
			window.location.href = 'HTML.html';
		}
		
		
	}
	
	objusers.push(newUser)
	console.log(objusers)
	
}
