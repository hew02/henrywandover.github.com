precision mediump float;

attribute vec3 aPosition;
attribute vec2 aTexCoord;
varying vec2 vTexCoord;
varying vec4 vVertexColor;

attribute vec4 aVertexColor;

uniform mat4 uModelViewMatrix;
uniform mat4 uProjectionMatrix;

void main() {
    vec4 viewModelPosition = uModelViewMatrix * vec4(aPosition, 1.0);
    
    vTexCoord = aTexCoord;
    vVertexColor = aVertexColor;

    vec4 positionVec4 = vec4(aPosition, 1.0);
    positionVec4.xy = positionVec4.xy * 2.0 - 1.0;

    gl_Position = positionVec4;
}
