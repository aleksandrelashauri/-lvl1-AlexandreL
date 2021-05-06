const search = document.querySelector(".search-button");
const musicList=document.querySelector(".form");
const myTube=document.querySelector(".myTube");
search.addEventListener('click', fetchData);

function fetchData(){
let searchInput= document.querySelector('.input-class').value;
fetch(`https://itunes.apple.com/search?term=${searchInput}`)
.then(response => {
    if(!response.ok){
        throw Error("ERROR");
    }  
    return response.json();
})
//generation videos
.then(results => {
    const html = results.results
    .map(results => {
        return `
        <div class="card">
        <div class="text-container">
             <video class ="video" controls>
             <source src="${results.previewUrl}" type="video/mp4"> 
             </video>
        <div class="details"> ${results.artistName}</div>
        <div class="details"> ${results.trackName}</div>
        <div class="details"> ${results.country}</div>
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



