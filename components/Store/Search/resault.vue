<template>
    <div>
        <div class="row pt-0">
            <div v-for="service in services" :key="service.id" class="col-md-4 col-sm-12 d-flex justify-content-center flex-column text-center mb-3 mt-3 hover-translate-y-n10">
                <div class="border border-lighter r-2 py-6">
                    <i :class="service.icon" class="fa-3x text-light"></i>
                    <h4 class="text-light mt-3">{{service.title}}</h4>
                    <h6 v-if="service.points == 0" class="text-light mt-3">مجانا 🤩</h6>
                    <h6 v-else class="text-light mt-3">{{service.points}}</h6>
                    <a class="btn btn-secondary mt-3 hover-scale-110" @click="clickedService(service.id)" v-b-modal.modal-lg variant="primary" dir="ltr">
                        عرض التفاصيل
                    </a>
                </div>
            </div>
        </div>
        <b-modal id="modal-lg" class="text-right" size="lg" title="اسم الخدمة">
            يييي
        </b-modal>
    </div>
</template>

<script>
    export default {
        props: [
            "searchText",
            "services",
            "resault",
        ]
    }
</script>

<style lang="scss" scoped>

</style>