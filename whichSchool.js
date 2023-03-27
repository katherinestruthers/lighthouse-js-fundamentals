const whichSchool = function (age) {
  if (age < 13) {
    return "Elementary School";
  }
  else if (age >= 13 && age <= 18) {
    return "Secondary School";
  }
  else {
    return "Lighthouse Labs";
  }
}

// testing
console.log(whichSchool(8));
console.log(whichSchool(13));
console.log(whichSchool(19));