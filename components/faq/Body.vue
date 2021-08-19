<template>
  <div >
  <div class="row pt-5">
    <div class="col-8  container">
      <div id="accordion-1" class="accordion accordion-spaced">
          <b-card no-body class="mb-1">
            <b-card-header v-b-toggle.accordion-1 header-tag="header" class="card-header py-4 collapsed" role="tab">
              <b-div block  class="text-right mr-4">حل المشاكل</b-div>
            </b-card-header>
            <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
              <b-card-body>
                <b-card-text>نظام عنب  </b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>
          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button block v-b-toggle.accordion-2 variant="info">Accordion 2</b-button>
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
</style>