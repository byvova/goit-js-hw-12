import axios from "axios";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const API_KEY = "41828858-bc9e123a5e007e4f9a3f52776";
const form = document.querySelector('.container');
const input = document.querySelector('input');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const loadMoreButton = document.querySelector('.load-more');



let currentPage = 1;
const perPage = 40;
let searchQuery = '';
let allHits = [];

let cardHeight = 0;

const options = {
    captionsData: 'alt',
    captionDelay: 250,
};

let lightbox;

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    allHits = [];
    currentPage = 1;
    gallery.innerHTML = '';
    try {
        
        searchQuery = encodeURIComponent(input.value.trim());

        if (!searchQuery) {
            iziToast.error({
                title: 'Invalid Input',
                message: 'Please enter a search term.',
            });
            return;
        }
        loader.style.display = 'block';

        const url = `https://pixabay.com/api/?key=${API_KEY}&q=${searchQuery}&page=${currentPage}&per_page=${perPage}`;
        const response = await axios.get(url);

        if (response.status !== 200) {
            throw new Error('Failed to fetch images. Please try again later.');
        }
        console.log(response);
        const hits = response.data.hits;
        console.log(hits);
        allHits = [...hits];

        loader.style.display = 'none';
        gallery.innerHTML = '';

        if (hits.length === 0) {
            iziToast.error({
                title: 'No Results',
                message: 'No images found. Please try a different search term.',
            });
            return;
        }

        gallery.innerHTML = hits.reduce((html, hit) => html + `
            <li class="gallery-item">
                <a class="gallery-link" href="${hit.webformatURL}">
                    <img class="gallery-image" src="${hit.previewURL}" alt="${hit.tags}" />
                </a>
                <div class="content">
                    <h4 class="titles">Likes</h4>
                    <h4 class="titles">Views</h4>
                    <h4 class="titles">Comments</h4>
                    <h4 class="titles">Downloads</h4>
                    <p class="text">${hit.likes}</p>
                    <p class="text">${hit.views}</p>
                    <p class="text">${hit.comments}</p>
                    <p class="text">${hit.downloads}</p>
                </div>
            </li>`, "");

        lightbox = new SimpleLightbox('.gallery a', options);
        
        if (hits.length >= perPage) {
            loadMoreButton.style.display = 'block';
        } else {
            loadMoreButton.style.display = 'none';
        }

    } catch (error) {
        console.error('Error fetching data:', error);

        if (error instanceof TypeError) {
            iziToast.error({
                title: 'Network Error',
                message: 'Please check your internet connection and try again.',
            });
        } else {
            iziToast.error({
                title: 'Error',
                message: error.message,
            });
        }
    }
});



loadMoreButton.addEventListener('click', async () => {
    currentPage++;

    try {
        loader.style.display = 'block';

        if (isFirstLoad || searchQuery !== encodeURIComponent(input.value.trim())) {
            allHits = [];
            currentPage = 1;
            isFirstLoad = false;
        }

        
        const url = `https://pixabay.com/api/?key=${API_KEY}&q=${searchQuery}&page=${currentPage}&per_page=${perPage}`;
        const response = await axios.get(url);

        if (response.status !== 200) {
            throw new Error('Failed to fetch more images. Please try again later.');
        }

        const additionalHits = response.data.hits;

        loader.style.display = 'none';

        if (additionalHits.length === 0) {
            loadMoreButton.style.display = 'none';
            iziToast.info({
                title: 'End of Collection',
                message: "We're sorry, but you've reached the end of search results.",
            });
            return;
        }

        allHits = [...allHits, ...additionalHits];
        

        gallery.innerHTML = allHits.reduce((html, hit) => html + `
            <li class="gallery-item">
                <a class="gallery-link" href="${hit.webformatURL}">
                    <img class="gallery-image" src="${hit.previewURL}" alt="${hit.tags}" />
                </a>
                <div class="content">
                    <h4 class="titles">Likes</h4>
                    <h4 class="titles">Views</h4>
                    <h4 class="titles">Comments</h4>
                    <h4 class="titles">Downloads</h4>
                    <p class="text">${hit.likes}</p>
                    <p class="text">${hit.views}</p>
                    <p class="text">${hit.comments}</p>
                    <p class="text">${hit.downloads}</p>
                </div>
            </li>`, "");

        
        const firstGalleryItem = document.querySelector('.gallery-item');
        if (firstGalleryItem) {
            const { height } = firstGalleryItem.getBoundingClientRect();
            cardHeight = height;
        }

        smoothScrollBy(0, 2 * cardHeight);

        lightbox.refresh();

        if (currentPage * perPage >= response.data.totalHits) {
            loadMoreButton.style.display = 'none';
            iziToast.info({
                title: 'End of Collection',
                message: "We're sorry, but you've reached the end of search results.",
            });
        } else {
            loadMoreButton.style.display = 'block';
        }
    } catch (error) {
        console.error('Error fetching additional data:', error);
        iziToast.error({
            title: 'Error',
            message: error.message,
        });
    }
});

function smoothScrollBy(x, y) {
    window.scrollBy({
        top: y,
        left: x,
        behavior: 'smooth'
    });
}
