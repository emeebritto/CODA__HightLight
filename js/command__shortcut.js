var searchBar = document.querySelector(".top__search");

searchBar.addEventListener("input", function(){
    if (searchBar.value == "/clearStorage"){
        localStorage.clear();
        alert("O localStorage foi resetado com sucesso");
        window.location.reload()
    }
})