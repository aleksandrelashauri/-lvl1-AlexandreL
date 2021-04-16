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

//calculate avarage
let avg=[0,0,0,0];

for (let i=0; i<students.length; i++){
    for(let j=0; j<subject.length; j++){
        avg[j]+= students[i].scores[j];
    }
}
for (let i=0; i<avg.length; i++){
    avg[i] /= subject.length;
}

//get containers
let container= document.getElementById('container');
let thead= document.querySelector('#container thead tr');
let tbody = document.querySelector('#container tbody');

//generate header 
let tmp= '<th>Name</th>' +
'<th>Lastname</th>';

for (let i=0; i<subject.length; i++){
    tmp+=`<th>${subject[i]}</th>`;
}
thead.innerHTML += tmp;

//generate html avarages

tmp='<tr>'+
    '<td colspan="2"> Avarage </td>';
for(let i=0; i < avg.length; i++){
    tmp+=`<td>${avg[i]}</td>`;
}
tmp += '</tr>';
tbody.innerHTML += tmp ;

//generate body 
tmp='';

for (let i = 0; i < students.length; i++) {
    tmp += `<tr>
             <td>${students[i].name}</td>
             <td>${students[i]['lastname']}</td>
             `;
    
    for (let j = 0; j < subject.length; j++){
        tmp+= `<td class="${avg[j] > students[i].scores[j] ? 'red' : 'green' }"> ${students[i].scores[j]}</td>`;
    }
    tmp += '</tr>';
}
tbody.innerHTML+=tmp;

// add Row

document.getElementById('inForm').onsubmit = function(e)
{
    let newRow,i;
    e = e || window.event;
    if (e.preventDefault)
    {
        e.preventDefault();
        e.stopPropagation();
    }
    e.returnValue = false;
    e.cancelBubble = true;
    newRow = '<tr>';
   
    for(i=0;i<this.elements.length;i++)
    {
        if (this.elements[i].tagName.toLowerCase() === 'input' && this.elements[i].type === 'text' )
        {//red.green
            newRow += `<td class="${this.elements[i] > '50' ? 'red' : 'green' }">`+this.elements[i].value+'</td>';
        }
    }
    document.getElementById('targetTbl').innerHTML += newRow + '</tr>';
    return false;
};



