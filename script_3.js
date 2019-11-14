console.log('2.2.2 Pyramide de Mario');

let user_number = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
   for (let count = 1; count <= user_number; count++) {
     let spaceArray = Array(user_number - count).fill(" ");
     let signArray = Array(count).fill("#");
     let line = spaceArray.join("") + signArray.join(""); // array.join(",")
     console.log(line);//display the pyramid
   }
  console.log();
  console.log('Voici ta pyramide');
