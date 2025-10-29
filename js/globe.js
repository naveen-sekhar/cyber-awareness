// 3D Globe with Data Streams using Three.js
let globeScene, globeCamera, globeRenderer, globe, dataStreams = [];

function initGlobe() {
    const container = document.getElementById('globe-canvas');
    if (!container) return;
    
    // Scene setup
    globeScene = new THREE.Scene();
    
    // Camera
    globeCamera = new THREE.PerspectiveCamera(
        75,
        container.clientWidth / container.clientHeight,
        0.1,
        1000
    );
    globeCamera.position.z = 3;
    
    // Renderer
    globeRenderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    globeRenderer.setSize(container.clientWidth, container.clientHeight);
    globeRenderer.setClearColor(0x000000, 0);
    container.appendChild(globeRenderer.domElement);
    
    // Create Globe
    const geometry = new THREE.SphereGeometry(1, 32, 32);
    const material = new THREE.MeshPhongMaterial({
        color: 0x22b07d,
        wireframe: true,
        transparent: true,
        opacity: 0.6
    });
    globe = new THREE.Mesh(geometry, material);
    globeScene.add(globe);
    
    // Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    globeScene.add(ambientLight);
    
    const pointLight = new THREE.PointLight(0x22b07d, 1);
    pointLight.position.set(5, 5, 5);
    globeScene.add(pointLight);
    
    // Create data streams
    createDataStreams();
    
    // Handle resize
    window.addEventListener('resize', onGlobeResize);
    
    // Animate
    animateGlobe();
}

function createDataStreams() {
    for (let i = 0; i < 20; i++) {
        const points = [];
        const startAngle = Math.random() * Math.PI * 2;
        const startPhi = Math.random() * Math.PI;
        
        for (let j = 0; j < 50; j++) {
            const phi = startPhi + (j * 0.02);
            const theta = startAngle + (j * 0.1);
            const radius = 1.1 + (j * 0.01);
            
            const x = radius * Math.sin(phi) * Math.cos(theta);
            const y = radius * Math.sin(phi) * Math.sin(theta);
            const z = radius * Math.cos(phi);
            
            points.push(new THREE.Vector3(x, y, z));
        }
        
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        const material = new THREE.LineBasicMaterial({
            color: 0xd7263d,
            transparent: true,
            opacity: 0.4
        });
        
        const line = new THREE.Line(geometry, material);
        dataStreams.push(line);
        globeScene.add(line);
    }
}

function animateGlobe() {
    requestAnimationFrame(animateGlobe);
    
    if (globe) {
        globe.rotation.y += 0.002;
        globe.rotation.x += 0.001;
    }
    
    dataStreams.forEach((stream, index) => {
        stream.rotation.y += 0.003 + (index * 0.0001);
    });
    
    if (globeRenderer && globeScene && globeCamera) {
        globeRenderer.render(globeScene, globeCamera);
    }
}

function onGlobeResize() {
    const container = document.getElementById('globe-canvas');
    if (!container || !globeCamera || !globeRenderer) return;
    
    globeCamera.aspect = container.clientWidth / container.clientHeight;
    globeCamera.updateProjectionMatrix();
    globeRenderer.setSize(container.clientWidth, container.clientHeight);
}

// Initialize globe when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initGlobe);
} else {
    initGlobe();
}
