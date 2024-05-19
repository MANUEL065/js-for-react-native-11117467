const evenNumbers = [50, 70, 90, 100];
const oddNumbers = [39, 65, 85, 43]; 

const processArray = (numbers) => {
    return numbers.map(examScores =>{
      

     if (examScores % 2 === 0){
        return examScores * examScores
       } 
       else {
        return examScores * 3
       }
    })
     
}
const examScores = [50, 39, 65, 70, 85, 90, 43, 100];
const proccessedArray = processArray(examScores);
     console.log( proccessedArray)

      

   

     const formatArrayStrings = (classNames, processedNumbers) => {
        
        if (classNames.lenght !== fees.lenght){
            throw new Error('Both arrays must have the same length');
          }

         return classNames.map((str, index) => {
            const fees = processedNumbers[index];
            if (fees % 2 === 0){
                return str.toUpperCase();
            }
            else {
                return str.toLowerCase();
            }
         });
     }

  const classNames = ['Manuel', 'kofi', 'Ama', 'John', 'Pep', 'Afia', 'Kojo', 'Joe'];
  const fees = [2500, 117, 195, 4900, 255, 8100, 129, 10000];
  const processedNumbers = processArray(fees);
  const formattedStrings = formatArrayStrings(classNames, processedNumbers);
  console.log(formattedStrings)


