import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {



  //injecting for getting http 
  constructor(private http:HttpClient) { }

  //all contacts
  allcontacts(){

    //api call to get all contacts
   return this.http.get('http://localhost:3000/contacts')

   



  }

  groupofcontact(groupid:any){
    return this.http.get("http://localhost:3000/groups/"+groupid)
  }


  viewcontacts(Contactid:any){
    return this.http.get('http://localhost:3000/contacts/'+Contactid)
  }


  viewgroups(){
    return this.http.get("http://localhost:3000/groups/")
  }
//api to
  addcontact(contact:any){
    return this.http.post("http://localhost:3000/contacts",contact)
  }

  //delete contact
  deletecontact(contactid:any){
    return this.http.delete("http://localhost:3000/contacts/" +contactid)
  }

  //editing contact
  editcontact(contactid:any,contact:any){
    return this.http.put("http://localhost:3000/contacts/"+contactid,contact)
    
  }





}
