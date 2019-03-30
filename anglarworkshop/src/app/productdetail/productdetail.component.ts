import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {
@Input() selectedProduct : any;

  constructor() { }
  addProduct:any;
  addCart(){
    this.addProduct=this.selectedProduct;
    console.log(this.selectedProduct);
    
  }
  ngOnInit() {
  }

}
