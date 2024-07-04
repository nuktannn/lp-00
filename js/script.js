//drawer
jQuery("#js-drawer-icon").on("click", function (e) {
  e.preventDefault();
  jQuery("#js-drawer-icon").toggleClass("is-checked");
  jQuery("#js-drawer-content").toggleClass("is-checked");
});

$("#js-drawer-content [href]").on("click", function (event) {
  $("#js-drawer-icon").trigger("click");
});

// ヘッダーの高さ分だけコンテンツを下げる
$(function () {
const height = $(".js-header").height();
$("main").css("margin-top", height);
});

//スムーススクロール
// #から始まるURLがクリックされた時
jQuery('a[href^="#"]').on("click", function () {
  var header = jQuery("header").innerHeight();
  var id = jQuery(this).attr("href");
  var position = 0;
  if (id != "#") {
    var position = jQuery(id).offset().top - header;
  }
  jQuery("html, body").animate(
    {
      scrollTop: position,
    },
    300
  );

  return false;
});

//top-button(スムーススクロール)
jQuery(function () {
  var pagetop = $("#page_top"); //page-topが「#pagetop」を取得

  pagetop.hide(); //特定のHTML要素を非表示にする。

  $(window).scroll(function () {
    //widowをスクロースする

    if ($(this).scrollTop() > 80) {
      //80pxスクロールしたら表示

      pagetop.fadeIn(300); //0.3秒かけてフェードイン
    } else {
      pagetop.fadeOut(300); //0.3秒かけてフェードアウト
    }
  });

  pagetop.click(function () {
    //pagetopをクリックしたら

    $("body,html").animate(
      {
        scrollTop: 0, //画面の最上部の位置に移動するという意味
      },
      500
    ); //0.5秒かけてトップへ移動

    return false; //処理の最後に記述する
  });
});

const swiper1 = new Swiper("#swiper1", {
  loop: true, // ループ有効
  slidesPerView: 10, // 一度に表示する枚数
  spaceBetween: 20, // スライド間の余白（px）
  speed: 3000, // ループの時間
  allowTouchMove: false, // スワイプ無効
  autoplay: {
    delay: 0, // 途切れなくループ
  },
    // Responsive breakpoints
    breakpoints: {
      0: {
        spaceBetween: 5, // スライド間の余白（px）
      },
      700: {
        spaceBetween: 10, // スライド間の余白（px）
      },
      1000: {
        spaceBetween: 20, // スライド間の余白（px）
      },
    },
});

//モーダル
$(function () {
  $(".js-modal-open").each(function () {
    $(this).on("click", function () {
      var target = $(this).data("target");
      var modal = document.getElementById(target);
      $(modal).fadeIn();
      return false;
    });
  });
  $(".js-modal-close").on("click", function () {
    $(".js-modal").fadeOut();
    return false;
  });
  $(".modal__bg").on("click", function (e) {
    e.stopPropagation();
  });
});

//slider
const swiper2 = new Swiper("#swiper2", {
  slidesPerView: 3.2,
  // Optional parameters
  loop: true,
  loopAdditionalSlides: 1,

  // Navigation arrows
  navigation: {
    nextEl: "#slider-next",
    prevEl: "#slider-prev",
  },
  // Responsive breakpoints
  breakpoints: {
    300: {
      slidesPerView: 1.3,
      centeredSlides: true,
    },
    // when window width is >= 768px
    900: {
      slidesPerView: 2.2,
      centeredSlides: false,
    },
    // when window width is >= 768px
    1200: {
      slidesPerView: 3.2,
      centeredSlides: false,
    },
    // when window width is >= 1024px
    1512: {
      slidesPerView: 3.2,
      centeredSlides: false,
    },
    1750: {
      slidesPerView: 3.8,
      centeredSlides: false,
    },

  },
});

//qa
jQuery(document).ready(function ($) {
  // 最初にすべてのqa-box-aを閉じます
  $(".qa__box-a").hide();
  // 最初のqa-box-aだけを開きます
  $(".qa__box-a").first().show();
  $(".qa__box-icon").first().addClass("is-open");

  // qa-box-qがクリックされたときの動作を定義します
  $(".qa__box-q").click(function () {
    $(this).next(".qa__box-a").slideToggle();
    $(this).children(".qa__box-icon").toggleClass("is-open");

    // クリックされた要素以外のすべてのqa-box-aを閉じます
    // $(".qa__box-a").not($(this).next()).slideUp();
    // 他のすべてのアイコンを'is-open'クラスから削除して、プラス記号に戻します
    // $(".qa__box-icon").not($(this).children()).removeClass("is-open");
  });
});

//contact

window.onload = function() {
  const form = document.querySelector('.contact__form');
  const inputs = Array.from(form.querySelectorAll('.form-text, .form-textarea, .form-select'));
  const checkbox = form.querySelector('.form-checkbox__input');
  const button = form.querySelector('.contact__button');

  const checkForm = () => {
    let isValid = true;
    inputs.forEach(input => {
      if (!input.value) isValid = false;
    });
    if (!checkbox.checked) isValid = false;
    button.disabled = !isValid;
    button.style.backgroundColor = isValid ? '#FFEE56' : '#F5F5F5';
  };

  inputs.forEach(input => {
    input.addEventListener('input', checkForm);
  });
  checkbox.addEventListener('change', checkForm);

    form.addEventListener("submit", function (event) {
    event.preventDefault();
    alert("正常に送信が完了しました");
    form.reset();
    checkForm();
  });

  checkForm();
};

//ビューポイント
window.addEventListener("resize", function () {
  var width = window.innerWidth;
  if (width < 375) {
    document.body.style.width = "375px";
  } else {
    document.body.style.width = "100%";
  }
});