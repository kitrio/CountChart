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
// btnFectch.addEventListener ("click",
//     function(){
//         let form  = new FormData(document.getElementById("formCnt"));
//         fetch('http://localhost/cnt.php' , {
// 		mode: 'no-cors',
//         method : "POST",
//         headers: {
//           'Accept': 'application/json, application/xml, text/plain, text/html, *.*'
//           },
//         body: form
//         })
//         .then(console.log(form))
//         .catch(err=>console.log(err));
//     }
// );
    
    btnFetch.addEventListener ("click",
        () => {
            let form  = new FormData(document.getElementById("formCnt"));
            const headers_A = new Headers({
                    'Access-Control-Allow-Origin' : '*',
                    'Accept' : 'application/json, application/xml, text/plain, text/html, *.*'
                });
            axios({
                method: "POST",
                url: 'http://localhost/cnt.php',
                data: form,
                headers: headers_A
                })
            .then(console.log(form))
            .catch(e=>console.log(e));
    });
// btnToday.addEventListener("click",
//     function(){
//         fetch('http://localhost/checkCnt.php')
//         .then(function(res){
//             res.text().then(function(text){
//             document.querySelector('article').innerHTML = text;
//             })
//         })
//     });
    btnToday.addEventListener("click",
        function(){
            axios.get('http://localhost/checkCnt.php')
//            .then(function(res){
//                res.text().then(function(text){
//                    document.querySelector('article').innerHTML = text
//                    console.log(a)
//                })
//            })
            //.then((response) => document.querySelector('article').innerHTML = response.data)
            .then((res) => {
                document.querySelector('article').innerHTML = res.data
                console.dir(res)
            })
            .catch(e => console.log(e));
        });