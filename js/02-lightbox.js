import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector(".gallery");

galleryContainer.insertAdjacentHTML(
  "beforeend",
  createImageGalleryMarkup(galleryItems)
);

function createImageGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
  <a class="gallery__link" href="${original}"">
  <img
    
    class="gallery__image"
    src="${preview}"
    data-source="${original}""
    alt="${description}""
  />
</a>
</li> `;
    })
    .join("");
}

const lightbox = new SimpleLightbox(".gallery a", {
  captions: true,
  captionDelay: 250,
  captionSelector: "img",
  captionType: "attr",
  captionsData: "alt",
  captionPosition: "bottom",
  captionClass: "",
});
