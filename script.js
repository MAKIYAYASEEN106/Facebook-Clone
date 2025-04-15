// Profile card toggle
let cardwrap = document.getElementById('cardwrap');
function openCard(){
    cardwrap.classList.toggle('open-menu');
}
// Like Toggle Function
function toggleLike(postId) {
    const likeIcon = document.getElementById(`like-icon-${postId}`);
    likeIcon.classList.toggle('active');
}

// Story Viewing Functionality
function viewStory(author, imageUrl) {
    const modal = document.getElementById('story-modal');
    const storyImage = document.getElementById('story-image');
    const storyAuthor = document.getElementById('story-author');
    
    storyImage.src = imageUrl;
    storyAuthor.textContent = author;
    modal.style.display = 'flex';
    
    // Auto-close after 5 seconds
    setTimeout(closeStory, 5000);
}

function closeStory() {
    document.getElementById('story-modal').style.display = 'none';
}

// Post Liking System
function toggleLike(postId) {
    const likeIcon = document.getElementById(`like-icon-${postId}`);
    const likeCount = document.getElementById(`like-count-${postId}`);
    
    if (likeIcon.classList.contains('active')) {
        // Unlike
        likeIcon.classList.remove('active');
        likeCount.textContent = "Muazzama Khalid and 1.3k others";
    } else {
        // Like
        likeIcon.classList.add('active');
        likeCount.textContent = "You, Muazzama Khalid and 1.3k others";
    }
}

// Commenting System
function focusComment(postId) {
    document.getElementById(`comment-input-${postId}`).focus();
}

function handleCommentKeypress(event, postId) {
    if (event.key === 'Enter' && event.target.value.trim() !== '') {
        addComment(postId, event.target.value);
        event.target.value = '';
    }
}

function addComment(postId, commentText) {
    const commentsContainer = document.getElementById(`comments-container-${postId}`);
    const commentCount = document.getElementById(`comment-count-${postId}`);
    
    // Create new comment element
    const commentDiv = document.createElement('div');
    commentDiv.className = 'comment-item';
    commentDiv.innerHTML = `
        <img src="pics/img.jpeg" alt="User">
        <div class="comment-text">
            <div class="comment-author">You</div>
            <div class="comment-content">${commentText}</div>
        </div>
    `;
    
    // Add to container
    commentsContainer.prepend(commentDiv);
    
    // Update comment count
    const currentCount = parseInt(commentCount.textContent);
    commentCount.textContent = `${currentCount + 1} Comments`;
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('story-modal');
    if (event.target == modal) {
        closeStory();
    }
}