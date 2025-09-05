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
              <h1 class="breadcrumbs-custom-title">Forms</h1>
            </div>
            <ul class="breadcrumbs-custom-path">
              <li><a href="index.html">Home</a></li>
              <li><a href="#">Pages</a></li>
              <li class="active">Forms</li>
            </ul>
          </div>
        </div>
      </section>
      <!-- Newsletter form-->
      <div class="section-sm section-first">
        <div class="container">
          <h6
            ><span data-bs-toggle="modal" data-bs-target="#forms-modal-tip"
              >Newsletter form <span class="tip-mark">?</span></span
            ></h6
          >
        </div>
        <section class="section section-lg bg-gray-100">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-sm-10 col-md-8 col-lg-7 col-xl-6">
                <h3 class="wow-outer text-center"><span class="wow slideInUp">Newsletter</span></h3>
                <p class="wow-outer"
                  ><span class="wow slideInLeft"
                    >Keep up with our always upcoming news and updates. Enter your e-mail and
                    subscribe to our newsletter.</span
                  ></p
                >
                <!-- RD Mailform-->
                <form
                  class="rd-form rd-mailform form-inline wow fadeIn"
                  data-wow-delay=".2s"
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
        </section>
      </div>
      <!-- Small newsletter form-->
      <div class="section-sm">
        <div class="container">
          <h6
            ><span data-bs-toggle="modal" data-bs-target="#forms-modal-tip"
              >Small newsletter form <span class="tip-mark">?</span></span
            ></h6
          >
        </div>
        <section class="section section-md bg-gray-700">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-sm-9 col-md-6 col-lg-5 col-xl-4">
                <h4>Newsletter</h4>
                <p
                  >Sign up to our newsletter and be the first to know about the latest news, special
                  offers, events, and discounts.</p
                >
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
                      id="subscribe-form-4-email"
                      type="email"
                      name="email"
                      data-constraints="@Email @Required"
                    />
                    <label class="form-label" for="subscribe-form-4-email">E-mail</label>
                  </div>
                  <div class="form-button">
                    <button
                      class="button button-primary button-icon button-icon-only button-winona"
                      type="submit"
                      aria-label="submit"
                      ><span class="icon mdi mdi-email-outline"></span
                    ></button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
      <!-- Photo newsletter form-->
      <div class="section-sm">
        <div class="container">
          <h6
            ><span data-bs-toggle="modal" data-bs-target="#forms-modal-tip"
              >Photo newsletter form <span class="tip-mark">?</span></span
            ></h6
          >
        </div>
        <section
          class="section section-lg bg-image bg-image-light"
          style="background-image: url(/assets/images/bg-image-1.jpg)"
        >
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-sm-10 col-md-8 col-lg-7 col-xl-6">
                <h3 class="wow-outer text-center"><span class="wow slideInUp">Newsletter</span></h3>
                <p class="wow-outer"
                  ><span class="wow slideInLeft"
                    >Keep up with our always upcoming news and updates. Enter your e-mail and
                    subscribe to our newsletter.</span
                  ></p
                >
                <!-- RD Mailform-->
                <form
                  class="rd-form rd-mailform form-inline wow fadeIn"
                  data-wow-delay=".2s"
                  data-form-output="form-output-global"
                  data-form-type="subscribe"
                  method="post"
                  action="bat/rd-mailform.php"
                >
                  <div class="form-wrap">
                    <input
                      class="form-input"
                      id="subscribe-form-3-email"
                      type="email"
                      name="email"
                      data-constraints="@Email @Required"
                    />
                    <label class="form-label" for="subscribe-form-3-email">Your e-mail</label>
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
        </section>
      </div>
      <!-- Map & contact form-->
      <div class="section-sm">
        <div class="container">
          <h6>Map & contact form </h6>
        </div>
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
            <div class="cell-xl-5 height-fill wow fadeIn">
              <section class="section">
                <div class="google-map-container"
                  ><iframe
                    src="https://www.amap.com/"
                    width="100%"
                    height="100%"
                    frameborder="0"
                    style="border: 0"
                    sandbox=""
                  ></iframe
                ></div>
              </section>
            </div>
          </div>
        </section>
      </div>
      <!-- Map & contact form with reCAPTCHA-->
      <div class="section-sm">
        <div class="container">
          <h6>Map & contact form with reCAPTCHA</h6>
        </div>
        <section class="section bg-gray-100">
          <div class="range justify-content-xl-between">
            <div class="cell-xl-6 align-self-center container">
              <div class="row">
                <div class="col-lg-9 cell-inner">
                  <div class="section-lg">
                    <h3>Contact Us</h3>
                    <!-- RD Mailform-->
                    <form
                      class="rd-form rd-mailform"
                      data-form-output="form-output-global"
                      data-form-type="contact"
                      method="post"
                      action="bat/rd-mailform.php"
                    >
                      <div class="row row-10">
                        <div class="col-md-6">
                          <div class="form-wrap">
                            <label class="form-label-outside" for="contact-2-first-name"
                              >First Name</label
                            >
                            <input
                              class="form-input"
                              id="contact-2-first-name"
                              type="text"
                              name="name"
                              data-constraints="@Required"
                            />
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-wrap">
                            <label class="form-label-outside" for="contact-2-last-name"
                              >Last Name</label
                            >
                            <input
                              class="form-input"
                              id="contact-2-last-name"
                              type="text"
                              name="name"
                              data-constraints="@Required"
                            />
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-wrap">
                            <label class="form-label-outside" for="contact-2-email">E-mail</label>
                            <input
                              class="form-input"
                              id="contact-2-email"
                              type="email"
                              name="email"
                              data-constraints="@Email @Required"
                            />
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-wrap">
                            <label class="form-label-outside" for="contact-2-phone">Phone</label>
                            <input
                              class="form-input"
                              id="contact-2-phone"
                              type="text"
                              name="phone"
                              data-constraints="@PhoneNumber"
                            />
                          </div>
                        </div>
                        <div class="col-12">
                          <div class="form-wrap">
                            <label class="form-label-outside" for="contact-2-message"
                              >Your Message</label
                            >
                            <textarea
                              class="form-input"
                              id="contact-2-message"
                              name="message"
                              data-constraints="@Required"
                            ></textarea>
                          </div>
                        </div>
                      </div>
                      <!-- Google captcha-->
                      <div class="form-wrap form-validation-left text-start">
                        <div
                          class="recaptcha"
                          id="captcha1"
                          data-sitekey="6LfZlSETAAAAAC5VW4R4tQP8Am_to4bM3dddxkEt"
                        ></div>
                      </div>
                      <div class="group-middle group">
                        <button class="button button-primary button-winona" type="submit"
                          >Send Message</button
                        >
                        <p>or use</p>
                        <button
                          class="button button-primary-outline button-icon button-icon-left button-winona"
                          ><span class="icon mdi mdi-facebook-messenger"></span>Messenger</button
                        >
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div class="cell-xl-5 height-fill">
              <section class="section">
                <div class="google-map-container"
                  ><iframe
                    src="https://www.amap.com/"
                    width="100%"
                    height="100%"
                    frameborder="0"
                    style="border: 0"
                    sandbox=""
                  ></iframe
                ></div>
              </section>
            </div>
          </div>
        </section>
      </div>
      <!-- Login form-->
      <div class="section-sm">
        <div class="container">
          <h6>Login form</h6>
        </div>
        <section class="section section-md bg-gray-700">
          <div class="container">
            <div class="box-1">
              <h4>Sign In</h4>
              <form class="rd-form rd-form-small">
                <div class="form-wrap">
                  <input
                    class="form-input"
                    id="login-email"
                    type="email"
                    name="email"
                    data-constraints="@Email @Required"
                  />
                  <label class="form-label" for="login-email">E-mail</label>
                </div>
                <div class="form-wrap">
                  <input
                    class="form-input"
                    id="login-password"
                    type="password"
                    name="password"
                    data-constraints="@Required"
                  />
                  <label class="form-label" for="login-password">Password</label>
                </div>
                <div class="form-wrap">
                  <button class="button button-primary button-winona" type="submit">Sign in</button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
      <!-- Registration form-->
      <div class="section-sm section-last">
        <div class="container">
          <h6>Registration form</h6>
        </div>
        <section class="section section-md bg-gray-700">
          <div class="container">
            <div class="box-1">
              <h4>Registration</h4>
              <form class="rd-form rd-form-small">
                <div class="form-wrap">
                  <input
                    class="form-input"
                    id="register-name"
                    type="text"
                    name="username"
                    data-constraints="@Required"
                  />
                  <label class="form-label" for="register-name">Username</label>
                </div>
                <div class="form-wrap">
                  <input
                    class="form-input"
                    id="register-email"
                    type="email"
                    name="email"
                    data-constraints="@Email @Required"
                  />
                  <label class="form-label" for="register-email">E-mail</label>
                </div>
                <div class="form-wrap">
                  <input
                    class="form-input"
                    id="register-password"
                    type="password"
                    name="password"
                    data-constraints="@Required"
                  />
                  <label class="form-label" for="register-password">Password</label>
                </div>
                <div class="form-wrap">
                  <input
                    class="form-input"
                    id="register-password-2"
                    type="password"
                    name="password"
                    data-constraints="@Required"
                  />
                  <label class="form-label" for="register-password-2">Confirm Password</label>
                </div>
                <div class="form-wrap">
                  <button class="button button-block button-primary button-winona" type="submit"
                    >Create an Account</button
                  >
                </div>
                <div class="form-wrap">
                  <div class="text-decoration-lines"
                    ><span class="text-decoration-lines-content">or enter with</span></div
                  >
                </div>
                <div class="form-wrap">
                  <div class="button-group">
                    <a
                      class="button button-facebook button-icon button-icon-only button-winona"
                      href="#"
                      aria-label="Facebook"
                      ><span class="icon mdi mdi mdi-facebook"></span></a
                    ><a
                      class="button button-twitter button-icon button-icon-only button-winona"
                      href="#"
                      aria-label="Twitter"
                      ><span class="icon mdi mdi-twitter"></span></a
                    ><a
                      class="button button-google button-icon button-icon-only button-winona"
                      href="#"
                      aria-label="Google+"
                      ><span class="icon mdi mdi-google"></span></a
                  ></div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
      <div class="modal fade" id="forms-modal-tip">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h6>Subscribe form tip</h6>
              <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"
                ><span aria-hidden="true"></span
              ></button>
            </div>
            <div class="modal-body">
              <p>Subscribe form works as an e-mail newsletter.</p>
              <p
                >To activate such form with an enabled <strong>MailChimp</strong> service, replace
                the <code>.rd-mailform</code> class with <code>.mailchimp-mailform</code> and the
                form's action with MailChimp subscription URL.</p
              >
              <p
                >To activate the <strong>Campaign Monitor</strong> service, you need to replace the
                form’s [#code.rd-mailform] class with <code>.campaign-mailform</code> and copy the
                form's action and the name of the input field from the form generated by Campaign
                Monitor service.</p
              >
            </div>
          </div>
        </div>
      </div>
      <!-- Page Footer-->
      <nav-footer></nav-footer>
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
