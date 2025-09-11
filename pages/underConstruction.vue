<template>
  <div>
    <div class="page">
      <!-- Page content-->
      <section
        class="section section-single bg-overlay bg-gray-800"
        style="background-image: url(/assets/images/bg-image-3.jpg)"
      >
        <div class="section-single-inner">
          <div class="section-single-dummy"></div>
          <div class="section-single-main">
            <div class="container">
              <div class="row row-30 justify-content-center justify-content-sm-start">
                <div class="col-sm-10 col-md-9 col-lg-7 col-xl-6">
                  <h6 class="title-decorated title-decorated-lg"
                    >We're getting ready to launch soon</h6
                  >
                  <p
                    >We are terribly sorry, but our website is currently unavailable and is closed
                    for maintenance. If you would like to be instantly notified about resumption of
                    the website operation, leave us your e-mail address, and we will inform you when
                    our website will be available again.</p
                  >
                  <div class="rd-mailform-wrap">
                    <!-- RD Mailform-->
                    <form
                      class="rd-form rd-mailform form-inline"
                      data-form-output="form-output-global"
                      data-form-type="subscribe"
                      method="post"
                      action="bat/rd-mailform.php"
                    >
                      <div class="form-wrap">
                        <input
                          class="form-input"
                          id="subscribe-form-1-email"
                          type="email"
                          name="email"
                          data-constraints="@Email @Required"
                        />
                        <label class="form-label" for="subscribe-form-1-email">Your e-mail</label>
                      </div>
                      <div class="form-button">
                        <button class="button button-primary button-winona" type="submit"
                          >Subscribe</button
                        >
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="footer-minimal section-single-footer">
            <div class="container">
              <div class="footer-minimal-inner"
                ><a class="brand" href="/"
                  ><img
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
