const myForm=document.getElementById('myForm');
myForm.addEventListener('submit',function(e){
    e.preventdefault();
});

function fetchData(){
fetch("https://itunes.apple.com/search?term=gunsnroses.")
.then(response => {
    if(!response.ok){
        throw Error("ERROR");
    }  
    return response.json();
})
.then(results => {
    const html = results.results
    .map(results => {
        return `
        <div class= "results">
        <p> Name: ${results.artistName}</p>
        <p> track Name: ${results.trackName}</p>
        <p> country: ${results.country}</p>
        <p> artist View Url: ${results.artistViewUrl}</p>
        </div>
        `;
    })
    .join("");
    console.log(html);
    document.querySelector("#info").insertAdjacentHTML("afterbegin",html);

})
.catch(error =>{
    console.log(error);
});
}

fetchData();



