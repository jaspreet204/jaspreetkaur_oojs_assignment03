import { Subscriber } from './subscriber.js';
import { createPostElement } from './helper.js';

const postForm = document.getElementById('postForm');
const postText = document.getElementById('postText');
const postImage = document.getElementById('postImage');
const postBtn = document.getElementById('postBtn');
const postsSection = document.getElementById('postsSection');

const accountBtn = document.getElementById('accountBtn');
const modal = document.getElementById('modal');
const closeModal = document.getElementById('closeModal');
const modalContent = document.getElementById('modalContent');

const currentUser = new Subscriber(
    101,
    'Jaspreet',
    'jass_posts',
    'jass.fakebook@email.com',
    ['Daily Vibes', 'Student Life'],
    ['JavaScript Beginners', 'Creative Minds'],
    true
);

function checkPostButton() {
    const hasText = postText.value.trim() !== '';
    const hasImage = postImage.files.length > 0;

    postBtn.disabled = !(hasText || hasImage);
}

postText.addEventListener('input', checkPostButton);
postImage.addEventListener('change', checkPostButton);

postForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const textValue = postText.value.trim();
    const imageFile = postImage.files[0];

    if (textValue === '' && !imageFile) {
        return;
    }

    if (imageFile) {
        const reader = new FileReader();

        reader.addEventListener('load', function () {
            const post = createPostElement(currentUser, textValue, reader.result);
            postsSection.prepend(post);
        });

        reader.readAsDataURL(imageFile);
    } else {
        const post = createPostElement(currentUser, textValue, null);
        postsSection.prepend(post);
    }

    postForm.reset();
    postBtn.disabled = true;
});

accountBtn.addEventListener('click', function () {
    modalContent.innerHTML = currentUser.getInfo();
    modal.classList.remove('hidden');
});

closeModal.addEventListener('click', function () {
    modal.classList.add('hidden');
});

modal.addEventListener('click', function (event) {
    if (event.target === modal) {
        modal.classList.add('hidden');
    }
});