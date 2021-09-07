<template>
  <div>
    <div class="footer py-3 mt-5">
        <div class="row">
            <span class="mx-auto">جميع الحقوق محفوظة © عنب</span>
        </div>
        <div class="row">
            <nuxt-link to="/privacy" class="mx-auto">*سياسة الخصوصية وبنود الخدمة</nuxt-link>
        </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footer{
    margin: 0.75rem 1.75rem 0.75rem 1.75rem;
    // background: $sb-1; /* old color: $tb-1 */
    background: #ffffff00;
    border-top: 1px solid #ffffff1f;
    color: #9d8bbc;
}
.active{
    color: #fff;
}
</style>