const fs = require('fs');
const { DOMParser } = require('xmldom');
const R = require('ramda');

const { isValid, elementsToArray, getGitHubProject } = require('./xmlfilter');

// efetua o processamento do xml e armazena a estrutura no objeto 'document'
const document = new DOMParser().parseFromString(fs.readFileSync('res/f-droid.xml', 'utf-8'));

const isAddedAfter2018AndUpdatedAfter2019 = isValid(R.__, 2018, 2019);

const addedApps = elementsToArray(document.getElementsByTagName('application'))
    .filter(isAddedAfter2018AndUpdatedAfter2019)
    .map(getGitHubProject);

console.log(addedApps.join('\n'));
 
// (Exercício 1) Identifique todas as declarações de funções neste projeto
    // Adicione um comentário identificando-as
    //Arquivo xmlfilter.js

    //isValid Line - Line 20
    //elementsToArray - Line 13
    //getGitHubProject - Line 11
    //contentOfSource - Line 7
    //contentOfAdded - Line 8
    //contentOfUpdated - Line 9
    //contentOfID - Line 10
    
   

// (Exercício 2) Identifique quais funções no projeto possuem efeitos colaterais (side-effects)
    // Adicione um comentário identificando-as
    //elementsToArray
    //getGitHubProject

// (Exercício 3) Identifique quais funções são curried
    // Adicione um comentário identificando-as
    //contentOfTag
    //contentOfSource
    //contentOfAdded
    //contentOfUpdated
    //contentOfID
    //isValid

// (Exercício 4) Identifique quais funções são high-order
    // Adicione um comentário identificando-as
    //isAddedAfter2018AndUpdatedAfter2019
    //addedApps/filter/map
    


// (Exercício 5) Crie um novo arquivo main2.js (baseado no main.js) que seleciona todos as apps adicionadas
// depois do ano 2000 e atualizadas em 2020. Ao imprimir as apps, além do nome, imprima
// a data que foi adicionada e a data da última atualização.