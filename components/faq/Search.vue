<template>
    <div>
      <br>
      <br>
      <br>
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
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>