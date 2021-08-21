<template>
    <div class="row mb-6">
        <div class="col-6 mt-5">
            <!-- Main Section -->
            <div v-if="section==''">
                <!-- Heading -->
                <h1 class="display-4 text-white font-weight-bolder mb-4">
                    عنب
                </h1>
                <!-- Text -->
                <p class="lead text-white opacity-8 ml-6">
                    مثل العنكود اكثر من حبة بعنكود واحد ,  عنبنه اكثر من خدمة بنظام واحد 
                </p>
                <!-- Buttons -->
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
                    سوبرماركت
                </h1>
                <!-- Text -->
                <p class="lead text-white opacity-8 ml-6">
                    مثل العنكود اكثر من حبة بعنكود واحد ,  عنبنه اكثر من خدمة بنظام واحد 
                </p>
            </div>
        </div>
        <div class="col-6">
            <div class="image text-left">
                <IndexUtilitiesEnab @service-state="supermarketState($event)"/>
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
            supermarketState(state){
                if(state==true){
                    this.section = "supermarket";
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