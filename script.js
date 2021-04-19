let subject = ['Math' , 'Biology', 'Geography', 'History'];

let students = [
    { 
        name :'Gio' , 
        lastname:'aaa' ,
        scores :[21 , 51, 70, 10]
    },
    { 
        name :'Nika' ,  
        lastname:'bbb', 
        scores :[51 ,41, 40, 50 ]
    },
    { 
        name :'Sopo' ,  
        lastname:'ccc',
        scores :[53 , 51,  30, 60 ]
    },
    {
         name :'Salome',  
         lastname:'ddd',
         scores :[61 , 31, 50, 70 ]
    }
   
];
let avg=[0,0,0,0];
function generateAvg(){
//calculate avarage
let avg=[0,0,0,0];

for (let i=0; i<students.length; i++){
    for(let j=0; j<subject.length; j++){
        avg[j]+= students[i].scores[j];
    }
}
for (let i=0; i<avg.length; i++){
    avg[i] /= students.length;
}
//generate html avarages
let  tmp='<tfoot>'+
    '<tr>'+
    '<td colspan="2"> Avarage </td>';

for(let i=0; i < avg.length; i++){
    tmp+=`<td>${avg[i]}</td>`;
}
tmp += '</tr>'+
    '</tfoot>';
document.querySelector('#container tfoot').innerHTML=tmp;

}
function generateHead(){
let thead= document.querySelector('#container thead tr');
let tmp= '<th>Name</th><th>Lastname</th>';
for (let i=0; i<subject.length; i++){
    tmp+=`<th>${subject[i]}</th>`;
}
thead.innerHTML = tmp;
}
function addRow(student){
let tbody = document.querySelector('#container tbody');
let tmp = `<tr>
            <td>${student.name}</td>
            <td>${student.lastname}</td>
            `;
for (let j = 0; j <student.scores.length; j++){
 tmp += `<td class="${avg[j] > student.scores[j] ? 'red' : 'green' }"> ${student.scores[j]}</td>`;
}
tmp += '</tr>';

tbody.innerHTML+=tmp;
return true;
}
function addStudent(e){
e.preventDefault();
let fields= document.querySelectorAll('#add_student_form input');
let newStudent= { 
    name:'',
    lastname:'',
    scores: []
};
for(let i=0; i< fields.length; i++){
    if (fields[i].name==='name'){
        newStudent.name=fields[i].value;
    }else if (fields[i].name === 'lastname'){
        newStudent.lastname=fields[i].value;
    }else{
        newStudent.scores.push(parseInt(fields[i].value) ? parseInt(fields[i].value):0);
    }
}
students.push(newStudent);
addRow(newStudent);
generateAvg();
return true;
}
function init(){
document.getElementById('add_student_form').addEventListener('submit', addStudent);
generateHead(); 
generateAvg();
for(let i=0; i< students.length; i++){
    addRow(students[i]);
    }
}
init();
