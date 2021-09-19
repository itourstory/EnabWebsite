<template>
    <div>
        <h1 class="text-light">hii {{this.$route.params.id}}</h1>
        <h1 class="text-light">hii {{service}}</h1>
        <div class="col-md-12 col-sm-12 d-flex justify-content-center flex-column">
            <div class="border border-lighter r-2 py-6 px-3">
                <div class="col-lg-12 d-flex justify-content-center">
                    <div class="col-auto bg-primary avatar avatar-xl rounded-circle">
                        <i class="fas fa-chalkboard-teacher fa-3x text-light text-left"></i>
                    </div>
                </div>
                <div class="d-flex justify-content-between">
                    <div class="col-auto">
                        <h1 class="text-light mt-3">{{service.title}}</h1>
                        <h6 class="text-light">الاشتراك يكون لمدة شهر</h6>
                    </div>
                    <div class="col-auto">
                        <h1 class="text-light mt-3">555 نقطة</h1>
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
        ]
    }
</script>

<style lang="scss" scoped>

</style>