<template>
  <div>
    <div class="page">
      <!-- Page content-->
      <section
        class="section section-single bg-overlay-1 bg-gray-800"
        style="background-image: url(/assets/images/bg-image-5.jpg)"
      >
        <div class="section-single-inner">
          <div class="section-single-dummy"></div>
          <div class="section-single-main">
            <div class="container">
              <div class="row row-30">
                <div class="col-sm-6 text-sm-start text-center">
                  <p class="text-extra-large">404</p>
                </div>
                <div class="col-sm-6">
                  <div class="section-single-main-content">
                    <h6 class="title-decorated title-decorated-lg">Page was not found</h6>
                    <p
                      ><span class="text-width-2"
                        >You may have mistyped the address or the page may have moved.</span
                      ></p
                    ><a class="button button-lg button-primary button-winona" href="/"
                      >Back to home page</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="footer-minimal section-single-footer">
            <div class="container">
              <div class="footer-minimal-inner"
                ><a class="brand" href="/">
                  <img
                    src="/assets/images/logo-inverse-109x27.png"
                    alt=""
                    width="109"
                    height="27"
                    srcset="/assets/images/logo-inverse-109x27.png 2x"
                /></a>
                <!-- Rights-->
                <p class="rights"
                  ><span>&copy;&nbsp;</span><span class="copyright-year"></span><span>&nbsp;</span
                  ><span>All Rights Reserved.</span><span>&nbsp;</span><br class="d-sm-none" /><a
                    class="link-default"
                    href="/privacyPolicy"
                    >Privacy Policy</a
                  >
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
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
