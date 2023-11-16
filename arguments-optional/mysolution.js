function addTogether() {
    const [first, seccond] = arguments
    if(typeof (first) === 'number') {
      if(typeof (seccond) === 'number') return first + seccond
      if(arguments.length === 1) return  (seccond) => addTogether(first, seccond)
    }
  }
  
   console.log(addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ"));