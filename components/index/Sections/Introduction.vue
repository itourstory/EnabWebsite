<template>
    <div class="row mb-6">
        <div class="col-lg-6 col-sm-12 mt-5">
            <!-- Main Section -->
            <div v-if="section==''">
                <h1 class="display-4 text-white font-weight-bolder mb-4">
                    عنب2
                </h1>
                <p class="lead text-white opacity-8">
                    مثل العنكود اكثر من حبة بعنكود واحد ,  عنبنه اكثر من خدمة بنظام واحد 
                </p>
                <div class="mt-5">
                    <a :href="lastRelease">
                        <button type="button" class="btn btn-secondary btn-lg r-2 p-4 px-5">
                            تحميل البرنامج مجاناً
                        </button>
                    </a>
                </div>
            </div>
            <!-- Supermarket Section -->
            <div v-else-if="section=='supermarket'">
                <h1 class="display-4 text-white font-weight-bolder mb-4">
                    عنب للسوبرماركت
                </h1>
                <p class="lead text-white opacity-8">
                    مثل العنكود اكثر من حبة بعنكود واحد ,  عنبنه اكثر من خدمة بنظام واحد 
                </p>
            </div>
            <!-- Coffee Section -->
            <div v-else-if="section=='coffee'">
                <h1 class="display-4 text-white font-weight-bolder mb-4">
                    Soon
                </h1>
                <!-- Text -->
                <p class="lead text-white opacity-8">
                    SOON 
                </p>
            </div>
            <!-- Coffee Section -->
            <div v-else-if="section=='res'">
                <h1 class="display-4 text-white font-weight-bolder mb-4">
                    Soon
                </h1>
                <!-- Text -->
                <p class="lead text-white opacity-8">
                    SOON 
                </p>
            </div>
        </div>
        <div class="col-lg-6 col-sm-12">
            <div class="image text-left">
                <IndexUtilitiesEnab @service-state="servicesState($event)"/>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                section:""
            }
        },
        computed: {
            lastRelease () {
                return this.$store.state.release.lastRelease;
            },
        },
        methods:{
            servicesState(state){
                if(state==="supermarket"){
                    this.section = "supermarket";
                }else if(state=="coffee"){
                    this.section = "coffee";
                }else{
                    this.section = "";
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .btn{

    }
</style>