<template>
  <div >
  <div class="row pt-5">
    <div class="col-8  container">
      <div id="accordion-1" class="accordion accordion-spaced">
          <b-card no-body class="mb-1">
            <b-card-header v-b-toggle.accordion-1 header-tag="header" class="card-header py-3 collapsed" role="tab">
              <b-div block class="text-right mr-4">حل المشاكل</b-div>
            </b-card-header>
            <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
              <b-card-body>
                <b-card-text>نظام عنب  </b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>
          <b-card no-body class="mb-1">
            <b-card-header v-b-toggle.accordion-2 header-tag="header" class="card-header py-3 collapsed" role="tab">
              <b-div block class="text-right mr-4">اخرى</b-div>
            </b-card-header>
            <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
              <b-card-body>
                <b-card-text>{{ text }}</b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>
      </div>
      
    </div>
  
  </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.card{
  background: #ffffff00;
}
.card-header{
  background: #0f0f0f6e;
  &.collapsed{
    border-radius: $r-2;
  }
  &.not-collapsed{
    border-top-right-radius: $r-2;
    border-top-left-radius: $r-2;
  }
}
.card-body{
  background: #1a132a;
  
}
.collapse{
  &.show{
    .card-body{
      border-bottom-right-radius: $r-2;
      border-bottom-left-radius: $r-2;
    }
  }
}

</style>