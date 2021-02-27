import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
      <footer class="footer">
  <!-- <div class="container-lg text-center"> -->
    <div class="row" style="background-color: #f6f6f6; padding-top:5%">
      <div class="col-md-2"></div>
      <div class="col-md-3 col-xs-12 col-sm-12 text-center">
      <picture>
          <source media="(min-width:650px)" srcset="assets/home/intach-2.png" />
          <!-- <source media="(min-width:465px)" srcset="assets/home/link@2x.png" /> -->
          <img
          src="/assets/home/intach.png"
          class=" pt-3 pb-2 mx-auto"
          alt="..."style="max-width:86px;max-height:80px;"
          /> </picture
        >  
      
      
      </div>
      <div class="col-md-1 col-xs-12 col-sm-12 mb-10">
        <div class="hl centerd"></div>
      </div>
      <div class="col-md-6 col-xs-12">
        <div class="text-center col-md-12 col-xs-12">
          <p class="font3">
            71, Lodi Estate,<br />
            New Delhi 110 003
          </p>
        </div>
        <div class="row">
          <div class="col-md-6 col-md-6  col-xs-12">
            <div class="text-center ">
              <p style="color:#808080;">
                <img
                  src="assets/home/mail.png"
                  alt=""
                  style="max-width:33px;max-height:33px;"
                />
                &nbsp; Email:
                <a href="mailto: intach@intach.org">intach@intach.org</a>
              </p>
            </div>
          </div>
          <div class="col-md-6 col-md-6  col-xs-12">
            <div class="text-center ">
              <p style="color:#808080;">
                <img
                  src="assets/home/phone.png"
                  alt=""
                  style="max-width:33px;max-height:33px;"
                />
                &nbsp; Tel: : <a href="tel:212-206-9100">212.206.9100</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="col"></div> -->
    </div>
  <!-- </div> -->
  </footer>
  `,
  styles: [
  ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
