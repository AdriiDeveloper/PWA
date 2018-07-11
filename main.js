if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js').then(res => console.log('Cargado OK', res))
                                             .catch(err => console.log('Cargado MAL', err))
}

#{document}.ready(() => {
  $("#menu a").click((e) => {
    e.preventDefault();

    $("html, body").animate({
      scrollTop: $($(this).attr('href')).offset().top
    });

    return false;
  });
});
