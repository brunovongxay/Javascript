//2.2. Opérations & boucles

console.log('2.2.1 Calculs rapides');
//demandera le nombre à l'utilisateur avec un prompt
let user_number = prompt("De quel nombre veux-tu calculer la factorielle ?");
//initialiser variable result à 1
let result = 1
//fonction qui calcul la factorielle du user_number
const factorielle = () => {
  while(user_number >= 1) {
    result = result* user_number;
    user_number --;
  }
 return result
}
//appeler la fonction factorielle
console.log(`Le résultat est : ${factorielle()}`)
