function sorting1(array){


  // first solution 
for (let i = 1; i < array.length; i++){
  var current = array[i];
  var j = i - 1;
  while ( j >= 0 && array[j] > current){
    array[j + 1] = array [j];
    j--;
  }
array[j + 1] = current;
}
}
//  second solution 
function sorting2(array){
return array.sort(function(a,b){return a - b;});

}

console.log(sorting1([1,4,3,-2,2,-50,-100,-2]));

sorting2([1,4,3,-2,2,-50,-100,-2]);
