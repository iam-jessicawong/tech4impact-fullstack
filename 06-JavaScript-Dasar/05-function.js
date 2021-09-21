const bmi = function(height, weight) {
  height = Number(height)
  weight = Number(weight)

  if(isNaN(height) || isNaN(weight)) {
    return "Input number only"
  }
  else {
    height = height/100
    let result = (weight/(height*height)).toFixed(2)
    return result
  }
}