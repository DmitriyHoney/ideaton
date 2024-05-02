$(document).ready(() => {
  const $header = document.querySelector(".header");
  const $waveBg = document.querySelector(".offer-wave-bg");
  $header
    ? (document.body.style.paddingTop = `${$header.offsetHeight}px`)
    : null;

  $waveBg ? ($waveBg.style.top = `${$header.offsetHeight}px`) : null;

  const $roundText = document.querySelector(".offer-button_words");
  $roundText
    ? ($roundText.innerHTML += "Вместе мы создаём будущее технологий"
        .split("")
        .map((e, i) => `<span style="--rot:${i * 5}deg">${e}</span>`)
        .join(""))
    : null;

  $(".gallery-slider").slick({
    dots: false,
    arrows: false,
    slidesToShow: 3,
    infinite: false,
  });
});
