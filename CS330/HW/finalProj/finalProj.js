"use strict";

var canvas;
var gl;

var positions = [];
var colors = [];

var xAxis = 0;
var yAxis = 1;
var zAxis = 2;

var axis = zAxis;
var angle1 = [800, 0, 360];
var angle2 = [1, 0, 0];
var angleToggle = true;

var theta = angle1;

var shouldRotate = false;

var thetaLoc;

var yTrans = 7;
var yTransLoc;

var texSize = 64;
// Create a checkerboard pattern using floats
var image1 = new Array()
    for (var i =0; i<texSize; i++)  image1[i] = new Array();
    for (var i =0; i<texSize; i++)
        for ( var j = 0; j < texSize; j++)
           image1[i][j] = new Float32Array(4);
    for (var i =0; i<texSize; i++) for (var j=0; j<texSize; j++) {
        //0 or 8 depending in alternating chunks of eight
        var c = (((i & 0x8) == 0) ^ ((j & 0x8) == 0));
        image1[i][j] = [c, c, c, 1];
        if (c == 0) image1[i][j] = [0.67, 0.67, 0.67, 1];
    }

// Convert floats to ubytes for texture
var image2 = new Uint8Array(4*texSize*texSize);
    for (var i = 0; i < texSize; i++)
        for (var j = 0; j < texSize; j++)
           for(var k =0; k<4; k++)
                image2[4*texSize*i+4*j+k] = 255*image1[i][j][k];

var texCoordsArray = [];

// perpendicular texture w/isoceles triangle
var texCoord = [
    vec2(0, 0),
    vec2(0  , 1),
    vec2(1  , 1)
];

function configureTexture(image) {
    var texture = gl.createTexture();
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, texSize, texSize, 0,
        gl.RGBA, gl.UNSIGNED_BYTE, image);
    gl.generateMipmap(gl.TEXTURE_2D);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER,
          gl.NEAREST_MIPMAP_LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
}

function drawShortHallwayScene() {
    drawPlane( //floor
        vec4(10, 5, 10, 1),
        vec4(10, 5, -10, 1),
        vec4(-10, 5, -10, 1),
        vec4(-10, 5, 10, 1),
        vec4(0, 1, 0, 1)
    )

    drawPrismDimensions(vec4(1, 7, -1, 1), 2, .5, 1.99, vec4(.5,.5,.5,1)); //left wall
    drawPrismDimensions(vec4(-1, 7, -1, 1), 2, .5, 1.99, vec4(.5,.5,.5,1)); //right wall
    drawPrismDimensions(vec4(0.99, 7, -1, 1), 2, -2, .5, vec4(.5,.5,.5,1)); //ceiling
    
}

function drawLongHallwayScene(){
    drawPlane( //floor
        vec4(10, -5, 10, 1),
        vec4(10, -5, -10, 1),
        vec4(-10, -5, -10, 1),
        vec4(-10, -5, 10, 1),
        vec4(0, 1, -5, 1)
    )

    drawPrismDimensions(vec4(1, -3, 2, 1), 6, .5, 1.99, vec4(.5,.5,.5,1)); //left wall
    drawPrismDimensions(vec4(-1, -3, 2, 1), 6, .5, 1.99, vec4(.5,.5,.5,1)); //right wall
    drawPrismDimensions(vec4(0.99, -3, 2, 1), 6, -2, .5, vec4(.5,.5,.5,1)); //ceiling
 
}

init();

function init()
{   
    canvas = document.getElementById("gl-canvas");

    gl = canvas.getContext('webgl2');
    if (!gl) alert("WebGL 2.0 isn't available");

    drawShortHallwayScene();
    drawLongHallwayScene();
    
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
    gl.bufferData(gl.ARRAY_BUFFER, flatten(positions), gl.STATIC_DRAW);

    var positionLoc = gl.getAttribLocation(program, "aPosition");
    gl.vertexAttribPointer(positionLoc, 4, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(positionLoc);

    var tBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, tBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, flatten(texCoordsArray), gl.STATIC_DRAW); //Problem????
    
    var texCoordLoc = gl.getAttribLocation(program, "aTexCoord");
    gl.vertexAttribPointer(texCoordLoc, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(texCoordLoc);
    
    configureTexture(image2);

    gl.uniform1i( gl.getUniformLocation(program, "uTextureMap"), 0);

    thetaLoc = gl.getUniformLocation(program, "uTheta");
    yTransLoc = gl.getUniformLocation(program, "uYTrans");

    //event listeners for buttons

    document.getElementById( "xButton" ).onclick = function () {axis = xAxis;};
    document.getElementById( "yButton" ).onclick = function () {axis = yAxis;};
    document.getElementById( "zButton" ).onclick = function () {axis = zAxis;};
    document.getElementById("toggle").onclick = function () {
        shouldRotate = !shouldRotate;
        if (shouldRotate) document.getElementById("toggle").style.backgroundColor = "lightgreen";
        else document.getElementById("toggle").style.backgroundColor = "lightpink";
    }
    document.getElementById("toggleHall").onclick = function () {yTrans = -yTrans;}
    document.getElementById("toggleAngle").onclick = function (){
        angleToggle = !angleToggle;
        if (angleToggle){ 
            theta = angle1;
             axis = zAxis;
        }
        else {
            theta = angle2;
             axis = yAxis;
        }
    }

    getTexCoordsArray(vec4(-1, 3, 2, 1), vec4(2, 3, 5, 1), vec4(3, 5, -2, 1));
    console.log("Triangle Two ======================================");
    getTexCoordsArray(vec4(10, 5, 10, 1), vec4(10, 5, -10, 1), vec4(-20, 5, -10, 1));

    render();
}

//Takes 8 vec4 verticies and vec4 color draws rectangular prism 
function drawPrismPoints(p1, p2, p3, p4,
                    p5, p6, p7, p8, color){
    drawPlane(p1, p2, p3, p4, color);
    drawPlane(p1, p5, p8, p4, color);
    drawPlane(p5, p6, p7, p8, color);
    drawPlane(p2, p6, p7, p3, color);
    drawPlane(p4, p3, p7, p8, color);
    drawPlane(p1, p5, p6, p2, color);
}

//Takes 1 vec4 verticies, 3 floats Length, Width, Height, and vec3 rotation XYZ, and vec4 color. 
//p1 is the close upper left corner
//draws rectangular prism
function drawPrismDimensions(p1, l, w, h, color){
    let verticies = [];
    verticies[0] = p1;

    verticies[1] = vec4(p1[0] + w, p1[1], p1[2], 1);

    verticies[2] = vec4(verticies[1][0], verticies[1][1] - h, verticies[1][2], 1);

    verticies[3] = vec4(p1[0], p1[1] - h, p1[2], 1);

    verticies[4] = vec4(p1[0], p1[1], p1[2] -l, 1);

    verticies[5] = vec4(verticies[1][0], verticies[1][1], verticies[1][2] - l, 1);

    verticies[6] = vec4(verticies[2][0], verticies[2][1], verticies[2][2] - l, 1);

    verticies[7] = vec4(verticies[3][0], verticies[3][1], verticies[3][2] - l, 1);

    // console.log(verticies);

    drawPrismPoints(verticies[0], verticies[1], verticies[2], verticies[3],
        verticies[4], verticies[5], verticies[6], verticies[7], color);
}
console.log
//Take 4 vec4 corner positions and  vec4 color and draws 2d plane
function drawPlane(p1, p2, p3, p4, color){
    
    //getTexCoordsArray(p1, p2, p3);

    positions.push(p1);
    colors.push(color);
    texCoordsArray.push(texCoord[0]);
    positions.push(p2);
    colors.push(color);
    texCoordsArray.push(texCoord[1]);
    positions.push(p3);
    colors.push(color);
    texCoordsArray.push(texCoord[2]);

    //getTexCoordsArray(p1, p4, p3);

    positions.push(p1);
    colors.push(color);
    texCoordsArray.push(texCoord[0]);
    positions.push(p4);
    colors.push(color);
    texCoordsArray.push(texCoord[1]);
    positions.push(p3);
    colors.push(color);
    texCoordsArray.push(texCoord[2]);

}

//takes vec3 or vec4
function distance(p1, p2){
    let x1 = p1[0]; let y1 = p1[1]; let z1 = p1[2];
    let x2 = p2[0]; let y2 = p2[1]; let z2 = p2[2];

    return Math.sqrt(Math.pow(x2-x1, 2) + Math.pow(y2-y1, 2) + Math.pow(z2-z1, 2));
}

//Takes vec3 or vec4 
//Formulas from : https://www.geeksforgeeks.org/find-all-angles-of-a-triangle-in-3d/
//BUSTED, FIX LATER
function getTexCoordsArray(p1, p2, p3){
    let x1 = p1[0]; let y1 = p1[1]; let z1 = p1[2];
    let x2 = p2[0]; let y2 = p2[1]; let z2 = p2[2];
    let x3 = p3[0]; let y3 = p3[1]; let z3 = p3[2];

    let p1p2Dist = distance(vec3(x1, y1, z1), vec3(x2, y2, z2));
    let p1p3Dist = distance(vec3(x1, y1, z1), vec3(x3, y3, z3));
    let p2p3Dist = distance(vec3(x2, y2, z2), vec3(x3, y3, z3));

    let numerator = (x2-x1)*(x3-x1) + (y2-y1)*(y3-y1) + (z2-z1)*(z3-z1);
    let denom = p1p2Dist * p1p3Dist;
    let aTheta = Math.acos(numerator / denom);
    console.log("aTheta: " + (aTheta* 180 / Math.PI));

    numerator = (x1-x2)*(x3-x2) + (y1-y2)*(y3-y2) + (z1-z2)*(z3-z2);
    denom = p1p2Dist * p2p3Dist;
    let bTheta = Math.acos(numerator / denom);
    console.log("bTheta: " + (bTheta * 180 / Math.PI)); 

    numerator = (x2-x3)*(x1-x3) + (y2-y3)*(y1-y3) + (z2-z3)*(z1-z3);
    denom = p2p3Dist * p1p3Dist;
    let cTheta = Math.acos(numerator / denom);
    console.log("cTheta: " + (cTheta * 180 / Math.PI));

    let largestDistance = p1p2Dist;
    if (p1p3Dist > largestDistance) largestDistance = p1p3Dist;
    if (p2p3Dist > largestDistance) largestDistance = p2p3Dist;

    let p1p2DistScaled =p1p2Dist / largestDistance;
    let p1p3DistScaled =p1p3Dist / largestDistance;
    let p2p3DistScaled =p2p3Dist / largestDistance;

    console.log("p1p2: " + p1p2Dist + " scaled: " + p1p2DistScaled);
    console.log("p1p3: " + p1p3Dist + " scaled: " + p1p3DistScaled);
    console.log("p2p3: " + p2p3Dist + " scaled: " + p2p3DistScaled);

    // texCoord[0] = vec2(0, 0);
    // texCoord[1] = vec2(p1p2DistScaled * Math.sin(aTheta), p1p2DistScaled * Math.cos(aTheta));
    // texCoord[2] = vec2(p2p3DistScaled * Math.cos(aTheta), p2p3DistScaled * Math.sin(aTheta));

    texCoord[0] = vec2(0, 0);
    texCoord[1] = vec2(0 , p2p3Dist);
    //texCoord[2] = vec2(p1p2Dist * Math.sin(cTheta), p1p2Dist * Math.cos(cTheta));
    texCoord[2] = vec2(p1p2DistScaled, 0);

    console.log("Coord1: " + texCoord[0]);
    console.log("Coord2: " + texCoord[1]);
    console.log("Coord3: " + texCoord[2]);
    


}

function render()
{
    // console.log("Tex: " + texCoordsArray.length + ", Points: " + positions.length);
    gl.clear( gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    if(shouldRotate) theta[axis] += 2.0;
    gl.uniform3fv(thetaLoc, theta);
    gl.uniform1f(yTransLoc, yTrans);

    gl.drawArrays(gl.TRIANGLES, 0, positions.length);
    
    requestAnimationFrame(render);
}
