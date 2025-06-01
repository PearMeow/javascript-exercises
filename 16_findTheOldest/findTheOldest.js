const findTheOldest = function(people = []) {
  let thePerson;
  let maxAge = 0;
  for (let person of people) {
    if (person.yearOfDeath === undefined) {
      if (maxAge < 2026 - person.yearOfBirth) thePerson = person;
      maxAge = maxAge > 2026 - person.yearOfBirth ? maxAge : 2026 - person.yearOfBirth;
    } else {
      if (maxAge < person.yearOfDeath - person.yearOfBirth) thePerson = person;
      maxAge = maxAge > person.yearOfDeath - person.yearOfBirth ? maxAge : person.yearOfDeath - person.yearOfBirth;
    }
  }
  return thePerson;
};

// Do not edit below this line
module.exports = findTheOldest;
