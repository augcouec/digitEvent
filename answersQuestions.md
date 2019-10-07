# Réponses Aux Questions Partie 1

## In Js, What are the differences between == and === ? 

Dans Javascript il existe deux types d'opération pour comparer deux valeur == et  === les doubles égales sont l'égalité 'faible' et les triples égales sont l'égalité 'stricte'. L'égalité faible convertie avant de comparer elle permet donc de comparer deux valeurs même si elles n'ont pas le même type par exemple 0 == false donnera true au contraire de l'égalité stricte pour qui seule 0 === 0 rendra true et 0 === false donnera false. L'égalité stricte n'est efficace qu'avec des valeurs du même type.  

## Look at the code below in Javascript, you have a for loop if you have setTimeout inside it. If log the loop counter inside setTimeout, what will be logged?
```
for(let i = 0; i < 10; i++) {
          setTimeout(function() {
               console.log(i);
          }, 5000);
}
```

C'est le compte du nombre 

## Can you please give a few improvements brought by ES6 ?

Les changements que je trouve les plus utiles avec ES6 sont:
#### Les backticks
Pour la facilité avec laquelle on peux insérer des avraibles 
```
const myStrin = `salut ${monNom}`;
```
##### Les fonctions fléchés
##### Les Spread Operators
```
const array = [1991, 8, 1]
new Date(...array)
```
donnera new Date(1991, 8, 1) cela simplifie vraiment les opérations sur les tableaux ou les objets.
##### les Classes 
Qui sont vraiment utiles surtout avec l'héritage.

## What is Git stash made for ?

Git stash permet de mettre les changements que l'on est pas sur d'implémenter ou qui ne sont pas terminés de côté et de les re-drop plus tard dans le code. Il est utile par exemple lorsque l'on à oublié de créer une branche et que l'on code sur le master.

## Si vous étiez votre propre boss dans votre précédente expérience, quel “reproche” vous seriez-vous adressé ?

Je me serais dit de communiquer plus sur l'avancement de mon travail et de me demader lorsque j'ai besion d'une chose pour faire avancer le projet que ce soit un conseil ou du matériel. Je me serais aussi reproccher de n'expliquer à aucun autre collaborateur la logique et l'architecture du projet pour que celui-ci soiot maintenable après mon départ.


