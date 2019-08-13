const btnFetch = document.getElementById ("btnFectch");
const btnToday = document.getElementById("btnToday");
function counter(name){
    let a = document.getElementById(name).value;
    document.getElementById(name).value = ++a;
}
    
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

    btnToday.addEventListener("click",
        function(){
            axios.get('http://localhost/checkCnt.php')
            .then((res) => {
                document.querySelector('article').innerHTML = res.data
                console.dir(res)
            })
            .catch(e => console.log(e));
        });