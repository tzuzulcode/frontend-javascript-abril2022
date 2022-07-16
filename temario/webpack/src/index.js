// import lib from "../static/css/lib.css"
import index from "./static/sass/index.scss"
// import init from "./scene"

// Lazy loading
const sceneElement = document.getElementById("scene")
let cube
let x = 0
const render = (renderer,scene,camera)=>{
    renderer.render(scene,camera)
    x+=0.01
    cube.position.set(-10+x,2,0)
    requestAnimationFrame(()=>{render(renderer,scene,camera)})
    console.log("RENDER")
}

if(sceneElement){
    import("three").then((Three)=>{
        const scene = new Three.Scene()
        const width = window.innerWidth
        const height = window.innerHeight
        const aspectRatio = width/height
        
        const camera = new Three.PerspectiveCamera(45,aspectRatio,0.1,1000)
        const renderer = new Three.WebGLRenderer()

        renderer.setClearColor(new Three.Color(0x000000))
        renderer.setSize(width,height)
        renderer.shadowMap.enabled = true

        const axes = new Three.AxesHelper(20)

        scene.add(axes)

        const planeGeometry = new Three.PlaneGeometry(40,20)
        const planeMaterial = new Three.MeshLambertMaterial({
            color:"#FFFFFF"
        })
        
        const plane = new Three.Mesh(planeGeometry,planeMaterial)
        plane.rotation.x = -0.50 * Math.PI
        // plane.rotation.y = 0.1 * Math.PI
        plane.position.set(0,0,0)
        plane.receiveShadow = true
        scene.add(plane)

        //Creando cubo
        const cubeGeometry = new Three.BoxGeometry(4,4,4)
        const cubeMaterial = new Three.MeshLambertMaterial({
            color: "#364156",
            // wireframe:true
        })

        cube = new Three.Mesh(cubeGeometry,cubeMaterial)
        cube.position.set(-10,2,0)
        cube.castShadow = true
        scene.add(cube)

        // Agregando esfera:
        const sphereGeometry = new Three.SphereGeometry(2.5,20,20)
        const sphereMaterial = new Three.MeshLambertMaterial({
            color:"#31081F",
            // wireframe:true
        })

        const sphere = new Three.Mesh(sphereGeometry,sphereMaterial)
        sphere.position.set(10,2.5,0)
        sphere.castShadow = true
        scene.add(sphere)


        // Moviendo camera:
        camera.position.set(30,10,-25)
        camera.lookAt(scene.position)


        // Spotlight
        const spotlightColor = "#ffffff"
        const spotlight = new Three.SpotLight(spotlightColor)
        spotlight.position.set(-20,20,-20)
        spotlight.castShadow = true
        spotlight.shadow.camera.near = 2
        spotlight.shadow.camera.far = 200
        spotlight.shadow.camera.fov = 30
        spotlight.target = plane
        spotlight.distance = 0
        spotlight.angle = 0.8


        scene.add(spotlight)

        sceneElement.appendChild(renderer.domElement)
        render(renderer,scene,camera)
    })
}