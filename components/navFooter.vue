<template>
  <footer class="section footer-standard bg-darken">
    <div class="footer-standard-main">
      <div class="container">
        <div class="row row-50">
          <div class="col-lg-4">
            <div class="inset-right-1">
              <h5 class="font-condensed text-uppercase fw-bold text-white">About Us</h5>
              <p
                >R&amp;CO company is a diversified global architecture company that brings the best
                designers and architects together. We have been offering great design solutions to
                individual and corporate customers worldwide since the late 1990s.</p
              >
            </div>
          </div>
          <div class="col-sm-6 col-md-5 col-lg-4">
            <div class="box-1">
              <h5 class="font-condensed text-uppercase fw-bold text-white">Contact Information</h5>
              <ul class="list-sm">
                <li class="object-inline"
                  ><span class="icon icon-md mdi mdi-map-marker text-white"></span
                  ><a class="link-default" href="#"
                    >2130 Fulton Street <br />
                    San Diego, CA 94117-1080 USA</a
                  ></li
                >
                <li class="object-inline"
                  ><span class="icon icon-md mdi mdi-phone text-white"></span
                  ><a class="link-default" href="tel:#">1-800-1234-567</a></li
                >
                <li class="object-inline"
                  ><span class="icon icon-md mdi mdi-email text-white"></span
                  ><a class="link-default" href="mailto:#">info@demolink.org</a></li
                >
              </ul>
            </div>
          </div>
          <div class="col-sm-6 col-md-7 col-lg-4">
            <h5 class="font-condensed text-uppercase fw-bold text-white">Newsletter</h5>
            <p
              >Sign up to our newsletter and be the first to know about the latest news, special
              offers, events, and discounts.</p
            >
            <!-- RD Mailform-->
            <form
              class="rd-form rd-mailform form-inline"
              data-form-output="form-output-global"
              data-form-type="subscribe"
              method="post"
              action="bat/rd-mailform.php"
            >
              <div class="form-wrap">
                <input
                  class="form-input"
                  id="subscribe-form-2-email"
                  type="email"
                  name="email"
                  data-constraints="@Email @Required"
                />
                <label class="form-label" for="subscribe-form-2-email">E-mail</label>
              </div>
              <div class="form-button">
                <button
                  class="button button-primary button-icon button-icon-only button-winona"
                  type="submit"
                  aria-label="submit"
                  ><span class="icon mdi mdi-email-outline"></span
                ></button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="footer-standard-aside"
        ><a class="brand" href="/"
          ><img
            src="/assets/images/logo-inverse-109x27.png"
            alt=""
            width="109"
            height="27"
            srcset="/assets/images/logo-inverse-109x27.png 2x"
        /></a>
        <!-- Rights-->
        <p class="rights"
          ><span>&copy;&nbsp;</span><span class="copyright-year"></span><span>&nbsp;</span
          ><span>All Rights Reserved.</span><span>&nbsp;</span><br class="d-sm-none" /><a
            class="link-default"
            href="privacy-policy.html"
            >Privacy Policy</a
          >
        </p>
      </div>
    </div>
  </footer>
</template>
