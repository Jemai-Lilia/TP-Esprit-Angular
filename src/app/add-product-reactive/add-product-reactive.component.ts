import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Category } from '../Models/category';

@Component({
  selector: 'app-add-product-reactive',
  templateUrl: './add-product-reactive.component.html',
  styleUrls: ['./add-product-reactive.component.css']
})
export class AddProductReactiveComponent implements OnInit {
  myForm: FormGroup;



  ngOnInit(){
    this.myForm=new FormGroup({
      name: new FormControl("",
        [Validators.required,
         Validators.minLength(5),
         Validators.pattern("^[a-zA-Z]*$"),
         ]),
      price: new FormControl("",
        [Validators.required,
          Validators.pattern("^\\d+(\\.\\d+)?$"),

        ]),
    description : new FormControl("",Validators.required),
    category : new FormControl("",Validators.required),
    promotion : new FormControl("", [
      Validators.required,
      Validators.pattern("^(0|[1-9][0-9]?)$"),

    ])
    })

  }



  get name(){
    return this.myForm.get('name');
  }
  get description(){
    return this.myForm.get('description');
  }
  get price(){
    return this.myForm.get('price');
  }
  get category(){
    return this.myForm.get('category');
  }
  get promotion(){
    return this.myForm.get('promotion');
  }

  save(){
    console.log(this.myForm.value);  }
}
