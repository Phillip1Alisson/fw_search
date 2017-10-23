$(document).ready(function(){
    console.log('Esta rodando o arquivo');
    var file =
      {
            'itens': [{
                inputType: 'text',
                question : 'text of the queston',
                answer   : ['A', 'B', 'C'],
                nameInput: ['resp_1'],
                numbering: '1'
            },
            {
                inputType: 'select',
                question: 'text of the queston 2',
                answer: ['A', 'B', 'C'],
                nameInput: ['resp_1'],
                numbering: '2'
            }]


      };
    interpretJSON(file, $('body'));
});
const INPUT = {
    select   : document.createElement('select'),
    textarea : document.createElement('textarea'),
};

function interpretJSON(fileJson, container){
    //console.log(fileJson.itens[0].inputType);
    //console.log(fileJson);
    all(fileJson.itens[0].inputType, fileJson.itens[0].question ,container);
    // inputs(fileJson, container);
}

function all(elementName, text, container){
    var elementQuestion = returnComponentQuestion(elementName);
    var textQuestion    = returnLabelText(text);
    console.log(elementQuestion);
    console.log(textQuestion);    
    container.append(textQuestion);
    container.append(elementQuestion);    
    console.log(elementQuestion.type);
}

function returnComponentQuestion(component, nameComponent){
        var new_type;
        if(nameComponent == undefined || nameComponent == null || nameComponent == '')
            nameComponent = 'question#';
        switch(component){
        case 'select'   : new_type = document.createElement('select');
                          break;
        case 'textarea' : new_type = document.createElement('textarea');
                          break;
        case 'radio'   :
        case 'checkbox':
        case 'text'    : new_type = document.createElement('input');
                         new_type.type = component;
                         break;
        default : return false;
    }
    new_type.name = nameComponent;
    return new_type;
}

function returnLabelText(text){
    var label = document.createElement('label');
    return label.text = text;
}

function returnOptionsResp(component, options){
    switch(component.type){
        case 'select'  : $.each(options, function(index, value){
                            var option = document.createElement('option');
                            option.text = value;
                            component.append(option);
                         });
                         break;
        case 'radio'   : break;
        case 'checkbox': break;
        default        : return false;
    }
}