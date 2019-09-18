pragma solidity >=0.4.22 <0.6.0;

contract Personal{
    struct Patient{
        string  firstName;
        string  lastName;
        string  gender;
        string  email;
        string  dob;
        string addresses;
        uint256 phoneNumber;
    }
    address owner;
    modifier onlyOwner{
        require(msg.sender == owner);
        _;
    }
   enum Gender { Male, Female, Other } // Enum
   Patient  patient;
    constructor() public {
        patient.firstName = "Ulziimunkh";
        patient.lastName = "Boldoo";
        patient.gender = "M";
        patient.email = "ulziimunkh.b@gmail.com";
        patient.dob = "10-22-1992";
        patient.addresses = "ndpg";
        patient.phoneNumber = uint256(9667955952);
        owner = msg.sender;
    }
    
    function setAll(string memory _lastName, string memory _firstName, string memory _gender, 
    string memory _email, string memory _dob, string memory _addresses, uint256 _phoneNumber) public{
        patient.lastName = _lastName;
        patient.firstName = _firstName;
        patient.gender = _gender;
        patient.email = _email;
        patient.dob = _dob;
        patient.addresses = _addresses;
        patient.phoneNumber = _phoneNumber;
    }
    
    function setLastName(string memory _lastName) public{
        patient.lastName = _lastName;
    }
    
    function setFirstName(string memory _firstName) public{
        patient.firstName = _firstName;
    }
    
    function setEmail(string memory _email) public{
        patient.email = _email;
    }
    function setDob(string  memory _dob) public{
        patient.dob = _dob;
    }
    function setPhoneNumber(uint256  _phoneNumber) public{
        patient.phoneNumber = _phoneNumber;
    }
    function setAddress(string  memory _address) public{
        patient.addresses = _address;
    }
    
    function getFullName() public view returns (string memory, string memory){
        return (patient.firstName, patient.lastName);
    }
    
    function getAddress() public view returns (string memory){
        return (patient.addresses);
    }
    
    function getEmail() public view returns (string memory){
        return (patient.email);
    }

    function getPhoneNumber() public view returns (uint256){
        return (patient.phoneNumber);
    }
   
   function getOwner() public view returns(address){
       return (owner);
   }
   function getAll() public view returns (string memory, string memory, string memory, string memory, string memory, uint256, string memory, address){
        return (patient.firstName, patient.lastName,patient.gender, patient.email, patient.dob, patient.phoneNumber, patient.addresses, owner);
    }
    
}