precision mediump float;

varying vec2 vTexCoord; // Interpolated texture coordinates
uniform sampler2D uTexture; // Texture sampler
uniform vec3 uFrontColor; // Color tint for the front face
uniform vec3 uBackColor; // Color tint for the back face

void main() {
    vec4 texColor = texture2D(uTexture, vTexCoord); // Sample the texture
    if (gl_FrontFacing) {
        gl_FragColor = vec4(texColor.rgb * uFrontColor, texColor.a); // Front face
    } else {
        gl_FragColor = vec4(texColor.rgb * uBackColor, texColor.a); // Back face
    }
}
