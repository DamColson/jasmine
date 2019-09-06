/**
 * Exercice sur les chaines de caractères.
 * Trouvez la façon de faire la plus optimal.
 * Il peut y avoir plusieur façon de faire.
 */
var tailleString = function (texte) {
    return texte.length; //Donner la taille de la chaine de caractères
}
var remplaceECar = function (texte) {
    return texte.replace('e', ' '); //Remplacer le premier e de la chaine par un espace
}
var concatString = function (texte1, texte2) {
    return texte1 + texte2; //Concatener les deux chaines de caractères
}
var afficherCar5 = function (texte) {
    return (texte[4]); //Afficher le cinquième caractère de la chaine
}
var afficher9Car = function (texte) {
    return texte.substring(0,9); //Afficher les 9 premiers caractères
}
var majusculeString = function (texte) {
    return texte.toUpperCase(); //mettre en majuscule la chaîne
}
var minusculeString = function (texte) {
    return (texte.toLowerCase()); //mettre en minuscule la chaîne
}
var SupprEspaceString = function (texte) {
    return (texte.trim()); //Supprimer les espaces avant et après la chaine
}
var IsString = function (texte) {
    return (typeof texte == 'string'); //Afficher true si le parametre d'entrée de la fonction est de type string
}
var AfficherExtensionString = function (texte) {
    return texte.split('.').reverse()[0]; //Afficher l'extension du fichier text.spli('.').pop()
}
var NombreEspaceString = function (texte) {
    return texte.split(' ').length - 1;; //Compter le nombre d'espace dans la chaine ( premier élement compte pas)
}
var InverseString = function (texte) {
    return texte.split('').reverse().join(''); //Inverser une chaine de caractères
}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
var calculPuissance = function (x, y) {
    return Math.pow(x, y); //Calculer la puissance d'un nombre par rapport à un autre (x à la puissance y)
}
var valeurAbsolue = function (nombre) {
    return Math.abs(nombre); //Afficher la valeur absolue d'un nombre
}
var valeurAbsolueArray = function (array) {
    return array.map(Math.abs); //Afficher les valeurs absolues de plusieurs nombres
}
var sufaceCercle = function (rayon) {
    return Math.round(Math.PI * Math.pow(rayon,2)); //Calculer la surface d'un cercle en fonction de son rayon. L'arondir à l'entier le plus proche
}
var hypothenuse = function (ab, ac) {
    return Math.hypot(ab, ac); //Calculer l'hypothènuse d'un triangle rectangle
}
var calculIMC = function (poids, taille) {
    return (Math.round(100 * (poids / (taille * taille))))/100; //Calculer l'IMC (Poids / (taille x taille).Ne garder que deux chiffres après la virgule.
}
