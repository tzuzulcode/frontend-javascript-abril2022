// import lib from "../static/css/lib.css"
import index from "./static/sass/index.scss"
// import init from "./scene"

// Lazy loading
const sceneElement = document.getElementById("scene")
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

        const axes = new Three.AxesHelper(20)

        scene.add(axes)

        const planeGeometry = new Three.PlaneGeometry(40,20)
        const planeMaterial = new Three.MeshBasicMaterial({
            color:0xAAAAAA
        })
        
        const plane = new Three.Mesh(planeGeometry,planeMaterial)
        plane.rotation.x = -0.50 * Math.PI
        // plane.rotation.y = 0.1 * Math.PI
        plane.position.set(0,0,0)
        scene.add(plane)

        //Creando cubo
        const cubeGeometry = new Three.BoxGeometry(4,4,4)
        const cubeMaterial = new Three.MeshBasicMaterial({
            color: 0xFF0000,
            wireframe:true
        })

        const cube = new Three.Mesh(cubeGeometry,cubeMaterial)
        cube.position.set(-4,3,0)
        scene.add(cube)


        // Moviendo camera:
        camera.position.set(30,10,-25)
        camera.lookAt(scene.position)
        
        sceneElement.appendChild(renderer.domElement)
        renderer.render(scene,camera)
    })
}