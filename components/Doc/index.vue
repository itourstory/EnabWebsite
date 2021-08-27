<template>
    <div>
        <div class="container">
            <h1 class="text-light">الخدمات</h1>
            <h5 class="text-light text-right">لدينا العديد من الخدمات التي نوفرها لك مجانا</h5>
            <div class="row mt-4">
                <div class="col-lg-6">
                    <!-- Cardd -->
                    <nuxt-link to="/docs/supermarket">
                        <div class="card mb-5 hover-translate-y-n10">
                            <div class="d-flex p-4">
                                <div>
                                    <span class="badge badge-primary badge-pill ml-3">مجاناً</span>
                                </div>
                                <div class="pl-3 text-primary">
                                    <h3>السوبرماركت</h3>
                                    <p>
                                        نظام كاشير و ادارة منتجات وزبائن مع العديد من الخدمات الاخرى في مكان واحد.
                                    </p>
                                </div>
                            </div>
                            <div>
                                <img src="/images/supermarket.svg" class="img-fluid"/>
                            </div>
                        </div>
                    </nuxt-link>
                </div>
                <div class="col-lg-6">
                    <!-- Card -->
                    <nuxt-link to="/docs">
                        <div class="card mb-5 hover-translate-y-n10">
                            <div class="d-flex p-4">
                                <div>
                                    <span class="badge badge-primary badge-pill ml-3">مجاناً</span>
                                </div>
                                <div class="pl-3 text-primary">
                                    <h5>قريبا...</h5>
                                    <p class="pb-5">
                                        هنلك خدمات مجانية اخرى قادمة 🔥🔥.
                                    </p>
                                </div>
                            </div>
                            <div>
                                <img src="/images/supermarket.svg" class="img-fluid img-center" style="width: 900px;" />
                            </div>
                        </div>
                    </nuxt-link>
                </div>
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