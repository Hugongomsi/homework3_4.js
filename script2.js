// HOME WORK WEEK 3 AND 4
// // 1.1)
// let myString = "hello,this,is,a,difficult,to,read,sentence";
// // 1.2)
// console.log(myString.length);
// //  1.3)
// myString = "hello this is a difficult to read sentence";
// // 1.4)
// console.log(myString);
// // ARRAY 2.)
// let favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];
// // 2.1)
// favoriteAnimals.push('turtle');
// //  2.2)
// console.log(favoriteAnimals);
// // 2.3)
// favoriteAnimals.splice(1, 0, "meerkat");
// // 2.4)
// console.log('my new array is the name of animal');
// //  2.5)
// console.log(favoriteAnimals);
// //  2.6)
// console.log('the array has a lenght of:' + favoriteAnimals.length);
// //  2.7)
// favoriteAnimals.splice(3, 1);
// //  2.8)
// console.log(favoriteAnimals);
// //  2.9)
// console.log("if i don't the positon and the of the array and i want to remove a element inside i would created a new array and i don't put the jim aminal");
// // 2.10)
// console.log('here you should show the index of the item meerkat is:' + 1);
// // 3.1) 

//   //  sum = 0;
// function mySummer(x,y,z) {
//   return (x+y+z);
//   }
// // this ligne is correct one but i console the result in other ligne  
// console.log(mySummer(20,12,26));
// // 2
//   let forme=['peugeot','car','mercedes'];
//   let picture=['blue','red','pink']
// function ColorCar(forme,picture) {
//   return(forme+picture);
// }
// console.log(ColorCar('peugeot','red'));
// //  3
// let myObject = {
//   type: 1,
//   color: 'red',
//   name: 'car',
// };
// // i console log for take the value of car 
// console.log(typeof myObject);
// function newFunction(type,color,name) {
//   return(type+color+name);
// }
// console.log(newFunction(1,'red','car'));
 
//   // 4
//       function vehicleType(model,image) {
//         return(model+image);
//       }
//       console.log(vehicleType('motorbike','blue'));  

// // //  5
//  (3 == 3) ? console.log('yes') : console.log('no')
// // // 6
// let Type = ['car','bicycle','motor'];
// let Color = ['blue', 'red', 'yellow','green'];
//  let Age = [1,5, 7, 10, 15];
//  function Vehicle(Type, Color, Age) {
//     return(Type+Color+Age)  
//  }
//  console.log(Vehicle(Type[0],Color[0],Age[1]));

// //  7
// let myNewList = ['motorbike', 'caravan', 'newbike', 'cartepilar','metro'];
// // // 8
//   console.log(myNewList[2]);
// // // 9
//    function Vehicle(myNewList,Color,Age){
//    return(myNewList+Color+Age);
//  }
//   console.log(Vehicle(myNewList[2],Color[3],Age[0]))
//   // 10
// let i;
//  let myWorld="";
//   for(i=0;i<myNewList.length;i++){
//        myWorld+=`Amazing Joe's Garage,we service`+" "+myNewList[i]+'\n';
//   }
//   console.log(myWorld);
//   // 11 i add  element inside the array myNewList and the console.log myworld changing 
//   for(i=0;i<myNewList.length;i++){
//        myWorld+=`Amazing Joe's Garage,we service`+" "+myNewList[i]+'\n';
//   }
//   console.log(myWorld);
//   // 12 the object
//    let myNewObject={};
//    console.log(typeof myNewObject);
//     //13 and 14
//     myNewObject={
//       profName:(`mr ahmed,mr george kary`),
//       theLang:('english'),
//     }  
//     console.log(myNewObject);
// // 15 after verification all comparaison is not correct only z==y
// let x=[1,2,3];
// let y=[1,2,3];
// let z=y;  
//  if(x==y){
//    console.log(true);
//  }
//  else{
//    console.log(false)
//  }
//  if(x===y){
//    console.log(true);
//  }
//  else{
//    console.log(false);
//  }
// if(z==x){
//   console.log(true);
// }
// else{
//   console.log(false);
// }
// if(z==y){
//   console.log(true);
// }
// else{
//   console.log(false);
// }
// //  16
// let o1 = {foo:"bar"};
// let o2 = {foo:'bar'};
// let o3 =o2;

// if(o2==o3){
//   console.log(true);
// }
// else{
//   console.log(false);
// }
// // 16.1) yes you can changing 03 to o2 because the have declered the value of o3 in o2
// if(o1==o3){
//   console.log(true);
// }
// else{
//   console.log(false);
// }
// // 16.2) no you cannot changing bacause 01 don't have same value that o3
// // and order is not a matter with(o2 or o3)
// // 17
// let bar=42;
// console.log(typeof typeof bar);
// // is a string
