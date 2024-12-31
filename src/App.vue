<script setup>

</script>

<template>
  <div>
    <div class="container">
      <div class="row">
        <div style="background: plum" class="col-12">
          <p>
            sm: $break-point-smartphones: 576px;<br>
            md: $break-point-tablets-portrait: 768px;<br>
            lg: $break-point-tablets-landscape: 992px;<br>
            xl: $break-point-desktop: 1200px;<br>
            xxl: $break-point-desktop-large: 1600px;<br>
          </p>
        </div>
      </div>
      <div class="row">
        <div style="background: #C02B55" class="col-12 col-sm-7 col-md-9 col-lg-6 col-xl-4 col-xxl-3">col-12 col-sm-7 col-md-9 col-lg-6 col-xl-4 col-xxl-3</div>
        <div style="background: green" class="col-12 col-sm-8 col-md-9 col-lg-6 col-xl-4 col-xxl-3">col-12 col-sm-8 col-md-9 col-lg-6 col-xl-4 col-xxl-3</div>
        <div style="background: blue" class="col-12 col-sm-9 col-md-9 col-lg-6 col-xl-4 col-xxl-3">col-12 col-sm-9 col-md-9 col-lg-6 col-xl-4 col-xxl-3</div>
        <div style="background: burlywood" class="col-12 col-sm-12 col-md-9 col-lg-6 col-xl-4 col-xxl-3">col-12 col-sm-12 col-md-9 col-lg-6 col-xl-4 col-xxl-3</div>

      </div>
    </div>

  </div>

</template>

<style scoped lang="scss">


p{
  font-family: vars.$font-family-playfair;
  @include mixinsText.responsive-text(15px, 1.5);
}
</style>

