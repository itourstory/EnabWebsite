<template>
  <div>
    <section class="slice slice-lg" id="sct-faq">
      <div class="container">
        <div class="row row-grid">
          <div class="col-lg-3">
            <!-- Side menu -->
            <div data-toggle="sticky" data-sticky-offset="50">
              <div class="card">
                <div class="list-group list-group-flush">
                  <a
                    href="#theme-integration"
                    data-scroll-to=""
                    data-scroll-to-offset="50"
                    class="
                      list-group-item list-group-item-action
                      d-flex
                      justify-content-between
                    "
                  >
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-layout mr-2"
                      >
                        <rect
                          x="3"
                          y="3"
                          width="18"
                          height="18"
                          rx="2"
                          ry="2"
                        ></rect>
                        <line x1="3" y1="9" x2="21" y2="9"></line>
                        <line x1="9" y1="21" x2="9" y2="9"></line>
                      </svg>
                      <span>الاسئلة الشائعة</span>
                    </div>
                  </a>
                  <a
                    href="#customization"
                    data-scroll-to=""
                    data-scroll-to-offset="50"
                    class="
                      list-group-item list-group-item-action
                      d-flex
                      justify-content-between
                    "
                  >
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-sliders mr-2"
                      >
                        <line x1="4" y1="21" x2="4" y2="14"></line>
                        <line x1="4" y1="10" x2="4" y2="3"></line>
                        <line x1="12" y1="21" x2="12" y2="12"></line>
                        <line x1="12" y1="8" x2="12" y2="3"></line>
                        <line x1="20" y1="21" x2="20" y2="16"></line>
                        <line x1="20" y1="12" x2="20" y2="3"></line>
                        <line x1="1" y1="14" x2="7" y2="14"></line>
                        <line x1="9" y1="8" x2="15" y2="8"></line>
                        <line x1="17" y1="16" x2="23" y2="16"></line>
                      </svg>
                      <span>الخدمات والمنتجات</span>
                    </div>
                    
                  </a>
                  <a
                    href="#fonts-and-colors"
                    data-scroll-to=""
                    data-scroll-to-offset="50"
                    class="
                      list-group-item list-group-item-action
                      d-flex
                      justify-content-between
                    "
                  >
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-edit-3 mr-2"
                      >
                        <path d="M12 20h9"></path>
                        <path
                          d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"
                        ></path>
                      </svg>
                      <span>الاسئلة المميزة </span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-8 ml-lg-aut  o">
            <!-- Theme integration -->
            <div class="mb-5">
              <h4 class="mb-4 text-right" id="theme-integration">الاسئلة الشائعة</h4>
              <!-- Accordion -->
              <div id="accordion-1" class="accordion accordion-spaced">
                <!-- Accordion card 2 -->
                <div class="card">
                  <b-div
                    v-b-toggle="'collapse-2'"
                    class="card-header py-4"
                    id="heading-1-2"
                    role="button"
                    aria-expanded="false"
                    aria-controls="collapse-1-2"
                  >
                    <h6 class="mb-0 text-right mr-4">
                      السوال الاول 
                    </h6>
                  </b-div>
                  <b-collapse
                    id="collapse-2"
                  >
                    <b-div class="" >
                      <p class="text-right mr-4 my-2">
                        حسن حازم ياحلو
                      </p>
                    </b-div>
                  </b-collapse>
                </div>
                <!-- Accordion card 3 -->
                
              </div>
              <!-- Scroll to top -->
              <div class="text-right py-4">
                <a
                  href="#theme-integration"
                  data-scroll-to=""
                  data-scroll-to-offset="50"
                  class="text-sm font-weight-bold"
                  >Back to top<svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-chevron-up ml-2"
                  >
                    <polyline points="18 15 12 9 6 15"></polyline></svg
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>