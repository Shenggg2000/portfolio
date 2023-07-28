$(window).on("load", function () {
  var thatPD;
  class PageDefaultSetting {
    constructor() {
      thatPD = this;
      thatPD.emailChange = $(".email-change").html();
      thatPD.singleBoardImage = $(".three-board-section .advantages-images-wrapper .single-advantage-image");
      thatPD.init();
    }

    init() {
      thatPD.windowResize();
      $(window).resize(thatPD.windowResize);
      thatPD.windowScroll();
      $(window).scroll(thatPD.windowScroll);
      $(".get-started").on("click", thatPD.getStarted);
      $(".center-btn-area li").on("click", thatPD.scrollToSection);
      $(".sticky-menu").on("click", thatPD.openNav);
      $("#index_10_3 h1.page_title b").html("or drop us a message");
      $("#main_form257 input#Name0").attr("placeholder", "Your Name");
      $("#main_form257 input#Contact1").attr("placeholder", "Your Contact");
      $("#main_form257 input#Email2").attr("placeholder", "Your Email");
      $("#main_form257 input#PhoneNumber3").attr("placeholder", "Your Phone Number");
      $("#main_form257 textarea").attr("placeholder", "Leave Your Message");
      $("#main_form257 textarea").attr("rows", "1");
    }

    windowScroll() {
      if ($(window).scrollTop() > 100 && window.innerWidth > 768) {
        $(".top-nav-sec").addClass("fixed-nav");
        if ($(".top-nav-wrapper").hasClass("clicked")) {
          thatPD.openNav.call($(".sticky-menu"));
        }
      } else if ($(window).scrollTop() == 0) {
        $(".top-nav-sec").removeClass("fixed-nav");
      }
    }

    windowResize() {
      thatPD.singleBoardImage.css("height", thatPD.singleBoardImage.first().innerWidth());
      if (window.innerWidth < 991) {
        if ($(".top-nav-sec.fixed-nav")) {
          $(".top-nav-sec").removeClass("fixed-nav");
        }
      }
      if (window.innerWidth < 768) {
        $(".email-change").html("direct email");
      } else {
        $(".email-change").html(thatPD.emailChange);
      }
    }

    getStarted() {
      var goTo = $(".landing-effect-right").first().offset().top - 40;
      if (window.innerWidth <= 768) {
        goTo -= 80;
      }
      $("body, html").stop().animate({
        scrollTop: goTo
      }, 750);
    }

    scrollToSection() {
      var target = $(this).attr("data-target");
      var goTo;
      if (target == "landing") {
        goTo = 0
      } else {
        goTo = $("#" + target).first().offset().top;
        if (target == "features") {
          goTo += 30;
        } else if (target == "portfolio") {
          goTo += 180;
        } else if (target == "pricing") {
          goTo += 150;
        } else if (target == "contact") {
          goTo -= 90;
        }
      }
      if (window.innerWidth <= 768) {
        if (target == "features") {
          goTo -= 80;
        } else if (target == "portfolio") {
          goTo -= 20;
        } else if (target == "pricing") {
          goTo -= 80;
        } else if (target == "contact") {
          goTo -= 90;
        }
      }
      $("body, html").stop().animate({
        scrollTop: goTo
      }, 1500);
      if ($(".top-nav-wrapper").hasClass("opened")) {
        $(".side-menu-burger i").trigger("click");
      }
    }

    openNav() {
      if ($(".top-nav-sec.fixed-nav")) {
        $(this).parent().parent().parent().toggleClass("clicked");
        if ($(this).parent().parent().parent().hasClass("clicked")) {
          $(this).children("i").removeClass("fa-bars").addClass("fa-times");
        } else {
          $(this).children("i").removeClass("fa-times").addClass("fa-bars");
        }
      }
    }
  }
  new PageDefaultSetting();

  var thatCursor;
  class CursorEffect {
    constructor() {
      thatCursor = this;
      thatCursor.currentA;
      thatCursor.cursorXInLaptop;
      thatCursor.cursorYInLaptop;
      thatCursor.scrollSizeBefore = 0;
      if (window.innerWidth > 768) {
        thatCursor.init();
      }
    }

    init() {
      // $(window).mousemove(thatCursor.windowMouseMove);
      // $("a:not(.button-look):not(.big-view)").mouseenter(thatCursor.normalMouseEnter);
      $("a.button-look").mouseenter(thatCursor.buttonLook);
      // $("a.big-view").mouseenter(thatCursor.bigView);
      $("a").mouseleave(thatCursor.windowMouseLeave);
      $(".laptop-screen").mouseenter(thatCursor.laptopMouseMove);
      $(".laptop-screen").mousemove(thatCursor.laptopMouseMove);
      $(".laptop-screen").mouseleave(thatCursor.laptopMouseLeave);
      $(window).scroll(thatCursor.windowScroll);
    }

    // windowMouseMove(e) {
    //     $(".mouse").css({
    //         'top': e.clientY + 'px',
    //         'left': e.clientX + 'px',
    //     })
    // }

    // normalMouseEnter() {
    //     $(".mouse").removeClass("button big").addClass("hover");
    // }

    buttonLook() {
      // $(".mouse").removeClass("hover big").addClass("button");
      thatCursor.currentA = this;
      $(thatCursor.currentA).bind('mousemove', thatCursor.buttonMove);
    }

    // bigView() {
    //     $(".mouse").removeClass("hover button").addClass("big");
    //     $(".mouse span").html("view");
    // }

    windowMouseLeave(e) {
      // $(".mouse").removeClass("hover button big");
      // $(".mouse span").html("");
      $(thatCursor.currentA).unbind('mousemove');
      $(thatCursor.currentA).css("transform", "translate(0px, 0px)");
    }

    laptopMouseMove(e) {
      thatCursor.scrollSizeBefore = $(window).scrollTop();
      thatCursor.cursorXInLaptop = e.pageX - $(this).offset().left;
      thatCursor.cursorYInLaptop = e.pageY - $(this).offset().top;
      // $(".mouse").css({
      //     'display': 'none'
      // })
      $(this).css({
        cursor: "none"
      })
      $(this).children(".laptop-cursor").addClass("show");
      $(this).children(".laptop-cursor").css({
        top: thatCursor.cursorYInLaptop,
        left: thatCursor.cursorXInLaptop
      })
    }

    laptopMouseLeave() {
      // $(".mouse").css({
      //     'display': 'block'
      // })
      $(this).children(".laptop-cursor").removeClass("show");
    }

    windowScroll(e) {
      if ($(".laptop-cursor").hasClass("show")) {
        var diff = $(window).scrollTop() - thatCursor.scrollSizeBefore;
        thatCursor.cursorYInLaptop += diff;
        $(".laptop-cursor").css({
          top: thatCursor.cursorYInLaptop,
        })
      }
      thatCursor.scrollSizeBefore = $(window).scrollTop();
    }

    buttonMove(e) {
      var cursorXInContainer = e.pageX - $(thatCursor.currentA).offset().left;
      var cursorYInContainer = e.pageY - $(thatCursor.currentA).offset().top;
      var maxMovementX = Math.floor($(thatCursor.currentA).outerWidth() / 10);
      var maxMovementY = Math.floor($(thatCursor.currentA).outerHeight() / 10);
      var moveX = 0;
      var moveY = 0;

      if (cursorXInContainer < Math.floor($(thatCursor.currentA).outerWidth() / 2)) {
        moveX += -maxMovementX * (Math.floor($(thatCursor.currentA).outerWidth() / 2) - cursorXInContainer) / Math.floor($(thatCursor.currentA).outerWidth() / 2);
        moveX = Math.floor(moveX);
      } else {
        moveX += maxMovementX * (cursorXInContainer - Math.floor($(thatCursor.currentA).outerWidth() / 2)) / Math.floor($(thatCursor.currentA).outerWidth() / 2);
        moveX = Math.ceil(moveX);
      }
      if (cursorYInContainer < Math.floor($(thatCursor.currentA).outerWidth() / 2)) {
        moveY += -maxMovementY * (Math.floor($(thatCursor.currentA).outerHeight() / 2) - cursorYInContainer) / Math.floor($(thatCursor.currentA).outerHeight() / 2);
        moveY = Math.floor(moveY);
      } else {
        moveY += maxMovementY * (cursorYInContainer - Math.floor($(thatCursor.currentA).outerHeight() / 2)) / Math.floor($(thatCursor.currentA).outerHeight() / 2);
        moveY = Math.ceil(moveY);
      }

      $(this).css("transform", "translate(" + moveX + "px, " + moveY + "px)");
    }
  }
  new CursorEffect();

  class SideMenuEffect {
    constructor() {
      this.init();
    }

    init() {
      $(".side-menu-burger i").on("click", this.sideMenuClicked);
    }

    sideMenuClicked() {
      $(".top-nav-wrapper").toggleClass("opened");
      if ($(".top-nav-wrapper").hasClass("opened")) {
        $(this).removeClass("fa-bars").addClass("fa-times");
        $(".top-nav-wrapper .top-nav .mobile-bottom-contact").css("transition", ".1s .4s");
      } else {
        $(this).removeClass("fa-times").addClass("fa-bars");
        $(".top-nav-wrapper .top-nav .mobile-bottom-contact").css("transition", ".1s");
      }
    }
  }
  new SideMenuEffect();

  var thatTR;
  class TextRunningEffect {
    constructor() {
      thatTR = this;
      thatTR.interval;
      thatTR.flag = true;
      thatTR.windowScrollTop = 0;
      thatTR.leftWidth = -($(".text-running-way-left .single-services-list").first().outerWidth(true));
      thatTR.leftWidthMove = -($(".text-running-way-left .single-services-list").first().outerWidth(true));
      thatTR.leftTextRow = $(".text-running-way-left .text-row");
      thatTR.rightWidth = -($(".text-running-way-right .single-services-list").first().outerWidth(true));
      thatTR.rightWidthMove = (-($(".text-running-way-right .single-services-list").first().outerWidth(true)) * 2) + window.innerWidth;
      thatTR.rightTextRow = $(".text-running-way-right .text-row");
      thatTR.init();
    }

    init() {
      thatTR.leftTextRow.append($(".text-running-way-left .single-services-list").first().clone(true, true));
      thatTR.leftTextRow.append($(".text-running-way-left .single-services-list").first().clone(true, true));
      thatTR.leftTextRow.css('transform', 'translateX(' + thatTR.leftWidth + 'px)');
      thatTR.rightTextRow.append($(".text-running-way-right .single-services-list").first().clone(true, true));
      thatTR.rightTextRow.append($(".text-running-way-right .single-services-list").first().clone(true, true));
      thatTR.rightTextRow.css('transform', 'translateX(' + (thatTR.rightWidth * 2 + window.innerWidth) + 'px)');
      $(window).scroll(thatTR.windowScroll);
      thatTR.windowScroll();
    }

    windowScroll() {
      var forward;
      if ($(window).scrollTop() > thatTR.windowScrollTop) {
        forward = true;
      } else if ($(window).scrollTop() < thatTR.windowScrollTop) {
        forward = false;
      }
      thatTR.windowScrollTop = $(window).scrollTop();
      if ($(window).scrollTop() + window.innerHeight >= $('.text-running-way-sec').first().offset().top && $(window).scrollTop() <= $('.text-running-way-sec').first().offset().top + $('.text-running-way-sec').innerHeight()) {
        if (thatTR.flag) {
          thatTR.flag = false;
          if (forward) {
            clearInterval(thatTR.interval);
            thatTR.leftWidthMove -= 200;
            thatTR.leftTextRow.css({
              'transition': '.5s',
              'transform': 'translateX(' + thatTR.leftWidthMove + 'px)',
            });
            thatTR.rightWidthMove += 200;
            thatTR.rightTextRow.css({
              'transition': '.5s',
              'transform': 'translateX(' + thatTR.rightWidthMove + 'px)',
            });
            setTimeout(thatTR.continueMove, 500);
          } else if (!forward) {
            clearInterval(thatTR.interval);
            if (thatTR.leftWidthMove + 200 > 0 && thatTR.rightWidthMove - 200 < ((thatTR.rightWidth * 3) + window.innerWidth)) {
              thatTR.leftTextRow.css('transition', 'unset');
              thatTR.leftWidthMove += thatTR.leftWidth;
              thatTR.leftTextRow.css('transform', 'translateX(' + thatTR.leftWidthMove + 'px)');
              thatTR.rightTextRow.css('transition', 'unset');
              thatTR.rightWidthMove -= thatTR.rightWidth;
              thatTR.rightTextRow.css('transform', 'translateX(' + thatTR.rightWidthMove + 'px)');
              setTimeout(function () {
                thatTR.leftWidthMove += 200;
                thatTR.leftTextRow.css({
                  'transition': '.5s',
                  'transform': 'translateX(' + thatTR.leftWidthMove + 'px)',
                });
                thatTR.rightWidthMove -= 200;
                thatTR.rightTextRow.css({
                  'transition': '.5s',
                  'transform': 'translateX(' + thatTR.rightWidthMove + 'px)',
                });
                setTimeout(thatTR.continueMove, 500);
              }, 10);
            } else if (thatTR.leftWidthMove + 200 > 0) {
              thatTR.rightWidthMove -= 200;
              thatTR.rightTextRow.css({
                'transition': '.5s',
                'transform': 'translateX(' + thatTR.rightWidthMove + 'px)',
              });
              thatTR.leftTextRow.css('transition', 'unset');
              thatTR.leftWidthMove += thatTR.leftWidth;
              thatTR.leftTextRow.css('transform', 'translateX(' + thatTR.leftWidthMove + 'px)');
              setTimeout(function () {
                thatTR.leftWidthMove += 200;
                thatTR.leftTextRow.css({
                  'transition': '.5s',
                  'transform': 'translateX(' + thatTR.leftWidthMove + 'px)',
                });
                setTimeout(thatTR.continueMove, 500);
              }, 10)
            } else if (thatTR.rightWidthMove - 200 < ((thatTR.rightWidth * 3) + window.innerWidth)) {
              thatTR.leftWidthMove += 200;
              thatTR.leftTextRow.css({
                'transition': '.5s',
                'transform': 'translateX(' + thatTR.leftWidthMove + 'px)',
              });
              thatTR.rightTextRow.css('transition', 'unset');
              thatTR.rightWidthMove -= thatTR.rightWidth;
              thatTR.rightTextRow.css('transform', 'translateX(' + thatTR.rightWidthMove + 'px)');
              setTimeout(function () {
                thatTR.rightWidthMove -= 200;
                thatTR.rightTextRow.css({
                  'transition': '.5s',
                  'transform': 'translateX(' + thatTR.rightWidthMove + 'px)',
                });
                setTimeout(thatTR.continueMove, 500);
              }, 10);
            } else {
              thatTR.leftWidthMove += 200;
              thatTR.leftTextRow.css({
                'transition': '.5s',
                'transform': 'translateX(' + thatTR.leftWidthMove + 'px)',
              });
              thatTR.rightWidthMove -= 200;
              thatTR.rightTextRow.css({
                'transition': '.5s',
                'transform': 'translateX(' + thatTR.rightWidthMove + 'px)',
              });
              setTimeout(thatTR.continueMove, 500);
            }
          }
        }
      }
    }

    continueMove() {
      thatTR.flag = true;
      thatTR.leftTextRow.css('transition', 'unset');
      thatTR.rightTextRow.css('transition', 'unset');
      thatTR.interval = setInterval(function () {
        if (thatTR.leftWidthMove < thatTR.leftWidth * 2) {
          var diff = thatTR.leftWidth * 2 - thatTR.leftWidthMove;
          thatTR.leftWidthMove = thatTR.leftWidth - diff;
        }
        thatTR.leftTextRow.css('transform', 'translateX(' + thatTR.leftWidthMove-- + 'px)');
        if (thatTR.rightWidthMove > thatTR.rightWidth + window.innerWidth) {
          var diff = thatTR.rightWidthMove - (thatTR.rightWidth + window.innerWidth);
          thatTR.rightWidthMove = (thatTR.rightWidth * 2) + window.innerWidth + diff;
        }
        thatTR.rightTextRow.css('transform', 'translateX(' + thatTR.rightWidthMove++ + 'px)');
      }, 10);
    }
  }
  new TextRunningEffect();

  var that3;
  class ThreeBoardEffect {
    constructor() {
      that3 = this;
      that3.stickyHeight = $(".sticky-height").first();
      if (window.innerWidth > 1000) {
        that3.init();
      }
    }

    init() {
      $(window).scroll(that3.windowScroll);
      that3.windowScroll();
      $(window).resize(that3.windowRResize);
      that3.windowScroll();
    }

    windowScroll() {
      if (window.innerWidth > 1000) {
        if ($(window).scrollTop() <= that3.stickyHeight.offset().top) {
          $(".single-board").css("transform", "translate(0px, 0px)");
        } else if ($(window).scrollTop() >= that3.stickyHeight.offset().top && $(window).scrollTop() <= that3.stickyHeight.offset().top + window.innerHeight * 1.5) {
          var goUp = -($(window).scrollTop() - that3.stickyHeight.offset().top);
          goUp = goUp / 1.5 * 1;
          $(".single-board").eq(0).css("transform", "translate(0px, " + goUp + "px)");
          $(".single-board").eq(1).css("transform", "translate(0px, 0px)");
        } else if ($(window).scrollTop() >= that3.stickyHeight.offset().top + window.innerHeight * 1.5 && $(window).scrollTop() <= that3.stickyHeight.offset().top + window.innerHeight * 3) {
          $(".single-board").eq(0).css("transform", "translate(0px, " + (-(window.innerHeight)) + "px)");
          var goUp = -($(window).scrollTop() - (that3.stickyHeight.offset().top + window.innerHeight * 1.5));
          goUp = goUp / 1.5 * 1;
          $(".single-board").eq(1).css("transform", "translate(0px, " + goUp + "px)");
        } else if ($(window).scrollTop() >= that3.stickyHeight.offset().top + window.innerHeight * 3 && $(window).scrollTop() <= that3.stickyHeight.offset().top + window.innerHeight * 4.5) {
          $(".single-board").eq(0).css("transform", "translate(0px, " + (-(window.innerHeight)) + "px)");
          $(".single-board").eq(1).css("transform", "translate(0px, " + (-(window.innerHeight)) + "px)");
          var goUp = -($(window).scrollTop() - (that3.stickyHeight.offset().top + window.innerHeight * 3));
          goUp = goUp / 1.5 * 1;
        }
      }
    }
  }
  new ThreeBoardEffect();


  var thatP;
  class PortfolioEffect {
    constructor() {
      thatP = this;
      thatP.portfolioWidth;
      thatP.transformNumber;
      thatP.scrollContainer = $(".horizontal-scroll-container").first();
      thatP.scrollPortfolio = $(".portfolio-section").first();
      thatP.scrollPricing = $(".pricing-section").first();
      thatP.init();
    }

    init() {
      $(window).scroll(thatP.windowScroll);
      thatP.windowScroll();
      $(window).resize(thatP.windowResize);
      thatP.windowResize();
    }

    windowScroll() {
      thatP.changeBg();
      if ($(window).scrollTop() + window.innerHeight >= thatP.scrollContainer.offset().top && $(window).scrollTop() + window.innerHeight <= thatP.scrollContainer.offset().top + thatP.scrollContainer.outerHeight(true)) {
        var scrollPx = ($(window).scrollTop() + window.innerHeight) - thatP.scrollContainer.offset().top;
        var numberMove = Math.ceil(thatP.transformNumber - scrollPx);
        $(".horizontal-scroll-container .all-portfolio").css("transform", "translate(" + numberMove + "px, -50%)");
      } else if ($(window).scrollTop() + window.innerHeight <= thatP.scrollContainer.offset().top) {
        $(".horizontal-scroll-container .all-portfolio").css("transform", "translate(" + thatP.transformNumber + "px, -50%)");
      } else if ($(window).scrollTop() + window.innerHeight >= thatP.scrollContainer.offset().top + thatP.scrollContainer.outerHeight(true)) {
        if (window.innerWidth > 600) {
          $(".horizontal-scroll-container .all-portfolio").css("transform", "translate(" + (thatP.transformNumber - thatP.portfolioWidth + Math.floor(window.innerWidth * 0.25)) + "px, -50%)");
        } else {
          $(".horizontal-scroll-container .all-portfolio").css("transform", "translate(" + (thatP.transformNumber - thatP.portfolioWidth) + "px, -50%)");
        }
      }
    }

    windowResize() {
      if (window.innerWidth > 600) {
        thatP.portfolioWidth = $(".horizontal-scroll-container .all-portfolio").first().outerWidth(true);
        thatP.scrollContainer.css("height", (thatP.portfolioWidth - Math.floor(window.innerWidth * 0.25)) + "px");
        thatP.transformNumber = Math.floor(window.innerWidth * 0.7);
      } else {
        $(".horizontal-scroll-container .show-all-portfolio").css("margin-right", ((window.innerWidth - 260) / 2) + "px");
        thatP.portfolioWidth = $(".horizontal-scroll-container .all-portfolio").first().outerWidth(true) + 300;
        thatP.scrollContainer.css("height", (thatP.portfolioWidth) + "px");
        thatP.transformNumber = Math.floor(window.innerWidth + 300);
      }
      $(".horizontal-scroll-container .all-portfolio").css("transform", "translate(" + thatP.transformNumber + "px, -50%)");
    }

    changeBg() {
      if ($(window).scrollTop() - 100 >= thatP.scrollPortfolio.offset().top && $(window).scrollTop() + window.innerHeight / 3 <= thatP.scrollPricing.offset().top) {
        $("body").css("backgroundColor", "#222");
        $("body").addClass("black");
      } else if ($(window).scrollTop() + window.innerHeight / 3 >= thatP.scrollPricing.offset().top) {
        $("body").css("backgroundColor", "#fff");
        $("body").removeClass("black");
      } else if ($(window).scrollTop() - 100 <= thatP.scrollPortfolio.offset().top) {
        $("body").css("backgroundColor", "#fff");
        $("body").removeClass("black");
      }
    }
  }
  new PortfolioEffect();

  var thatFNB;
  class FadeAndBubble {
    constructor() {
      thatFNB = this;
      thatFNB.fadeBox = $(".fade-up-box");
      thatFNB.setting();
      thatFNB.init();
    }

    setting() {
      $.each($(".landing-fade-up-box .landing-fade-up-item"), function (i, e) {
        $(e).css("transitionDelay", (i / 3.5).toFixed(2) + "s");
      })

      $.each(thatFNB.fadeBox, function (i, e) {
        $.each($(e).children(".fade-up-item"), function (iItem, eItem) {
          $(eItem).css("transitionDelay", (iItem / 3.5).toFixed(2) + "s");
        })
      });
    }

    init() {
      $(window).scroll(thatFNB.windowScroll);
      thatFNB.windowScroll();
    }

    windowScroll() {
      $.each($(".landing-fade-up-box:not(.show)"), function (i, e) {
        if ($(window).scrollTop() < 120) {
          $(e).addClass("show");
        } else {
          $(e).addClass("show");
          $.each($(".landing-fade-up-box .landing-fade-up-item"), function (i, eItem) {
            $(eItem).css("transition", "0s");
          })
        }
      });
      $.each($(".fade-up-box:not(.show)"), function (i, e) {
        if ($(window).scrollTop() + window.innerHeight / 4 * 3 >= $(e).offset().top) {
          $(e).removeClass("no-duration");
          $(e).addClass("show");
        }
      });
      $.each($(".fade-up-box"), function (i, e) {
        if ($(window).scrollTop() + window.innerHeight <= $(e).offset().top) {
          $(e).addClass("no-duration");
          $(e).removeClass("show");
        }
      });
      $.each($(".single-advantage-image:not(.show)"), function (i, e) {
        if ($(window).scrollTop() + window.innerHeight / 4 * 3 >= $(e).offset().top) {
          $(e).removeClass("no-duration");
          $(e).addClass("show");
        }
      });
      $.each($(".single-advantage-image"), function (i, e) {
        if ($(window).scrollTop() + window.innerHeight <= $(e).offset().top) {
          $(e).addClass("no-duration");
          $(e).removeClass("show");
        }
      });
    }
  }
  new FadeAndBubble();

  var thatLaptop;
  class Laptop {
    constructor() {
      thatLaptop = this;
      thatLaptop.flagLaptop = true;
      thatLaptop.flagPhone = true;
      thatLaptop.init();
    }

    init() {
      $(".laptop-wrapper .select-card").on("click", thatLaptop.cardClicked);
      $(".phone-wrapper .select-card").on("click", thatLaptop.phoneCardClicked);
      $(".laptop-wrapper .back-button").on("click", thatLaptop.backClicked);
      $(".phone-wrapper .back-button").on("click", thatLaptop.phoneBackClicked);
    }

    cardClicked() {
      if (thatLaptop.flagLaptop) {
        thatLaptop.flagLaptop = false;
        var clicked = $(this).attr("data-selection");
        $(this).parent().parent().css("left", "-110%");
        $(".laptop-wrapper .select-result").eq(parseInt(clicked) - 1).css("left", "calc(0% + 15px)");
      }
    }
    phoneCardClicked() {
      if (thatLaptop.flagPhone) {
        thatLaptop.flagPhone = false;
        var clicked = $(this).attr("data-selection");
        $(this).parent().parent().css("left", "-110%");
        $(".phone-wrapper .select-result").eq(parseInt(clicked) - 1).css("left", "calc(0% + 15px)");
      }
    }

    backClicked() {
      thatLaptop.flagLaptop = true;
      $(this).parent().parent().css("left", "calc(100% + 15px)");
      $(".laptop-wrapper .selections").css("left", "0%");
    }

    phoneBackClicked() {
      thatLaptop.flagPhone = true;
      $(this).parent().parent().css("left", "calc(100% + 15px)");
      $(".phone-wrapper .selections").css("left", "0%");
    }
  }
  new Laptop();

  var thatProcess;
  class Process {
    constructor() {
      thatProcess = this;
      thatProcess.scrollProcess = $(".process-section").first();
      thatProcess.top = thatProcess.scrollProcess.offset().top;
      thatProcess.height = thatProcess.scrollProcess.outerHeight();
      thatProcess.init();
    }

    init() {
      $(window).scroll(thatProcess.windowScroll);
      thatProcess.windowScroll();
      $(window).resize(thatProcess.windowResize);
      thatProcess.windowResize();
      $(".step-by-step-button").on("click", thatProcess.scrollToStep);
      $(".single-process .next-step").on("click", thatProcess.scrollStepByStep);
    }

    windowScroll() {
      var howMuchScroll = $(window).scrollTop() + window.innerHeight / 2;
      if (window.innerWidth > 768) {
        if (howMuchScroll >= thatProcess.top && howMuchScroll < thatProcess.top + thatProcess.height * 0.1) {
          thatProcess.controlClass(true, "Explore my<br>education<br>journey now", false, true);
        } else if (howMuchScroll >= thatProcess.top + thatProcess.height * 0.1 && howMuchScroll < thatProcess.top + thatProcess.height * 0.34) {
          thatProcess.controlClass(false, false, "1");
          $(".process-section .process-1").addClass("current").siblings().removeClass("current");
        } else if (howMuchScroll >= thatProcess.top + thatProcess.height * 0.34 && howMuchScroll < thatProcess.top + thatProcess.height * 0.5) {
          thatProcess.controlClass(false, false, "2");
          $(".process-section .process-2").addClass("current").siblings().removeClass("current");
        } else if (howMuchScroll >= thatProcess.top + thatProcess.height * 0.5 && howMuchScroll < thatProcess.top + thatProcess.height * 0.66) {
          thatProcess.controlClass(false, false, "3");
          $(".process-section .process-3").addClass("current").siblings().removeClass("current");
        } else if (howMuchScroll >= thatProcess.top + thatProcess.height * 0.66 && howMuchScroll < thatProcess.top + thatProcess.height * 0.9) {
          thatProcess.controlClass(false, false, "4");
          $(".process-section .process-4").addClass("current").siblings().removeClass("current");
        } else if (howMuchScroll >= thatProcess.top + thatProcess.height * 0.9) {
          thatProcess.controlClass(true, "The learning process<br>continues until<br> the day you die.", false);
        }
      } else {
        if (howMuchScroll >= thatProcess.top + thatProcess.height * 0.05 && howMuchScroll < thatProcess.top + thatProcess.height * 0.315) {
          thatProcess.controlClass(false, false, "1");
          $(".process-section .process-1").addClass("current").siblings().removeClass("current");
        } else if (howMuchScroll >= thatProcess.top + thatProcess.height * 0.315 && howMuchScroll < thatProcess.top + thatProcess.height * 0.5) {
          thatProcess.controlClass(false, false, "2");
          $(".process-section .process-2").addClass("current").siblings().removeClass("current");
        } else if (howMuchScroll >= thatProcess.top + thatProcess.height * 0.5 && howMuchScroll < thatProcess.top + thatProcess.height * 0.685) {
          thatProcess.controlClass(false, false, "3");
          $(".process-section .process-3").addClass("current").siblings().removeClass("current");
        } else if (howMuchScroll >= thatProcess.top + thatProcess.height * 0.685 && howMuchScroll < thatProcess.top + thatProcess.height * 0.95) {
          thatProcess.controlClass(false, false, "4");
          $(".process-section .process-4").addClass("current").siblings().removeClass("current");
        }
      }
    }

    windowResize() {
      thatProcess.scrollProcess = $(".process-section").first();
      thatProcess.top = thatProcess.scrollProcess.offset().top;
      thatProcess.height = thatProcess.scrollProcess.outerHeight();
    }

    controlClass(flag, text, number, down) {
      if (flag) {
        $(".process-section .circle").removeClass("small");
        $(".process-section .single-process").removeClass("current");
      } else {
        $(".process-section .circle").addClass("small");
      }
      if (text) {
        $(".process-section .circle").children(".circle-content").children("p.text").html(text);
      }
      if (number) {
        $(".process-section .circle").children(".circle-content").children("p.number").html(number);
      }
      if (down) {
        $(".process-section .circle").addClass("down-btn");
      } else {
        $(".process-section .circle").removeClass("down-btn");
      }
    }

    scrollToStep() {
      var goTo = thatProcess.top + (thatProcess.height * 0.26) - (window.innerHeight / 2);
      $("body, html").stop().animate({
        scrollTop: goTo
      }, 750);
    }
    scrollStepByStep() {
      var target = $(this).attr("data-target");
      if (window.innerWidth > 768) {
        var ratio = 0.261 + 0.16 * target;
      } else {
        var ratio = 0.173 + 0.193 * target;
      }
      var goTo = thatProcess.top + (thatProcess.height * ratio) - (window.innerHeight / 2);
      $("body, html").stop().animate({
        scrollTop: goTo
      }, 750);
    }
  }
  new Process();

  var thatLightbox;
  class LightboxController {
    constructor() {
      thatLightbox = this;
      this.init(portfolio_data);
    }

    init(portfolios) {
      portfolios.forEach(item => {
        const $dynamicGallery = document.getElementById(item.id);
        const dynamicGallery = lightGallery($dynamicGallery, {
          dynamic: true,
          dynamicEl: item.images,
        });
        $dynamicGallery.addEventListener('click', function () {
          dynamicGallery.openGallery(0);
        });
      });
    }
  }
  new LightboxController();
})