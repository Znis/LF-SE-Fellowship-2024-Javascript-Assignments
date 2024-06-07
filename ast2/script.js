const img_current = document.getElementById("image-carousel__img-current");
const img_previous = document.getElementById("image-carousel__img-previous");
const img_next = document.getElementById("image-carousel__img-next");



const arr = [1,2,3,4,5,6,7,8];

const img_names = arr.map((value) => `images/${value}.jpg`);



for (let i=1; i<=img_names.length; i++){
    setTimeout(() => { 
        if(!i){
        img_current.style.transform = `translateX(-100%)`
        img_current.style.transition = `transform 2s`
        img_current.setAttribute('src', img_names[i-1]);

        img_next.style.transform = `translateX(-100%)`
        img_next.style.transition = `transform 2s`
        img_next.setAttribute('src', img_names[i]);
        }else if (i == img_names.length){
        img_current.style.transform = `translateX(-100%)`
        img_current.style.transition = `transform 2s`
        img_current.setAttribute('src', img_names[i-1]);

        img_previous.style.transform = `translateX(-100%)`
        img_previous.style.transition = `transform 2s`
        img_previous.setAttribute('src', img_names[i-2]);
        }
        else{
        img_previous.style.transform = `translateX(-100%)`
        img_previous.style.transition = `transform 2s`
        img_previous.setAttribute('src', img_names[i-2]);

        img_current.style.transform = `translateX(-100%)`
        img_current.style.transition = `transform 2s`
        img_current.setAttribute('src', img_names[i-1]);

        img_next.style.transform = `translateX(-100%)`
        img_next.style.transition = `transform 2s`
        img_next.setAttribute('src', img_names[i]);
        }
        

        
    }, i * 2000);
}