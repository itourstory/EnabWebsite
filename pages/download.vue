<template>
  <div>
    <h2>اخر الإصدارات</h2>

    <div class="table-responsive">
      <table class="table table-cards text-right">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">الاصدار</th>
            <th scope="col">التاريخ</th>
            <th scope="col">تحميل</th>
          </tr>
        </thead>
        <tbody class="list">
          <tr v-for="(release, i) in releases" :key="release.name">
            <td scope="row" class="t-3">{{ ++i }}</td>
            <td class="t-3">{{ release.name }}</td>
            <td class="t-3">{{release.created_at}}</td>
            <td class="t-3">
                <a class="btn bg-none btn-sm" :href="release.assets.find((x) => x.browser_download_url.endsWith('.exe')).browser_download_url">
                    <b>تحميل</b>
                </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>
String.prototype.endsWith = function (str) {
  return (
    this.length >= str.length && this.substr(this.length - str.length) === str
  );
};
export default {
  async fetch() {
    this.releases = await this.$axios.$get(
      "https://api.github.com/repos/itourstory/EnabApp/releases"
    );
  },
  data() {
    return {
      releases: [],
    };
  },
};
</script>

<style lang="scss" scoped>
td{
    font-size: 18px !important;
}
</style>