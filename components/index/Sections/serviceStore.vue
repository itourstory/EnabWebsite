<template>
    <div>
        <div class="card col-lg-12 mx-auto mb-2">
            <div class="d-flex p-4">
                <div class="pl-3 mx-auto text-primary text-light text-center">
                    <h1 class="h1 text-light">متجر الخدمات</h1>
                    <h3 class="h3 text-light">يمكنك الدخول الى متجر الخدمات عن طريق الضغط على باب المتجر</h3>
                    <p>
                        يمكنك شراء العديد من الخدمات التي تسهل عليك عملك , هنلك ايضا خدمات مجانية
                    </p>
                </div>
            </div>
            <div>
                <IndexUtilitiesStore />
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
    background: $primary;
    border-radius: $r-2;
}
img{
    border-radius: $r-2;
}
</style>