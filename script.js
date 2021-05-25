const myForm=document.getElementById('myForm');
myForm.addEventListener('submit',function(e){
    e.preventdefault();
});

function fetchData(){
    fetch('https://fakestoreapi.com/products')
    .then(response => {
    if(!response.ok){
        throw Error("ERROR");
    }  
    return response.json();
})
.then(results => {
    const html = results
    .map(results => {
        return `
        <div class="card col">
             <img src="${results.image}"    class="card-img-top"  type="image"> 
             </image>
          
             <div class="card-body">

             <div class="rating"><i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i></div>

        <div> ${results.category}</div>
        <div> ${results.price}</div>
        <ul class=" row color-variant" >
        <li class="col-1 bg-light0"></li>
        <li class="col-1 bg-light1"></li>
        <li class="col-1 bg-light1"></li>
      </ul>
        </div>
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
let slider = document.getElementById("myRange");
let output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}