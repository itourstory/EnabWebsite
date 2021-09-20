<template>
    <div>
        <div class="container">
            <section>
                <div class="container d-flex align-items-center text-center text-lg-left pt-4 pt-lg-6">
                    <div class="col px-0">
                        <div class="row row-grid align-items-center">
                            <div class="col-lg-6 pr-lg-5">
                                <!-- Heading -->
                                <h1 class="display-4 text-white mb-4 text-right">
                                    تفاصيل خدمة <strong class="text-warning">{{service.title}}</strong>
                                </h1>
                                <!-- Text -->
                                <p class="lead text-white text-right opacity-8">
                                    {{service.subtitle}}
                                </p>
                                
                            </div>
                            <div class="col-lg-6 col-xl-5 col-sm-8 ml-auto mr-auto mr-lg-0">
                                <div class="border border-lighter r-2 rounded-bottom-right">
                                    <div class="card-body">
                                        <!-- Title -->
                                        <div class="d-flex align-items-center mb-4">
                                            <div>
                                                <h5 class="h5 mb-0 text-light">تفاصيل الخدمة</h5>
                                            </div>
                                        </div>
                                        <!-- Role cards -->
                                        <div class="card card-money bg-gradient-dark border-0 mb-3">
                                            <!-- Card body -->
                                            <div class="card-body position-relative zindex-100">
                                                <div class="row justify-content-between align-items-center">
                                                    <div class="col text-right">
                                                        <span v-if="service.points == 0" class="text-light">
                                                            <i class="fas fa-dollar-sign ml-3"></i> مجانا 🤩
                                                        </span>
                                                        <span v-else class="text-light">
                                                            <i class="fas fa-dollar-sign ml-3"></i> السعر : {{service.points}}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card card-money bg-gradient-dark border-0 mb-3">
                                            <!-- Card body -->
                                            <div class="card-body position-relative zindex-100">
                                                <div class="row justify-content-between align-items-center">
                                                    <div class="col text-right">
                                                        <span class="text-light">
                                                            <i class="fas fa-code-branch ml-3"></i>الاصدار : {{service.version}}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card card-money bg-gradient-dark border-0 mb-3">
                                            <!-- Card body -->
                                            <div class="card-body position-relative zindex-100">
                                                <div class="row justify-content-between align-items-center">
                                                    <div class="col text-right">
                                                        <span class="text-light mb-3">
                                                            <i class="fas fa-clock ml-3"></i> مدة الاشتراك : 1 شهر
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Buttons -->
                        <div class="mt-5">
                            <button type="button" class="col-lg-12 btn btn-outline-primary text-light" v-b-modal.youtube>
                                فيديو تعريفي <i class="fab fa-youtube mr-2"></i>
                            </button>
                        </div>
                        <b-modal id="youtube" centered size="md" title="فيديو تعريفي">
                            <iframe width="100%" height="300px" src="https://www.youtube.com/embed/pQWYqiZYZgk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </b-modal>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
    import { mapMutations, mapGetters, mapActions, mapState } from "vuex";
    export default {
        props: [
            "service",
        ],
    }
</script>

<style lang="scss" scoped>
section {
	background-color: transparent;	
}
</style>