export class Customer{
    id:number;
    firstName:string;
    lastName:string;
    numOfAdults?:number;
    numOfKIds?:number;
    highFloor?:boolean;
    porch?:boolean;
    separteBeds?:boolean;
    multipleRooms?:boolean;
    emailAddress?:string;
    address:string;
    phoneNumber:string;
    comments?:string;


    constructor(id:number,  firstName:string,lastName:string,phoneNumber:string,address:string)
   {
      this.id=id;
      this.firstName=firstName;
      this.lastName=lastName;
      this.phoneNumber=phoneNumber;
      this.address=address;
   }
}