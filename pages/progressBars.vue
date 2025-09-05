<template>
  <div>
    <div class="page">
      <!-- Page Header-->
      <nav-header />
      <!-- Breadcrumbs -->
      <section
        class="breadcrumbs-custom bg-image context-dark bg-overlay"
        style="background-image: url(/assets/images/breadcrumbs-image-1.jpg)"
      >
        <div class="breadcrumbs-custom-inner">
          <div class="breadcrumbs-custom-container container">
            <div class="breadcrumbs-custom-main">
              <h6 class="breadcrumbs-custom-subtitle title-decorated">Pages</h6>
              <h1 class="breadcrumbs-custom-title">Progress Bars</h1>
            </div>
            <ul class="breadcrumbs-custom-path">
              <li><a href="index.html">Home</a></li>
              <li><a href="#">Pages</a></li>
              <li class="active">Progress Bars</li>
            </ul>
          </div>
        </div>
      </section>
      <!-- Skill Bars -->
      <section class="section section-lg">
        <div class="container">
          <div class="row row-50">
            <div class="col-md-10 col-lg-6 col-xl-5">
              <h6>Skill Bars</h6>
              <!--Linear progress bar-->
              <div class="progress-linear">
                <div class="progress-linear-header">
                  <p class="progress-linear-title">Dedication</p
                  ><span class="progress-linear-counter">90</span>
                </div>
                <div class="progress-linear-body">
                  <div class="progress-linear-bar"></div>
                </div>
              </div>
              <!--Linear progress bar-->
              <div class="progress-linear">
                <div class="progress-linear-header">
                  <p class="progress-linear-title">Knowledge</p
                  ><span class="progress-linear-counter">65</span>
                </div>
                <div class="progress-linear-body">
                  <div class="progress-linear-bar"></div>
                </div>
              </div>
              <!--Linear progress bar-->
              <div class="progress-linear">
                <div class="progress-linear-header">
                  <p class="progress-linear-title">Professionalism</p
                  ><span class="progress-linear-counter">100</span>
                </div>
                <div class="progress-linear-body">
                  <div class="progress-linear-bar"></div>
                </div>
              </div>
              <!--Linear progress bar-->
              <div class="progress-linear">
                <div class="progress-linear-header">
                  <p class="progress-linear-title">Experience</p
                  ><span class="progress-linear-counter">75</span>
                </div>
                <div class="progress-linear-body">
                  <div class="progress-linear-bar"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="container">
        <h6>Countdown</h6>
      </div>
      <!-- Countdown-->
      <section
        class="section parallax-container section-lg bg-gray-800"
        data-parallax-img="/assets/images/parallax-1.jpg"
      >
        <div class="parallax-content">
          <div class="container">
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
          </div>
        </div>
      </section>
      <!-- Page Footer-->
      <nav-footer />
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
