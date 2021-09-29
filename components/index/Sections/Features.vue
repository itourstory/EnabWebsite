<template>
    <div class="row features my-6">
        <div class="feature col-md-3 col-sm-12 d-flex justify-content-center flex-column text-center" >
            <i class="fas fa-signal fa-3x text-light"></i>
            <h4 class="text-light mt-3">مع أو بدون أنترنت</h4>
            <span class="text-muted mx-3">موجود أو ما موجود لا يهمك، عنب مستمر بتسهيل إدارة وتنظيم عملك خلال أوقات انقطاع أو ضعف الإنترنت</span>
        </div>
        <div class="feature col-md-3 col-sm-12 d-flex justify-content-center flex-column text-center">
            <i class="fas fa-box-open fa-3x text-light"></i>
            <h4 class="text-light mt-3">متعدد الخدمات</h4>
            <span class="text-muted mx-3">عنب يقدم لك مجموعة كبيرة من الخدمات مهمتها مساعدتك بإدارة العمل و توفير الوقت والمجهود والمال...وتخليصك من الأعمال الروتينة</span>
        </div>
        <div class="feature col-md-3 col-sm-12 d-flex justify-content-center flex-column text-center">
            <i class="fas fa-bolt fa-3x text-light"></i>
            <h4 class="text-light mt-3">سريع ومجاني</h4>
            <span class="text-muted mx-3">الرزق يحتاج خُفية.. وسرعة عنب كفيلة بزيادة مبيعاتك وتخليصك من مشاكل تأخر الاستجابة وطوابير الزبائن وكل هذا يقدمه إلك عنب مجانا</span>
        </div>
        <div class="feature col-md-3 col-sm-12 d-flex justify-content-center flex-column text-center">
            <i class="fas fa-cash-register fa-3x text-light"></i>
            <h4 class="text-light mt-3">انظمة بيع مدمجة</h4>
            <span class="text-muted mx-3">عنب يجمع بين أنظمة الإدارة وأنظمة الكاشير بنظام واحد يوفر فلوسك ويرفع ارباحك</span>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
    .features{
        background: $secondary;
        border-radius: $r-2;
    }
    .feature:first-child{
        border-top-right-radius: $r-2;
        border-bottom-right-radius: $r-2;
    }
    .feature:last-child{
        border-top-left-radius: $r-2;
        border-bottom-left-radius: $r-2;
    }
    .feature{
        padding: 3rem 0;
        &:hover{
            background: $hover;
        }
    }
    @media (max-width: 991.98px) {
        .feature{
            padding: 1.75rem 0 !important;
        }
    }
</style>