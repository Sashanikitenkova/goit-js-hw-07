import { galleryItems } from './gallery-items.js';
// Change code below this line

const container = document.querySelector(".gallery");
const cardGallery = createGallery(galleryItems);

container.insertAdjacentHTML('beforeend', cardGallery);

function createGallery (images) {
    return images.map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img
               class="gallery__image"
               src="${preview}"
               data-source="${original}"
               alt="${description}"
            />
           </a>
        </div> `;
    })
    .join('');  
}


function onClick(event) {
    event.preventDefault();

    if (event.target.nodeName !== "IMG") return;
    const originalUrl = event.target.dataset.source;

    const instance = basicLightbox.create(`
    <img src=${originalUrl}>
     `);
      instance.show();

    //   if (event.key === 'Escape') {
    //     instance.close();
    //   };
     
};

container.addEventListener("click", onClick);


















 //    console.log(event.target);

    // const currentActiveLink = document.querySelector('.tagd__link__active');
    // console.log(currentActiveLink);

    // event.targetclassList.add('tagd__link__active');
    // if (currentActiveLink) {
    //     currentActiveLink.classList.remove('tagd__link__active');
    //    };

