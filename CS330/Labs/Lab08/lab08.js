"use strict";

var canvas;
var gl;

var pointSizeLoc;
var pointSize = 10.0;

var maxNumPositions  = 200;

var savePoints = true;

var t;
var points=[vec2(  0.00 ,  0.00 )];

init();

function init() {
    canvas = document.getElementById("gl-canvas");

    gl = canvas.getContext('webgl2');
    if (!gl) alert("WebGL 2.0 isn't available");

    // 2 - listener event for the button which toggles whether to save the points clicked
    document.getElementById("saveBtn").addEventListener("click", () => savePoints = !savePoints);

    // 1 - listener event for the mouse click
    // 3 - will later need to be updated in conjunction with whether the points are saved
    canvas.addEventListener("mousedown", function(event){
        t  = vec2(2 * event.x / canvas.width - 1 - ((pointSize ) / canvas.width),
                    2 * (canvas.height - event.y ) / canvas.height - 1 + ((pointSize ) / canvas.height)); 
                    //Bug with above, if canvas has moved i.e. scroll on page, cordinates mess up
        if(savePoints){
            points.push(t);
        }
        else{
            points.length = 1;
            points.push(t);
        }
        
        render();
    });

    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.clearColor(1.0, 1.0, 1.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    //
    //  Load shaders and initialize attribute buffers
    //
    var program = initShaders(gl, "vertex-shader", "fragment-shader");
    gl.useProgram(program);

    pointSizeLoc = gl.getUniformLocation( program, "uPointSize" );

    var bufferId = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, bufferId);
    gl.bufferData(gl.ARRAY_BUFFER, 8*Math.pow(3, 6) , gl.STATIC_DRAW);
    var postionLoc = gl.getAttribLocation(program, "aPosition");
    gl.vertexAttribPointer(postionLoc, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(postionLoc);

    render();
}

function render() {
    // replace the points data in the GPU
    gl.bufferSubData(gl.ARRAY_BUFFER , 0 , flatten(points));

    gl.clear( gl.COLOR_BUFFER_BIT );

    // don't render the first point, (0,0)

    gl.uniform1f(pointSizeLoc, pointSize);
    gl.drawArrays( gl.POINTS , 1 , points.length-1 );
}
