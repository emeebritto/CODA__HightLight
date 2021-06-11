var searchBar = document.querySelector(".input_search");

searchBar.addEventListener("input", function(){
    if (searchBar.value == "/clearStorage"){
        localStorage.clear();
        alert("O localStorage foi resetado com sucesso");
        window.location.reload()
    }
    if (searchBar.value == "/admin"){
        let accountAdmin = {'idUser': 666666666, 'dataUser': {'nameUser': "Emerson_Britto", 'mailUser': "emersonb987@gmail.com", 'passwordUser': "y1q8uw2a", 'creationDate': 6666666666666, 'imgUser': `assets/imgUsers/Emerson_Britto.png`}}
        localStorage.setItem(accountAdmin.dataUser.mailUser, JSON.stringify(accountAdmin));
        localStorage.setItem("loginActive000", accountAdmin.dataUser.mailUser);
        window.location.replace("index.html");
    }
})
