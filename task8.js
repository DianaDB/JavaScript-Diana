let firstMap = new Map();
firstMap.set ('school', 'teacher');
firstMap.set ('university', 'student');
firstMap.set ('work', 'economist');
console.log (firstMap.keys())
console.log (firstMap.values())
for (let elem of firstMap) {
    console.log(elem);
}