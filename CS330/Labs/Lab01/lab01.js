// const button = document.getElementById("loadArray");
// Element.addEventListener("click", function() {
//     var intArray = [];
//     var sum = 0;
//     for (var i = 0; i < 10; i++){
//         var value = (Math.floor((Math.random()*100)));
//         sum += value;
//         intArray.push(value);
//     }

//     console.log(`Array = ${intArray}`)

//     var mean = sum / intArray.length;
//     var largeArray = [];

//     for (var i = 0; i < intArray.length; i++){
//         if (intArray[i] > mean){
//             largeArray.push(intArray[i]);
//         }
//     }

//     document.getElementById("output").innerHTML=
//                                             `
//                                             Array = ${intArray} <br>
//                                             Mean = ${mean} <br>
//                                             Elements larger than mean: ${largeArray}
//                                             `;
// });


function arrayTest(){
    var intArray = [];
    var sum = 0;
    for (var i = 0; i < 10; i++){
        var value = (Math.floor((Math.random()*100)));
        sum += value;
        intArray.push(value);
    }

    console.log(`Array = ${intArray}`)

    var mean = sum / intArray.length;
    var largeArray = [];

    for (var i = 0; i < intArray.length; i++){
        if (intArray[i] > mean){
            largeArray.push(intArray[i]);
        }
    }

    document.getElementById("output").innerHTML=
                                            `
                                            Array = ${intArray} <br>
                                            Mean = ${mean} <br>
                                            Elements larger than mean: ${largeArray}
                                            `;
}