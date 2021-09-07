<template>
    <div>
        <div class="container">
            <!-- first section -->
            <div class="col px-0">
                <div class="row row-grid align-items-center">
                    <div class="col-lg-6 text-center text-lg-left">
                        <!-- Heading -->
                        <h1 class="display-4 text-white my-4 text-right">
                            احصل على النظام الان <strong>مجاناً</strong>
                        </h1>
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
            <!-- form -->
            <div class="col px-0">
                <div class="row">
                    <!-- form -->
                    <div class="col-lg-8 mx-auto">
                        <b-form @submit="onSubmit" v-if="show">
                            <!-- full name -->
                            <b-form-group
                                id="input-group-1"
                                label="الاسم الكامل :"
                                label-for="input-1"
                                class="mb-3"
                            >
                                <b-form-input
                                id="input-1"
                                v-model="form.name"
                                type="text"
                                placeholder="ادخل اسمك الكامل"
                                required
                                class="r-3 text-black"
                                ></b-form-input>
                            </b-form-group>
                            <!-- email -->
                            <b-form-group
                                id="input-group-2"
                                label="البريد الالكتروني :"
                                label-for="input-2"
                                class="mb-3"
                            >
                                <b-form-input
                                id="input-2"
                                v-model="form.email"
                                type="email"
                                placeholder="example@gmail.com"
                                required
                                class="r-3 text-left text-black"
                                ></b-form-input>
                            </b-form-group>
                            <!-- phone number -->
                            <b-form-group 
                                id="input-group-3" 
                                label="رقم الهاتف:" 
                                label-for="input-3"
                                class="mb-3"
                            >
                                <b-form-input
                                id="input-3"
                                type="tel"
                                data-mask="0000 000 000"
                                v-model="form.phoneNumber"
                                placeholder="0000 000 000"
                                required
                                class="r-3 text-left text-black"
                                ></b-form-input>
                            </b-form-group>
                            <!-- location -->
                            <!-- <b-form-group 
                                label="موقع متجرلك:" 
                                class="mb-3 text-light"
                            >
                                <b-input-group 
                                    dir="ltr"
                                >
                                    <b-form-input 
                                        class="rl text-right" 
                                        placeholder="موقع متجرلك" 
                                        required
                                        v-model="form.location"
                                    ></b-form-input>
                                    <b-input-group-append>
                                        <b-button variant="light" class="rl">موقعك الحالي</b-button>
                                    </b-input-group-append>
                                </b-input-group>
                            </b-form-group> -->
                            <b-form-group 
                                label="موقع متجرلك:" 
                                class="mb-3 text-light"
                            >
                                <b-input-group 
                                    dir="ltr"
                                >
                                    <b-form-input 
                                        class="rl text-right" 
                                        placeholder="موقع متجرلك" 
                                        required
                                        v-model="form.location"
                                    ></b-form-input>
                                </b-input-group>
                            </b-form-group>
                            <!-- Services -->
                            <b-form-group 
                                id="input-group-4" 
                                label="الخدمات:" 
                                label-for="input-4"
                                class="mb-3"
                            >
                                <b-form-select
                                id="input-4"
                                v-model="form.services"
                                :options="services"
                                required
                                class="r-3"
                                ></b-form-select>
                            </b-form-group>
                            <!-- Privacy policy -->
                            <b-form-group 
                                id="input-group-5" 
                                v-slot="{ ariaDescribedby }"
                                class="mb-3"
                            >
                                <b-form-checkbox-group
                                v-model="form.privacy"
                                required
                                id="checkboxes-5"
                                :aria-describedby="ariaDescribedby"
                                > 
                                <b-form-checkbox value="yes">اوافق على <nuxt-link to="/privacy">سياسة الخصوصية وبنود الخدمة</nuxt-link></b-form-checkbox>
                                </b-form-checkbox-group>
                            </b-form-group>
                            <b-button block type="submit" variant="primary" class="mb-3 r-3" >ارسال الطلب</b-button>
                            <!-- <b-button type="reset" variant="danger">Reset</b-button> -->
                        </b-form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          email: '',
          name: '',
          location:'',
          phoneNumber: null ,
          services: null,
          privacy: []
        },
        services: [
            { value: '', text: 'اختر الخدمة التي ترغب بها', disabled: true },
            { value: 'subermarket', text: 'سوبرماركت' },
        ],
        show: true
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.phoneNumber = null
        this.form.service = null
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
.card{
    background-color: $secondary;
    border-radius: $r-3;
}
.rl{
    border-radius: $r-3;
}
.select{
    background-color: $secondary;
}
</style>