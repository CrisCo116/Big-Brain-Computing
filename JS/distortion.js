import * as THREE from 'three';

// Create a scene
const scene = new THREE.Scene();

// Create a camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Create a WebGLRenderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('pixel-distortion-container').appendChild(renderer.domElement);

// Load the video as a texture
const videoTexture = new THREE.VideoTexture(document.getElementById('bg-video'));
videoTexture.minFilter = THREE.LinearFilter;
videoTexture.magFilter = THREE.LinearFilter;
videoTexture.format = THREE.RGBFormat;

// Create a shader material (same as previous code)

// Create a geometry (full-screen quad)
const geometry = new THREE.PlaneGeometry(2, 2);
const plane = new THREE.Mesh(geometry, material);

// Add the plane to the scene
scene.add(plane);

// Function to toggle distortion effect
let isDistorted = false; // Initial state
const toggleDistortion = () => {
    isDistorted = !isDistorted; // Toggle state
    material.uniforms.isDistorted.value = isDistorted ? 1 : 0; // Set the uniform
};

// Listen for clicks on the video element to toggle distortion
const bgVideo = document.getElementById('bg-video');
bgVideo.addEventListener('click', toggleDistortion);

// Animation loop (same as previous code)
const animate = () => {
    requestAnimationFrame(animate);

    // Update the video texture
    if (bgVideo.readyState === bgVideo.HAVE_ENOUGH_DATA) {
        videoTexture.needsUpdate = true;
    }

    renderer.render(scene, camera);
};

animate();

// Fragment shader
const fragmentShader = `
uniform sampler2D videoTexture;
uniform float time;
uniform vec2 resolution;
uniform float isDistorted;

void main() {
    vec2 uv = gl_FragCoord.xy / resolution.xy;
    uv.y = 1.0 - uv.y; // Flip the Y-axis

    vec2 distortion = vec2(
        sin(uv.y * 10.0 + time),
        cos(uv.x * 10.0 + time)
    ) * 0.05 * isDistorted; // Apply distortion based on the uniform

    vec4 color = texture2D(videoTexture, uv + distortion);
    gl_FragColor = color;
}
