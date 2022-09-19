"use strict";
var gl;
var points;
var colors;
var sliderVal;

init();

function init()
{
    var canvas = document.getElementById( "gl-canvas" );

    gl = canvas.getContext('webgl2');
    if ( !gl ) { alert( "WebGL isn't available" ); }

    points=[
    vec2(-0.95,0.95),
    vec2(0,0.95),
    vec2(0.95,0.95),
    vec2(-0.95,0.0),
    vec2(0,0.0),
    vec2(0.95,0.0),
    vec2(-0.95,-0.95),
    vec2(0.0,-0.95),
    vec2(0.95,-0.95)
    ];

    colors=[
    vec4( 85/255.0, 10/255.0, 148/255.0, 1.0 ),
    vec4( 146/255.0, 0/255.0, 130/255.0, 1.0 ),
    vec4( 184/255.0, 0/255.0, 110/255.0, 1.0 ),
    vec4( 208/255.0, 44/255.0, 91/255.0, 1.0 ),
    vec4( 220/255.0, 85/255.0, 77/255.0, 1.0 ),
    vec4( 224/255.0, 122/255.0, 71/255.0, 1.0 ),
    vec4( 222/255.0, 156/255.0, 78/255.0, 1.0 ),
    vec4( 216/255.0, 187/255.0, 98/255.0, 1.0 ),
    vec4( 209/255.0, 216/255.0, 131/255.0, 1.0 )
    ];
    
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
    gl.vertexAttribPointer( positionLoc, 2, gl.FLOAT, false, 0, 0 );
    gl.enableVertexAttribArray( positionLoc );

    // a color buffer is created and attached
    var cbufferId = gl.createBuffer();
    gl.bindBuffer( gl.ARRAY_BUFFER, cbufferId );
    gl.bufferData( gl.ARRAY_BUFFER, flatten(colors), gl.STATIC_DRAW );
    
    var colorLoc = gl.getAttribLocation( program, "aColor" );
    gl.vertexAttribPointer( colorLoc, 4, gl.FLOAT, false, 0, 0 );
    gl.enableVertexAttribArray( colorLoc );

    // slider event listener
    let slider = document.getElementById("rangeSlider");
    sliderVal = slider.value;
    slider.addEventListener('input', function() {
        console.log("Slider:" + slider.value);
        sliderVal = slider.value;
        render();
    })
    render();
};

function render() {
    gl.clear( gl.COLOR_BUFFER_BIT );

    // use the variable from the slider event listener to determine how many
    // points to render

    gl.drawArrays( gl.POINTS, 0, sliderVal );
}