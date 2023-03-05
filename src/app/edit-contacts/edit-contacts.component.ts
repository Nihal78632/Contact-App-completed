import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { mycontacts } from 'src/models/mycontacts';

@Component({
  selector: 'app-edit-contacts',
  templateUrl: './edit-contacts.component.html',
  styleUrls: ['./edit-contacts.component.css']
})
export class EditContactsComponent implements OnInit {
  parameter:any
  allcontacts:mycontacts={}
  givendata:any={}
  groupid:any
  groupname:any
  contacts:any




  //injecting for getting webpage link
  constructor(private editcontactactivatedroute:ActivatedRoute,private api:ApiService,private router:Router){

   


  }
  ngOnInit(): void {


    
    //to get parameter of the page
    this.editcontactactivatedroute.params.subscribe(
      (result)=>{
       
        this.parameter=result['id']




      }



    )



    //to view the contact

    this.api.viewcontacts(this.parameter).subscribe(
      (data)=>{
        console.log(data);
        this.allcontacts=data
        
      }
    )

        //to get details of parameter

        this.api.viewcontacts(this.parameter).subscribe((paramdata:any)=>{
          this.givendata=paramdata
          this.groupid=paramdata.groupId
          console.log(paramdata.groupId);
      
      //to get group name
      
          this.api.groupofcontact(this.groupid).subscribe((Groupname:any)=>{
      
            this.groupname=Groupname.name
          })
          
        
        }
      
      
         )
        

    //viewing the different groups available in select option
    this.api.viewgroups().subscribe((contact)=>{
      this.contacts=contact

      


    })

   


    




    
  }

   //api call for editing details

   editdetails(){
   this.api.editcontact(this.parameter,this.allcontacts).subscribe(
    (result)=>{alert("Data updated Successfully...")
  this.router.navigateByUrl('')}
  )}


   

}
