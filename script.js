// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', function(e){
    const target = document.querySelector(this.getAttribute('href'));
    if(target){ 
      e.preventDefault(); 
      target.scrollIntoView({behavior:'smooth', block:'start'}); 
    }
  });
});

// Animate icons when they scroll into view
const icons = document.querySelectorAll('.icon');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

icons.forEach(icon => observer.observe(icon));
