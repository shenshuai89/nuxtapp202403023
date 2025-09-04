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
              <h6 class="breadcrumbs-custom-subtitle title-decorated">Services</h6>
              <h1 class="breadcrumbs-custom-title">Services</h1>
            </div>
            <ul class="breadcrumbs-custom-path">
              <li><a href="index.html">Home</a></li>
              <li class="active">Services</li>
            </ul>
          </div>
        </div>
      </section>
      <!-- Services-->
      <section class="section section-lg text-center">
        <div class="container">
          <h3 class="wow-outer"><span class="wow slideInUp">Services</span></h3>
          <div class="row row-50">
            <div class="col-sm-6 col-lg-4 wow-outer">
              <!-- Box Creative-->
              <article class="box-creative wow slideInLeft">
                <div class="box-creative-icon linearicons-lamp"></div>
                <h4 class="box-creative-title"
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
                <h4 class="box-creative-title"><a href="single-service.html">Pre-Design</a></h4>
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
                <h4 class="box-creative-title"><a href="single-service.html">3D Modeling</a></h4>
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
                <h4 class="box-creative-title"
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
                <h4 class="box-creative-title"
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
                <h4 class="box-creative-title"><a href="single-service.html">Consultations</a></h4>
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
