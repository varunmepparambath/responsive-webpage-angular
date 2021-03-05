import { Component, OnInit } from "@angular/core";
declare var $: any;

@Component({
  selector: "app-home",
  template: `
    <div class="home__main__banner">
      <img
        id="home__banner__image"
        class="home__banner__image"
        src="assets/home/test3.jpg "
        height="246px"
      />
    </div>

    <div class="spacer-icon">
      <img src="/assets/home/intach.png" class=" mx-auto d-block" alt="..." />
    </div>
    <h2 class="text-center font1">
      Indian National Trust for Art and Cultural Heritage
    </h2>
    <div>
      <p class="text-center font2">Delhi, India • Art Restorer</p>
    </div>

    <div class="text-center ">
      <p style="color:#808080;">
        <picture>
          <source media="(min-width:650px)" srcset="assets/home/link@3x.png" />
          <source media="(min-width:465px)" srcset="assets/home/link@2x.png" />
          <img
            src="assets/home/link.png"
            alt=""
            style="max-width:33px;max-height:33px;"
          /> </picture
        >&nbsp; visit <a href="www.intach.org">www.intach.org</a>
      </p>
    </div>
    <div class="row pb-5">
      <div class="col"></div>
      <div class="col-9">
        <span class="font3">
          INTACH’s mission to conserve heritage is based on the belief that
          living in harmony with heritage enhances the quality of life, and it
          is the duty of every citizen of India as laid down in the Constitution
          of India. The objectives spelt out in the Memorandum of Association
          constitute INTACH’s Mandate and Vision. Its stated mission to date
          continues to document unprotected buildings of archaeological,
          architectural, historic and aesthetic significance, as well as the
          cultural resources, as this is the first step towards formulating
          conservation plans.
        </span>
      </div>
      <div class="col"></div>
    </div>

    <div class="home__vimeo">
      <!-- <div style="padding:56.25% 0 0 0;position:relative;">
        <iframe
          src="https://player.vimeo.com/video/495701517?title=0&byline=0&portrait=0"
          style="position:absolute;top:0;left:0;width:100%;height:80%;overflow:hidden;"
          frameborder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div> -->
      <!-- <script src="https://player.vimeo.com/api/player.js"></script> -->
      <iframe
      class="home__vimeo__iframe"
        src="https://player.vimeo.com/video/495701517?autoplay=1&loop=1&title=0&byline=0&portrait=0"
        width="1600"
        height="900"
        frameborder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  `,
  styles: [],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    var dataArray = new Array();
    dataArray[0] = "assets/home/006.jpg";
    dataArray[1] = "assets/home/0H2A1673 (1920px).jpg";
    dataArray[2] = "assets/home/nur homepage banner 2.jpg";
    dataArray[3] = "assets/home/test1.jpg";
    // dataArray[4] = "assets/home/banner-mobile.png";

    //start with id=0 after 5 seconds
    var thisId = 0;

    window.setInterval(function () {
      $("#home__banner__image").attr("src", dataArray[thisId]);
      thisId++; //increment data array id
      if (thisId == 4) thisId = 0; //repeat from start
    }, 5000);
  }
}
