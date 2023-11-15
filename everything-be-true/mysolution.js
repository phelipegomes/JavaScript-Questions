function truthCheck(collection, pre) {
    let count = 0
    for(const obj of collection) {
      if(obj[pre]) {
        count++
      }
    }
    return count === collection.length ?  true : false
  }
    
  truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "name")