import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.scss'],
})
export class CreateGroupComponent implements OnInit {
jsonData: any = [];
  constructor() { 
    this.initializeJsonData();
  }
 FilterJSONData(ev: any){
   this.initializeJsonData();
   const val = ev.target.value;
   if(val && val.trim()!= ''){
     this.jsonData = this.jsonData.filter((item) => {
       return (item.name.toLowerCase().indexOf(val.toLowerCase())>-1);
     })
   }
 }

  initializeJsonData(){
    this.jsonData = [
      {
        "name": "Urvi",
        "mobile": "123"
      },
      {
        "name": "Shruti",
        "mobile": "12334"
      },
      {
        "name": "Kirti",
        "mobile": "123222222"
      },
      {
        "name": "Ila",
        "mobile": "12453433"
      }
    ]
  }

  ngOnInit() {}
selectVal(val){

}
}
