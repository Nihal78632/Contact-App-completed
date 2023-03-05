import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-all-contacts',
  templateUrl: './all-contacts.component.html',
  styleUrls: ['./all-contacts.component.css']
})
export class AllContactsComponent implements OnInit {
  allcontacts:any
  searchkey:string =''

  constructor(private api:ApiService,private routerallcontact:Router){


  }
  ngOnInit(): void {
    
    
    
    this.getallcontact()
    
    
  }
  //for viewing all the contact details

  getallcontact(){
    
    this.api.allcontacts()
    .subscribe((data:any)=>{
      console.log(data);
      //assigning values to global variable
      this.allcontacts=data
      
      
    })
  }


  //deleting contact
deletecontact(contactid:any){
  this.api.deletecontact(contactid).subscribe((data)=>{this.getallcontact()})

 
  
  

}

}

