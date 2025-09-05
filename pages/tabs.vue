<template>
  <div>
    <div class="page">
      <!-- Page Header-->
      <nav-header />
      <!-- Breadcrumbs -->
      <section class="breadcrumbs-custom bg-image context-dark bg-overlay" style="background-image: url(/assets/images/breadcrumbs-image-1.jpg);">
        <div class="breadcrumbs-custom-inner">
          <div class="container breadcrumbs-custom-container">
            <div class="breadcrumbs-custom-main">
              <h6 class="breadcrumbs-custom-subtitle title-decorated">Pages</h6>
              <h1 class="breadcrumbs-custom-title">Tabs</h1>
            </div>
            <ul class="breadcrumbs-custom-path">
              <li><a href="index.html">Home</a></li>
              <li><a href="#">Pages</a></li>
              <li class="active">Tabs</li>
            </ul>
          </div>
        </div>
      </section>
      <!-- Tabs-->
      <section class="section section-lg">
        <div class="container">
          <div class="row">
            <div class="col-sm-10 col-md-9 col-lg-6 col-xl-5">
              <h6>Standard tabs</h6>
              <!-- Bootstrap tabs -->
              <div class="tabs-custom tabs-horizontal tabs-line" id="tabs-1">
                <!-- Nav tabs-->
                <ul class="nav nav-tabs">
                  <li class="nav-item" role="presentation"><a class="nav-link active" href="#tabs-1-1" data-bs-toggle="tab">Description</a></li>
                  <li class="nav-item" role="presentation"><a class="nav-link" href="#tabs-1-2" data-bs-toggle="tab">Demands</a></li>
                  <li class="nav-item" role="presentation"><a class="nav-link" href="#tabs-1-3" data-bs-toggle="tab">Conditions</a></li>
                </ul>
                <!-- Tab panes-->
                <div class="tab-content">
                  <div class="tab-pane fade show active" id="tabs-1-1">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  </div>
                  <div class="tab-pane fade" id="tabs-1-2">
                    <ul class="list-marked">
                      <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                      <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                      <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                    </ul>
                  </div>
                  <div class="tab-pane fade" id="tabs-1-3">
                    <ul class="list-marked">
                      <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                      <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                      <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                    </ul>
                  </div>
                </div>
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

<script setup lang='ts'>
  onMounted(async () => {
      loadScriptClient();
  });
</script>
<style lang='scss' scoped>

</style>