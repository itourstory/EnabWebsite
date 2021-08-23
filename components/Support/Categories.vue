<template>
  <div class="mt-7">
    <div class="row mx-lg-n4">
      <!-- Get Started -->
          <div v-for="category in categories" :key="category.id"  class="col-lg-4 col-md-6 px-lg-4">
            <nuxt-link to="/support">
              <div class="bg-primary m-3 rounded-pill p-3 d-flex hover-scale-110">
                <div class="icon icon-shape rounded-circle bg-dark text-white ml-4">
                  <i class="fas fa-life-ring"></i>
                </div>
                <div>
                  <span class="h5 text-light">{{category.name}}</span>
                  <p class="text-sm text-muted mb-0">{{category.descr}}</p>
                </div>
              </div>
            </nuxt-link>
          </div>
      <!-- Account & Profile -->
      <!-- <div class="col-lg-4 col-md-6 px-lg-4">
        <nuxt-link to="/support">
          <div class="bg-primary m-3 rounded-pill p-3 d-flex hover-scale-110">
            <div class="icon icon-shape rounded-circle bg-dark text-white ml-4">
              <i class="fas fa-user"></i>
            </div>
            <div>
              <span class="h5 text-light">الحساب</span>
              <p class="text-sm text-muted mb-0">الحساب والملف الشخصي</p>
            </div>
          </div>
        </nuxt-link>
      </div> -->
      <!-- Privacy & Security -->
      <!-- <div class="col-lg-4 col-md-6 px-lg-4">
        <nuxt-link to="/support">
          <div class="bg-primary m-3 rounded-pill p-3 d-flex hover-scale-110">
            <div class="icon icon-shape rounded-circle bg-dark text-white ml-4">
              <i class="fas fa-shield-alt"></i>
            </div>
            <div>
              <span class="h5 text-light">الخصوصية والأمان</span>
              <p class="text-sm text-muted mb-0">الخصوصية والأمان</p>
            </div>
          </div>
        </nuxt-link>
      </div> -->
      <!-- Services -->
      <!-- <div class="col-lg-4 col-md-6 px-lg-4">
        <nuxt-link to="/support">
          <div class="bg-primary m-3 rounded-pill p-3 d-flex hover-scale-110">
            <div class="icon icon-shape rounded-circle bg-dark text-white ml-4">
              <i class="fas fa-cubes"></i>
            </div>
            <div>
              <span class="h5 text-light">الخدمات</span>
              <p class="text-sm text-muted mb-0">الخدمات</p>
            </div>
          </div>
        </nuxt-link>
      </div> -->
      <!-- Payments -->
      <!-- <div class="col-lg-4 col-md-6 px-lg-4">
        <nuxt-link to="/support">
          <div class="bg-primary m-3 rounded-pill p-3 d-flex hover-scale-110">
            <div class="icon icon-shape rounded-circle bg-dark text-white ml-4">
              <i class="fas fa-money-bill-alt"></i>
            </div>
            <div>
              <span class="h5 text-light">الدفع وطرق الدفع</span>
              <p class="text-sm text-muted mb-0">الدفع وطرق الدفع</p>
            </div>
          </div>
        </nuxt-link>
      </div> -->
      <!-- Technical Issues -->
      <!-- <div class="col-lg-4 col-md-6 px-lg-4">
        <nuxt-link to="/support">
          <div class="bg-primary m-3 rounded-pill p-3 d-flex hover-scale-110">
            <div class="icon icon-shape rounded-circle bg-dark text-white ml-4">
              <i class="fas fa-exclamation-triangle"></i>
            </div>
            <div>
              <span class="h5 text-light">المشاكل التقنية</span>
              <p class="text-sm text-muted mb-0">المشاكل التقنية</p>
            </div>
          </div>
        </nuxt-link>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
        // props: [
        //     'categories',
        // ],
        data() {
          return {
            categories: []
      }
    },
    async fetch() {
      this.categories = await fetch(
        'http://127.0.0.1:8000/api/support/tag'
      ).then(res => res.json())
    }
}
</script>

<style lang="scss" scoped>
</style>