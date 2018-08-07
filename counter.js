var btnFetch = document.getElementById ("btnFectch");
var btnToday = document.getElementById("btnToday");
function counter(name){
    var a = document.getElementById(name).value;
    document.getElementById(name).value = ++a;
}

function saveCount2(){
    if (typeof(Storage !== "undefined")){
        localStorage.setItem("sizeCount")
    }else {
        alert("지원 되지 않습니다.")
    }
}

function saveCount(){
    var db = indexedDB.open("cars", 3);
    if (db.version !== '1.0') {
      var olddb = indexedDB.open('cars', 3);
      olddb.createObjectStore('big', {big: 1});
      //olddb.createIndex('BookAuthor', 'books', 'author', false);
      olddb.setVersion("1.0");  
    }
}


/*fetchAjax = fetch('http://localhost/cnt.php')
.then(function(response) {
    response.text().then(function(text){
    document.querySelector('article').innerHTML = text;
    })
});*/

//const form2 = new FormData();
//form2.append('inBig','inMd','inSm','inTotal');
btnFectch.addEventListener ("click",
    function(){
        var form  = new FormData(document.getElementById("formCnt"));
        fetch('http://localhost/cnt.php' , {
        method : "POST",
        headers: {
          'Accept': 'application/json, application/xml, text/plain, text/html, *.*'
          },
        body: form
        })
        .then(console.log(form))
        .catch(err=>console.log(err));
    }
);
btnToday.addEventListener("click",
    function(){
        fetch('http://localhost/checkCnt.php')
        .then(function(res){
            res.text().then(function(text){
            document.querySelector('article').innerHTML = text;
            })
        })
    }
)