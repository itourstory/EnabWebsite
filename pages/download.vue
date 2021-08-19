<template>
    <div>
        <h2>اخر الإصدارات</h2>
        <ul class="list-group p-0 mt-3">
            <li class="list-group-item d-flex justify-content-between align-items-center" v-for="release in releases" :key="release.name">
                <h5>{{ release.name }}</h5>
                <div>
                    <span class="badge badge-secondary badge-pill p-2" >{{release.created_at}}</span>
                    <a class="btn btn-dark r-2 btn-sm" :href="release.assets.find(x => x.browser_download_url.endsWith('.exe')).browser_download_url" >تحميل</a>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    String.prototype.endsWith = function (str) {
    return (this.length >= str.length) && (this.substr(this.length - str.length) === str);
    }
    export default {
        async fetch() {
            this.releases = await this.$axios.$get('https://api.github.com/repos/itourstory/EnabApp/releases')
            console.log(this.releases)
        },
        data(){
            return {
                releases: []
            }
        }
    }
</script>

<style lang="scss" scoped>
// 
</style>