<template>
  <div>
    <b-navbar toggleable="lg" type="light">
      <b-navbar-brand href="#">
        <nuxt-link to="/" class="active brand-link">
          نظام عنب
        </nuxt-link>
        <small class="badge badge-primary text-sm">تجريبي</small>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">
              <nuxt-link to="/" :class="{ 'active' : $nuxt.$route.path === '/'}">الصفحة الرئيسية</nuxt-link>
          </b-nav-item>
          <b-nav-item href="#">
              <nuxt-link to="/faq" :class="{ 'active' : $nuxt.$route.path === '/faq'}">الأسئلة الشائعة</nuxt-link>
          </b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="mr-auto text-light">
            <a :href="lastRelease" class="text-light">
              <b>تحميل</b>
            </a>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  computed: {
      lastRelease () {
        return this.$store.state.release.lastRelease;
      },
  },
};
</script>

<style lang="scss" scoped>
.navbar{
    margin: 1.75rem 1.75rem 0.75rem 1.75rem;
    border-radius: $r-2;
    background: #ffffff00; /*old color: $tb-2 */
}
.active{
    color: #e0e0e0;
}

.brand-link{
  font-size: 34px !important;
}
</style>