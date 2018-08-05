function listAllValues(obj) {
    let result = []; //se crea variable con array vacio
    
    for (let key in obj) { //Itera key en obj
      if (obj.hasOwnProperty(key)) {
        result.push(obj[key]); //se realiza push dentro de object 
      }
    }
      return result;
    }

//ejemplo
let persons =
{
  name : 'Mikael Åkerfeldt',
  age : 44,
  hasKids : true
}    

let result = listAllValues(persons);
console.log(result);