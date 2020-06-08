function toggle(){
    const trailer = document.querySelector('.trailer');
    const video = document.querySelector('iframe');
    trailer.classList.toggle('active')
    video.src=video.src;

}