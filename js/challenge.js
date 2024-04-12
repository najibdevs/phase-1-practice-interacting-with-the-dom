document.addEventListener('DOMContentLoaded', function() {
    const counterDisplay = document.getElementById('counter');
    const minusButton = document.getElementById('minus');
    const plusButton = document.getElementById('plus');
    const heartButton = document.getElementById('heart');
    const pauseButton = document.getElementById('pause');
    const likeList = document.querySelector('.likes');
    const commentList = document.getElementById('list');
    const commentInput = document.getElementById('comment-input');
    const commentForm = document.getElementById('comment-form');
    
    let count = 0;
    let timerInterval = setInterval(() => {
      if (!isPaused) {
        count++;
        counterDisplay.textContent = count;
      }
    }, 1000);
    let isPaused = false;
  
    plusButton.addEventListener('click', () => {
      count++;
      counterDisplay.textContent = count;
    });
  
    minusButton.addEventListener('click', () => {
      count--;
      counterDisplay.textContent = count < 0 ? 0 : count;
    });
  
    heartButton.addEventListener('click', () => {
      const likeItem = document.createElement('li');
      likeItem.textContent = `Liked ${count} times`;
      likeList.appendChild(likeItem);
    });
  
    pauseButton.addEventListener('click', () => {
      if (!isPaused) {
        clearInterval(timerInterval);
        isPaused = true;
        minusButton.disabled = true;
        plusButton.disabled = true;
        heartButton.disabled = true;
        pauseButton.textContent = 'resume';
      } else {
        timerInterval = setInterval(() => {
          if (!isPaused) {
            count++;
            counterDisplay.textContent = count;
          }
        }, 1000);
        isPaused = false;
        minusButton.disabled = false;
        plusButton.disabled = false;
        heartButton.disabled = false;
        pauseButton.textContent = 'pause';
      }
    });
  
    commentForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const comment = commentInput.value.trim();
      if (comment !== '') {
        const commentItem = document.createElement('div');
        commentItem.textContent = comment;
        commentList.appendChild(commentItem);
        commentInput.value = '';
      }
    });
  });
  