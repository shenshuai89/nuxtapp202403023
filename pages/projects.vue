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
              <h6 class="breadcrumbs-custom-subtitle title-decorated">Projects</h6>
              <h1 class="breadcrumbs-custom-title">Projects</h1>
            </div>
            <ul class="breadcrumbs-custom-path">
              <li><a href="index.html">Home</a></li>
              <li class="active">Projects</li>
            </ul>
          </div>
        </div>
      </section>
      <section class="section section-lg bg-gray-lighten bg-gray-100 text-center">
        <div class="container">
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
