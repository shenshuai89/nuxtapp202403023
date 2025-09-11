<template>
  <div>
    <div class="page">
      <!-- Page content-->
      <section
        class="section section-single bg-gray-800"
        style="background-image: url(/assets/images/bg-image-4.jpg)"
      >
        <div class="section-single-inner">
          <div class="section-single-dummy"></div>
          <div class="section-single-main">
            <div class="container">
              <div class="row row-30 justify-content-center justify-content-sm-start">
                <div class="col-sm-10 col-md-9 col-lg-7 col-xl-6">
                  <h6 class="title-decorated title-decorated-lg"
                    >We're getting ready to launch in</h6
                  >
                  <!-- TimeCircles-->
                  <div class="countdown" data-countdown="data-countdown" data-to="2023-04-07">
                    <div class="countdown-block countdown-block-days">
                      <div class="countdown-body">
                        <svg
                          class="countdown-circle"
                          x="0"
                          y="0"
                          width="200"
                          height="200"
                          viewbox="0 0 200 200"
                          data-progress-days=""
                        >
                          <circle class="countdown-circle-bg" cx="100" cy="100" r="80"></circle>
                          <circle
                            class="countdown-circle-fg clipped"
                            cx="100"
                            cy="100"
                            r="80"
                            stroke="url(#gradient-0)"
                          ></circle>
                        </svg>
                        <div class="countdown-wrap">
                          <div class="heading-4 countdown-counter" data-counter-days="">00</div>
                        </div>
                      </div>
                      <div class="countdown-title">days</div>
                    </div>
                    <div class="countdown-block countdown-block-hours">
                      <div class="countdown-body">
                        <svg
                          class="countdown-circle"
                          x="0"
                          y="0"
                          width="200"
                          height="200"
                          viewbox="0 0 200 200"
                          data-progress-hours=""
                        >
                          <circle class="countdown-circle-bg" cx="100" cy="100" r="80"></circle>
                          <circle
                            class="countdown-circle-fg clipped"
                            cx="100"
                            cy="100"
                            r="80"
                            stroke="url(#gradient-1)"
                          ></circle>
                        </svg>
                        <div class="countdown-wrap">
                          <div class="heading-4 countdown-counter" data-counter-hours="">00</div>
                        </div>
                      </div>
                      <div class="countdown-title">hours</div>
                    </div>
                    <div class="countdown-block countdown-block-minutes">
                      <div class="countdown-body">
                        <svg
                          class="countdown-circle"
                          x="0"
                          y="0"
                          width="200"
                          height="200"
                          viewbox="0 0 200 200"
                          data-progress-minutes=""
                        >
                          <circle class="countdown-circle-bg" cx="100" cy="100" r="80"></circle>
                          <circle
                            class="countdown-circle-fg clipped"
                            cx="100"
                            cy="100"
                            r="80"
                            stroke="url(#gradient-2)"
                          ></circle>
                        </svg>
                        <div class="countdown-wrap">
                          <div class="heading-4 countdown-counter" data-counter-minutes="">00</div>
                        </div>
                      </div>
                      <div class="countdown-title">minutes</div>
                    </div>
                    <div class="countdown-block countdown-block-seconds">
                      <div class="countdown-body">
                        <svg
                          class="countdown-circle"
                          x="0"
                          y="0"
                          width="200"
                          height="200"
                          viewbox="0 0 200 200"
                          data-progress-seconds=""
                        >
                          <circle class="countdown-circle-bg" cx="100" cy="100" r="80"></circle>
                          <circle
                            class="countdown-circle-fg clipped"
                            cx="100"
                            cy="100"
                            r="80"
                            stroke="url(#gradient-3)"
                          ></circle>
                        </svg>
                        <div class="countdown-wrap">
                          <div class="heading-4 countdown-counter" data-counter-seconds="">00</div>
                        </div>
                      </div>
                      <div class="countdown-title">seconds</div>
                    </div>
                  </div>
                  <p
                    >Our website is under construction, we are working very hard to give you the
                    best experience on our new web site.</p
                  >
                  <div class="rd-mailform-wrap">
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
                          id="subscribe-form-1-email"
                          type="email"
                          name="email"
                          data-constraints="@Email @Required"
                        />
                        <label class="form-label" for="subscribe-form-1-email">Your e-mail</label>
                      </div>
                      <div class="form-button">
                        <button class="button button-primary button-winona" type="submit"
                          >Subscribe</button
                        >
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="footer-minimal section-single-footer">
            <div class="container">
              <div class="footer-minimal-inner"
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
                    href="/privacyPolicy"
                    >Privacy Policy</a
                  >
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <!-- Global Mailform Output-->
    <div class="snackbars" id="form-output-global"></div>
  </div>
</template>

<script setup lang="ts">
  onMounted(async () => {
    loadScriptClient();
  });
</script>
<style lang="scss" scoped></style>
