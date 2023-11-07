function Login() {
    var done = 0;
    var username = document.login.username.value;
    var password = document.login.password.value;
    if (username == "hakim" && password =="hakim"){
            if(confirm("Apakah anda ingin login?") == true){
                window.location.href = "https://github.com/Zamharihakim"
            } else {
                alert("Login dibatalkan karna pasword salah!");
            }
            
    } else{
            if (done == 0) {
                alert("Username/Pasword Salah");
            }
    }
} 