export interface LLSignup{
    name:"string",
    password:"string",
    email:"string"
}
export interface Comment {
    id: number;
    userId: number;
    userType: 'landlord' | 'renter';
    apartmentId: number;
    text: string;
    timestamp: Date;
  }
  export interface login{
email:string,
password:string
  }
  