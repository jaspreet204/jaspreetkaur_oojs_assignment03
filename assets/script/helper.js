'use strict';

export function getDateText() {
    const today = new Date();
    return today.toLocaleString();
}

export function createPostElement(user, text, imageSource) {
    const post = document.createElement('article');
    post.className = 'post-card';

    let textHtml = '';
    let imageHtml = '';

    if (text !== '') {
        textHtml = `<p class="post-text">${text}</p>`;
    }

    if (imageSource) {
        imageHtml = `<img src="${imageSource}" alt="Post image" class="post-image">`;
    }

    post.innerHTML = `
    <div class="post-header">
         <img src="./assets/media/jaspreet-image.jpeg" alt="Profile picture" class="profile-pic">
        <div>
            <p class="post-name">${user.name}</p>
            <p class="post-date">${getDateText()}</p>
        </div>
    </div>
    ${textHtml}
    ${imageHtml}
`;
    return post;
}