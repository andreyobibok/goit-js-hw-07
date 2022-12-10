import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');
const markup = galleryItems.map((element) =>
    `<div class="gallery__item">
        <a class="gallery__link" href="${element.original}">
        <img
            class="gallery__image"
            src="${element.preview}"
            data-source="${element.original}"
            alt="${element.description}"
        />
        </a>
    </div>`
).join("");

gallery.insertAdjacentHTML('beforeend', markup);

gallery.addEventListener('click', handleEvent);

function handleEvent(event) {
    event.preventDefault();
    const instance = basicLightbox.create(`
	<img src = ${event.target.getAttribute('data-source')}>
    `);
    instance.show();
    document.addEventListener('keydown', (event) => {
    if (event.key === "Escape") {
        instance.close();
    }
}
)
};

