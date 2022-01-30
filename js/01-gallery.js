import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryContainer = document.querySelector(".gallery");
const galleryItemMarkup = createImageGalleryMarkup(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", galleryItemMarkup);

galleryContainer.addEventListener("click", onImageClick);

function createImageGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
                  <a class="gallery__link" href="${original}"">
                  <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}""
                    alt="${description}""
                  />
                </a>
              </div> `;
    })
    .join("");
    
}
function onImageClick(event) {
  event.preventDefault();
  const isGalleryItem = event.target.classList.contains("gallery__image");
  if (!isGalleryItem) {
    return;
  }
  document.addEventListener("keydown", closeModal);

  const modalWindow = basicLightbox.create(
    `
    <div class="modal">
    <img src="${event.target.dataset.source}" width ="800" height = "600">
    </div>
    `,
    {
      onShow: (modalWindow) => {
        console.log("onShow", modalWindow);
      },
      onClose: (modalWindow) => {
        document.removeEventListener("keydown", closeModal);
        console.log("onClose", modalWindow);
      },
    }
  );
  showModal();
  closeModal(event);

  function showModal() {
    modalWindow.show();
  }
  function closeModal(event) {
    if (event.code === "Escape") {
      modalWindow.close();
    }
  }
}
