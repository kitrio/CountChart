const btnFetch = document.getElementById("btnFectch");
const btnToday = document.getElementById("btnToday");
function counter(name) {
    let a = document.getElementById(name).value;
    document.getElementById(name).value = ++a;
}

btnFetch.addEventListener("click",
    () => {
        let form = new FormData(document.getElementById("formCnt"));
        axios({
            method: "post",
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Accept': 'application/json'
            },
            url: 'http://localhost/upload.php',
            data: form
        })
        .then(console.log(form))
        .catch(e => console.log(e));
    });

btnToday.addEventListener("click",
    () => {
        axios({
            method: "get",
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Accept': 'text/plain'
            },
            url:'http://localhost/checkcount.php'
        })
        .then((res) => {
            document.querySelector('article').innerHTML = res.data
            console.dir(res)
        })
        .catch(e => console.log(e));
    });