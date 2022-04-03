function introduction(name){
    console.log(`'Hi, my name is ${name}'`);
}
introduction('Aki');
function introductionWithLanguage(name, language){
    console.log(`'Hi, my name is ${name} and I am learning to program in ${language} '`);
}
introductionWithLanguage("Aki","Ember.js");

function introductionWithLanguageOptional(name, language = "JavaScript") {
    console.log(`Hello, ${name} fav language is ${language}`);
}
introductionWithLanguageOptional("Gracie","Python");