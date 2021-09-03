<template>
    <div>
        <div class="container">
            <div class="col-12 col-lg-12 pr-lg-5 text-center">
                <h1 class="display-3 w-100 text-white font-weight-bolder mb-4">
                    احصل على النظام الان <strong class="d-block text-primary font-weight-bold h1">مجاناً</strong>
                </h1>
            </div>
            <div class="row">
                <!-- Roles -->
                <div class="col-lg-4 text-right mb-4">
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
                <!-- form -->
                <div class="col-lg-8">
                    <div class="card p-3">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label class="form-control-label">الاسم الكامل</label>
                                    <input class="form-control input-color text-light" type="text" placeholder="الاسم الكامل">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label class="form-control-label">البريد الالكتروني</label>
                                    <input class="form-control input-color text-light" type="email" placeholder="name@exmaple.com">
                                </div>
                            </div>
                        </div>
                        <div class="row align-items-center">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label class="form-control-label">رقم الهاتف</label>
                                    <input type="text" class="form-control input-color text-light" data-mask="0000 000 000" placeholder="رقم الهاتف">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label class="form-control-label">الخدمة</label>
                                    <select class="custom-select input-color text-light">
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
                                    <input class="form-control input-color text-light" type="email" placeholder="name@exmaple.com">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label class="form-control-label">رقم الهاتف</label>
                                    <input class="form-control input-color text-light" type="text" placeholder="+40-777 245 549">
                                </div>
                            </div>
                        </div>
                        <b-button block class="p-3 mt-3 text-light" variant="outline-primary" >اشترك</b-button>
                    </div>
                </div>
                <div class="col-lg-12">
                    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                        <!-- email -->
                        <b-form-group
                            id="input-group-1"
                            label="البريد الالكتروني :"
                            label-for="input-1"
                        >
                            <b-form-input
                            id="input-1"
                            v-model="form.email"
                            type="email"
                            placeholder="example@gmail.com"
                            required
                            class="r-3 text-left bg-wigt"
                            ></b-form-input>
                        </b-form-group>

                        <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
                            <b-form-input
                            id="input-2"
                            v-model="form.name"
                            placeholder="Enter name"
                            required
                            ></b-form-input>
                        </b-form-group>

                        <b-form-group id="input-group-3" label="Food:" label-for="input-3">
                            <b-form-select
                            id="input-3"
                            v-model="form.food"
                            :options="foods"
                            required
                            ></b-form-select>
                        </b-form-group>

                        <b-form-group id="input-group-4" v-slot="{ ariaDescribedby }">
                            <b-form-checkbox-group
                            v-model="form.checked"
                            id="checkboxes-4"
                            :aria-describedby="ariaDescribedby"
                            >
                            <b-form-checkbox value="me">Check me out</b-form-checkbox>
                            <b-form-checkbox value="that">Check that out</b-form-checkbox>
                            </b-form-checkbox-group>
                        </b-form-group>

                        <b-button type="submit" variant="primary">Submit</b-button>
                        <b-button type="reset" variant="danger">Reset</b-button>
                        </b-form>
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
          food: null,
          checked: []
        },
        foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
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
        this.form.food = null
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
.input-color{
    background-color: #7f3ef0;
}
</style>