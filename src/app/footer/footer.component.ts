import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-footer",
  template: `
    <footer class="footer">
      <div class="row py-5 footer__big" style="background-color: #f6f6f6; ">
        <div class="col-2"></div>
        <div class="col-3 text-center">
          <img
            src="/assets/home/intach-2x.png"
            class="mx-auto"
            alt="..."
            width="60px"
            height="56px"
          />
        </div>
        <div class="col-1 mb-10">
          <div class="hl centerd"></div>
        </div>
        <div class="col-6">
          <div class="text-center col-12">
            <p class="footer__font">
              71, Lodi Estate,<br />
              New Delhi 110 003
            </p>
          </div>
          <div class="row">
            <div class="col px-0">
              <div class="">
                <span
                  style="color:#808080;font-size: .9rem;display:inline;"
                  class="text-center"
                >
                  <img
                    src="assets/home/mail.png"
                    alt=""
                    style="max-width:33px;max-height:33px;"
                  />
                  &nbsp; Email:
                  <a href="mailto: intach@intach.org">intach@intach.org</a>
                </span>
              </div>
            </div>
            <div class="col px-0 ">
              <div class="">
                <span
                  style="color:#808080;font-size: .9rem;"
                  class="text-center"
                >
                  <img
                    src="assets/home/phone.png"
                    alt=""
                    style="max-width:33px;max-height:33px;"
                  />
                  &nbsp; Tel: : <a href="tel:212-206-9100">212.206.9100</a>
                </span>
              </div>
            </div>
            <div class="col-1 px-0 ">
</div>
          </div>
        </div>
      </div>
<!------    ----->


<!-- Footer Small Device -->


<!----     ------>


      <div
        class="row footer__small"
        style="background-color: #f6f6f6;"
      >
        <div class="col-md-2"></div>
        <div class="col-xs-12 col-sm-12 text-center spacer-icon1">
          <!-- <picture> -->
            <!-- <source
              media="(min-width:650px)"
              srcset="assets/home/intach-2x.png"
            /> -->
            <img
              src="/assets/home/intach-2x.png"
              class="mx-auto"
              alt="..."
              style=""
              height="56px"
              width="60px"
            />
          <!-- </picture> -->
        </div>
        <div class="col-xs-12 col-sm-12 mb-10">
          <div class="vl centerd"></div>
        </div>
        <div class="col-xs-12">
          <div class="text-center col-xs-12" style="margin-top:20px;">
            <p class="footer__font__small">
              71, Lodi Estate,<br />
              New Delhi 110 003
            </p>
          </div>
          <div class="row">
            <div class="col-sm-12 col-xs-12 ps-0">
              <div class="">
                <p style="color:#808080;" class="text-center">
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
            <div class="col-md-sm  col-xs-12 ps-0 mx-auto">
              <div class="">
                <p style="color:#808080;" class="text-center">
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
      </div>
    </footer>
  `,
  styles: [],
})
export class FooterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
