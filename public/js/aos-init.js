import AOS from 'aos'
import 'aos/dist/aos.css'


document.addEventListener('DOMContentLoaded', function() {
  if (typeof AOS !== 'undefined') {
    AOS.init();
  } else {
    console.error('AOS library is not loaded.');
  }
});
