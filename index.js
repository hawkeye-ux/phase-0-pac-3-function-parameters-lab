function introduction(firstName = "User") {
    return (`Hi, my name is ${firstName}.`);
}

function introductionWithLanguage(name = "User", language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}

function introductionWithLanguageOptional(name = "User", language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}