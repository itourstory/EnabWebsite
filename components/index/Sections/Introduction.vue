<template>
    <div class="row mb-6">
        <div class="col-6">
            <!-- Heading -->
            <h1 class="display-4 text-white font-weight-bolder mb-4">
                جميل  <strong class="d-block text-primary font-weight-bold h1"> في بساطته</strong>
            </h1>
            <!-- Text -->
            <p class="lead text-white opacity-8 ml-6">
                هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها.
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
        <div class="col-6">
            <div class="image text-left">
                <img src="/images/LogoMedicine.png" />
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        computed: {
            lastRelease () {
                return this.$store.state.release.lastRelease;
            },
        },
    }
</script>

<style lang="scss" scoped>
    .btn{

    }
</style>