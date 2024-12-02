let expanding = document.querySelector('.store');

expanding.addEventListener('mouseenter', ()=>{
    expanding.classList.add('active');
});
expanding.addEventListener('mouseleave', () => {
    expanding.classList.remove('active');
});