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
              <h1 class="breadcrumbs-custom-title">Single Job</h1>
            </div>
            <ul class="breadcrumbs-custom-path">
              <li><a href="/">Home</a></li>
              <li><a href="#">Pages</a></li>
              <li class="active">Single Job</li>
            </ul>
          </div>
        </div>
      </section>
      <!-- A Few Words About Us-->
      <section class="section section-lg">
        <div class="container">
          <div
            class="row row-50 justify-content-center justify-content-lg-between align-items-center align-items-xl-start"
          >
            <div class="col-md-10 col-lg-6 col-xl-5">
              <h3>Project Manager</h3>
              <!-- Bootstrap tabs-->
              <div class="tabs-custom tabs-horizontal tabs-line" id="tabs-1">
                <!-- Nav tabs-->
                <ul class="nav nav-tabs">
                  <li class="nav-item" role="presentation"
                    ><a class="nav-link active" href="#tabs-1-1" data-bs-toggle="tab"
                      >Description</a
                    ></li
                  >
                  <li class="nav-item" role="presentation"
                    ><a class="nav-link" href="#tabs-1-2" data-bs-toggle="tab">Demands</a></li
                  >
                  <li class="nav-item" role="presentation"
                    ><a class="nav-link" href="#tabs-1-3" data-bs-toggle="tab">Conditions</a></li
                  >
                </ul>
                <!-- Tab panes-->
                <div class="tab-content">
                  <div class="tab-pane fade show active" id="tabs-1-1">
                    <p
                      >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua.</p
                    >
                    <p
                      >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                      consequat.</p
                    >
                  </div>
                  <div class="tab-pane fade" id="tabs-1-2">
                    <ul class="list-marked">
                      <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                      <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                      <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                    </ul>
                  </div>
                  <div class="tab-pane fade" id="tabs-1-3">
                    <ul class="list-marked">
                      <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                      <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                      <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                    </ul>
                  </div>
                </div> </div
              ><a class="button button-primary button-winona" href="#">Send CV</a>
            </div>
            <div class="col-md-10 col-lg-6"
              ><img
                class="img-responsive"
                src="/assets/images/single-job-1-570x400.jpg"
                alt=""
                width="570"
                height="400"
              />
            </div>
          </div>
        </div>
      </section>
      <!-- Current Job Positions-->
      <section class="section section-lg bg-gray-100 text-center">
        <div class="container">
          <h3>Current Job Positions</h3>
          <div class="row row-45">
            <div class="col-md-6 col-lg-4">
              <!-- Career Classic-->
              <article class="career-classic">
                <h4 class="career-classic-title"><a href="/singleJob">3D Modeler</a></h4>
                <div class="career-classic-divider"></div>
                <ul class="career-classic-list">
                  <li><span class="icon mdi mdi-calendar-clock"></span><span>Full Time</span></li>
                  <li><span class="icon mdi mdi-map-marker"></span><span>San Diego</span></li>
                </ul>
                <p
                  >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.</p
                >
              </article>
            </div>
            <div class="col-md-6 col-lg-4">
              <!-- Career Classic-->
              <article class="career-classic">
                <h4 class="career-classic-title"><a href="/singleJob">Interior Designer</a></h4>
                <div class="career-classic-divider"></div>
                <ul class="career-classic-list">
                  <li><span class="icon mdi mdi-calendar-clock"></span><span>Full Time</span></li>
                  <li><span class="icon mdi mdi-map-marker"></span><span>San Diego</span></li>
                </ul>
                <p
                  >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.</p
                >
              </article>
            </div>
            <div class="col-md-6 col-lg-4">
              <!-- Career Classic-->
              <article class="career-classic">
                <h4 class="career-classic-title"><a href="/singleJob">Project Architect</a></h4>
                <div class="career-classic-divider"></div>
                <ul class="career-classic-list">
                  <li><span class="icon mdi mdi-calendar-clock"></span><span>Full Time</span></li>
                  <li><span class="icon mdi mdi-map-marker"></span><span>San Diego</span></li>
                </ul>
                <p
                  >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.</p
                >
              </article>
            </div> </div
          ><a class="button button-lg button-primary button-winona" href="/careers">Join Us</a>
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
