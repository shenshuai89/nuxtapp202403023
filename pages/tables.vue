<template>
  <div>
    <div class="page">
      <nav-header />
      <!-- Breadcrumbs -->
      <section class="breadcrumbs-custom bg-image context-dark bg-overlay" style="background-image: url(/assets/images/breadcrumbs-image-1.jpg);">
        <div class="breadcrumbs-custom-inner">
          <div class="container breadcrumbs-custom-container">
            <div class="breadcrumbs-custom-main">
              <h6 class="breadcrumbs-custom-subtitle title-decorated">Pages</h6>
              <h1 class="breadcrumbs-custom-title">Tables</h1>
            </div>
            <ul class="breadcrumbs-custom-path">
              <li><a href="index.html">Home</a></li>
              <li><a href="#">Pages</a></li>
              <li class="active">Tables</li>
            </ul>
          </div>
        </div>
      </section>
      <section class="section section-lg text-center">
        <div class="container">
          <h3 class="wow-outer"><span class="wow slideInUp">Latest Job Positions</span></h3>
          <p class="wow-outer"><span class="text-width-1 wow slideInDown">Browse the recent vacancies added by companies from all over the USA. Our database is updated every hour with hundreds of new job positions, which might interest you.</span></p>
          <div class="table-responsive wow fadeIn">
            <table class="table table-hover table-job-positions">
              <thead>
                <tr>
                  <th></th>
                  <th>Date</th>
                  <th>Company</th>
                  <th>Job Vacancy</th>
                  <th>City</th>
                  <th>Salary</th>
                  <th>Employment</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                  <td>
                    <time datetime="2022">Apr 27, 2017</time>
                  </td>
                  <td><img src="/assets/images/logo-john-brad-72x48.png" alt="" width="72" height="48"/>
                  </td>
                  <td class="position">Interior Designer</td>
                  <td>New York</td>
                  <td>$6000</td>
                  <td>Full Time </td>
                </tr>
                <tr>
                  <td><span class="icon icon-md text-danger mdi mdi-fire"></span></td>
                  <td>
                    <time datetime="2022">Apr 27, 2017</time>
                  </td>
                  <td><img src="/assets/images/logo-the-oldbrand-62x48.png" alt="" width="62" height="48"/>
                  </td>
                  <td class="position">Project Architect</td>
                  <td>San Francisco</td>
                  <td>$5500</td>
                  <td>Full Time</td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    <time datetime="2022">Apr 27, 2017</time>
                  </td>
                  <td><img src="/assets/images/logo-havana-cabana-72x48.png" alt="" width="72" height="48"/>
                  </td>
                  <td class="position">3D Modeler</td>
                  <td>Chicago</td>
                  <td>$6000</td>
                  <td>Full Time</td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    <time datetime="2022">Apr 27, 2017</time>
                  </td>
                  <td><img src="/assets/images/logo-john-brad-72x48.png" alt="" width="72" height="48"/>
                  </td>
                  <td class="position">Project Manager</td>
                  <td>New York</td>
                  <td>$4000</td>
                  <td>Full Time</td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    <time datetime="2022">Apr 27, 2017</time>
                  </td>
                  <td><img src="/assets/images/logo-the-oldbrand-62x48.png" alt="" width="62" height="48"/>
                  </td>
                  <td class="position">Landscape/Exterior Designer</td>
                  <td>Boston</td>
                  <td>$5500</td>
                  <td>Full Time</td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    <time datetime="2022">Apr 27, 2017</time>
                  </td>
                  <td><img src="/assets/images/logo-john-brad-72x48.png" alt="" width="72" height="48"/>
                  </td>
                  <td class="position">Office Manager</td>
                  <td>San Diego</td>
                  <td>$6000</td>
                  <td>Full Time</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="wow-outer button-outer"><a class="btn-media-size button button-md button-primary-outline button-winona wow slideInUp" href="careers.html">View all Job Positions</a></div>
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