import characters from "./data.js";
const log = console.log


characters.forEach(function(char){
    log(char.name);
});


function buildContent(){
    document.querySelector('main').innerHTML = characters.map(function(char){
        //char represents each object from characters
        return `<section class = 'highlight' data-ref="${char.uuid}">
        <h2>${char.name}</h2>
        <p>${char.role}, ${char.personality}</p>
        </section>`;
    }).join('');
    //take each character object and turn it into an HTML string
    //join all those strings into one string
    //assign that one string as the innerHTML of <main>
}

function buildContent2(){
    const chunk = document.createDocumentFragment();
    //chunk is a temporary container for HTML elements and text
    characters.forEach(function(char){
        let section = document.createElement('section');//HTML section object
        let h2 = document.createElement('h2'); // HTML heading2 object
        let p = document.createElement('p');  //HTML paragraph object
        section.className = 'highlight';
        section.dataset.ref = char.uuid;
        log(section); //log({section}); to show properties
        h2.textContent = char.name;
        p.textContent = `${char.role} - ${char.personality}`;
        chunk.append(section);
        section.append(h2, p);

    });
    document.querySelector('main').append(chunk);
}


function clearContent(){
    document.querySelector('main').innerHTML = '';
}

clearContent();
// buildContent();
buildContent2();

