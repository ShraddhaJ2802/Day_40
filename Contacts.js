class Contacts {
    constructor(firstName, lastName, address, city, state, zip, phoneNumber, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }
    set firstName(firstName) {
        let pattern = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if(pattern.test(firstName)) {
            this._firstName = firstName;
        } else {
            throw "First Name is invalid.";
        }
    }
    get firstName() {
        return this._firstName;
    }

    set lastName(lastName) {
        let pattern = RegExp('^[A-Z]{1}[A-Za-z]{2,}$');
        if(pattern.test(lastName)) {
            this._lastName = lastName
        } else {
            throw "Last Name is invalid.";
        }
    }
    get lastName() {
        return this._lastName;
    }

    set address(address) {
        let pattern = RegExp('^[A-Za-z]{4,}$');
        if(pattern.test(address)) {
          this._address = address;  
        } else throw "Address Must have 5 Characters";
    }

    get address() {
        return this._address;
    }

    set city(city) {
        let pattern = RegExp('^[A-Za-z]{4,}$');
        if(pattern.test(city)) {
            this._city = city;
        } else throw "State Must have 4 Characters";
    }

    get city() {
        return this._city;
    }

    set state(state) {
        let pattern = RegExp('^[A-Za-z]{5,}$');
        if(pattern.test(state)) {
            this._state = state;
        } else throw "State Must have 4 Charactes";
    }

    get state() {
        return this._state;
    }

    set zip(zip){
        let Pattern = RegExp('^[0-9]{6}$');
        if(Pattern.test(zip)) {
            this._zip = zip;
        } else throw 'Zip Code must be of 6 digits.';
    }

    get zip(){
        return this._zip;
    }

    set phoneNo(phoneNo) {
        let Pattern = RegExp('^[0-9]{2}|\s|[0-9]{10}$');
        if(Pattern.test(phoneNo)) {
            this._phoneno = phoneNo;
        } else throw 'Invalid Phone Number.';
    }

    get phoneNo() {
        return this._phoneno;
    }

    set email(email){
        let Pattern = RegExp('^[a-zA-Z0-9]+([+_.-][a-zA-Z0-9]+)*[@][a-zA-Z0-9]+[.][a-zA-Z]{2,4}([.][a-zA-Z]{2,4})?$');
        if(Pattern.test(email)){
            this._email = email;
        } else throw "Invalid Email ID";
    }

    get email() {
        return this._email;
    }
    toString() {
        return "First Name= " + this.firstName
            + " Last Name= " + this.lastName
            + " Address= " + this.address
            + " City= " + this.city
            + " State= " + this.state
            + " Zip= " + this.zip
            + " Phone Number = " + this.phoneNumber
            + " Email = " + this.email;
    }
}

  

//Array Creation
let arr=new Array(new Contacts("Shraddha", "Jadhav", "Shenawadgoan", "A.nagar", "Maha", "712221", "791545418", "jadhavshraddha@gmail.com"), 
        new Contacts("Bhaskar", "Jawale", "Kopargoan", "A.nagar", "Maha", "707556", "9911668795", "jawalebhaskar@gmail.com"),
        new Contacts("Vishal", "Shinde", "Latur", "Latur", "Maha", "700004", "9011234587", "vishal@gmail.com"));
   
    for(let i=0; i<arr.length; i++){
        console.log(arr[i].toString());
    }