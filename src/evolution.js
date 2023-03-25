import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const proxyUrl = 'https://antonin-nicolas-github-io.vercel.app';
const glbUrl = 'https://storage.googleapis.com/robotglb/Robot.glb';

//ROBOT3D//

    // Initialisation de la scène
    const scene = new THREE.Scene();

    const sizes = {
        width: 300,
        height: 150
    }
    // Initialisation de la caméra
    const camera = new THREE.PerspectiveCamera(
        75, // angle de vue
        sizes.width / sizes.height, // ratio d'aspect
        0.1, // distance de rendu minimale
        1000 // distance de rendu maximale
    );

    // Positionnement de la caméra et des lumières
    camera.position.z = 0.35;
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xefefff, 1.5);
    dirLight.position.set(10, 10, 10);
    scene.add(dirLight);

    // Initialisation du rendu
    const canvas = document.querySelector('.ROBOT3D');
    const renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        antialias: true,
        alpha: true
    });
    renderer.setSize(sizes.width, sizes.height);

    // Initialisation des contrôles OrbitControls
    const controls = new OrbitControls(camera, canvas);
    controls.autoRotate = true;
    controls.enableZoom = false;
    controls.enableDamping = true;

    // Chargement du modèle 3D
    const loader = new GLTFLoader();
    loader.load(
        proxyUrl + '/proxy/' + encodeURIComponent(glbUrl),
        (gltf) => {
            scene.add(gltf.scene);
        },
        undefined,
        (error) => {
            console.error(error);
    },
);

    // Fonction d'animation
    function animate() {
        requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera);
    }
    animate();

    //responsive
    window.addEventListener('resize', () => {
        //update sizes
        sizes.width = 300,
        sizes.height = 150
        //update camera
        camera.aspect = sizes.width / sizes.height
        camera.updateProjectionMatrix()

        //update renderer
        renderer.setSize(sizes.width, sizes.height)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    })
