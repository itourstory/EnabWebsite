<template>
  <div>
    <div class="row mt-5">
      <div class="col-12 mx-auto">
        <div id="accordion-1" class="accordion accordion-spaced">
          <div v-for="question in questions" :key="question.id">
            <b-card no-body class="mb-1">
              <b-card-header v-b-toggle="'name'+question.id" header-tag="header" class="card-header py-3 collapsed" role="tab">
                <div block class="text-right mr-4">{{question.title}}</div>
              </b-card-header>
              <b-collapse :id="'name'+question.id" accordion="my-accordion" role="tabpanel">
                <b-card-body>
                  <b-card-text>{{question.body}}</b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    "searchText",
    "questions",
    "resault",
  ]
};
</script>

<style lang="scss" scoped>
.card {
  background: #ffffff00;
}
.card-header {
  background: $dark;
  color: #ccc;
  &.collapsed {
    border-radius: $r-2;
  }
  &.not-collapsed {
    border-top-right-radius: $r-2;
    border-top-left-radius: $r-2;
  }
}
.card-body {
  background: $hover;
  color: $text-muted;
}
.collapse {
  &.show {
    .card-body {
      border-bottom-right-radius: $r-2;
      border-bottom-left-radius: $r-2;
    }
  }
}
</style>