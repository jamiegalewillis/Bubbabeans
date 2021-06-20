

var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]

   var counts = {};
   
   for (var i = 0; i < officeItems.length; i++) {
     var num= officeItems[i];
     counts[num] = counts[num] ? counts[num] + 1 : 1;
   }
   
   console.log(counts['computer'])
 

var people = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ] 




for(let x = 0; x < people.length; x++) {
    if(people[x].age >= 18){
       console.log(people[x].name + " Is Old Enough");
    }else {
       console.log(people[x].name + " Is Not Old Enough");
    } 
}
