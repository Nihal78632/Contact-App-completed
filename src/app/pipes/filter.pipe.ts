import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(allcontacts:any , searchkey:String , Propertyname:string): any {
const result:any=[];

if(!allcontacts || searchkey==''  || Propertyname==''){
  return allcontacts
}

allcontacts.forEach((contact:any)=>{
  
  if(contact[Propertyname].trim().toLowerCase().includes(searchkey.trim().toLowerCase())){
    result.push(contact)
  }



})


    return result;
  }

}
