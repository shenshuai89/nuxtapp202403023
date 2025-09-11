<template>
  <header class="section page-header">
    <!-- RD Navbar-->
    <div class="rd-navbar-wrap">
      <nav
        class="rd-navbar rd-navbar-minimal"
        data-layout="rd-navbar-fixed"
        data-sm-layout="rd-navbar-fixed"
        data-md-layout="rd-navbar-fixed"
        data-md-device-layout="rd-navbar-fixed"
        data-lg-layout="rd-navbar-static"
        data-lg-device-layout="rd-navbar-fixed"
        data-xl-layout="rd-navbar-static"
        data-xl-device-layout="rd-navbar-static"
        data-xxl-layout="rd-navbar-static"
        data-xxl-device-layout="rd-navbar-static"
        data-lg-stick-up-offset="46px"
        data-xl-stick-up-offset="46px"
        data-xxl-stick-up-offset="46px"
        data-lg-stick-up="true"
        data-xl-stick-up="true"
        data-xxl-stick-up="true"
      >
        <div class="rd-navbar-main-outer">
          <div class="rd-navbar-main">
            <!-- RD Navbar Panel-->
            <div class="rd-navbar-panel">
              <!-- RD Navbar Toggle-->
              <button class="rd-navbar-toggle" data-rd-navbar-toggle="#rd-navbar-nav-wrap-1"
                ><span></span
              ></button>
              <!-- RD Navbar Brand--><a class="rd-navbar-brand" href="/"
                ><img
                  src="/assets/images/logo-default-109x27.png"
                  alt=""
                  width="109"
                  height="27"
                  srcset="/assets/images/logo-default-109x27.png 2x"
              /></a>
            </div>
            <div class="rd-navbar-main-element">
              <div class="rd-navbar-nav-wrap" id="rd-navbar-nav-wrap-1">
                <!-- RD Navbar Nav-->
                <ul class="rd-navbar-nav">
                  <li class="rd-nav-item" :class="{ active: $route.path == '/' }"
                    ><a class="rd-nav-link" href="/">Home</a>
                  </li>
                  <li class="rd-nav-item" :class="{ active: $route.path == '/aboutUs' }"
                    ><a class="rd-nav-link" href="/aboutUs">About us</a>
                  </li>
                  <li
                    class="rd-nav-item"
                    :class="{
                      active: $route.path == '/projects' || $route.path == '/singleProject',
                    }"
                    ><a class="rd-nav-link" href="/projects">Projects</a>
                    <!-- RD Navbar Dropdown-->
                    <ul class="rd-menu rd-navbar-dropdown">
                      <li class="rd-dropdown-item"
                        ><a class="rd-dropdown-link" href="/singleProject">Single Project</a></li
                      >
                    </ul>
                  </li>
                  <li
                    class="rd-nav-item"
                    :class="{
                      active: $route.path == '/services' || $route.path == '/singleService',
                    }"
                    ><a class="rd-nav-link" href="/services">Services</a>
                    <!-- RD Navbar Dropdown-->
                    <ul class="rd-menu rd-navbar-dropdown">
                      <li class="rd-dropdown-item"
                        ><a class="rd-dropdown-link" href="/singleService">Single Service</a></li
                      >
                    </ul>
                  </li>
                  <li class="rd-nav-item"
                    :class="{ active: $route.path == '/sidebarBlog' || $route.path == '/singleBlogPost' }"
                    ><a class="rd-nav-link" href="/sidebarBlog">Blog</a>
                    <!-- RD Navbar Dropdown-->
                    <ul class="rd-menu rd-navbar-dropdown">
                      <li class="rd-dropdown-item"
                        ><a class="rd-dropdown-link" href="/singleBlogPost">Single Blog Post</a></li
                      >
                      <li class="rd-dropdown-item"
                        ><a class="rd-dropdown-link" href="/sidebarBlog">Sidebar Blog</a></li
                      >
                    </ul>
                  </li>
                  <li class="rd-nav-item"
                    ><a class="rd-nav-link" href="#">Pages</a>
                    <!-- RD Navbar Megamenu-->
                    <ul class="rd-menu rd-navbar-megamenu">
                      <li class="rd-megamenu-item">
                        <ul class="rd-megamenu-list">
                          <li class="rd-megamenu-list-item"
                            ><a class="rd-megamenu-list-link" href="/typography"
                              >Typography</a
                            ></li
                          >
                          <li class="rd-megamenu-list-item"
                            ><a class="rd-megamenu-list-link" href="/buttons">Buttons</a></li
                          >
                          <li class="rd-megamenu-list-item"
                            ><a class="rd-megamenu-list-link" href="/forms">Forms</a></li
                          >
                          <li class="rd-megamenu-list-item"
                            ><a class="rd-megamenu-list-link" href="/progressBars"
                              >Progress bars</a
                            ></li
                          >
                          <li class="rd-megamenu-list-item"
                            ><a class="rd-megamenu-list-link" href="/tabs">Tabs</a></li
                          >
                          <li class="rd-megamenu-list-item"
                            ><a class="rd-megamenu-list-link" href="/tables">Tables</a></li
                          >
                          <li class="rd-megamenu-list-item"
                            ><a class="rd-megamenu-list-link" href="/accordions"
                              >Accordions</a
                            ></li
                          >
                        </ul>
                      </li>
                      <li class="rd-megamenu-item">
                        <ul class="rd-megamenu-list">
                          <li class="rd-megamenu-list-item"
                            ><a class="rd-megamenu-list-link" href="404page">404 Page</a></li
                          >
                          <li class="rd-megamenu-list-item"
                            ><a class="rd-megamenu-list-link" href="503page">503 Page</a></li
                          >
                          <li class="rd-megamenu-list-item"
                            ><a class="rd-megamenu-list-link" href="/comingSoon"
                              >Coming Soon</a
                            ></li
                          >
                          <li class="rd-megamenu-list-item"
                            ><a class="rd-megamenu-list-link" href="/testimonials"
                              >Testimonials</a
                            ></li
                          >
                          <li class="rd-megamenu-list-item"
                            ><a class="rd-megamenu-list-link" href="/underConstruction"
                              >Under Construction</a
                            ></li
                          >
                          <li class="rd-megamenu-list-item"
                            ><a class="rd-megamenu-list-link" href="/searchSesults"
                              >Search results</a
                            ></li
                          >
                          <li class="rd-megamenu-list-item"
                            ><a class="rd-megamenu-list-link" href="/privacyPolicy"
                              >Privacy policy</a
                            ></li
                          >
                        </ul>
                      </li>
                      <li class="rd-megamenu-item">
                        <ul class="rd-megamenu-list">
                          <li class="rd-megamenu-list-item"
                            ><a class="rd-megamenu-list-link" href="/careers">Careers</a></li
                          >
                          <li class="rd-megamenu-list-item"
                            ><a class="rd-megamenu-list-link" href="/services">Services</a></li
                          >
                          <li class="rd-megamenu-list-item"
                            ><a class="rd-megamenu-list-link" href="/singleJob"
                              >Single Job</a
                            ></li
                          >
                          <li class="rd-megamenu-list-item"
                            ><a class="rd-megamenu-list-link" href="/pricing">Pricing</a></li
                          >
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li class="rd-nav-item"
                    ><a class="rd-nav-link" href="/contacts">Contacts</a>
                  </li>
                </ul>
              </div>
              <!-- RD Navbar Search-->
              <div class="rd-navbar-search" id="rd-navbar-search-1">
                <button
                  class="rd-navbar-search-toggle rd-navbar-fixed-element-2"
                  data-rd-navbar-toggle="#rd-navbar-search-1"
                  ><span></span
                ></button>
                <form
                  class="rd-search"
                  action="/searchResults"
                  data-search-live="rd-search-results-live-1"
                  method="GET"
                >
                  <div class="form-wrap">
                    <label class="form-label" for="rd-navbar-search-form-input-1">Search...</label>
                    <input
                      class="form-input rd-navbar-search-form-input"
                      id="rd-navbar-search-form-input-1"
                      type="text"
                      name="s"
                      autocomplete="off"
                    />
                    <div class="rd-search-results-live" id="rd-search-results-live-1"></div>
                  </div>
                  <button class="rd-search-form-submit fa-search" type="submit"></button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>
