<template>
    <div>
        <b-row class="my-1">
            <b-col sm="6">
                <h2 class="text-light">متجر الخدمات</h2>
            </b-col>
            <b-col sm="6">
                <b-form-input type="search" class="r-3" placeholder="اكتب اسم الخدمة"></b-form-input>
            </b-col>
        </b-row>
        <div class="container border border-lighter r-3 px-4">
            <b-badge pill variant="primary" class="m-3">عدد الخدمات 10</b-badge>
            <div class="row pt-0 show-scroll" style="max-height: 400px;">
                <div v-for="index in 10" :key="index" class="col-md-4 col-sm-12 d-flex justify-content-center flex-column text-center mb-3 mt-3 hover-translate-y-n10">
                    <div class="border border-lighter r-2 py-6">
                        <i class="fas fa-calculator fa-3x text-light"></i>
                        <h4 class="text-light mt-3">الحاسبة</h4>
                        <h6 class="text-light mt-3">999 نقطة</h6>
                        <a class="btn btn-secondary mt-3 hover-scale-110" body-bg-variant="primary" v-b-modal.modal-lg variant="primary" dir="ltr">
                            عرض التفاصيل
                        </a>
                    </div>
                </div>
            </div>
            <button @click="console">console</button>
            <b-modal id="modal-lg" class="text-right" size="lg" title="اسم الخدمة">
                تفاصيل
            </b-modal>
        </div>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex'

    export default {
        methods: {
            ...mapMutations({
                services: 'servicesStore/fetchServices'
            }),
            console(){
                console.log(this.services)
            }
        }
    };
</script>

<style lang="scss" scoped>

</style>