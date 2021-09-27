<template>
    <div>
        <div class="container">
            <section>
                <div class="container d-flex align-items-center text-center text-lg-left pt-4 pt-lg-6">
                    <div class="col px-0">
                        <div class="row row-grid align-items-center">
                            <!-- Heading -->
                            <div class="col-lg-6 text-right">
                                <h1 class="display-4 text-white mb-4 text-right">
                                    احصل على النظام الان <strong class="text-warning"> مجانا </strong>
                                </h1>
                                <p class="lead text-right text-md-right text-muted">
                                    <b-card-text>اقرأ <nuxt-link to="/privacy" class="text-primary">سياسة الخصوصية وبنود الخدمة</nuxt-link> الخاصة بنا ثم املئ الحقول التالية بالمعلومات * يجب التأكد من صحة معلوماتك اولا </b-card-text>
                                </p>
                                <p class="lead text-right text-md-right text-muted">
                                    <b-card-text>سوف يصل لك على بريدك الخاص البريد الالكتروني وكلمة السر , قم بتحميل النظام من الموقع وقم بتسجيل الدخول</b-card-text>
                                </p>
                            </div>
                            <!-- Roles -->
                            <div class="col-lg-6">
                                <img src="/images/handsShake.svg" alt="handsShake" width="300px">
                            </div>
                        </div>
                        <div class="row row-grid align-items-center">
                            <div class="col-lg-12 ml-auto mr-auto mr-lg-0">
                                <div class="border border-lighter r-2 rounded-bottom-right">
                                    <div class="card-body">
                                        <!-- form -->
                                        <div class="mx-auto text-right">
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
                                            </b-form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
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
        },
        show: true,
         text: `
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
          richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
          brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
          tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
          assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
          wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
          vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
          synth nesciunt you probably haven't heard of them accusamus labore VHS.
        `
      }
    },
    methods: {
      onSubmit(event) {
        this.$store.dispatch(
          "subscribe/subscribe",
          this.form
        );
        alert("تم ارسال الطلب بنجاح , سوف يصلك الرد على الايميل في مدة لا تتجاوز ال 24 ساعة")
      },
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