function loadContent(){
    var xhr = new XMLHttpRequest();
    var url = "http://localhost/ajax_files/kode.json";
    xhr.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            document.getElementById("hasil").innerHTML =
this.responseText;
    }
};
xhr.open("GET", url, true);
xhr.send();
}