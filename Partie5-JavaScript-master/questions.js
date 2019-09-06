var languagesArrayCreation = function () {

  return languages = ['Html','CSS','Java','PHP']; //Créer un tableau "languages" contenant "Html", "CSS", "Java", "PHP"
}

var numbersArrayCreation = function () {

    return numbers = [0, 1 ,2 ,3 ,4 ,5]; //Créer un tableau "numbers" contenant les numbers de 0 à 5
}

var ElementReplacement = function (languages) {
  languages[2] = 'Javascript'; //Remplacer le troisième élément du tableau par "Javascript"
  return languages;
}

var AddElementToLanguagesArray = function (languages) {
  languages.push('Ruby', 'Python');//Ajouter "Ruby" et "Python" à la fin du tableau
  return languages;
}

var AddElementToNumbersArray = function (numbers) {
  numbers.unshift(-2, -1); //Ajouter "-2" et "-1" au début du tableau numbers
  return numbers;
}

var deleteArrayFirstElement = function (languages) {
  languages.shift(0); //Supprimer le premier élément du tableau languages
  return languages;
}

var deleteArrayLastElement = function (languages) {
  languages.pop(4); //Supprimer le dernier élément du tableau languages
  return languages;
}

var stringToArray = function (socialMediaInString) {
  socialMedia = socialMediaInString.split(','); //Faire de la chaîne "socialMediaInString" un tableau "socialMedia"
  return socialMedia;
}

var arrayToString = function (languages) {
  languagesInString = languages.join(','); //Faire du tableau "languages" une chaîne "languagesInString". Séparer les languages par une virgule
  return languagesInString;
  }

var arraySort = function (socialMedia) {
  socialMedia.sort(); //Trier le tableau "socialMedia"
  return socialMedia;
}

var arrayInvert = function (languages){
  languages.reverse(); //Bonus : Inverser le tableau "languages"
  return languages;
}
