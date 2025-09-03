<template>
  <div>
    <div class="page">
      <nav-header />
      <!-- Breadcrumbs -->
      <section
        class="breadcrumbs-custom bg-image context-dark bg-overlay"
        style="background-image: url(/assets/images/breadcrumbs-image-2.jpg)"
      >
        <div class="breadcrumbs-custom-inner">
          <div class="breadcrumbs-custom-container container">
            <div class="breadcrumbs-custom-main">
              <h6 class="breadcrumbs-custom-subtitle title-decorated">Projects</h6>
              <h1 class="breadcrumbs-custom-title">Single Project</h1>
            </div>
            <ul class="breadcrumbs-custom-path">
              <li><a href="index.html">Home</a></li>
              <li><a href="projects.html">Projects</a></li>
              <li class="active">Single Project</li>
            </ul>
          </div>
        </div>
      </section>
      <!-- Overview-->
      <section class="section section-sm bg-gray-100">
        <div class="container">
          <!-- Owl Carousel-->
          <div
            class="owl-carousel owl-carousel-centered-pagination"
            data-items="1"
            data-sm-items="2"
            data-md-items="3"
            data-lg-items="4"
            data-dots="true"
            data-stage-padding="0"
            data-loop="false"
            data-margin="30"
            data-mouse-drag="false"
          >
            <div class="item">
              <h4>Customer</h4>
              <p class="text-primary">Finn Ltd. Headquarters</p>
            </div>
            <div class="item">
              <h4>Services</h4>
              <ul class="list-inline-comma list-inline-comma-default">
                <li><a href="#">3D Modeling</a></li>
                <li><a href="#">Interior Design</a></li>
                <li><a href="#">Building Information Modeling</a></li>
                <li><a href="#">Exterior Design</a></li>
                <li><a href="#">Landscape Design</a></li>
                <li><a href="#">Project Management</a></li>
              </ul>
            </div>
            <div class="item">
              <h4>Brief Description</h4>
              <p
                ><span style="max-width: 240px"
                  >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.</span
                ></p
              >
            </div>
            <div class="item">
              <h4>Term</h4>
              <p>4 months</p>
            </div>
          </div>
        </div>
      </section>
      <!-- About This Project -->
      <section class="section section-lg">
        <div class="container">
          <div
            class="row row-50 justify-content-center justify-content-lg-between flex-lg-row-reverse"
          >
            <div class="col-md-10 col-lg-5 col-xl-4">
              <div class="inset-left-2">
                <h3>About This Project</h3>
                <h4 class="h4-smaller">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
                <p
                  >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.</p
                ><a class="button button-primary button-winona" href="#" style="min-width: 230px"
                  >Read more</a
                >
              </div>
            </div>
            <div class="col-md-10 col-lg-7">
              <div class="thumbnail-video-1 bg-gray-700">
                <div class="ratio ratio-16x9">
                  <div width="570" height="320" src="#" sandbox=""></div>
                </div>
                <div
                  class="thumbnail-video__overlay video-overlay"
                  style="background-image: url(/assets/images/video-preview-1-670x384.jpg)"
                >
                  <div class="button-video"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        class="section swiper-container swiper-slider swiper-slider-tiny text-center"
        data-loop="true"
        data-slide-effect="fade"
        data-autoplay="false"
        data-simulate-touch="true"
      >
        <div class="swiper-wrapper">
          <div
            class="swiper-slide"
            data-slide-bg="/assets/images/single-project-slide-1-1920x760.jpg"
          >
            <div class="swiper-slide-caption">
              <div class="container"></div>
            </div>
          </div>
          <div
            class="swiper-slide"
            data-slide-bg="/assets/images/single-project-slide-2-1920x760.jpg"
          >
            <div class="swiper-slide-caption">
              <div class="container"></div>
            </div>
          </div>
          <div
            class="swiper-slide"
            data-slide-bg="/assets/images/single-project-slide-3-1920x760.jpg"
          >
            <div class="swiper-slide-caption">
              <div class="container"></div>
            </div>
          </div>
        </div>
        <div class="swiper-pagination-outer container">
          <div
            class="swiper-pagination swiper-pagination-modern swiper-pagination-marked"
            data-index-bullet="true"
          ></div>
        </div>
      </section>
      <section class="section section-lg text-center">
        <div class="container">
          <h3 class="wow-outer"><span class="wow slideInUp">Our Team</span></h3>
          <div class="row row-50 row-xxl-70 justify-content-center justify-content-lg-start">
            <div class="col-md-10 col-lg-6 wow-outer">
              <!-- Profile Creative-->
              <article class="profile-creative wow slideInLeft">
                <figure class="profile-creative-figure"
                  ><img
                    class="profile-creative-image"
                    src="/assets/images/team-5-370x368.jpg"
                    alt=""
                    width="370"
                    height="368"
                  />
                </figure>
                <div class="profile-creative-main">
                  <h5 class="profile-creative-title"><a href="#">Sam Williams</a></h5>
                  <p class="profile-creative-position">Landscape Designer</p>
                  <div class="profile-creative-contacts">
                    <div class="object-inline"
                      ><span class="icon icon-md mdi mdi-phone"></span
                      ><a href="tel:#">1-800-1324-567</a></div
                    >
                  </div>
                  <p
                    >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco.</p
                  >
                </div>
              </article>
            </div>
            <div class="col-md-10 col-lg-6 wow-outer">
              <!-- Profile Creative-->
              <article class="profile-creative wow slideInLeft" data-wow-delay=".2s">
                <figure class="profile-creative-figure"
                  ><img
                    class="profile-creative-image"
                    src="/assets/images/team-2-370x368.jpg"
                    alt=""
                    width="370"
                    height="368"
                  />
                </figure>
                <div class="profile-creative-main">
                  <h5 class="profile-creative-title"><a href="#">Ann Payne</a></h5>
                  <p class="profile-creative-position">Senior Architect</p>
                  <div class="profile-creative-contacts">
                    <div class="object-inline"
                      ><span class="icon icon-md mdi mdi-phone"></span
                      ><a href="tel:#">1-800-1324-567</a></div
                    >
                  </div>
                  <p
                    >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco.</p
                  >
                </div>
              </article>
            </div>
            <div class="col-md-10 col-lg-6 wow-outer">
              <!-- Profile Creative-->
              <article class="profile-creative wow slideInLeft">
                <figure class="profile-creative-figure"
                  ><img
                    class="profile-creative-image"
                    src="/assets/images/team-6-370x368.jpg"
                    alt=""
                    width="370"
                    height="368"
                  />
                </figure>
                <div class="profile-creative-main">
                  <h5 class="profile-creative-title"><a href="#">Kate Wilson</a></h5>
                  <p class="profile-creative-position">Project Manager</p>
                  <div class="profile-creative-contacts">
                    <div class="object-inline"
                      ><span class="icon icon-md mdi mdi-phone"></span
                      ><a href="tel:#">1-800-1324-567</a></div
                    >
                  </div>
                  <p
                    >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco.</p
                  >
                </div>
              </article>
            </div>
            <div class="col-md-10 col-lg-6 wow-outer">
              <!-- Profile Creative-->
              <article class="profile-creative wow slideInLeft" data-wow-delay=".2s">
                <figure class="profile-creative-figure"
                  ><img
                    class="profile-creative-image"
                    src="/assets/images/team-3-370x368.jpg"
                    alt=""
                    width="370"
                    height="368"
                  />
                </figure>
                <div class="profile-creative-main">
                  <h5 class="profile-creative-title"><a href="#">Nathan Porter</a></h5>
                  <p class="profile-creative-position">Interior Designer</p>
                  <div class="profile-creative-contacts">
                    <div class="object-inline"
                      ><span class="icon icon-md mdi mdi-phone"></span
                      ><a href="tel:#">1-800-1324-567</a></div
                    >
                  </div>
                  <p
                    >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco.</p
                  >
                </div>
              </article>
            </div>
          </div>
          <div class="wow-outer button-outer"
            ><a class="button button-lg button-primary button-winona wow slideInUp" href="#"
              >View all Team</a
            ></div
          >
        </div>
      </section>
      <!-- Testimonials-->
      <section class="section section-lg bg-gray-100 text-center">
        <div class="container">
          <h3>Testimonials</h3>
          <div class="slick-widget-testimonials wow fadeIn">
            <div
              class="slick-slider carousel-child"
              id="child-carousel"
              data-for=".carousel-parent"
              data-arrows="true"
              data-loop="true"
              data-dots="false"
              data-swipe="true"
              data-items="1"
              data-sm-items="3"
              data-md-items="5"
              data-lg-items="5"
              data-xl-items="5"
              data-center-mode="true"
              data-slide-to-scroll="1"
            >
              <div class="item wow-outer"
                ><img
                  class="wow slideInLeft"
                  src="/assets/images/testimonials-person-1-96x96.jpg"
                  alt=""
                  width="96"
                  height="96"
                />
              </div>
              <div class="item wow-outer"
                ><img
                  class="wow slideInLeft"
                  src="/assets/images/testimonials-person-2-96x96.jpg"
                  alt=""
                  width="96"
                  height="96"
                />
              </div>
              <div class="item wow-outer"
                ><img
                  class="wow slideInLeft"
                  src="/assets/images/testimonials-person-3-96x96.jpg"
                  alt=""
                  width="96"
                  height="96"
                />
              </div>
              <div class="item wow-outer"
                ><img
                  class="wow slideInLeft"
                  src="/assets/images/testimonials-person-4-96x96.jpg"
                  alt=""
                  width="96"
                  height="96"
                />
              </div>
              <div class="item wow-outer"
                ><img
                  class="wow slideInLeft"
                  src="/assets/images/testimonials-person-5-96x96.jpg"
                  alt=""
                  width="96"
                  height="96"
                />
              </div>
              <div class="item wow-outer"
                ><img
                  class="wow slideInLeft"
                  src="/assets/images/testimonials-person-3-96x96.jpg"
                  alt=""
                  width="96"
                  height="96"
                />
              </div>
            </div>
            <!-- Slick Carousel-->
            <div
              class="slick-slider carousel-parent"
              data-arrows="false"
              data-loop="true"
              data-dots="false"
              data-swipe="false"
              data-items="1"
              data-fade="true"
              data-child="#child-carousel"
              data-for="#child-carousel"
            >
              <div class="item">
                <!-- Quote Light 1-->
                <blockquote class="quote-light">
                  <cite class="quote-light-cite">Kelly McMillan</cite>
                  <p class="quote-light-caption">Regular Client</p>
                  <svg
                    class="quote-light-mark"
                    x="0px"
                    y="0px"
                    width="35px"
                    height="25px"
                    viewbox="0 0 35 25"
                  >
                    <path
                      d="M27.461,10.206h7.5v15h-15v-15L25,0.127h7.5L27.461,10.206z M7.539,10.206h7.5v15h-15v-15L4.961,0.127h7.5                L7.539,10.206z"
                    ></path>
                  </svg>
                  <div class="quote-light-text">
                    <p
                      >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                      quis nostrud exercitation ullamco.</p
                    >
                  </div>
                  <div class="quote-light-footer"
                    ><img
                      class="quote-light-image"
                      src="/assets/images/logo-the-oldbrand-83x64.png"
                      alt=""
                      width="83"
                      height="64"
                    />
                  </div>
                </blockquote>
              </div>
              <div class="item">
                <!-- Quote Light 2-->
                <blockquote class="quote-light">
                  <cite class="quote-light-cite">Harold Barnett</cite>
                  <p class="quote-light-caption">Regular Client</p>
                  <svg
                    class="quote-light-mark"
                    x="0px"
                    y="0px"
                    width="35px"
                    height="25px"
                    viewbox="0 0 35 25"
                  >
                    <path
                      d="M27.461,10.206h7.5v15h-15v-15L25,0.127h7.5L27.461,10.206z M7.539,10.206h7.5v15h-15v-15L4.961,0.127h7.5                L7.539,10.206z"
                    ></path>
                  </svg>
                  <div class="quote-light-text">
                    <p
                      >Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                      eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                      in culpa qui officia deserunt mollit anim id est laborum.</p
                    >
                  </div>
                  <div class="quote-light-footer"
                    ><img
                      class="quote-light-image"
                      src="/assets/images/logo-havana-kabana-96x64.png"
                      alt=""
                      width="96"
                      height="64"
                    />
                  </div>
                </blockquote>
              </div>
              <div class="item">
                <!-- Quote Light 3-->
                <blockquote class="quote-light">
                  <cite class="quote-light-cite">Albert Webb</cite>
                  <p class="quote-light-caption">Regular Client</p>
                  <svg
                    class="quote-light-mark"
                    x="0px"
                    y="0px"
                    width="35px"
                    height="25px"
                    viewbox="0 0 35 25"
                  >
                    <path
                      d="M27.461,10.206h7.5v15h-15v-15L25,0.127h7.5L27.461,10.206z M7.539,10.206h7.5v15h-15v-15L4.961,0.127h7.5                L7.539,10.206z"
                    ></path>
                  </svg>
                  <div class="quote-light-text">
                    <p
                      >Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                      minim veniam, quis nostrud exercitation ullamco .Ut enim ad minim veniam, quis
                      nostrud exercitation ullamco.</p
                    >
                  </div>
                  <div class="quote-light-footer"
                    ><img
                      class="quote-light-image"
                      src="/assets/images/logo-majestic-104x64.png"
                      alt=""
                      width="104"
                      height="64"
                    />
                  </div>
                </blockquote>
              </div>
              <div class="item">
                <!-- Quote Light 4 -->
                <blockquote class="quote-light">
                  <cite class="quote-light-cite">Samantha Lee</cite>
                  <p class="quote-light-caption">Regular Client</p>
                  <svg
                    class="quote-light-mark"
                    x="0px"
                    y="0px"
                    width="35px"
                    height="25px"
                    viewbox="0 0 35 25"
                  >
                    <path
                      d="M27.461,10.206h7.5v15h-15v-15L25,0.127h7.5L27.461,10.206z M7.539,10.206h7.5v15h-15v-15L4.961,0.127h7.5                L7.539,10.206z"
                    ></path>
                  </svg>
                  <div class="quote-light-text">
                    <p
                      >Ipsum dolor sit veniam, quis nostrud exercitation ullamco laboris nisi ut
                      aliquip ex ea commodo consequat . Excepteur cupidatat non proident, sunt in
                      culpa qui officia deserunt , quis nostrud exercitation ullamco.</p
                    >
                  </div>
                  <div class="quote-light-footer"
                    ><img
                      class="quote-light-image"
                      src="/assets/images/logo-hillplan-84x64.png"
                      alt=""
                      width="84"
                      height="64"
                    />
                  </div>
                </blockquote>
              </div>
              <div class="item">
                <!-- Quote Light 5-->
                <blockquote class="quote-light">
                  <cite class="quote-light-cite">Bill Warner</cite>
                  <p class="quote-light-caption">Regular Client</p>
                  <svg
                    class="quote-light-mark"
                    x="0px"
                    y="0px"
                    width="35px"
                    height="25px"
                    viewbox="0 0 35 25"
                  >
                    <path
                      d="M27.461,10.206h7.5v15h-15v-15L25,0.127h7.5L27.461,10.206z M7.539,10.206h7.5v15h-15v-15L4.961,0.127h7.5                L7.539,10.206z"
                    ></path>
                  </svg>
                  <div class="quote-light-text">
                    <p
                      >Venim ad minim veniam, quis nostrud exercitation ullamco, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                      quis nostrud exercitation ullamco.</p
                    >
                  </div>
                  <div class="quote-light-footer"
                    ><img
                      class="quote-light-image"
                      src="/assets/images/logo-brownie-103x61.png"
                      alt=""
                      width="103"
                      height="61"
                    />
                  </div>
                </blockquote>
              </div>
              <div class="item">
                <!-- Quote Light 3-->
                <blockquote class="quote-light">
                  <cite class="quote-light-cite">Albert Webb</cite>
                  <p class="quote-light-caption">Regular Client</p>
                  <svg
                    class="quote-light-mark"
                    x="0px"
                    y="0px"
                    width="35px"
                    height="25px"
                    viewbox="0 0 35 25"
                  >
                    <path
                      d="M27.461,10.206h7.5v15h-15v-15L25,0.127h7.5L27.461,10.206z M7.539,10.206h7.5v15h-15v-15L4.961,0.127h7.5                L7.539,10.206z"
                    ></path>
                  </svg>
                  <div class="quote-light-text">
                    <p
                      >Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                      deserunt mollit anim id est laborum.Ut enim ad minim veniam, quis nostrud
                      exercitation ullamco.</p
                    >
                  </div>
                  <div class="quote-light-footer"
                    ><img
                      class="quote-light-image"
                      src="/assets/images/logo-majestic-104x64.png"
                      alt=""
                      width="104"
                      height="64"
                    />
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="section section-xs bg-primary text-center">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-sm-10 col-md-12">
              <div class="box-cta-thin">
                <h4 class="wow-outer"
                  ><span class="wow slideInRight"
                    >Learn the Cost of your <span class="fw-bold">Architecture Project</span> Right
                    Now!</span
                  ></h4
                >
                <div class="wow-outer button-outer"
                  ><a
                    class="button button-black-outline button-winona wow slideInLeft"
                    href="pricing.html"
                    >View pricing</a
                  ></div
                >
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- Page Footer	-->
      <nav-footer />
    </div>
    <!-- Global Mailform Output-->
    <div class="snackbars" id="form-output-global"></div
  ></div>
</template>

<script setup lang="ts">
  onMounted(async () => {
    loadScriptClient();
  });
</script>
<style lang="scss" scoped></style>
