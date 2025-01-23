document.addEventListener('DOMContentLoaded', () => {
  const pageContainer = document.querySelector('.page-container');
  
  window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    
    // Calculate scroll percentage
    const scrollPercentage = (scrollPosition / (documentHeight - windowHeight)) * 100;
    
    // Update background gradient based on scroll
    pageContainer.style.background = `linear-gradient(to bottom, 
      rgba(0,0,0,${1 - scrollPercentage/100}) 0%, 
      rgba(0,26,10,${1 - scrollPercentage/100}) 20%, 
      rgba(0,77,26,${1 - scrollPercentage/100}) 40%, 
      rgba(0,128,51,${1 - scrollPercentage/100}) 60%, 
      rgba(0,128,51,1) 100%)`;
  });
});