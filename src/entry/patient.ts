export class Patient {
    constructor(
        public id:number, 
        public lastName :string,  
        public firstName :string,
        public gender : string,
        public email:string,
        public dob: Date,
        public address: string
        ){}

}
