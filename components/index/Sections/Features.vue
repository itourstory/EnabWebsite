<template>
    <div class="row features my-6">
        <div class="col-3 d-flex justify-content-center flex-column text-center">
            <i class="fas fa-signal fa-3x text-light"></i>
            <h4 class="text-light mt-3">مع أو بدون أنترنت</h4>
            <span class="text-muted">يمكنك إكمال العمل في حال انقطاع الانترنت</span>
        </div>
        <div class="col-3 d-flex justify-content-center flex-column text-center">
            <i class="fas fa-box-open fa-3x text-light"></i>
            <h4 class="text-light mt-3">متعدد الخدمات</h4>
            <span class="text-muted">مدري شنو</span>
        </div>
        <div class="col-3 d-flex justify-content-center flex-column text-center">
            <i class="fas fa-bolt fa-3x text-light"></i>
            <h4 class="text-light mt-3">سريع ومجاني</h4>
            <span class="text-muted">صاروخ وبلاش -_-</span>
        </div>
        <div class="col-3 d-flex justify-content-center flex-column text-center">
            <i class="fas fa-cash-register fa-3x text-light"></i>
            <h4 class="text-light mt-3">انظمة بيع مدمجة</h4>
            <span class="text-muted">مثل الفوك :\</span>
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
    .col-3:first-child{
        border-top-right-radius: $r-2;
        border-bottom-right-radius: $r-2;
    }
    .col-3:last-child{
        border-top-left-radius: $r-2;
        border-bottom-left-radius: $r-2;
    }
    .col-3{
        padding: 3rem 0;
        &:hover{
            background: $hover;
        }
    }
</style>