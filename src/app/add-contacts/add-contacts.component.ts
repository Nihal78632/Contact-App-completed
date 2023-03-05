import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { mycontacts } from 'src/models/mycontacts';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-add-contacts',
  templateUrl: './add-contacts.component.html',
  styleUrls: ['./add-contacts.component.css']
})
export class AddContactsComponent implements OnInit {
  Mycontacts:mycontacts={}
  contacts:any


  constructor(private api:ApiService,private navigation:Router){
    //assigning initial value of select option
    this.Mycontacts.groupId="Select a group"

  }
  //onloading the page
  ngOnInit(): void {
//viewing the different groups available in select option
    this.api.viewgroups().subscribe((contact)=>{
      this.contacts=contact

      


    })
    
  }

  //adding contact

  addcontact(contact:any){
    this.api.addcontact(contact).subscribe(

      (data:any)=>{alert("Data added")
       //routing to home page
      this.navigation.navigateByUrl('')}

      
      
    )
   
    
  }



}
