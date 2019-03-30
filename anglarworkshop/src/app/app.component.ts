import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'anglarworkshop';
  name:string = "New"
  score:number = 100;

  student :any = {
    name : "New",
    studentId : "5921600211",
    weight : 55,
    height : 175
  }
  studentList = [{
    name : "New",
    studentId : "5921600211",
    weight : 55,
    height : 175
  },{
    name : "Anna",
    studentId : "5921600000",
    weight : 65,
    height : 185
  },{
    name : "Eve",
    studentId : "5921600211",
    weight : 45,
    height : 175
  }
]
constructor(){
  this.student.bmi = (this.student.weight/((this.student.height/100)*(this.student.height/100))).toFixed(2);
  this.studentList.map((object,index)=>{
    let obj :any= object;
    obj.bmi = (object.weight/((object.height/100)*(object.height/100))).toFixed(2);
      return obj;
  })
  console.log(this.studentList);
}

}
