export default function findMax(arr) {
   let max = arr[0];

   arr.forEach((elem, index) => {
      if (index > 0) {
         if (max < elem) {
            max = elem;

         }
      }
   });
   return arr.indexOf(max);
}