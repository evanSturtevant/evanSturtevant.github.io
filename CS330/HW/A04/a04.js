"use strict";

var iPoints =  [
    [
        vec4(-0.5,  2,  0.5, 1.0),
        vec4(0.5,  2,  0.5, 1.0),
        vec4(0.5, -2,  0.5, 1.0),
        vec4(-0.5, -2,  0.5, 1.0),
        vec4(-0.5,  2, -0.5, 1.0),
        vec4(0.5,  2, -0.5, 1.0),
        vec4(0.5, -2, -0.5, 1.0),
        vec4(-0.5, -2, -0.5, 1.0),
    ]
];

var rPoints = [
    [
        vec4(-4, 2, .5, 1),
        vec4(-3, 2, .5, 1),
        vec4(-3, -2, .5, 1),
        vec4(-4, -2, .5, 1),
        vec4(-4, 2, -.5, 1),
        vec4(-3, 2, -.5, 1),
        vec4(-3, -2, -.5, 1),
        vec4(-4, -2, -.5, 1)
    ],
    [
        vec4(-3, 2, .5, 1),
        vec4(-2, 2, .5, 1),
        vec4(-2, 1, .5, 1),
        vec4(-3, 1, .5, 1),
        vec4(-3, 2, -.5, 1),
        vec4(-2, 2, -.5, 1),
        vec4(-2, 1, -.5, 1),
        vec4(-3, 1, -.5, 1)
    ],
    [
        vec4(-2, 1.5, .5, 1),
        vec4(-1.5, 1.5, .5, 1),
        vec4(-1.5, 1, .5, 1),
        vec4(-2, 1, .5, 1),
        vec4(-2, 1.5, -.5, 1),
        vec4(-1.5, 1.5, -.5, 1),
        vec4(-1.5, 1, -.5, 1),
        vec4(-2, 1, -.5, 1)
    ],
    [
        vec4(-2, 1, .5, 1),
        vec4(-1, 1, .5, 1),
        vec4(-1, 0, .5, 1),
        vec4(-2, 0, .5, 1),
        vec4(-2, 1, -.5, 1),
        vec4(-1, 1, -.5, 1),
        vec4(-1, 0, -.5, 1),
        vec4(-2, 0, -.5, 1)
    ],
    [
        vec4(-2, 0, .5, 1),
        vec4(-1.5, 0, .5, 1),
        vec4(-1.5, -.5, .5, 1),
        vec4(-2, -.5, .5, 1),
        vec4(-2, 0, -.5, 1),
        vec4(-1.5, 0, -.5, 1),
        vec4(-1.5, -.5, -.5, 1),
        vec4(-2, -.5, -.5, 1)
    ],
    [
        vec4(-3, 0, .5, 1),
        vec4(-2, 0, .5, 1),
        vec4(-2, -1, .5, 1),
        vec4(-3, -1, .5, 1),
        vec4(-3, 0, -.5, 1),
        vec4(-2, 0, -.5, 1),
        vec4(-2, -1, -.5, 1),
        vec4(-3, -1, -.5, 1)
    ],
    [
        vec4(-3.5, -1, .5, 1),
        vec4(-2.5, -.5, .5, 1),
        vec4(-1, -1.5, .5, 1),
        vec4(-1.5, -2, .5, 1),
        vec4(-3.5, -1, -.5, 1),
        vec4(-2.5, -.5, -.5, 1),
        vec4(-1, -1.5, -.5, 1),
        vec4(-1.5, -2, -.5, 1)
    ],
];

var oPoints = [
    [
        vec4(1,  2,  0.5, 1.0),
        vec4(2,  2,  0.5, 1.0),
        vec4(2, -2,  0.5, 1.0),
        vec4(1, -2,  0.5, 1.0),
        vec4(1,  2, -0.5, 1.0),
        vec4(2,  2, -0.5, 1.0),
        vec4(2, -2, -0.5, 1.0),
        vec4(1, -2, -0.5, 1.0)
    ],
    [
        vec4(2,  2,  0.5, 1.0),
        vec4(3,  2,  0.5, 1.0),
        vec4(3, 1,  0.5, 1.0),
        vec4(2, 1,  0.5, 1.0),
        vec4(2,  2, -0.5, 1.0),
        vec4(3,  2, -0.5, 1.0),
        vec4(3, 1, -0.5, 1.0),
        vec4(2, 1, -0.5, 1.0)
    ],
    [
        vec4(3,  2,  0.5, 1.0),
        vec4(4,  2,  0.5, 1.0),
        vec4(4, -2,  0.5, 1.0),
        vec4(3, -2,  0.5, 1.0),
        vec4(3,  2, -0.5, 1.0),
        vec4(4,  2, -0.5, 1.0),
        vec4(4, -2, -0.5, 1.0),
        vec4(3, -2, -0.5, 1.0)
    ],
    [
        vec4(2,  -1,  0.5, 1.0),
        vec4(3,  -1,  0.5, 1.0),
        vec4(3, -2,  0.5, 1.0),
        vec4(2, -2,  0.5, 1.0),
        vec4(2,  -1, -0.5, 1.0),
        vec4(3,  -1, -0.5, 1.0),
        vec4(3, -2, -0.5, 1.0),
        vec4(2, -2, -0.5, 1.0),
    ]
];

var statuePoints = [
    [ //Torso
        vec4(-2.5, 1, .5, 1.0),
        vec4(3,1,.5,1.0),
        vec4(3,-1,.5,1.0),
        vec4(-2.5,-1,.5,1.0),
        vec4(-2.5,1,-.5,1.0),
        vec4(3,1,-.5,1.0),
        vec4(3,-1,-.5,1.0),
        vec4(-2.5,-1,-.5,1.0),
    ],
    [ //Top of arm
        vec4(-2.25,3.5,.4,1.0),
        vec4(-1.75,3.5,.4,1.0),
        vec4(-1.75,-3.5,.4,1.0),
        vec4(-2.25,-3.5,.4,1.0),
        vec4(-2.25,3.5,-.4,1.0),
        vec4(-1.75,3.5,-.4,1.0),
        vec4(-1.75,-3.5,-.4,1.0),
        vec4(-2.25,-3.5,-.4,1.0),
    ],
    [ //Right hand
        vec4(-2.15,4,.3,1.0),
        vec4(-1.85,4,.3,1.0),
        vec4(-1.85,3.5,.3,1.0),
        vec4(-2.15,3.5,.3,1.0),
        vec4(-2.15,4,-.3,1.0),
        vec4(-1.85,4,-.3,1.0),
        vec4(-1.85,3.5,-.3,1.0),
        vec4(-2.15,3.5,-.3,1.0),
    ],
    [ //Left hand
        vec4(-2.15,-3.5,.3,1.0),
        vec4(-1.85,-3.5,.3,1.0),
        vec4(-1.85,-4,.3,1.0),
        vec4(-2.15,-4,.3,1.0),
        vec4(-2.15,-3.5,-.3,1.0),
        vec4(-1.85,-3.5,-.3,1.0),
        vec4(-1.85,-4,-.3,1.0),
        vec4(-2.15,-4,-.3,1.0),
    ],
    [//Right hangy sleeve
        vec4(-1.75,3,.4,1.0),
        vec4(-1.5,3,.4,1.0),
        vec4(-1.5,.5,.4,1.0),
        vec4(-1.75,.5,.4,1.0),
        vec4(-1.75,3,-.4,1.0),
        vec4(-1.5,3,-.4,1.0),
        vec4(-1.5,.5,-.4,1.0),
        vec4(-1.75,.5,-.4,1.0),
    ],
    [//Left hangy sleeve
        vec4(-1.75,-.5,.4,1.0),
        vec4(-1.5,-.5,.4,1.0),
        vec4(-1.5,-3,.4,1.0),
        vec4(-1.75,-3,.4,1.0),
        vec4(-1.75,-.5,-.4,1.0),
        vec4(-1.5,-.5,-.4,1.0),
        vec4(-1.5,-3,-.4,1.0),
        vec4(-1.75,-3,-.4,1.0),
    ],
    [//Right Foot
        vec4(2.9,.25,.7,1.0),
        vec4(3.2,.25,.7,1.0),
        vec4(3.2,.05,.7,1.0),
        vec4(2.9,.05,.7,1.0),
        vec4(2.9,.25,.4,1.0),
        vec4(3.2,.25,.4,1.0),
        vec4(3.2,.05,.4,1.0),
        vec4(2.9,.05,.4,1.0),
    ],
    [//Left Foot
        vec4(2.9,-.05,.7,1.0),
        vec4(3.2,-.05,.7,1.0),
        vec4(3.2,-.25,.7,1.0),
        vec4(2.9,-.25,.7,1.0),
        vec4(2.9,-.05,.4,1.0),
        vec4(3.2,-.05,.4,1.0),
        vec4(3.2,-.25,.4,1.0),
        vec4(2.9,-.25,.4,1.0),
    ],
    [//Head
        vec4(-3.5,.3,.6,1.0),
        vec4(-2.5,.3,.6,1.0),
        vec4(-2.5,-.3,.6,1.0),
        vec4(-3.5,-.3,.6,1.0),
        vec4(-3.5,.3,-.4,1.0),
        vec4(-2.5,.3,-.4,1.0),
        vec4(-2.5,-.3,-.4,1.0),
        vec4(-3.5,-.3,-.4,1.0),
    ],
    [//Face
        vec4(-3,.2,.65,1.0),
        vec4(-2.7,.2,.65,1.0),
        vec4(-2.7,-.2,.65,1.0),
        vec4(-3,-.2,.65,1.0),
        vec4(-3,.2,.5,1.0),
        vec4(-2.7,.2,.5,1.0),
        vec4(-2.7,-.2,.5,1.0),
        vec4(-3,-.2,.5,1.0),
    ],
    [//Right eye
        vec4(-2.9,.16,.7,1.0),
        vec4(-2.8,.16,.7,1.0),
        vec4(-2.8,.1,.7,1.0),
        vec4(-2.9,.1,.7,1.0),
        vec4(-2.9,.16,.55,1.0),
        vec4(-2.8,.16,.55,1.0),
        vec4(-2.8,.1,.55,1.0),
        vec4(-2.9,.1,.55,1.0),
    ],
    [//Left eye
        vec4(-2.9,-.1,.7,1.0),
        vec4(-2.8,-.1,.7,1.0),
        vec4(-2.8,-.16,.7,1.0),
        vec4(-2.9,-.16,.7,1.0),
        vec4(-2.9,-.1,.55,1.0),
        vec4(-2.8,-.1,.55,1.0),
        vec4(-2.8,-.16,.55,1.0),
        vec4(-2.9,-.16,.55,1.0),
    ]
]

var canvas;
var gl;

var numPositions  = 36 * (
    rPoints.length + 
    iPoints.length + 
    oPoints.length);

var rioPositions = [];
var statuePositions = [];

var colors = [];

var xAxis = 0;
var yAxis = 1;
var zAxis = 2;

var axis = zAxis;
var theta = [0, 0, 0];
var t = 0.0;
var changeT = .01;

var shouldRotate = true;
var shouldTransform = true;

var thetaLoc;
var tLoc;

init();

function init()
{
    canvas = document.getElementById("gl-canvas");

    gl = canvas.getContext('webgl2');
    if (!gl) alert("WebGL 2.0 isn't available");

    
    for(let i = 0; i < rPoints.length; i++){
        colorCube(rPoints[i], rioPositions);
    }

    for (let i = 0; i < iPoints.length; i++){
        colorCube(iPoints[i], rioPositions);
    }

    for (let i = 0; i < oPoints.length; i++){
        colorCube(oPoints[i], rioPositions);
    }

    for (let i = 0; i < statuePoints.length; i++){
        colorCube(statuePoints[i], statuePositions);
    }

    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.clearColor(1.0, 1.0, 1.0, 1.0);

    gl.enable(gl.DEPTH_TEST);

    //
    //  Load shaders and initialize attribute buffers
    //
    var program = initShaders(gl, "vertex-shader", "fragment-shader");
    gl.useProgram(program);

    var cBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, cBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, flatten(colors), gl.STATIC_DRAW);

    var colorLoc = gl.getAttribLocation( program, "aColor" );
    gl.vertexAttribPointer( colorLoc, 4, gl.FLOAT, false, 0, 0 );
    gl.enableVertexAttribArray( colorLoc );

    var vBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, flatten(rioPositions), gl.STATIC_DRAW);

    var positionLoc = gl.getAttribLocation(program, "rioPosition");
    gl.vertexAttribPointer(positionLoc, 4, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(positionLoc);

    var statueBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, statueBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, flatten(statuePositions), gl.STATIC_DRAW);

    var statueLoc = gl.getAttribLocation(program, "statuePosition");
    gl.vertexAttribPointer(statueLoc, 4, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(statueLoc);

    thetaLoc = gl.getUniformLocation(program, "uTheta");
    tLoc = gl.getUniformLocation(program, "t");

    //event listeners for buttons

    document.getElementById( "xButton" ).onclick = function () {
        axis = xAxis;
    };
    document.getElementById( "yButton" ).onclick = function () {
        axis = yAxis;
    };
    document.getElementById( "zButton" ).onclick = function () {
        axis = zAxis;
    };
    document.getElementById("toggle").onclick = function () {
        shouldRotate = !shouldRotate;
    };
    document.getElementById("toggleMorph").onclick = function() {
        shouldTransform = !shouldTransform;
        transform();
    }
    transform();
    render();
}

//Takes 8 vec4s to create a square at given position
function colorCube(vertices, dest)
{
    quad(1, 0, 3, 2, vertices, dest);
    quad(2, 3, 7, 6, vertices, dest);
    quad(3, 0, 4, 7, vertices, dest);
    quad(6, 5, 1, 2, vertices, dest);
    quad(4, 5, 6, 7, vertices, dest);
    quad(5, 4, 0, 1, vertices, dest);
}

function quad(a, b, c, d, vertices, dest)
{
    var vertexColors = [
        vec4(0.0, 0.0, 0.0, 1.0),  // black
        vec4(1.0, 0.0, 0.0, 1.0),  // red
        vec4(1.0, 1.0, 0.0, 1.0),  // yellow
        vec4(0.0, 1.0, 0.0, 1.0),  // green
        vec4(0.0, 0.0, 1.0, 1.0),  // blue
        vec4(1.0, 0.0, 1.0, 1.0),  // magenta
        vec4(0.0, 1.0, 1.0, 1.0), //cyan
        vec4(.5, .5, .5, 1.0)  // grey

    ];

    // We need to parition the quad into two triangles in order for
    // WebGL to be able to render it.  In this case, we create two
    // triangles from the quad indices

    //vertex color assigned by the index of the vertex

    var indices = [a, b, c, a, c, d];

    for ( var i = 0; i < indices.length; ++i ) {
        dest.push( vertices[indices[i]] );
        //colors.push( vertexColors[indices[i]] );


        // for solid colored faces use
        colors.push(vertexColors[a]);
    }
}

function transform(){
    if (!shouldTransform){
        return;
    }
    

    if (t < 0){
        console.log(t);
        changeT = .01;
        t = 0.0;
        //t += changeT;
        setTimeout(transform, 2000);
    } else if (t > 1){
        console.log(t);
        changeT = -.01;
        t = 1.0;
        //t += changeT;
        setTimeout(transform, 2000);
    } else {

        t += changeT;
        setTimeout(transform, 50); 
    }
}

function render()
{
    gl.clear( gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    if(shouldRotate) theta[axis] += .5;
    gl.uniform3fv(thetaLoc, theta);
    gl.uniform1f(tLoc, t);

    gl.drawArrays(gl.TRIANGLES, 0, numPositions);

    requestAnimationFrame(render);
}
