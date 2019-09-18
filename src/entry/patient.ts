
import {Deserializable} from "./deserializable.model";
export class Patient implements Deserializable {
  
        public id:number;
        public lastName :string;  
        public firstName :string;
        public gender : string;
        public email:string;
        public dob: string;
        public phoneNumber: number;
        public address: string;
        public account: string;
        public balance: Float32Array;
    deserialize(input: any) {
        Object.assign(this, input);
        return this;
        }
}
