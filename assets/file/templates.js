
function addTemplate(templateId,parentId){
    var template = document.getElementById(templateId.target.id);
    var parent = document.getElementById(parentId.target.id);
    console.log(parent);

    parent.appendChild(document.importNode(template.content, true));
    parent.removeChild(parent.childNodes[1]);
}

function playTemplate (){
    let temp = document.getElementById('play').content;
    let parent = document.getElementById('left_section');

    

    parent.appendChild(document.importNode(temp, true));

    removeTemplate(document.getElementById('play'),parent);
    console.log('debug');
}

function finishTemplate(){
    let temp = document.getElementById('finish').content;
    document.getElementById('left_section').appendChild(document.importNode(temp, true));
    console.log('debug2');
}

function registrationTemplate(){
    let temp = document.getElementById('registration').content;
    document.getElementById('left_section').appendChild(document.importNode(temp, true));
    console.log('debug3');
}

/*function addTemplate(template,parent){
    parent.appendChild(document.importNode(template.content, true));
    parent.removeChild(parent.childNodes[1]);
}*/

function removeTemplate(template,parent){
    let temp = template.id;
    console.log(parent.childNodes);
    
    let test = document.getElementById(temp);
    parent.removeChild(parent.childNodes[1]);
}