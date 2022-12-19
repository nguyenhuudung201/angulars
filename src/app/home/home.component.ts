import {Component} from "@angular/core";

@Component({
  selector:'app-home',
  templateUrl:'./home.component.html',
})
export class homeComponent{
    className:string ="T2210M";
    Number:number =2;
    classString="text-primary";
    categories:string[]=[
      "fashion","shoes","watch","ring"
    ];
    product : any =[
      {
        id:1,
        name: "iphone 14 pro max",
        price: 29000000,
        qty:5,
      },
      {
        id:2,
        name:"iphone 13 pro max",
        price:2500000,
        qty:0,
      },
      {
        id:3,
        name:"iphone 12 pro max",
        price:2200000,
        qty:2,
      },
    ]

    addStudent(){
      this.Number++;
      this.classString="text-primary";
    }
    removeStudent(){
      if(this.Number>0)
        this.Number--;
      if(this.Number==0)
        this.classString="text-danger";
    }

}
