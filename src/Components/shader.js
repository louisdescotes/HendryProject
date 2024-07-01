// vertex shader
export const vertex = `
varying vec2 vUv;
const float PI = 3.14159265359;
uniform float uDelta;

void main() {
    vUv = uv;
    vec3 newPosition = position;
    
    float deformation = sin(uv.x * PI) * 0.3 * uDelta;
    newPosition.y += deformation;
    
    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
}

`;

// fragment shader
export const fragment = `
varying vec2 vUv;
uniform sampler2D uTexture;

void main() {
    vec4 textureColor = texture2D(uTexture, vUv);
    gl_FragColor = textureColor;
}
`;
