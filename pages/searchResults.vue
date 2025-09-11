<template>
  <div>
    <div class="page">
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
              <h1 class="breadcrumbs-custom-title">Search Results</h1>
            </div>
            <ul class="breadcrumbs-custom-path">
              <li><a href="index.html">Home</a></li>
              <li><a href="#">Pages</a></li>
              <li class="active">Search Results</li>
            </ul>
          </div>
        </div>
      </section>
      <!-- Search results-->
      <section class="section section-lg">
        <div class="container">
          <div class="row">
            <div class="col-lg-11 col-xl-8">
              <!-- RD Search-->
              <form
                class="rd-form rd-search rd-search-classic"
                action="/"
                method="GET"
              >
                <div class="form-wrap">
                  <label class="form-label-outside" for="rd-search-form-input">Search</label>
                  <div class="form-wrap-inner">
                    <input
                      class="form-input"
                      id="rd-search-form-input"
                      type="text"
                      name="s"
                      autocomplete="off"
                    />
                    <button class="rd-search-submit" type="submit" aria-label="Submit"></button>
                  </div>
                </div>
              </form>
              <div class="rd-search-results"></div>
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
