import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  template: `
    <div>
    <!-- class="main-image" 
     > -->
    <!-- <img class="main-image" src="/assets/home/banner1.png" alt="" width="400" height="300"> -->
    <picture>
          <source media="(min-width:650px)" srcset="assets/home/test1.jpg" />
          <!-- <source media="(min-width:465px)" srcset="assets/home/link@2x.png" /> -->
          <img
            src="assets/home/banner-mobile.png"
            alt=""
          /> </picture
        >
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

    <!-- TRYRYRYRYRY -->

    <div class="center-image">
      <div class="inside-container">
        <img class="" src="assets/home/play1.png" alt="" />
      </div>
      <div class="inside-text">
        <h4>
          <span class="Art-conservation-and "
            >Art conservation and restoration at INTACH</span
          >
        </h4>
        <h6>
          <span class="lorem"
            >Lorem Ipsum has been the industry's standard dummy text</span
          >
        </h6>
      </div>
    </div>
    
  `,
  styles: [],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
