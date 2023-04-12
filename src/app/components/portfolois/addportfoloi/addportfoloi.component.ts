import { Component } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { addDoc, collection } from 'firebase/firestore';
import { Iportfolois } from 'src/app/models/iportfolois';
import { PortfoloisService } from 'src/app/services/portfolois.service';

@Component({
  selector: 'app-addportfoloi',
  templateUrl: './addportfoloi.component.html',
  styleUrls: ['./addportfoloi.component.scss']
})
export class AddportfoloiComponent {

  newportfolois:Iportfolois = {} as Iportfolois 
  constructor(private PS:PortfoloisService,private firestore:Firestore){}
  ngOnInit(){
   
    
 }

 addData(){
  console.log("ha");
  
  const collectionInstance=collection(this.firestore,'protfolios');
  addDoc(collectionInstance,this.newportfolois).then(()=>{
    console.log('data seved');
    
  }).catch((err)=>{
    console.log("no");
    
  })
    // this.PS.addData()  .subscribe((data)=>{
    //   // console.log("Contests",data);
    //   this.contest = data;
    // })

}

}
