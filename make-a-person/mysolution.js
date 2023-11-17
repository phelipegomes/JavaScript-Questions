const Person = function(first, last) {
    let firstName = first
    let lastName = last
  
    this.getFirstName = _ => `${firstName}`
    this.getLastName = _ => `${lastName}`
    this.getFullName = _ => `${firstName} ${lastName}`;
  
    this.setFirstName = name => {
      firstName = name
    }
  
    this.setLastName = name => {
      lastName = name
    }
  
    this.setFullName = (firstArg, seccondArg) => {
      firstName = firstArg;
      lastName = seccondArg;
    } 
  
    return "";
  };
  
  const obj = new Person('Phelipe', 'Gomes');