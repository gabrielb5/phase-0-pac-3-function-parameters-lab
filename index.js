const name = "";

function introduction(name) {
    const introduction = `Hi, my name is ${name}.`;
    return introduction;
}

introduction("Aki");

function introductionWithLanguage(name,language) {
    const introductionWithLanguage = `Hi, my name is ${name} and I am learning to program in ${language}.`;
    return introductionWithLanguage;
  }

introductionWithLanguage("Aki","Ember.js");


function introductionWithLanguageOptional(name,language = "JavaScript") {
    const introductionWithLanguageOptional = `Hi, my name is ${name} and I am learning to program in ${language}.`
    return introductionWithLanguageOptional;
    

}

