let questList = new Map();
questList.set("John White", "Already is list");
questList.set("Mary", "Already is list");
questList.set("John Black", "Already is list");
questList.set("Harry", "Already is list");

console.log("Mary");
console.log(questList.has("Mary"));

console.log("Harry " + questList.get("Harry"));
console.log("List size: " + questList.size);
questList.delete("John Black");
console.log("List size after delete: " + questList.size);