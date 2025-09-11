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
              <h1 class="breadcrumbs-custom-title">Testimonials</h1>
            </div>
            <ul class="breadcrumbs-custom-path">
              <li><a href="index.html">Home</a></li>
              <li><a href="#">Pages</a></li>
              <li class="active">Testimonials</li>
            </ul>
          </div>
        </div>
      </section>
      <!-- Testimonials-->
      <section class="section section-lg section-first bg-gray-100 text-center">
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
      <!-- 3 Column Layout-->
      <section class="section section-lg text-center">
        <div class="container">
          <h3 class="wow-outer"><span class="wow slideInDown">3 Column Layout</span></h3>
          <!-- Owl Carousel-->
          <div
            class="owl-carousel wow fadeIn"
            data-items="1"
            data-md-items="2"
            data-lg-items="3"
            data-dots="true"
            data-nav="false"
            data-loop="false"
            data-margin="30"
            data-stage-padding="0"
            data-mouse-drag="false"
          >
            <blockquote class="quote-classic">
              <div class="quote-classic-meta">
                <div class="quote-classic-avatar"
                  ><img
                    src="/assets/images/testimonials-person-3-96x96.jpg"
                    alt=""
                    width="96"
                    height="96"
                  />
                </div>
                <div class="quote-classic-info">
                  <cite class="quote-classic-cite">Albert Webb</cite>
                  <p class="quote-classic-caption">Regular Client</p>
                </div>
              </div>
              <div class="quote-classic-text">
                <p
                  >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.</p
                >
              </div>
            </blockquote>
            <blockquote class="quote-classic">
              <div class="quote-classic-meta">
                <div class="quote-classic-avatar"
                  ><img
                    src="/assets/images/testimonials-person-1-96x96.jpg"
                    alt=""
                    width="96"
                    height="96"
                  />
                </div>
                <div class="quote-classic-info">
                  <cite class="quote-classic-cite">Kelly McMillan</cite>
                  <p class="quote-classic-caption">Regular Client</p>
                </div>
              </div>
              <div class="quote-classic-text">
                <p
                  >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.</p
                >
              </div>
            </blockquote>
            <blockquote class="quote-classic">
              <div class="quote-classic-meta">
                <div class="quote-classic-avatar"
                  ><img
                    src="/assets/images/testimonials-person-2-96x96.jpg"
                    alt=""
                    width="96"
                    height="96"
                  />
                </div>
                <div class="quote-classic-info">
                  <cite class="quote-classic-cite">Harold Barnett</cite>
                  <p class="quote-classic-caption">Regular Client</p>
                </div>
              </div>
              <div class="quote-classic-text">
                <p
                  >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.</p
                >
              </div>
            </blockquote>
            <blockquote class="quote-classic">
              <div class="quote-classic-meta">
                <div class="quote-classic-avatar"
                  ><img
                    src="/assets/images/testimonials-person-5-96x96.jpg"
                    alt=""
                    width="96"
                    height="96"
                  />
                </div>
                <div class="quote-classic-info">
                  <cite class="quote-classic-cite">Bill Warner</cite>
                  <p class="quote-classic-caption">Regular Client</p>
                </div>
              </div>
              <div class="quote-classic-text">
                <p
                  >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.</p
                >
              </div>
            </blockquote>
          </div>
        </div>
      </section>
      <section class="section section-lg bg-gray-100">
        <div class="container">
          <h3 class="wow-outer text-center"
            ><span class="wow slideInUp">Testimonials & Video</span></h3
          >
          <div class="row row-50 justify-content-center justify-content-lg-between">
            <div class="col-md-10 col-lg-5 wow-outer">
              <div
                class="owl-carousel wow slideInLeft"
                data-items="1"
                data-dots="true"
                data-nav="false"
                data-loop="true"
                data-margin="30"
                data-stage-padding="0"
                data-mouse-drag="false"
              >
                <blockquote class="quote-modern">
                  <svg
                    class="quote-modern-mark"
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
                  <div class="quote-modern-text">
                    <p
                      >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                      quis nostrud exercitation ullamco laboris nisi ut aliquip .</p
                    >
                  </div>
                  <div class="quote-modern-meta">
                    <div class="quote-modern-avatar"
                      ><img
                        src="/assets/images/testimonials-person-3-96x96.jpg"
                        alt=""
                        width="96"
                        height="96"
                      />
                    </div>
                    <div class="quote-modern-info">
                      <cite class="quote-modern-cite">Albert Webb</cite>
                      <p class="quote-modern-caption">Regular Client</p>
                    </div>
                  </div>
                </blockquote>
                <blockquote class="quote-modern">
                  <svg
                    class="quote-modern-mark"
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
                  <div class="quote-modern-text">
                    <p
                      >Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                      aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit, sed do eiusmod tempor incididunt ut.</p
                    >
                  </div>
                  <div class="quote-modern-meta">
                    <div class="quote-modern-avatar"
                      ><img
                        src="/assets/images/testimonials-person-1-96x96.jpg"
                        alt=""
                        width="96"
                        height="96"
                      />
                    </div>
                    <div class="quote-modern-info">
                      <cite class="quote-modern-cite">Kelly McMillan</cite>
                      <p class="quote-modern-caption">Regular Client</p>
                    </div>
                  </div>
                </blockquote>
                <blockquote class="quote-modern">
                  <svg
                    class="quote-modern-mark"
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
                  <div class="quote-modern-text">
                    <p
                      >Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                      eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non sed do eiusmod
                      tempor incididunt ut voluptate nulla.</p
                    >
                  </div>
                  <div class="quote-modern-meta">
                    <div class="quote-modern-avatar"
                      ><img
                        src="/assets/images/testimonials-person-2-96x96.jpg"
                        alt=""
                        width="96"
                        height="96"
                      />
                    </div>
                    <div class="quote-modern-info">
                      <cite class="quote-modern-cite">Harold Barnett</cite>
                      <p class="quote-modern-caption">Regular Client</p>
                    </div>
                  </div>
                </blockquote>
              </div>
            </div>
            <div class="col-md-10 col-lg-6 wow-outer">
              <div class="thumbnail-video-1 wow slideInLeft bg-gray-700">
                <div
                  class="thumbnail-video__overlay video-overlay"
                  style="background-image: url(/assets/images/video-preview-1-570x320.jpg)"
                >
                  <div class="button-video"></div>
                  <h5>Lawrence Alvarado</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- 2 Column Layout-->
      <section class="section section-lg text-center">
        <div class="container">
          <h3>2 Column Layout</h3>
          <div
            class="owl-carousel"
            data-items="1"
            data-md-items="2"
            data-dots="true"
            data-nav="false"
            data-loop="true"
            data-margin="30"
            data-stage-padding="0"
            data-mouse-drag="false"
          >
            <div class="wow-outer">
              <blockquote class="quote-modern quote-modern-big wow slideInLeft">
                <svg
                  class="quote-modern-mark"
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
                <div class="quote-modern-text">
                  <p
                    >We selected R&CO because of their architects’ rigorous design background and
                    education. They exceeded our expectations and emerged as leaders of our
                    project.</p
                  >
                </div>
                <div class="quote-modern-meta">
                  <div class="quote-modern-avatar"
                    ><img
                      src="/assets/images/testimonials-person-3-96x96.jpg"
                      alt=""
                      width="96"
                      height="96"
                    />
                  </div>
                  <div class="quote-modern-info">
                    <cite class="quote-modern-cite">Albert Webb</cite>
                    <p class="quote-modern-caption">Regular Client</p>
                  </div>
                </div>
              </blockquote>
            </div>
            <div class="wow-outer">
              <blockquote class="quote-modern quote-modern-big wow slideInLeft">
                <svg
                  class="quote-modern-mark"
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
                <div class="quote-modern-text">
                  <p
                    >When we needed design and architecture specialists, your team was there for us.
                    You took all our ideas and demands into consideration and made a great
                    project.</p
                  >
                </div>
                <div class="quote-modern-meta">
                  <div class="quote-modern-avatar"
                    ><img
                      src="/assets/images/testimonials-person-1-96x96.jpg"
                      alt=""
                      width="96"
                      height="96"
                    />
                  </div>
                  <div class="quote-modern-info">
                    <cite class="quote-modern-cite">Kelly McMillan</cite>
                    <p class="quote-modern-caption">Regular Client</p>
                  </div>
                </div>
              </blockquote>
            </div>
            <div class="wow-outer">
              <blockquote class="quote-modern quote-modern-big wow slideInLeft">
                <svg
                  class="quote-modern-mark"
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
                <div class="quote-modern-text">
                  <p
                    >I have worked with many architecture companies offering design & construction
                    services, and out of all you were one who really stood out from the rest.</p
                  >
                </div>
                <div class="quote-modern-meta">
                  <div class="quote-modern-avatar"
                    ><img
                      src="/assets/images/testimonials-person-2-96x96.jpg"
                      alt=""
                      width="96"
                      height="96"
                    />
                  </div>
                  <div class="quote-modern-info">
                    <cite class="quote-modern-cite">Sam Wilson</cite>
                    <p class="quote-modern-caption">Regular Client</p>
                  </div>
                </div>
              </blockquote>
            </div>
            <div class="wow-outer">
              <blockquote class="quote-modern quote-modern-big wow slideInLeft">
                <svg
                  class="quote-modern-mark"
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
                <div class="quote-modern-text">
                  <p
                    >Working with your team was a pleasure. You balanced the architectural vision
                    and the project realities beautifully and had a deep understanding of our
                    priorities.</p
                  >
                </div>
                <div class="quote-modern-meta">
                  <div class="quote-modern-avatar"
                    ><img
                      src="/assets/images/testimonials-person-5-96x96.jpg"
                      alt=""
                      width="96"
                      height="96"
                    />
                  </div>
                  <div class="quote-modern-info">
                    <cite class="quote-modern-cite">Harold Barnett</cite>
                    <p class="quote-modern-caption">Regular Client</p>
                  </div>
                </div>
              </blockquote>
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
