precision mediump float;

attribute vec3 aPosition; // Vertex position
attribute vec2 aTexCoord; // Texture coordinates
varying vec2 vTexCoord; // Pass texture coordinates to the fragment shader

void main() {
    gl_Position = vec4(aPosition, 1.0); // Transform vertex position
    vTexCoord = aTexCoord; // Pass texture coordinates
}
