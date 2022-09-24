setTimeout(() => {
    const box = document.getElementById('header1');
  
    // 👇️ removes element from DOM
    box.style.display = 'none';
  
    // 👇️ hides element (still takes up space on page)
    // box.style.visibility = 'hidden';
  }, 5000); // 👈️ time in milliseconds
setTimeout(() => {
  const box2 = document.getElementById('image1');

  box2.style.display = 'none';

}, 5000);

setTimeout(function(){
  document.getElementById('image2').classList.remove('hide');
  }, 5000);

setTimeout(() => {
    const box3 = document.getElementById('image2');
  
    box3.style.display = 'none';
  
}, 10000);

setTimeout(function(){
  document.getElementById('image3').classList.remove('hide');
  }, 10000);

setTimeout(() => {
  const box4 = document.getElementById('image3');

  box4.style.display = 'none';

}, 15000);