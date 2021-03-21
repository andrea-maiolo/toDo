const colorTask = function(value){
    switch(value) {
        case "medium":
            this.style.backgroundColor = "orange"
          break;
        case "low":
          this.style.backgroundColor = "yellow"
          break;
        case "high":
            this.style.backgroundColor = "red"
            break;
        default:
            this.style.backgroundColor = rgba(50, 69, 155, 0.568)
      }
}

export {colorTask}