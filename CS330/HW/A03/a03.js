"use strict";
var gl;
var points = [];
var pointEye = [];

var t = 0;
var changeT = .01;

var turtle;
var turtleEye;
var bird;
var birdEye;
var shouldTransform = false;

var colorLoc;
init();

function calcPoints(){
    for(let i = 0; i < bird.length; i++){
        points[i] = add(mult(t, bird[i]), mult((1-t), turtle[i]));
    }

    for(let i = 0; i < birdEye.length; i++){
        pointEye[i] = add(mult(t, birdEye[i]), mult((1-t), turtleEye[i]));
    }
}

function init()
{
    var canvas = document.getElementById( "gl-canvas" );

    gl = canvas.getContext('webgl2');
    if ( !gl ) { alert( "WebGL isn't available" ); }


    
    turtle=[
        vec2( -.714, -.714),
        vec2( -.429, -.714),
        vec2( -.429, -.429),
        vec2( .1429, -.429),
        vec2( .1429, -.714),
        vec2( .4286, -.714),
        vec2( .4286, -.429),
        vec2( 1, -.429),
        vec2( .7143, -.143),
        vec2( .4286, -.143),
        vec2( 0, .1429),
        vec2( -.286, .1429),
        vec2( -.714, -.143),
        vec2( -1, -.429),
        vec2( -.714, -.429)
        ];

    turtleEye =[
        vec2(.6, -.2)
    ];

    bird=[
        vec2( -.4, -.9),
        vec2( 0, -.9),
        vec2( 0, -2/3),
        vec2( .4, -1/3),
        vec2( .6, 1/3),
        vec2( 1, .5),
        vec2( .6, 2/3),
        vec2( .6, .833333),
        vec2( -.2, .95),
        vec2( 0, .95),
        vec2( -.2, .833333),
        vec2( -.4, -.167),
        vec2( -1, -.667),
        vec2( -.6, -1),
        vec2( -.4, -2/3)
        ];

    birdEye = [
        vec2(.4, .75)
    ];

    calcPoints();

    document.getElementById("toggle").addEventListener("click", function() {
        shouldTransform = !shouldTransform;
        transform();
    });
    
    //
    //  Configure WebGL
    //
    gl.viewport( 0, 0, canvas.width, canvas.height );
    gl.clearColor( 1.0, 1.0, 1.0, 1.0 );

    //  Load shaders and initialize attribute buffers

    var program = initShaders( gl, "vertex-shader", "fragment-shader" );
    gl.useProgram( program );

    // Load the data into the GPU

    var bufferId = gl.createBuffer();
    gl.bindBuffer( gl.ARRAY_BUFFER, bufferId );
    gl.bufferData( gl.ARRAY_BUFFER, flatten(points), gl.STATIC_DRAW );

    // Associate out shader variables with our data buffer

    var positionLoc = gl.getAttribLocation( program, "aPosition" );
    gl.vertexAttribPointer( positionLoc , 2, gl.FLOAT, false, 0, 0 );
    gl.enableVertexAttribArray( positionLoc );

    colorLoc = gl.getUniformLocation( program, "aColor" );

    transform();
};

function transform(){
    if (!shouldTransform){
        return;
    }
    
    console.log(t);

    if (t < 0){
        changeT = .01;
        t = 0;
        t += changeT;
        setTimeout(transform, 1000);
    } else if (t > 1){
        changeT = -.01;
        t = 1;
        t += changeT;
        setTimeout(transform, 1000);
    } else {

        t += changeT;

        render();

        setTimeout(transform, 50); 
    }
}

function render() {
    gl.clear( gl.COLOR_BUFFER_BIT );
    calcPoints();
    gl.uniform4fv(colorLoc, vec4(t*1, (1-t) * 1, 0, 1));

    gl.bufferData( gl.ARRAY_BUFFER, flatten(points), gl.STATIC_DRAW );
    gl.drawArrays( gl.LINE_LOOP, 0, points.length );
    gl.bufferData( gl.ARRAY_BUFFER, flatten(pointEye), gl.STATIC_DRAW);
    gl.drawArrays( gl.POINTS, 0, turtleEye.length); 
}