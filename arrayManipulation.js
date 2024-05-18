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

      

   
