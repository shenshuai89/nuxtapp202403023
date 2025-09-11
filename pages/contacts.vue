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
              <h6 class="breadcrumbs-custom-subtitle title-decorated">Contacts</h6>
              <h1 class="breadcrumbs-custom-title">Contacts</h1>
            </div>
            <ul class="breadcrumbs-custom-path">
              <li><a href="/">Home</a></li>
              <li class="active">Contacts</li>
            </ul>
          </div>
        </div>
      </section>
      <section class="section section-sm">
        <div class="container">
          <div class="layout-bordered">
            <div class="layout-bordered-item wow-outer">
              <div class="layout-bordered-item-inner wow slideInUp">
                <div class="icon icon-lg mdi mdi-phone text-primary"></div>
                <ul class="list-0">
                  <li><a class="link-default" href="tel:#">1-800-1234-678</a></li>
                  <li><a class="link-default" href="tel:#">1-800-9876-098</a></li>
                </ul>
              </div>
            </div>
            <div class="layout-bordered-item wow-outer">
              <div class="layout-bordered-item-inner wow slideInUp">
                <div class="icon icon-lg mdi mdi-email text-primary"></div
                ><a class="link-default" href="mailto:#">info@demolink.org</a>
              </div>
            </div>
            <div class="layout-bordered-item wow-outer">
              <div class="layout-bordered-item-inner wow slideInUp">
                <div class="icon icon-lg mdi mdi-map-marker text-primary"></div
                ><a class="link-default" href="#"
                  >2130 Fulton Street San Diego, CA 94117-1080 USA</a
                >
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="section bg-gray-100">
        <div class="range justify-content-xl-between">
          <div class="cell-xl-6 align-self-center container">
            <div class="row">
              <div class="col-lg-9 cell-inner">
                <div class="section-lg">
                  <h3 class="wow-outer"><span class="wow slideInDown">Contact Us 1</span></h3>
                  <!-- RD Mailform-->
                  <form
                    class="rd-form rd-mailform"
                    data-form-output="form-output-global"
                    data-form-type="contact"
                    method="post"
                    action="bat/rd-mailform.php"
                  >
                    <div class="row row-10">
                      <div class="col-md-6 wow-outer">
                        <div class="form-wrap wow fadeSlideInUp">
                          <label class="form-label-outside" for="contact-first-name"
                            >First Name</label
                          >
                          <input
                            class="form-input"
                            id="contact-first-name"
                            type="text"
                            name="name"
                            data-constraints="@Required"
                          />
                        </div>
                      </div>
                      <div class="col-md-6 wow-outer">
                        <div class="form-wrap wow fadeSlideInUp">
                          <label class="form-label-outside" for="contact-last-name"
                            >Last Name</label
                          >
                          <input
                            class="form-input"
                            id="contact-last-name"
                            type="text"
                            name="name"
                            data-constraints="@Required"
                          />
                        </div>
                      </div>
                      <div class="col-md-6 wow-outer">
                        <div class="form-wrap wow fadeSlideInUp">
                          <label class="form-label-outside" for="contact-email">E-mail</label>
                          <input
                            class="form-input"
                            id="contact-email"
                            type="email"
                            name="email"
                            data-constraints="@Email @Required"
                          />
                        </div>
                      </div>
                      <div class="col-md-6 wow-outer">
                        <div class="form-wrap wow fadeSlideInUp">
                          <label class="form-label-outside" for="contact-phone">Phone</label>
                          <input
                            class="form-input"
                            id="contact-phone"
                            type="text"
                            name="phone"
                            data-constraints="@PhoneNumber"
                          />
                        </div>
                      </div>
                      <div class="col-12 wow-outer">
                        <div class="form-wrap wow fadeSlideInUp">
                          <label class="form-label-outside" for="contact-message"
                            >Your Message</label
                          >
                          <textarea
                            class="form-input"
                            id="contact-message"
                            name="message"
                            data-constraints="@Required"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                    <div class="group-middle group">
                      <div class="wow-outer">
                        <button
                          class="button button-primary button-winona wow slideInRight"
                          type="submit"
                          >Send Message</button
                        >
                      </div>
                      <p>or use</p>
                      <div class="wow-outer"
                        ><a
                          class="button button-primary-outline button-icon button-icon-left button-winona wow slideInLeft"
                          href="#"
                          ><span class="icon mdi mdi-facebook-messenger"></span>Messenger</a
                        ></div
                      >
                    </div>
                  </form>
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

<script setup lang="ts">
  onMounted(async () => {
    loadScriptClient();
  });
</script>
<style lang="scss" scoped></style>
