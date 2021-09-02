<template>
    <div>
        <div class="container">
            <div class="col-12 col-lg-12 pr-lg-5 text-center">
                <h1 class="display-4 w-100 text-white font-weight-bolder mb-4">
                    احصل على النظام الان <strong class="d-block text-primary font-weight-bold h1">مجاناً.</strong>
                </h1>
            </div>
            <div class="row col-lg-12 mt-6">
                <div class="col-lg-12 text-center mb-3">
                    <span class="text-light">
                        <i class="fas fa-check-square ml-3"></i>املئ الحقول التالية بالمعلومات * يجب التأكد من صحة معلوماتك اولا
                    </span>
                    <hr>
                    <span class="text-light mb-3">
                        <i class="fas fa-check-square ml-3"></i>سوف يصل لك على بريدك الالكتروني المعرف الخاص بك و كلمة المرور 
                    </span>
                    <hr>
                    <span class="text-light">
                        <i class="fas fa-check-square ml-3"></i>حمل النظام وقم بتنصيبه وبعدها يمكنك تسجيل الدخول عن طريق المعرف و كلمة المرور الخاصة بك
                    </span>
                </div>
                <div class="col-lg-12">
                    <div class="card p-3">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label class="form-control-label">الاسم الكامل</label>
                                    <input class="form-control" type="text" placeholder="الاسم الكامل">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label class="form-control-label">البريد الالكتروني</label>
                                    <input class="form-control" type="email" placeholder="name@exmaple.com">
                                </div>
                            </div>
                        </div>
                        <div class="row align-items-center">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label class="form-control-label">رقم الهاتف</label>
                                    <input type="text" class="form-control" data-mask="0000 000 000" placeholder="رقم الهاتف">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label class="form-control-label">الخدمة</label>
                                    <select class="custom-select ">
                                        <option disabled selected>اختر الخدمة التي ترغب بها</option>
                                        <option value="1">سوبرماركت</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label class="form-control-label">المدريشنو</label>
                                    <input class="form-control" type="email" placeholder="name@exmaple.com">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label class="form-control-label">رقم الهاتف</label>
                                    <input class="form-control" type="text" placeholder="+40-777 245 549">
                                </div>
                            </div>
                        </div>
                        <b-button block class="p-3 mt-3 text-light" variant="outline-primary" >اشترك</b-button>
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
    background-color: $secondary;
    border-radius: $r-3;
}
</style>