<template>
    <div>
        <h2 class="text-light">متجر الخدمات</h2>
        <div class="container border border-lighter r-3 px-4">
            <b-badge pill variant="primary" class="m-3">عدد الخدمات 10</b-badge>
            <div class="row pt-0 show-scroll" style="max-height: 400px;">
                <div v-for="index in 10" :key="index" class="col-md-4 col-sm-12 d-flex justify-content-center flex-column text-center mb-3 mt-3 hover-translate-y-n10">
                    <div class="border border-lighter r-2 py-6">
                        <i class="fas fa-calculator fa-3x text-light"></i>
                        <h4 class="text-light mt-3">الحاسبة</h4>
                        <a class="btn btn-secondary mt-3 hover-scale-110" href="#" dir="ltr">
                            عرض التفاصيل
                        </a>
                    </div>
                </div>
            </div>
            <div class="row mt-5 show-scroll">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>