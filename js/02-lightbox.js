import { galleryItems } from './gallery-items.js';
// Change code below this line

const container = document.querySelector(".gallery");
const cardGallery = createGallery(galleryItems);

container.insertAdjacentHTML('beforeend', cardGallery);

function createGallery (images) {
    return images.map(({ preview, original, description }) => {
        return `
          <a class="gallery__item" href="${original}">
            <img
               class="gallery__image"
               src="${preview}"
               data-source="${original}"
               alt="${description}"
               
            />
           </a>
         `;
    })
    .join('');  
}

function onClick(event) {
    event.preventDefault();
};

container.addEventListener("click", onClick);


var gallery = new SimpleLightbox('.gallery a', {captionsData: `alt`});
    gallery.next();


