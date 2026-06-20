$(document).ready(function () {
  const inject_css = function () {
    var f = document.getElementsByTagName("script")[0];
    var playerbs_css = document.createElement("link");
    playerbs_css.rel = "stylesheet";
    playerbs_css.href =
      "https://cdn.jsdelivr.net/gh/robgalvinco/player-snippets@v1.0.28/css/kapow-playerbs.css";
    f.parentNode.insertBefore(playerbs_css, f);

    var snipps_css = document.createElement("link");
    snipps_css.rel = "stylesheet";
    snipps_css.href = "https://assets.superpowerups.com/playersnips.css";
    snipps_css.href =
      "https://cdn.jsdelivr.net/gh/robgalvinco/player-snippets@v1.0.37/css/text.css";
    f.parentNode.insertBefore(snipps_css, f);

    var animate_css = document.createElement("link");
    animate_css.rel = "stylesheet";
    animate_css.href =
      "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css";
    f.parentNode.insertBefore(animate_css, f);
  };

  const inject_confetijs = function () {
    var f = document.getElementsByTagName("script")[0],
      j = document.createElement("script");
    j.async = true;
    j.src = "https://assets.superpowerups.com/player-confetti-cannon.js";
    j.src =
      "https://cdn.jsdelivr.net/gh/robgalvinco/player-snippets@v1.0.61/js/player-confetti-cannon.js";
    f.parentNode.insertBefore(j, f);
  };
  const inject_fap = function () {
    var f = document.getElementsByTagName("script")[0];
    var playerbs_css = document.createElement("link");
    playerbs_css.rel = "stylesheet";
    playerbs_css.href =
      "https://cdn.jsdelivr.net/gh/robgalvinco/player-snippets@1.0.25/fap/css/all.min.css";
    f.parentNode.insertBefore(playerbs_css, f);
  };
  const inject_bsjs = function () {
    var f = document.getElementsByTagName("script")[0],
      j = document.createElement("script");
    j.async = true;
    j.src =
      "https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js";
    f.parentNode.insertBefore(j, f);
  };
  const inject_typeform = function () {
    var f = document.getElementsByTagName("script")[0],
      j = document.createElement("script");
    j.async = true;
    j.src = "https://embed.typeform.com/next/embed.js";
    f.parentNode.insertBefore(j, f);
    j2 = document.createElement("script");
    j2.async = true;
    j2.src =
      "https://cdn.jsdelivr.net/gh/robgalvinco/player-snippets@v1.0.28/js/playersnips-typeform.js";
    f.parentNode.insertBefore(j2, f);
    var _css_popup = document.createElement("link");
    _css_popup.rel = "stylesheet";
    _css_popup.href = "https://embed.typeform.com/next/css/popup.css";
    f.parentNode.insertBefore(_css_popup, f);
    var _css_slider = document.createElement("link");
    _css_slider.rel = "stylesheet";
    _css_slider.href = "https://embed.typeform.com/next/css/slider.css";
    f.parentNode.insertBefore(_css_slider, f);
    var _css_sidetab = document.createElement("link");
    _css_sidetab.rel = "stylesheet";
    _css_sidetab.href = "https://embed.typeform.com/next/css/sidetab.css";
    f.parentNode.insertBefore(_css_sidetab, f);
    var _css_popover = document.createElement("link");
    _css_popover.rel = "stylesheet";
    _css_popover.href = "https://embed.typeform.com/next/css/popover.css";
    f.parentNode.insertBefore(_css_popover, f);
  };
  const inject_lottie = function () {
    var f = document.getElementsByTagName("script")[0],
      j = document.createElement("script");
    j.async = true;
    j.src =
      "https://unpkg.com/@lottiefiles/lottie-player@1.6.0/dist/lottie-player.js";
    f.parentNode.insertBefore(j, f);

    j1 = document.createElement("script");
    j1.async = true;
    j1.src =
      "https://unpkg.com/@lottiefiles/lottie-interactivity@1.6.0/dist/lottie-interactivity.min.js";
    f.parentNode.insertBefore(j1, f);

    j2 = document.createElement("script");
    j2.async = true;
    j2.src =
      "https://cdn.jsdelivr.net/gh/robgalvinco/player-snippets@v1.0.28/js/playersnips-lottie.js";
    f.parentNode.insertBefore(j2, f);
  };

  const inject_sound = function () {
    var f = document.getElementsByTagName("script")[0],
      j = document.createElement("script");
    j.async = true;
    j.src = "https://assets.superpowerups.com/playersnips-sounds.js";
    j.src =
      "https://cdn.jsdelivr.net/gh/robgalvinco/player-snippets@v1.0.28/js/playersnips-sound.js";

    f.parentNode.insertBefore(j, f);
  };

  const inject_pspops = function () {
    var f = document.getElementsByTagName("script")[0],
      j = document.createElement("script");
    j.async = true;
    j.src = "https://assets.superpowerups.com/playersnips-popups.js";
    j.src =
      "https://cdn.jsdelivr.net/gh/robgalvinco/player-snippets@v1.0.36/js/playersnips-popups.js";
    f.parentNode.insertBefore(j, f);
  };

  const inject_psevents = function () {
    var f = document.getElementsByTagName("script")[0],
      j = document.createElement("script");
    j.async = true;
    j.src = "https://assets.superpowerups.com/playersnips-events.js";
    j.src =
      "https://cdn.jsdelivr.net/gh/robgalvinco/player-snippets@v1.0.30/js/playersnips-events.js";
    f.parentNode.insertBefore(j, f);
  };

  // Course player
  if (typeof CoursePlayerV2 !== "undefined") {
    inject_css();
    inject_confetijs();
    inject_bsjs();
    inject_sound();
    inject_psevents();
    inject_pspops();
    inject_fap();
    inject_typeform();
    inject_lottie();
    CoursePlayerV2.on("hooks:contentDidChange", function (data) {
      window.setTimeout(() => {
        // Fix FAP
        $('i[class^="fa-"]').html("");

        $(".kapow-player .flip-card").on("click", function () {
          $(this).toggleClass("active");
        });

        $('.kapow-player [data-bs-toggle="tooltip"]').tooltip();
      }, 500);
    });
  } else {
    // not course player
  }
});
