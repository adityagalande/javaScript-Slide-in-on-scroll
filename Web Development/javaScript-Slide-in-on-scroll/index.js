function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function() {
    var context = this,
      args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

const sliderImage = document.querySelectorAll('.slide-in');

function fun(e) {
  // console.log(window.innerHeight);
  // console.log(window.scrollY);

  // It gives bottom pixel level where you are currently
  // console.log(window.scrollY + window.innerHeight);
  sliderImage.forEach(sliderImage => {
    // half way through the image
    const slideInAt = (window.scrollY + window.innerHeight) - (sliderImage.height / 2);

    // bottom of the image
    const imageBottom = sliderImage.offsetTop + sliderImage.height;

    const isHalfShown = slideInAt > sliderImage.offsetTop;
    const isNotScrollPast = window.scrollY < imageBottom;

    if(isHalfShown && isNotScrollPast) {
      sliderImage.classList.add('active');
    } else {
      sliderImage.classList.remove('acctive');
    }
  });


}


window.addEventListener('scroll', debounce(fun));
