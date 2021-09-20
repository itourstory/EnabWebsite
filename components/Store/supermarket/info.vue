<template>
    <div>
        <div class="container">
            <section class="slice slice-lg">
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
                                                    <div class="col">
                                                        <span class="text-light mb-3">
                                                            <i class="fas fa-envelope-open-text ml-3"></i>سوف يصل لك على بريدك الالكتروني المعرف الخاص بك و كلمة المرور 
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card card-money bg-gradient-dark border-0 mb-3">
                                            <!-- Card body -->
                                            <div class="card-body position-relative zindex-100">
                                                <div class="row justify-content-between align-items-center">
                                                    <div class="col">
                                                        <span class="text-light">
                                                            <i class="fas fa-download ml-3"></i>حمل النظام وقم بتنصيبه وبعدها يمكنك تسجيل الدخول عن طريق المعرف و كلمة المرور الخاصة بك
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- SVG separator -->
                <div class="shape-container shape-line shape-position-bottom">
                    <svg width="2560px" height="100px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="none" x="0px" y="0px" viewBox="0 0 2560 100" style="enable-background:new 0 0 2560 100;" xml:space="preserve" class="">
                        <polygon points="2560 0 2560 100 0 100"></polygon>
                    </svg>
                </div>
            </section>
        </div>
        <div class="container">
            <div class="col px-0">
                <div class="row row-grid align-items-center">
                    <div class="col-lg-6 text-center text-lg-left">
                        <h1 class="display-4 text-white my-4 text-right">
                            <strong class="font-weight-bold text-primary">{{service.title}}</strong>
                        </h1>
                        <div class="card bg-secondary border-0 shadow-lg rounded-lg floating-sm">
                            <div class="card-body">
                                <h5 class="font-weight-bold text-light text-center mb-0">{{service.title}}</h5>
                                <p class="text-center mb-0">
                                    Happy customers
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-xl-5 col-sm-8 ml-auto mr-auto mr-lg-0">
                        <div class="card bg-light rounded-bottom-right">
                            <div class="card-body">
                                <!-- Title -->
                                <div class="d-flex align-items-center mb-4">
                                    <div>
                                        <h5 class="h5 mb-0">تعليمات</h5>
                                    </div>
                                </div>
                                <!-- Role cards -->
                                <div class="card card-money bg-gradient-dark border-0 mb-3">
                                    <!-- Card body -->
                                    <div class="card-body position-relative zindex-100">
                                        <div class="row justify-content-between align-items-center">
                                            <div class="col">
                                                <span class="text-light">
                                                    <i class="fas fa-check-square ml-3"></i>اقرأ <nuxt-link to="/privacy">سياسة الخصوصية وبنود الخدمة</nuxt-link> الخاصة بنا ثم املئ الحقول التالية بالمعلومات * يجب التأكد من صحة معلوماتك اولا 
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card card-money bg-gradient-dark border-0 mb-3">
                                    <!-- Card body -->
                                    <div class="card-body position-relative zindex-100">
                                        <div class="row justify-content-between align-items-center">
                                            <div class="col">
                                                <span class="text-light mb-3">
                                                    <i class="fas fa-envelope-open-text ml-3"></i>سوف يصل لك على بريدك الالكتروني المعرف الخاص بك و كلمة المرور 
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card card-money bg-gradient-dark border-0 mb-3">
                                    <!-- Card body -->
                                    <div class="card-body position-relative zindex-100">
                                        <div class="row justify-content-between align-items-center">
                                            <div class="col">
                                                <span class="text-light">
                                                    <i class="fas fa-download ml-3"></i>حمل النظام وقم بتنصيبه وبعدها يمكنك تسجيل الدخول عن طريق المعرف و كلمة المرور الخاصة بك
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-12 col-sm-12 d-flex justify-content-center flex-column">
            <div class="border border-lighter r-2 py-6 px-3">
                <div class="col-lg-8 card bg-secondary border-0 shadow-lg rounded-lg floating-sm">
                    <div class="card-body">
                        <h5 class="font-weight-bold text-light text-center mb-0">500k</h5>
                        <p class="text-center mb-0">
                            Happy customers
                        </p>
                    </div>
                </div>
                <div class="d-flex justify-content-between">
                    <div class="col-auto">
                        <h1 class="text-light mt-3">{{service.title}}</h1>
                        <h6 class="text-light">{{service.subtitle}}</h6>
                    </div>
                    <div class="col-auto">
                        <h1 v-if="service.points == 0" class="text-light mt-3">مجانا 🤩</h1>
                        <h1 v-else class="text-light mt-3">{{service.points}} نقطة</h1>
                        <h6 class="text-light">الاشتراك يكون لمدة شهر</h6>
                    </div>
                </div>
                <div class="text-right show-scroll mt-4 border border-lighter r-2" style="max-height: 300px;">
                    <div class="col-auto">
                        <h3 class="text-light mt-3">تفاصيل الخدمة</h3>
                        <p class="text-light">
                            هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن استخدام "هنا يوجد محتوى نصي، هنا يوجد محتوى نصي" فتجعلها تبدو (أي الأحرف) وكأنها نص مقروء. العديد من برامح النشر المكتبي وبرامح تحرير صفحات الويب تستخدم لوريم إيبسوم بشكل إفتراضي كنموذج عن النص، وإذا قمت بإدخال "lorem ipsum" في أي محرك بحث ستظهر العديد من المواقع الحديثة العهد في نتائج البحث. على مدى السنين ظهرت نسخ جديدة ومختلفة من نص لوريم إيبسوم، أحياناً عن طريق الصدفة، وأحياناً عن عمد كإدخال بعض العبارات الفكاهية إليها.
                        </p>
                        <p class="text-light">
                            هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن استخدام "هنا يوجد محتوى نصي، هنا يوجد محتوى نصي" فتجعلها تبدو (أي الأحرف) وكأنها نص مقروء. العديد من برامح النشر المكتبي وبرامح تحرير صفحات الويب تستخدم لوريم إيبسوم بشكل إفتراضي كنموذج عن النص، وإذا قمت بإدخال "lorem ipsum" في أي محرك بحث ستظهر العديد من المواقع الحديثة العهد في نتائج البحث. على مدى السنين ظهرت نسخ جديدة ومختلفة من نص لوريم إيبسوم، أحياناً عن طريق الصدفة، وأحياناً عن عمد كإدخال بعض العبارات الفكاهية إليها.
                        </p>
                    </div>
                </div>
            </div>
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