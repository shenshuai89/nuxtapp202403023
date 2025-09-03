<template>
  <div>
    <div class="page">
      <!-- Page Header-->
      <nav-header />
      <!-- Slider-->
      <section
        class="section swiper-container swiper-slider swiper-slider-business bg-gray-700"
        data-loop="true"
        data-slide-effect="fade"
        data-autoplay="5000"
        data-simulate-touch="false"
        data-custom-slide-effect="inter-leave-effect"
      >
        <div class="swiper-wrapper">
          <div class="swiper-slide" :data-slide-bg="SLIDER1">
            <div class="slide-inner">
              <div class="swiper-slide-caption">
                <div class="container">
                  <time class="slider-timeline wow-outer slideInDown text-uppercase" datetime="2022"
                    ><span class="wow" data-caption-animate="slideInDown" data-wow-delay=".5	s"
                      >April 2022</span
                    ></time
                  >
                  <h1 class="font-condensed wow-outer fw-bold"
                    ><span class="wow" data-caption-animate="slideInDown"
                      >Hearst Business<br />Center</span
                    ></h1
                  >
                  <div class="wow-outer offset-top-1"
                    ><a
                      class="button button-lg button-white-outline button-winona wow"
                      href="about-us.html"
                      data-caption-animate="slideInUp"
                      >view project</a
                    ></div
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-slide" :data-slide-bg="SLIDER2">
            <div class="slide-inner">
              <div class="swiper-slide-caption">
                <div class="container">
                  <time class="slider-timeline wow-outer slideInDown text-uppercase" datetime="2022"
                    ><span class="wow" data-caption-animate="slideInDown" data-wow-delay=".5	s"
                      >April 2022</span
                    ></time
                  >
                  <h1 class="font-condensed wow-outer fw-bold"
                    ><span class="wow" data-caption-animate="slideInDown"
                      >Los Angeles<br />Kindergarten</span
                    ></h1
                  >
                  <div class="wow-outer offset-top-1"
                    ><a
                      class="button button-lg button-white-outline button-winona wow"
                      href="about-us.html"
                      data-caption-animate="slideInUp"
                      >view project</a
                    ></div
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-slide" :data-slide-bg="SLIDER3">
            <div class="slide-inner">
              <div class="swiper-slide-caption">
                <div class="container">
                  <time class="slider-timeline wow-outer slideInDown text-uppercase" datetime="2022"
                    ><span class="wow" data-caption-animate="slideInDown" data-wow-delay=".5	s"
                      >April 2022</span
                    ></time
                  >
                  <h1 class="font-condensed wow-outer fw-bold"
                    ><span class="wow" data-caption-animate="slideInDown"
                      >Eastwood Hotel<br />and Spa</span
                    ></h1
                  >
                  <div class="wow-outer offset-top-1"
                    ><a
                      class="button button-lg button-white-outline button-winona wow"
                      href="about-us.html"
                      data-caption-animate="slideInUp"
                      >view project</a
                    ></div
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-slide" :data-slide-bg="SLIDER4">
            <div class="slide-inner">
              <div class="swiper-slide-caption">
                <div class="container">
                  <time class="slider-timeline wow-outer slideInDown text-uppercase" datetime="2022"
                    ><span class="wow" data-caption-animate="slideInDown" data-wow-delay=".5	s"
                      >April 2022</span
                    ></time
                  >
                  <h1 class="font-condensed wow-outer fw-bold"
                    ><span class="wow" data-caption-animate="slideInDown"
                      >National Culture<br />Museum</span
                    ></h1
                  >
                  <div class="wow-outer offset-top-1"
                    ><a
                      class="button button-lg button-white-outline button-winona wow"
                      href="about-us.html"
                      data-caption-animate="slideInUp"
                      >view project</a
                    ></div
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-slider-nav container">
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        </div>
      </section>
      <!-- A Few Words About Us-->
      <section class="section section-lg">
        <div class="container">
          <div
            class="row row-50 justify-content-center justify-content-lg-between flex-lg-row-reverse"
          >
            <div class="col-lg-6 col-xl-5">
              <div class="inset-right-3">
                <h3 class="font-condensed wow-outer"
                  ><span class="wow slideInDown">A Few Words About Us</span></h3
                >
                <p class="font-condensed heading-subtitle wow-outer"
                  ><span class="wow slideInDown" data-wow-delay=".05s"
                    >R&CO is a team of highly talented, experienced, and award-winning architects
                    and designers.</span
                  ></p
                >
                <p class="font-roboto wow-outer"
                  ><span class="wow slideInDown" data-wow-delay=".1s"
                    >Our company has been the leading provider of architecture services to clients
                    throughout the USA since 1999. We pay attention to every demand of our
                    customers.</span
                  ></p
                >
                <div class="wow-outer button-outer"
                  ><a
                    class="button button-lg button-black-outline button-winona wow slideInDown"
                    data-wow-delay=".1s"
                    href="about-us.html"
                    >Read more</a
                  ></div
                >
              </div>
            </div>
            <div class="col-lg-6">
              <div class="svg-box wow slideInDown" :style="{ backgroundImage: `url(${IMAGE1})` }">
                <div class="svg-box-content">
                  <svg class="expiriens">
                    <defs>
                      <mask id="mask" x="0" y="0" width="100%" height="100%">
                        <rect id="alpha" x="0" y="0" width="100%" height="100%"></rect>
                        <text id="title" x="50%" y="0" dy="1.25em">19</text>
                      </mask>
                    </defs>
                    <rect id="base" x="0" y="0" width="100%" height="100%"></rect>
                  </svg>
                  <span class="box-subtitle">Years of experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- Our Projects-->
      <section class="section section-lg bg-gray-lighten text-center">
        <div class="container">
          <h3 class="font-condensed wow-outer"
            ><span class="wow slideInDown">Our Projects</span></h3
          >
          <div class="isotope offset-top-2" data-isotope-layout="masonry">
            <div class="row row-30">
              <div class="col-12 col-sm-6 col-lg-4 isotope-item wow-outer">
                <!-- Thumbnail Corporate-->
                <article class="thumbnail-corporate wow slideInDown"
                  ><img
                    class="thumbnail-corporate-image"
                    src="/assets/images/gallery-masonry-1-370x256.jpg"
                    alt=""
                    width="370"
                    height="256"
                  />
                  <div class="thumbnail-corporate-caption">
                    <p class="thumbnail-corporate-title">History Museum</p>
                    <p
                      >We deliver reliable architectural solutions to our individual and corporate
                      clients throughout the USA.</p
                    ><a class="thumbnail-corporate-link" href="single-project.html"
                      ><span class="icon mdi mdi-plus"></span><span class="icon mdi mdi-plus"></span
                    ></a>
                  </div>
                  <div class="thumbnail-corporate-dummy"> </div>
                </article>
              </div>
              <div class="col-12 col-sm-6 col-lg-4 isotope-item wow-outer">
                <!-- Thumbnail Corporate-->
                <article class="thumbnail-corporate thumbnail-corporate-lg wow slideInDown"
                  ><img
                    class="thumbnail-corporate-image"
                    src="/assets/images/gallery-masonry-2-370x464.jpg"
                    alt=""
                    width="370"
                    height="464"
                  />
                  <div class="thumbnail-corporate-caption">
                    <p class="thumbnail-corporate-title">West Entertainment Center</p>
                    <p
                      >We deliver reliable architectural solutions to our individual and corporate
                      clients throughout the USA.</p
                    ><a class="thumbnail-corporate-link" href="single-project.html"
                      ><span class="icon mdi mdi-plus"></span><span class="icon mdi mdi-plus"></span
                    ></a>
                  </div>
                  <div class="thumbnail-corporate-dummy"> </div>
                </article>
              </div>
              <div class="col-12 col-sm-6 col-lg-4 isotope-item wow-outer">
                <!-- Thumbnail Corporate-->
                <article class="thumbnail-corporate wow slideInUp"
                  ><img
                    class="thumbnail-corporate-image"
                    src="/assets/images/gallery-masonry-3-370x256.jpg"
                    alt=""
                    width="370"
                    height="256"
                  />
                  <div class="thumbnail-corporate-caption">
                    <p class="thumbnail-corporate-title">The Edwards Lodge</p>
                    <p
                      >We deliver reliable architectural solutions to our individual and corporate
                      clients throughout the USA.</p
                    ><a class="thumbnail-corporate-link" href="single-project.html"
                      ><span class="icon mdi mdi-plus"></span><span class="icon mdi mdi-plus"></span
                    ></a>
                  </div>
                  <div class="thumbnail-corporate-dummy"> </div>
                </article>
              </div>
              <div class="col-12 col-sm-6 col-lg-4 isotope-item wow-outer">
                <!-- Thumbnail Corporate-->
                <article class="thumbnail-corporate thumbnail-corporate-lg wow slideInUp"
                  ><img
                    class="thumbnail-corporate-image"
                    src="/assets/images/gallery-masonry-4-370x464.jpg"
                    alt=""
                    width="370"
                    height="464"
                  />
                  <div class="thumbnail-corporate-caption">
                    <p class="thumbnail-corporate-title">Finn Ltd. Headquarters</p>
                    <p
                      >We deliver reliable architectural solutions to our individual and corporate
                      clients throughout the USA.</p
                    ><a class="thumbnail-corporate-link" href="single-project.html"
                      ><span class="icon mdi mdi-plus"></span><span class="icon mdi mdi-plus"></span
                    ></a>
                  </div>
                  <div class="thumbnail-corporate-dummy"> </div>
                </article>
              </div>
              <div class="col-12 col-sm-6 col-lg-4 isotope-item wow-outer">
                <!-- Thumbnail Corporate-->
                <article class="thumbnail-corporate thumbnail-corporate-lg wow slideInDown"
                  ><img
                    class="thumbnail-corporate-image"
                    src="/assets/images/gallery-masonry-6-370x464.jpg"
                    alt=""
                    width="370"
                    height="464"
                  />
                  <div class="thumbnail-corporate-caption">
                    <p class="thumbnail-corporate-title">Modern Art Gallery</p>
                    <p
                      >We deliver reliable architectural solutions to our individual and corporate
                      clients throughout the USA.</p
                    ><a class="thumbnail-corporate-link" href="single-project.html"
                      ><span class="icon mdi mdi-plus"></span><span class="icon mdi mdi-plus"></span
                    ></a>
                  </div>
                  <div class="thumbnail-corporate-dummy"> </div>
                </article>
              </div>
              <div class="col-12 col-sm-6 col-lg-4 isotope-item wow-outer">
                <!-- Thumbnail Corporate-->
                <article class="thumbnail-corporate wow slideInDown"
                  ><img
                    class="thumbnail-corporate-image"
                    src="/assets/images/gallery-masonry-5-370x256.jpg"
                    alt=""
                    width="370"
                    height="256"
                  />
                  <div class="thumbnail-corporate-caption">
                    <p class="thumbnail-corporate-title">San Diego Water Club</p>
                    <p
                      >We deliver reliable architectural solutions to our individual and corporate
                      clients throughout the USA.</p
                    ><a class="thumbnail-corporate-link" href="single-project.html"
                      ><span class="icon mdi mdi-plus"></span><span class="icon mdi mdi-plus"></span
                    ></a>
                  </div>
                  <div class="thumbnail-corporate-dummy"> </div>
                </article>
              </div>
            </div>
          </div>
          <div class="wow-outer button-outer"
            ><a
              class="button button-lg button-primary-outline button-winona wow slideInUp"
              href="projects.html"
              >View all projects</a
            ></div
          >
        </div>
      </section>
      <!-- Services-->
      <section class="section section-lg text-center">
        <div class="container">
          <h3 class="font-condensed wow-outer"><span class="wow slideInUp">Services</span></h3>
          <div class="row row-50">
            <div class="col-sm-6 col-lg-4 wow-outer">
              <!-- Box Creative-->
              <article class="box-creative wow slideInLeft">
                <div class="box-creative-icon linearicons-lamp"></div>
                <h4 class="font-condensed box-creative-title"
                  ><a href="single-service.html">Interior/Exterior Design</a></h4
                >
                <p
                  >We combine Interior and Exterior Design services and often provide them as a
                  single solution. It helps us strengthen the creation of truly unique spaces.</p
                >
              </article>
            </div>
            <div class="col-sm-6 col-lg-4 wow-outer">
              <!-- Box Creative-->
              <article class="box-creative wow slideInLeft" data-wow-delay=".1s">
                <div class="box-creative-icon linearicons-compass"></div>
                <h4 class="font-condensed box-creative-title"
                  ><a href="single-service.html">Pre-Design</a></h4
                >
                <p
                  >Our pre-design solutions include analysis and planning services that help both
                  the client and architects to work out the forthcoming project.</p
                >
              </article>
            </div>
            <div class="col-sm-6 col-lg-4 wow-outer">
              <!-- Box Creative-->
              <article class="box-creative wow slideInLeft" data-wow-delay=".2s">
                <div class="box-creative-icon linearicons-3d-rotate"></div>
                <h4 class="font-condensed box-creative-title"
                  ><a href="single-service.html">3D Modeling</a></h4
                >
                <p
                  >We offer comprehensive Architectural Engineering Services including Interior
                  design, Master planning, 3D modeling, working drawings, and documentation.</p
                >
              </article>
            </div>
            <div class="col-sm-6 col-lg-4 wow-outer">
              <!-- Box Creative-->
              <article class="box-creative wow slideInLeft">
                <div class="box-creative-icon linearicons-pencil3"></div>
                <h4 class="font-condensed box-creative-title"
                  ><a href="single-service.html">Architecture Engineering</a></h4
                >
                <p
                  >We provide a range of architectural 3D modeling services to our customers to aid
                  the design, planning and visualization phase of construction projects.</p
                >
              </article>
            </div>
            <div class="col-sm-6 col-lg-4 wow-outer">
              <!-- Box Creative-->
              <article class="box-creative wow slideInLeft" data-wow-delay=".1s">
                <div class="box-creative-icon linearicons-hammer-wrench"></div>
                <h4 class="font-condensed box-creative-title"
                  ><a href="single-service.html">Project Management</a></h4
                >
                <p
                  >Project management is the process by which our team plans and executes your
                  project. We will develop it using the best possible approach.</p
                >
              </article>
            </div>
            <div class="col-sm-6 col-lg-4 wow-outer">
              <!-- Box Creative-->
              <article class="box-creative wow slideInLeft" data-wow-delay=".2s">
                <div class="box-creative-icon linearicons-bubble-text"></div>
                <h4 class="font-condensed box-creative-title"
                  ><a href="single-service.html">Consultations</a></h4
                >
                <p
                  >Our team also provides consultations on all architectural issues, even if you
                  need specific info about working on interior renovation or exterior design
                  tasks.</p
                >
              </article>
            </div>
          </div>
        </div>
      </section>
      <!-- Testimonials-->
      <section
        class="section section-xl bg-image bg-image-1 bg-owl bg-gray-700"
        style="background-image: url(/assets/images/bg-testimonials-1920x679.jpg)"
      >
        <div class="container">
          <div class="row justify-content-center">
            <h3 class="font-condensed text-center text-white">Testimonials</h3>
            <div class="col-md-12 offset-top-2">
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
                        >We selected R&CO because of their architects’ rigorous design background
                        and education. They exceeded our expectations and emerged as leaders of our
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
                        >When we needed design and architecture specialists, your team was there for
                        us. You took all our ideas and demands into consideration and made a great
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
                        >I have worked with many architecture companies offering design &
                        construction services, and out of all you were one who really stood out from
                        the rest.</p
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
                        >Working with your team was a pleasure. You balanced the architectural
                        vision and the project realities beautifully and had a deep understanding of
                        our priorities.</p
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
          </div>
        </div>
      </section>
      <!-- Partners-->
      <section class="section section-sm text-center">
        <div class="container">
          <!-- Owl Carousel-->
          <div
            class="owl-carousel owl-carousel-1"
            data-items="2"
            data-sm-items="3"
            data-md-items="4"
            data-lg-items="5"
            data-dots="true"
            data-nav="false"
            data-stage-padding="0"
            data-loop="true"
            data-margin="30"
            data-mouse-drag="false"
          >
            <div class="item wow-outer">
              <div class="wow slideInLeft"
                ><a class="link-image" href="#"
                  ><img
                    src="/assets/images/logo-john-brad-135x87.png"
                    alt=""
                    width="135"
                    height="87" /></a
              ></div>
            </div>
            <div class="item wow-outer">
              <div class="wow slideInLeft" data-wow-delay=".05s"
                ><a class="link-image" href="#"
                  ><img
                    src="/assets/images/logo-the-oldbrand-134x104.png"
                    alt=""
                    width="134"
                    height="104" /></a
              ></div>
            </div>
            <div class="item wow-outer">
              <div class="wow slideInLeft" data-wow-delay=".1s"
                ><a class="link-image" href="#"
                  ><img
                    src="/assets/images/logo-havana-cabana-132x87.png"
                    alt=""
                    width="132"
                    height="87" /></a
              ></div>
            </div>
            <div class="item wow-outer">
              <div class="wow slideInLeft" data-wow-delay=".15s"
                ><a class="link-image" href="#"
                  ><img
                    src="/assets/images/logo-brownie-143x85.png"
                    alt=""
                    width="143"
                    height="85" /></a
              ></div>
            </div>
            <div class="item wow-outer">
              <div class="wow slideInLeft" data-wow-delay=".2s"
                ><a class="link-image" href="#"
                  ><img
                    src="/assets/images/logo-hillplan-111x85.png"
                    alt=""
                    width="111"
                    height="85" /></a
              ></div>
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
  import { onMounted } from 'vue';
  import IMAGE1 from '/assets/images/box-expiriens.png';
  import SLIDER1 from '/assets/images/slider-architecture-slide-1-1920x800.jpg';
  import SLIDER2 from '/assets/images/slider-architecture-slide-2-1920x800.jpg';
  import SLIDER3 from '/assets/images/slider-architecture-slide-3-1920x800.jpg';
  import SLIDER4 from '/assets/images/slider-architecture-slide-4-1920x800.jpg';

  onMounted(async () => {
      loadScriptClient();
  });
</script>
<style lang="scss" scoped></style>
