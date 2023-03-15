import $ from "jquery";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import * as THREE from 'three'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js'
import {OrbitControls} from './medias/glb/OrbitControls.js';
import * as ScrollMagic from "scrollmagic";
import { ScrollMagicPluginIndicator} from "scrollmagic-plugins";
 

//title animation//
const myText = new SplitType('.titre')

gsap.to('.char', {
    y: 0,
    stagger: 0.01,
    delay: 0.2,
    duration: .1
})

//3DEARTH//
      // Initialisation de la scène
      const scene = new THREE.Scene();

      const sizes = {
        width: innerWidth,
        height: innerHeight
    }
      // Initialisation de la caméra
      const camera = new THREE.PerspectiveCamera(
        75, // angle de vue
        sizes.width / sizes.height, // ratio d'aspect
        0.1, // distance de rendu minimale
        1000 // distance de rendu maximale
      );

      // Positionnement de la caméra
      camera.position.z = 2;
      camera.position.y = 2;

      // Initialisation du rendu
      const canvas = document.querySelector('.EARTH3D');
      const renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        antialias: true,
        alpha: true});
      renderer.setSize(sizes.width, sizes.height);

      // Initialisation des contrôles OrbitControls
      const controls = new OrbitControls(camera, canvas);
      controls.autoRotate = true; 
      controls.enableZoom = false; 
      controls.enableDamping = true;

      // Chargement du modèle 3D
      const loader = new GLTFLoader();
      loader.load(
        './medias/glb/EARTH3D.glb', // chemin vers le modèle
        (gltf) => {
          scene.add(gltf.scene);
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
window.addEventListener('resize', () =>
{
    //update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight
    //update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    //update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

//animate PART2//
var controller = new ScrollMagic.Controller();
var pinnedHeight = $(".PART2").outerHeight(true) - $(".background-PART2").outerHeight(true);

(function ($) { // wait for document ready
  // build scene
  var scene = new ScrollMagic.Scene({triggerElement: ".EARTH3D", duration: pinnedHeight, triggerHook:0.08})
          .setPin(".EARTH3D")
          .addTo(controller);
})($);

(function ($) { // wait for document ready
  // build scene
  var scene = new ScrollMagic.Scene({triggerElement: ".EARTH3D", duration: pinnedHeight, triggerHook:0.08})
          .setPin(".background-PART2")
          .addTo(controller);
})($);