
let btn = document.querySelector("button");

btn.addEventListener("click", async ()=>{
    let fact = await getfacts();
    let p = document.querySelector(".para");
    p.innerText = fact;
    console.log(fact);
});


let url = "https://catfact.ninja/fact" ;
async function getfacts(){
    try{
        let response = await axios.get(url);
        return response.data.fact;
    }
    catch(e){
        console.log("Erro found",e);
    }
}
