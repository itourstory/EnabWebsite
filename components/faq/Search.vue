<template>
  <div>
    <section
      class="slice slice-lg py-7 pt-lg-9 pb-lg-7 bg-cover bg-size--cover"
      style="background-image: url(/images/img-1.jpg)"
    >
      <!-- Mask -->
      <span class="mask bg-gradient-primary opacity-9"></span>
      <!-- Container -->
      <div class="container pt-xl-6">
        <div class="row justify-content-center">
          <div class="col-lg-9">
            <h2 class="mb-4 text-center text-white">كيف يمكن أن نساعد ؟</h2>
            <form>
              <div
                class="form-group bg-neutral rounded-pill mb-0 px-2 py-2 shadow"
              >
                <div class="row">
                  <div class="col">
                    <div class="input-group input-group-merge shadow-none">
                      <div class="input-group-prepend">
                        <span class="input-group-text bg-transparent border-0"
                          ><svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="feather feather-search"
                          >
                            <circle cx="11" cy="11" r="8"></circle>
                            <line
                              x1="21"
                              y1="21"
                              x2="16.65"
                              y2="16.65"
                            ></line></svg
                        ></span>
                      </div>
                      <input
                        type="text"
                        class="form-control form-control-flush shadow-none"
                        placeholder="البحث عن إجابات ..."
                      />
                    </div>
                  </div>
                  <div class="col-auto">
                    <button
                      type="button"
                      class="btn btn-block btn-warning rounded-pill"
                    >
                      بحث
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="container position-relative zindex-100">
        <div class="my-5 text-center">
          <h6 class="text-white font-weight-light mb-0">
            اختر فئة للعثور بسرعة على الإجابة التي تريدها
          </h6>
        </div>
        <!-- Categories -->
        <div class="row justify-content-center">
          <div class="col-lg-9 col-xl-12">
            <div class="row">
              <div class="col-xl-3 col-lg-6 mb-xl-n8">
                <div class="card hover-translate-y-n10 hover-shadow-lg">
                  <div class="card-body p-5 text-center">
                    <div class="pb-4">
                      <img
                        alt="Image placeholder"
                        src="/images/product.svg"
                        class="svg-inject img-fluid"
                        style="height: 40px"
                      />
                    </div>
                    <div class="pt-2">
                      <a href="#" class="h6 stretched-link mb-0"
                        >المنتجات والخدمات
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-lg-6 mb-xl-n8">
                <div class="card hover-translate-y-n10 hover-shadow-lg">
                  <div class="card-body p-5 text-center">
                    <div class="pb-4">
                      <img
                        alt="Image placeholder"
                        src="/images/accunts.svg"
                        class="svg-inject img-fluid"
                        style="height: 40px"
                      />
                    </div>
                    <div class="pt-2">
                      <a href="#" class="h6 stretched-link mb-0">الحساب</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-lg-6 mb-xl-n8">
                <div class="card hover-translate-y-n10 hover-shadow-lg">
                  <div class="card-body p-5 text-center">
                    <div class="pb-4">
                      <img
                        alt="Image placeholder"
                        src="/images/card.svg"
                        class="svg-inject img-fluid"
                        style="height: 40px"
                      />
                    </div>
                    <div class="pt-2">
                      <a href="#" class="h6 stretched-link mb-0">الدفع</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-lg-6 mb-xl-n8">
                <div class="card hover-translate-y-n10 hover-shadow-lg">
                  <div class="card-body p-5 text-center">
                    <div class="pb-4">
                      <img
                        alt="Image placeholder"
                        src="/images/security.svg"
                        class="svg-inject img-fluid"
                        style="height: 40px"
                      />
                    </div>
                    <div class="pt-2">
                      <a href="#" class="h6 stretched-link mb-0">الامان </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- SVG Separator -->
      <div class="shape-container shape-position-bottom">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
        >
          <path
            d="M 0 0 c 0 0 200 50 500 50 s 500 -50 500 -50 v 101 h -1000 v -100 z"
          ></path>
        </svg>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>