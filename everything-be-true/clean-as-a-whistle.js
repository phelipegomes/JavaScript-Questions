function truthCheck(collection, pre) {
    // Is everyone being true?
    return collection.every(obj => obj[pre]);
  }
  
  truthCheck([{ name: "Quincy", role: "Founder", isBot: false }, { name: "Naomi", role: "", isBot: false }, { name: "Camperbot", role: "Bot", isBot: true }], "isBot");