<template>
    <div>
        <div class="w-25">
            <img src="/images/supermarket.svg" class="img-fluid"/>
        </div>
        <div class="container">
            <div class="col-12 col-lg-12 pr-lg-5 text-center">
                <h1 class="display-4 w-100 text-white font-weight-bolder mb-4">
                    العديد من الخدمات التي نوفرها <strong class="d-block text-primary font-weight-bold h1">لك مجاناً.</strong>
                </h1>
            </div>
            <!-- <h1 class="text-light">الخدمات</h1>
            <h5 class="text-light text-right">لدينا العديد من الخدمات التي نوفرها لك مجانا</h5> -->
            <div class="row mt-4">
                <div class="col-lg-6">
                    <!-- Card -->
                    <div class="card mb-5 hover-translate-y-n10">
                        <nuxt-link to="/services/supermarket">
                            <div class="d-flex p-4">
                                <div>
                                    <span class="badge badge-primary badge-pill ml-3">مجاناً 🔥</span>
                                </div>
                                <div class="pl-3 text-primary text-light">
                                    <h3 class="text-light">السوبرماركت</h3>
                                    <p>
                                        نظام كاشير و ادارة منتجات وزبائن مع العديد من الخدمات الاخرى في مكان واحد.
                                    </p>
                                </div>
                            </div>
                            <div>
                                <img src="/images/supermarket.svg" class="img-fluid"/>
                            </div>
                        </nuxt-link>
                        <nuxt-link to="/services/subscribe"><b-button block  class="p-3 text-light" variant="outline-primary" >اشترك</b-button></nuxt-link>
                    </div>
                </div>
                <div class="col-lg-6">
                    <!-- Card -->
                    <div class="card mb-2 hover-translate-y-n10">
                        <nuxt-link to="/docs">
                            <div class="d-flex p-4">
                                <div>
                                    <span class="badge badge-primary badge-pill ml-3">مجاناً 🔥</span>
                                </div>
                                <div class="pl-3 text-primary text-light">
                                    <h3 class="text-light">قريبا...</h3>
                                    <p>
                                        هنلك خدمات مجانية اخرى قادمة 🔥🔥.
                                        انتظرونا
                                    </p>
                                </div>
                            </div>
                            <div>
                                <img src="/images/supermarket.svg" class="img-fluid img-center" style="width: 900px;" />
                            </div>
                            <b-button block disabled class="p-3 text-light" variant="outline-primary" >قريبا...</b-button>
                        </nuxt-link>
                    </div>
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
    .card{
        background: $secondary;
        border-radius: $r-2;
    }
    img{
        border-radius: $r-2;
    }
</style>