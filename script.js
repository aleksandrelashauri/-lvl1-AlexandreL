class Table{
    header = [];
    tableId = '';
    constructor(id, header){
        this.tableId = id;
       this.header = header;
       this.generateHead();
    }
    //for add Row
    addRow(student, classes) {
        let tbody = document.querySelector(`#${this.tableId} tbody`);
        let tmp = `<tr>
        <td>${student.name}</td>
        <td>${student.lastname}</td>
        `;
        for (let j = 0; j < student.scores.length; j++) {
            tmp += `<td class="${classes}">${student.scores[j]}</td>`;
        }
        tmp += '</tr>';
        tbody.innerHTML += tmp;
        return true;
    }
    //for add haeder
    generateHead() {
        let thead = document.querySelector(`#${this.tableId} thead tr`);
        let tmp = '';
        for (let i = 0; i < this.header.length; i++) {
            tmp += `<th>${this.header[i]}</th>`;
        }
        thead.innerHTML = tmp;
    }
    //  (??)
   generateFooter(){
   }
    
}
class StudentsList extends Table{
    subjects = [];
    students = [];
    avg = [];
    constructor(students, subjects){
        let header = ['Name', 'Lastname'];
        super('container', [...header, ...subjects]);
        this.students = students;
        this.subjects = subjects;
        this.eventListeners();
        this.generateAvg();
        this.generateTable();
    }
    eventListeners(){
        document.getElementById('add_student_form').addEventListener('submit', this.addStudent.bind(this));
    }
    generateTable(){

        this.generateHead();
        this.generateFooter();
        for (let i = 0; i < students.length; i++) {
            this.addRow(students[i]);
        }
    }
//footer
    generateFooter(){
        let tmp = '<tfoot>' +
            '<tr>' +
            '<td colspan="2">Avarage</td>';
        for (let i = 0; i < this.avg.length; i++) {
            tmp += `<td>${this.avg[i]}</td>`;
        }
        tmp += '</tr>' +
            '</tfoot>';
        document.querySelector('#container tfoot').innerHTML = tmp;
    }
  //avarage
     generateAvg() {
     
        for (let i = 0; i < this.students.length; i++) { 
            for (let j = 0; j < this.students[i].scores.length; j++) {
                this.avg[j] = this.avg[j] ? this.avg[j] + this.students[i].scores[j] : this.students[i].scores[j];
            }
        }
        for (let i = 0; i < this.avg.length; i++) {
            this.avg[i] /= this.students.length;
        }
    }
    addStudent(e) {
        e.preventDefault();
        let fields = document.querySelectorAll('#add_student_form input');
        let newStudent = {
            name: '',
            lastname: '',
            scores: []
        };
        for (let i = 0; i < fields.length; i++) {
            if (fields[i].name === 'name') {
                newStudent.name = fields[i].value;
            } else if (fields[i].name === 'lastname') {
                newStudent.lastname = fields[i].value;
            } else {
                newStudent.scores.push(parseInt(fields[i]. value) ? parseInt(fields[i].value) : 0);
            }
        }
        this.students.push(newStudent);
        this.addRow(newStudent);
        this.generateAvg();
        return true;
    }
}
let subjects = ['html', 'js', 'math', 'css'];
let students = [
    {
        name: 'one',
        lastname: 'aaa',
        scores: [85, 30, 9, 82]
    },
    {
        name: 'two',
        lastname: 'bbb',
        scores: [15, 31, 29, 27]
    },
    {
        name: 'three',
        lastname: 'ggg',
        scores: [65, 34, 69, 57]
    },
    {
        name: 'four',
        lastname: 'ddd',
        scores: [35, 34, 69, 52]
    }
];
new StudentsList(students, subjects);


