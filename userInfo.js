const createUserProfiles = (classNames, mordifedNames) => {
 return classNames.map((classNames, index) => {
         return{
             id: index + 1,
            classNames: classNames,
            mordifedNames: modifiedNames[index],
         
         }    
 });
         
}


const classNames = ['Manuel', 'kofi', 'Ama', 'John', 'Pep', 'Afia', 'Kojo', 'Joe'];
const modifiedNames = [ 'MANUEL', 'kofi', 'ama',    'JOHN', 'pep',    'AFIA', 'kojo',   'JOE' ];
const userProfiles = createUserProfiles(classNames, modifiedNames);
console.log(userProfiles);