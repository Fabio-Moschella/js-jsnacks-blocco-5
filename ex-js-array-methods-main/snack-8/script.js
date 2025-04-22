const students = [
  {
    id: 1,
    name: "Marco Lanci",
    age: 32,
    class: "3C",
  },
  {
    id: 2,
    name: "Mario Banfi",
    age: 34,
    class: "4A",
  },
  {
    id: 3,
    name: "Luigi Banzi",
    age: 33,
    class: "5B",
  },
];

// Recupera la classe dello studente 'Marco Lanci'
// Risultato: '3C'
const student3c = students.filter((student) => student.class === "3C");
console.log(student3c);
const class3c = student3c.map((person) => person.class).join(", ");
console.log(class3c);
