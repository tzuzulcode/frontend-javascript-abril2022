const lazyLoadingCallback = (entries)=>{
    for(let entry of entries){
        if(entry.isIntersecting){
            entry.target.src = entry.target.dataset.src

            observer.unobserve(entry.target)
        }
    }
}

const showImageCallback = (entries)=>{
    for(let entry of entries){
        if(entry.isIntersecting){
            entry.target.previousElementSibling.style.opacity = 0
        }else{
            entry.target.previousElementSibling.style.opacity = 0.9
        }
    }
}

const controlObserver = new IntersectionObserver(showImageCallback,{
    threshold:[0.75]
})

let lazyLoadingObserver = new IntersectionObserver(lazyLoadingCallback,{
    rootMargin:"0px 0px -500px 0px"
})

const images = document.getElementsByTagName("img")

for(let image of images){
    lazyLoadingObserver.observe(image)
    controlObserver.observe(image)
}