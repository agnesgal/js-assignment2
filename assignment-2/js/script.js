// Array containing gallery items with image details
const galleryItems = [
    {
        large: "images/flowers-pink-large.jpg",
        small: "images/flowers-pink-small.jpg",
        alt: "Market",
        caption: "Flower stand at the market in Münster, North Rhine-Westphalia, Germany"
    },
    {
        large: "images/flowers-purple-large.jpg",
        small: "images/flowers-purple-small.jpg",
        alt: "Sentmaring Park",
        caption: "Sentmaring Park, Münster, North Rhine-Westphalia, Germany"
    },
    {
        large: "images/flowers-red-large.jpg",
        small: "images/flowers-red-small.jpg",
        alt: "Poppies",
        caption: "Poppies in cornfield, Dülmen, North Rhine-Westphalia, Germany"
    },
    {
        large: "images/flowers-white-large.jpg",
        small: "images/flowers-white-small.jpg",
        alt: "Daffodils",
        caption: "Daffodils in Sentmaring park, Münster, North Rhine-Westphalia, Germany"
    },
    {
        large: "images/flowers-yellow-large.jpg",
        small: "images/flowers-yellow-small.jpg",
        alt: "Sunflowers",
        caption: "Sunflowers in the Dernekamp hamlet, Kirchspiel, Dülmen, North Rhine-Westphalia, Germany"
    }
];

// Select DOM elements
const thumbnailList = document.querySelector('#thumbnail-list');
const featuredImage = document.querySelector('#featured-image');
const figcaption = document.querySelector('#image-caption');

/**
 * Updates the featured image and caption based on the selected thumbnail.
 * @param {number} index - Index of the gallery item to display.
 */
function displayFeaturedImage(index) {
    const item = galleryItems[index];

    // Update featured image source and alt text
    featuredImage.src = item.large;
    featuredImage.alt = item.alt;

    // Update the caption text
    figcaption.textContent = item.caption;

    // Highlight the active thumbnail
    document.querySelectorAll('.thumbnail').forEach((thumb, i) => {
        thumb.classList.toggle('active', i === index);
    });
}

/**
 * Dynamically generates thumbnails and adds them to the thumbnail list.
 */
galleryItems.forEach((item, index) => {
    const listItem = document.createElement('li');
    const button = document.createElement('button'); // Button improves accessibility for keyboard navigation
    const img = document.createElement('img');

    // Set thumbnail image attributes
    img.src = item.small;
    img.alt = item.alt;
    img.width = 240;
    img.height = 160;
    img.classList.add('thumbnail');

    // Fallback to placeholder if the image fails to load
    img.onerror = () => {
        img.alt = "Image not available"; 
        img.src = "images/placeholder.jpg"; 
    };

    button.appendChild(img);
    button.setAttribute('aria-label', `View ${item.alt}`); // Adds label for screen readers

    // Update the featured image on button click
    button.addEventListener('click', () => displayFeaturedImage(index));

    listItem.appendChild(button);
    thumbnailList.appendChild(listItem);
});

// Display the first image as the default featured image
displayFeaturedImage(0);
