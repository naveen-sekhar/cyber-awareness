// Main JavaScript - Additional Features

// Pledge Button Handler
document.addEventListener('DOMContentLoaded', function() {
    const pledgeBtn = document.getElementById('pledge-btn');
    const pledgeBadge = document.getElementById('pledge-badge');
    const downloadBadgeBtn = document.getElementById('download-badge');
    
    if (pledgeBtn) {
        pledgeBtn.addEventListener('click', function() {
            pledgeBadge.classList.remove('hidden');
            
            // Scroll to badge
            pledgeBadge.scrollIntoView({ behavior: 'smooth', block: 'center' });
            
            // Animate badge appearance
            gsap.from(pledgeBadge, {
                scale: 0,
                opacity: 0,
                duration: 1,
                ease: 'elastic.out(1, 0.5)'
            });
        });
    }
    
    if (downloadBadgeBtn) {
        downloadBadgeBtn.addEventListener('click', downloadBadge);
    }
});

// Download Badge Function - Professional certificate
function downloadBadge() {
    // Create a canvas to draw the badge
    const canvas = document.createElement('canvas');
    canvas.width = 1200;
    canvas.height = 800;
    const ctx = canvas.getContext('2d');
    
    // Background gradient
    const gradient = ctx.createLinearGradient(0, 0, 0, 800);
    gradient.addColorStop(0, '#22b07d');
    gradient.addColorStop(1, '#0b2545');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 1200, 800);
    
    // Border
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
    ctx.lineWidth = 4;
    ctx.strokeRect(40, 40, 1120, 720);
    
    // Shield emoji
    ctx.font = 'bold 160px Arial';
    ctx.textAlign = 'center';
    ctx.fillStyle = '#ffffff';
    ctx.fillText('🛡️', 600, 250);
    
    // Title
    ctx.font = 'bold 56px Poppins, sans-serif';
    ctx.fillText('Cybersecurity Awareness', 600, 360);
    
    // Subtitle
    ctx.font = '36px Inter, sans-serif';
    ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
    ctx.fillText('Certificate of Commitment', 600, 420);
    
    // Year
    ctx.font = 'bold 32px Orbitron, monospace';
    ctx.fillText('2025', 600, 480);
    
    // Bottom text
    ctx.font = '24px Inter, sans-serif';
    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
    ctx.fillText('Committed to digital security best practices', 600, 600);
    
    // Date
    const date = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    ctx.font = '20px Inter, sans-serif';
    ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
    ctx.fillText(date, 600, 680);
    
    // Convert to image and download
    canvas.toBlob(function(blob) {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'cybersecurity-commitment-2025.png';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Create simple 3D scenes for other sections
function initOtherScenes() {
    // Vault Scene
    createVaultScene();
    
    // Control Room Scene
    createControlRoomScene();
}

function createVaultScene() {
    const container = document.getElementById('vault-canvas');
    if (!container) return;
    
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);
    
    // Create vault (simplified as a cube with glow)
    const geometry = new THREE.BoxGeometry(1.5, 2, 1);
    const material = new THREE.MeshPhongMaterial({
        color: 0xf4a261,
        emissive: 0xf4a261,
        emissiveIntensity: 0.3,
        shininess: 100
    });
    const vault = new THREE.Mesh(geometry, material);
    scene.add(vault);
    
    // Add edges
    const edges = new THREE.EdgesGeometry(geometry);
    const lineMaterial = new THREE.LineBasicMaterial({ color: 0xffffff });
    const wireframe = new THREE.LineSegments(edges, lineMaterial);
    vault.add(wireframe);
    
    // Lights
    const light = new THREE.PointLight(0xffffff, 1);
    light.position.set(0, 5, 5);
    scene.add(light);
    
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    camera.position.z = 4;
    
    // Animation
    function animate() {
        requestAnimationFrame(animate);
        vault.rotation.y += 0.005;
        renderer.render(scene, camera);
    }
    animate();
    
    // Handle resize
    window.addEventListener('resize', () => {
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
    });
}

function createControlRoomScene() {
    const container = document.getElementById('control-room-canvas');
    if (!container) return;
    
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);
    
    // Create floating cubes (like control panels)
    const cubes = [];
    for (let i = 0; i < 8; i++) {
        const geometry = new THREE.BoxGeometry(0.3, 0.3, 0.3);
        const material = new THREE.MeshPhongMaterial({
            color: i % 2 === 0 ? 0x22b07d : 0xd7263d,
            emissive: i % 2 === 0 ? 0x22b07d : 0xd7263d,
            emissiveIntensity: 0.5
        });
        const cube = new THREE.Mesh(geometry, material);
        
        // Position randomly
        cube.position.x = (Math.random() - 0.5) * 4;
        cube.position.y = (Math.random() - 0.5) * 3;
        cube.position.z = (Math.random() - 0.5) * 2;
        
        cubes.push(cube);
        scene.add(cube);
    }
    
    // Lights
    const light = new THREE.PointLight(0xffffff, 1);
    light.position.set(0, 5, 5);
    scene.add(light);
    
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);
    
    camera.position.z = 5;
    
    // Animation
    function animate() {
        requestAnimationFrame(animate);
        cubes.forEach((cube, index) => {
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
            cube.position.y += Math.sin(Date.now() * 0.001 + index) * 0.001;
        });
        renderer.render(scene, camera);
    }
    animate();
    
    // Handle resize
    window.addEventListener('resize', () => {
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
    });
}

// Initialize other 3D scenes
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initOtherScenes);
} else {
    initOtherScenes();
}

// Add scroll progress indicator
function createScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 4px;
        background: linear-gradient(90deg, var(--accent-green), var(--accent-red));
        z-index: 9999;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

createScrollProgress();

console.log('Cybersecurity Awareness Initiative 2025 | Educational Resource');
console.log('Built with Three.js, GSAP, and Tailwind CSS');
