const person = Object.create(
  {
    calculateAge() {
        console.log('Age:' ,new Date().getFullYear() - this.birthYear)
    },
  },
  {
    name: {
      value: "Alex",
      enumerable: true,
      writable: true,
      configurable: true,
    },
    birthYear: {
      value: 1993,
    },

    age: {
      get() {
        return new Date().getFullYear() - this.birthYear;
      },
      set(value) {
        document.body.style.background = "red";
        console.log("Set age", value);
      },
    },
  }
);
person.name = "Max";

for (let key in person) {
    if (person.hasOwnProperty(key)){
        console.log("key", key, person[key]);
    }
}
 
