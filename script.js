const button = document.querySelectorAll('.like');
    
    console.log(button);
    
    button.forEach(item => {
      item.addEventListener('click', (e) => {
        item.classList.toggle('active');
        item.classList.toggle(item.dataset.color);
        item.setAttribute('aria-checked', 'state');
        console.log(item);
      });
    });