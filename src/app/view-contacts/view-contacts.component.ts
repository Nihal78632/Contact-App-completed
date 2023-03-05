import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-view-contacts',
  templateUrl: './view-contacts.component.html',
  styleUrls: ['./view-contacts.component.css']
})
export class ViewContactsComponent implements OnInit {


  parameter:any

  specificdata:any=[]
  givendata:any={}
  groupid:any
  groupname:any
  dummy:any

  contactdetails:any
  constructor(private activatedroute:ActivatedRoute,private api:ApiService){

  }

  ngOnInit(): void {

    //to get parameter

    this.activatedroute.params.subscribe((data:any)=>{
      this.parameter=data.id



      
      
    //   this.api.allcontacts()
    // .subscribe((apidata:any)=>{
    //   for(let elem of apidata){
        
        
    //     if(data.id == elem.id){
         
          
    //       this.givendata=elem


    //       this.groupid=elem.groupId
    //       console.log(this.groupid);
          
    //       this.api.groupofcontact().subscribe((groupdata:any)=>{
    //         console.log(groupdata);
            
    //         for(let comp of groupdata){
    //           if(comp.id=this.groupid){
    //             this.groupname=comp.name
    //           }

    //         }




    //       })
          
    //     }
    //   }

    // })



    })

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
  
   




    
  }



}
