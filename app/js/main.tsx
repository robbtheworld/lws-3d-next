// components/ThreeScene.js
"use client"; // Directive to ensure this runs only on the client-side in Next.js
import { useEffect, useRef } from "react";
import * as THREE from "three";

function Main() {
  const canvasRef = useRef(null); // Use useRef to reference the canvas DOM element

  useEffect(() => {
    if (!canvasRef.current) return; // Guard to ensure the canvas is available

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.setZ(30);
    camera.position.setX(-3);

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current, // Attach the renderer to the canvas
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);

    const torusGeometry = new THREE.TorusGeometry(10, 2, 16, 100);
    const torusMaterial = new THREE.MeshStandardMaterial({ color: 0xffc80f });
    const torus = new THREE.Mesh(torusGeometry, torusMaterial);
    scene.add(torus);

    const pointLight = new THREE.PointLight(0xffffff, 200);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    const ambientLight = new THREE.AmbientLight(0xffffff);
    scene.add(ambientLight);

    function addStar() {
      const geometry = new THREE.SphereGeometry(0.25, 24, 24);
      const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
      const star = new THREE.Mesh(geometry, material);

      const [x, y, z] = Array(3)
        .fill(null)
        .map(() => THREE.MathUtils.randFloatSpread(100));

      star.position.set(x, y, z);
      scene.add(star);
    }

    Array(200).fill(null).forEach(addStar);

    // background

    const spaceTexture = new THREE.TextureLoader().load("assets/sunset.jpg");
    scene.background = spaceTexture;

    // avatar
    const tadeoTexture = new THREE.TextureLoader().load(
      "assets/headshot-square.jpg"
    );

    const tadeo = new THREE.Mesh(
      new THREE.BoxGeometry(3, 3, 3),
      new THREE.MeshBasicMaterial({ map: tadeoTexture })
    );

    scene.add(tadeo);

    // Moon
    const moonTexture = new THREE.TextureLoader().load("assets/moon.jpg");
    const normalTexture = new THREE.TextureLoader().load("assets/normal.jpg");

    const moon = new THREE.Mesh(
      new THREE.SphereGeometry(3, 32, 32),
      new THREE.MeshStandardMaterial({
        map: moonTexture,
        normalMap: normalTexture,
      })
    );

    scene.add(moon);
    // console.log(moon);

    moon.position.z = 20;
    moon.position.setX(-10);

    tadeo.position.z = -5;
    tadeo.position.x = 2;

    function moveCamera() {
      const t = document.body.getBoundingClientRect().top;
      moon.rotation.x += 0.05;
      moon.rotation.y += 0.075;
      moon.rotation.z += 0.05;

      tadeo.rotation.y += 0.01;
      tadeo.rotation.z += 0.01;

      camera.position.z = t * -0.01;
      camera.position.x = t * -0.0002;
      camera.position.y = t * -0.0002;
    }

    document.body.onscroll = moveCamera;
    moveCamera();

    function animate() {
      requestAnimationFrame(animate);
      torus.rotation.x += 0.01;
      torus.rotation.y += 0.005;
      torus.rotation.z += 0.01;
      renderer.render(scene, camera);
    }
    animate();

    // Cleanup function to run when the component unmounts
    return () => {
      renderer.dispose(); // Dispose of the renderer to clean up resources
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="bg"
      style={{ width: "100%", height: "100vh" }}
    />
  );
}

export default Main;
