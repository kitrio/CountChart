const btnFetch = document.getElementById ("btnFectch");
const btnToday = document.getElementById("btnToday");
function counter(name){
    let a = document.getElementById(name).value;
    document.getElementById(name).value = ++a;
}
    
    btnFetch.addEventListener ("click",
        () => {
            let form  = new FormData(document.getElementById("formCnt"));
            axios({
                method: "POST",
                headers: {
					'Access-Control-Allow-Origin' : '*',
                    'Accept' : 'application/json, text/plain'
				  },
                url: 'http://localhost/cnt.php',
                data: form
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