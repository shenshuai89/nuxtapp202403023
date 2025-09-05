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
              <h1 class="breadcrumbs-custom-title">Buttons</h1>
            </div>
            <ul class="breadcrumbs-custom-path">
              <li><a href="index.html">Home</a></li>
              <li><a href="#">Pages</a></li>
              <li class="active">Buttons</li>
            </ul>
          </div>
        </div>
      </section>
      <!-- Button Sizes-->
      <section class="section section-sm section-first">
        <div class="container">
          <h6>Button Sizes</h6>
          <div class="group-middle group">
            <div class="button button-lg button-primary button-winona">Large button</div>
            <div class="button button-lg button-primary-outline button-winona">Light Large </div>
          </div>
          <div class="group-middle group">
            <div class="button button-primary button-winona">Medium button</div>
            <div class="button button-primary-outline button-winona">Light Medium</div>
          </div>
          <div class="group-middle group">
            <div class="button button-sm button-primary button-winona">Small button</div>
            <div class="button button-sm button-primary-outline button-winona">Light Small</div>
          </div>
        </div>
      </section>
      <!-- Icon buttons-->
      <section class="section section-sm">
        <div class="container">
          <h6>Icon buttons</h6>
          <div class="group-middle group">
            <div class="button button-icon button-icon-left button-lg button-primary button-winona"
              ><span class="icon mdi mdi-magnify"></span>Search</div
            >
            <div
              class="button button-icon button-icon-left button-lg button-primary-outline button-winona"
              ><span class="icon mdi mdi-magnify"></span>Search
            </div>
          </div>
          <div class="group-middle group">
            <div class="button button-icon button-icon-left button-primary button-winona"
              ><span class="icon mdi mdi-magnify"></span>Search</div
            >
            <div class="button button-icon button-icon-left button-primary-outline button-winona"
              ><span class="icon mdi mdi-magnify"></span>Search</div
            >
          </div>
          <div class="group-middle group">
            <div class="button button-icon button-icon-left button-sm button-primary button-winona"
              ><span class="icon mdi mdi-magnify"></span>Search</div
            >
            <div
              class="button button-icon button-icon-left button-sm button-primary-outline button-winona"
              ><span class="icon mdi mdi-magnify"></span>Search</div
            >
          </div>
        </div>
      </section>
      <!-- Social buttons-->
      <section class="section section-sm section-last">
        <div class="container">
          <h6>Social buttons</h6>
          <div class="group-xs group-middle group"
            ><a class="icon icon-sm icon-creative mdi mdi-facebook" href="#"></a
            ><a class="icon icon-sm icon-creative mdi mdi-twitter" href="#"></a
            ><a class="icon icon-sm icon-creative mdi mdi-instagram" href="#"></a
            ><a class="icon icon-sm icon-creative mdi mdi-google" href="#"></a
            ><a class="icon icon-sm icon-creative mdi mdi-linkedin" href="#"></a
          ></div>
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
