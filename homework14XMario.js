// 3. Mario - Augment simple version to print out a whole pyramid like this:

//   # #
//  ## ##
// ### ###

let complexity=15;
let raw ='';
let reversedraw='';
for (let i=1;i<=complexity;i++){
  raw='';
  reversedraw='';
   for (let j=1;j<=complexity;j++){
    (i>=j)?raw=raw+'#':raw=raw+' ';
   }
   for (let k =0; k<raw.length;k++){
    reversedraw+=raw[raw.length-1-k]
   }
   console.log(reversedraw+' '+raw)
}
