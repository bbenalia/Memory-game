
function swapTemplate(templateId,parentId){
    var template = document.getElementById(templateId);
    var parent = document.getElementById(parentId);

    parent.innerHTML = "";

    parent.appendChild(document.importNode(template.content, true));
}