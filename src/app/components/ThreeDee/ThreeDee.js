import React, { useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import stevePic from "../../../images/steve.jpg";

const ThreeDee = () => {
  useEffect(() => {
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer({
      canvas: document.querySelector("#bg"),
    });

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.position.setZ(30);

    renderer.render(scene, camera);

    //make an object

    const geometry = new THREE.TorusGeometry(5, 2, 3, 100);
    const material = new THREE.MeshStandardMaterial({
      color: 0xffffff,
    });
    const doughnut = new THREE.Mesh(geometry, material);

    scene.add(doughnut);

    doughnut.position.y = 5;
    doughnut.position.x = 5;

    const pointLight = new THREE.PointLight(0x0000ff);
    pointLight.position.set(-5, 5, 0);

    const redLight = new THREE.PointLight(0xff0000);
    redLight.position.set(5, -5, 0);

    const ambientLight = new THREE.AmbientLight(0x008800);
    scene.add(pointLight, redLight, ambientLight);

    const lightHelper = new THREE.PointLightHelper(pointLight);
    const redHelper = new THREE.PointLightHelper(redLight);
    const gridHelper = new THREE.GridHelper(200, 50);
    scene.add(lightHelper, redHelper, gridHelper);

    const controls = new OrbitControls(camera, renderer.domElement);

    const addStar = (params) => {
      const geometry = new THREE.SphereGeometry(0.25, 24, 24);
      const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
      const star = new THREE.Mesh(geometry, material);

      const [x, y, z] = Array(3)
        .fill()
        .map(() => THREE.MathUtils.randFloatSpread(100));

      star.position.set(x, y, z);
      scene.add(star);
    };

    Array(200).fill().forEach(addStar);

    const stevenTexture = new THREE.TextureLoader().load(stevePic);

    const stevePhantom = new THREE.Mesh(
      new THREE.BoxGeometry(3, 3, 0),
      new THREE.MeshBasicMaterial({ map: stevenTexture })
    );

    scene.add(stevePhantom);

    stevePhantom.position.y = -5;
    stevePhantom.position.x = -5;

    const animate = (params) => {
      requestAnimationFrame(animate);
      doughnut.rotation.x += 0.01;
      doughnut.rotation.y += 0.005;
      doughnut.rotation.z += 0.01;

      stevePhantom.rotation.x -= 0.01;

      controls.update();

      renderer.render(scene, camera);
    };

    animate();
  });

  return (
    <div>
      <canvas id="bg"></canvas>
    </div>
  );
};

export default ThreeDee;
