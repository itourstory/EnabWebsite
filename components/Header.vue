<template>
  <div>
    <b-navbar toggleable="lg" type="dark">
      <b-navbar-brand href="#">
        <nuxt-link to="/" class="active">نظام عنب</nuxt-link>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">
              <nuxt-link to="/" :class="{ 'active' : $nuxt.$route.path === '/'}">الصفحة الرئيسية</nuxt-link>
          </b-nav-item>
          <b-nav-item href="#">
              <nuxt-link to="/download" :class="{ 'active' : $nuxt.$route.path === '/download'}">تحميل</nuxt-link>
          </b-nav-item>
          <b-nav-item href="#">
              <nuxt-link to="/faq" :class="{ 'active' : $nuxt.$route.path === '/faq'}">الأسئلة الشائعة</nuxt-link>
          </b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="mr-auto text-light">
            مجاناً
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.navbar{
    margin: 1.75rem 1.75rem 0.75rem 1.75rem;
    border-radius: $r-2;
    background: $s-1; /*old color: $tb-2 */
}
.active{
    color: #fff;
}
</style>