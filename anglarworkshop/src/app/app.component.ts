import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  productList = [{
    pname : "ขนม",
    pId : "001",
    pCost : 500
  },{
    pname : "นม",
    pId : "002",
    pCost : 300
  },{
    pname : "เนย",
    pId : "003",
    pCost : 800
  }
]
 selectedProduct : any;
 selectProduct(p){
   console.log(p);
  
   this.selectedProduct = p;

 }
constructor(){
  
}

}
