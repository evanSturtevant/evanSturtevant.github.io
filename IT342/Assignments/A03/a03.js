var numSpaces = document.getElementById("numspaces");
var totalCost = document.getElementById("totalCost");

numSpaces.addEventListener("change", function() {
    totalCost.innerHTML = numSpaces.value * 100;
})

var errorMsg = document.getElementById("errormsg");

function checkRequired(field){
    if (field.value == ''){
        errorMsg.innerHTML = `<p> ${field.name} cannot be left blank </p>`;
        
        field.focus();
        field.scrollIntoView();
    }
}

const phoneRegex = /\d{3}-\d{3}-\d{4}/;

function checkPhone(field){
    checkRequired(field);

    console.log(`Field = ${field.value}\nRegex = ${field.value.match(phoneRegex)}`)

    if (! phoneRegex.test(field.value)){
        errorMsg.innerHTML = `<p> ${field.name} must have format ###-###-#### </p>`
        field.focus();
        field.scrollIntoView();
    }
}

