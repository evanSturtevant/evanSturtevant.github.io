
var canvas;
var gl;

var positions;

var numTimesToSubdivide = 0;

var bufferId;

init();

function init()
{
    canvas = document.getElementById("gl-canvas");

    gl = canvas.getContext('webgl2');
    if (!gl) alert("WebGL 2.0 isn't available");


    //
    //  Initialize our data for the Sierpinski Gasket
    //

    // First, initialize the corners of our gasket with three positions.


    //
    //  Configure WebGL
    //
    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.clearColor(1.0, 1.0, 1.0, 1.0);

    //  Load shaders and initialize attribute buffers

    var program = initShaders(gl, "vertex-shader", "fragment-shader");
    gl.useProgram(program);

    // Load the data into the GPU

    bufferId = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, bufferId);
    gl.bufferData(gl.ARRAY_BUFFER, 8*Math.pow(3, 6), gl.STATIC_DRAW);



    // Associate out shader variables with our data buffer

    var positionLoc = gl.getAttribLocation(program, "aPosition");
    gl.vertexAttribPointer(positionLoc, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(positionLoc);

        document.getElementById("slider").onchange = function(event) {
        numTimesToSubdivide = parseInt(event.target.value);
        render();
    };


    render();
};

function line(a, b)
{
    //console.log(`Point: (${a}), (${b})`);
    positions.push(a, b);
}

function distance(a, b)
{
    return (Math.sqrt(Math.pow(a[0] - b[0], 2) + Math.pow(a[1] - b[1], 2)))
}

function divideLine(start, end, count)
{

    // check for end of recursion

    if (count == 0) {
        line(start, end);
    }
    else {
        let a = mix(start, end, 1/3);
        let b = mix(start, end, 2/3);
        
        let len = distance(a,b);
        
        let c = vec2(len/2 + a[0], a[1] + len);// * Math.sqrt(3) / 2);
        c = vec2(len/2 + a[0], len * Math.sqrt(3) / 2);
        console.log(`a = ${a}\nb = ${b}\nc = ${c}\nlen = ${len}`);
        --count;

        line(a, c);
        line(c, b);

        // three new triangles

        divideLine(start, a, count);
        divideLine(b, end, count);
    }
}

function render()
{
    var vertices = [
        vec2(-1, 0),
        vec2(1, 0)
    ];
    positions = [];
    divideLine( vertices[0], vertices[1], 
                    numTimesToSubdivide);

    gl.bufferSubData(gl.ARRAY_BUFFER, 0, flatten(positions));
    gl.clear( gl.COLOR_BUFFER_BIT );
    gl.drawArrays( gl.LINES, 0, positions.length );
    positions = [];
}
