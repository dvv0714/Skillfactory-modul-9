const jsonString = `
{
 "list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
}
`;
let data = JSON.parse(jsonString)
let resultObj = {
    list: []
}
  for (let i = 0; i < 2; i++){
    let list = data.list[i]
    let studentObj = {
      name: list.name,
      age: Number(list.age),
      prof: list.prof
    }
    resultObj.list.push(studentObj);
 }
  
  console.log('resultObj', resultObj);