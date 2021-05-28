
// fetch data from api
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
        
        <div class="col" >
             <img src="${results.image}" class="card-img-top d-shrink"  type="image"> 
             </image>
             <div class="card-body">
             <div class="rating"><i class="fa fa-star checked"></i> <i class="fa fa-star checked"></i>
                 <i class="fa fa-star checked"></i> <i class="fa fa-star checked"></i> <i class="fa fa-star"></i></div>
        <div> ${results.category}</div>
        <div> ${results.price}</div>
        <ul class=" row color-variant" >
        <li class="col-1 bg-light0"></li>
        <li class="col-1 bg-light1"></li>
        <li class="col-1 bg-light1"></li>
      </ul>
        </div>
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


// price ranger
let slider = document.getElementById("myRange");
let output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}

//change class on click 
function ChangeClass1() {
    document.getElementById("info").className = "row row-cols-lg-4  row-cols-sm-2 ";
 }
 function ChangeClass2() {
    document.getElementById("info").className = "row row-cols-lg-1";
 }
 function ChangeClass3() {
    document.getElementById("info").className = "row row-cols-lg-6";
 }
 function ChangeClass4() {
    document.getElementById("info").className = "row row-cols-lg-4 row-cols-sm-2";
 }
 function ChangeClass5() {
    document.getElementById("info").className = "row row-cols-xl-3 row-cols-sm-2";
 }
 function ChangeClass6() {
    document.getElementById("info").className = "row row-cols-lg-2";
 }

 