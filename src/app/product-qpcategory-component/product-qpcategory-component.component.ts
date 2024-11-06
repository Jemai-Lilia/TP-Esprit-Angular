import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../Models/Product';

@Component({
  selector: 'app-product-qpcategory-component',
  templateUrl: './product-qpcategory-component.component.html',
  styleUrls: ['./product-qpcategory-component.component.css']
})
export class ProductQPCategoryComponentComponent {
  constructor(private ac:ActivatedRoute){}
  id: number;
  listProducts : Product[]=[
    {"id":1, "name":"Refrigérateur LGInox","image":"assets/images/refrigerateur_samsung.jpg","categoryId":1,"description":"","price":2800,"brand":"LG","promotion":0},
    {"id":2, "name":"Refrigérateur SamsungBlanc","image":"assets/images/refrigerateur.jpg","categoryId":1,"description":"", "price":2400,"brand":"Samsung","promotion":0},
    {"id":3, "name":"Lave vaisselle Beko","image":"assets/images/laive_Vaiselle.jpg", "categoryId":1,"description":"","price":1875,"brand":"BEKO", "promotion":0},
    {"id":4, "name":"Oppo SmartPhone","image":"assets/images/smart_phones/Oppo_smart.jpg","categoryId":4,"description":"", "price":1200,"brand":"OPPO","promotion":0},
    {"id":5, "name":"Hachoir","image":"assets/images/hachoir.jpg","categoryId":2,"description":"","price":120,"brand":"Moulinex", "promotion":0},
    {"id":6, "name":"TV 50''LG","image":"assets/images/tv_images_son/tv1.jpg","categoryId":5, "description":"","price":1800,"brand":"LG","promotion":0},
      ]
  list : Product[]=[];
  ngOnInit(){
    this.ac.queryParamMap.subscribe(res=>{this.id=Number(res.get('id'));
  for(let p of this.listProducts){
     if (p.categoryId == this.id){
      this.list.push(p);
     }
  }})
  }
}
