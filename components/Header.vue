<template>
  <div>
    <b-navbar toggleable="lg" type="light">
      <b-navbar-brand href="#">
        <nuxt-link to="/" class="active brand-link position-relative">
          <img alt="logo" src="/images/logo.png" style="height:80px;">
          <small
            class="badge badge-secondary text-sm position-absolute"
            style="top: -30px; right: 0"
            >تجريبي</small
          >
        </nuxt-link>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/" :class="{ active: $nuxt.$route.path === '/' }">
            الصفحة الرئيسية
          </b-nav-item>
          <b-nav-item
            to="/store/supermarket"
            :class="{ active: $nuxt.$route.path === '/store/supermarket' }"
          >
            متجر الخدمات
          </b-nav-item>
          <b-nav-item
            to="/businesses/subscribe"
            :class="{ active: $nuxt.$route.path === '/businesses/subscribe' }"
          >
            طلب اشتراك
          </b-nav-item>
          <!-- Dropdown item -->
          <!-- <b-nav-item-dropdown text="دليل الاستخدام" right>
            <b-dropdown-item class="text-right text-light" to="/docs/supermarket">للسوبرماركت</b-dropdown-item>
          </b-nav-item-dropdown> -->
          <b-nav-item
            to="/support"
            :class="{ active: $nuxt.$route.path === '/support' }"
          >
            الدعم الفني
          </b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="mr-auto text-light">
          <ul class="nav">
            <li class="nav-item">
              <a
                class="nav-link pl-0"
                :href="lastRelease"
                v-if="!($nuxt.$route.path === '/')"
              >
                <b>تحميل</b>
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="https://github.com/itourstory/EnabApp"
                target="_blank"
              >
                <i class="fab fa-github"></i>
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="https://www.instagram.com/enab_io"
                target="_blank"
              >
                <i class="fab fa-instagram"></i>
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="https://www.facebook.com/webpixels"
                target="_blank"
              >
                <i class="fab fa-facebook"></i>
              </a>
            </li>
          </ul>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  computed: {
    lastRelease() {
      return this.$store.state.release.lastRelease;
    },
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  margin: 1.75rem 1.75rem 0.75rem 1.75rem;
  border-radius: $r-2;
  background: #ffffff00; /*old color: $tb-2 */
}
.active {
  color: #e0e0e0;
}

.brand-link {
  font-size: 34px !important;
}
.dropdown-bg{
  background-color: $primary;
}
</style>