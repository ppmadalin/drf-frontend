<template>
  <div id="card" class="card">
    <div class="card__content">
      <div class="card__title">
        <slot name="title"></slot>
      </div>
      <div class="card__body">
        <slot></slot>
      </div>
      <div class="card__footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>
<style scoped>
.card {
  margin: 2rem 0;
  padding: 1rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.13);
}

.card__content {
  display: flex;
  flex-direction: column;
}
.card__title {
  background-color: #f4f4f4;
  padding: 1rem;
  margin-bottom: 1rem;
}

.card__body {
  font-size: 1.2em;
  margin-bottom: 1rem;
}

.card__footer {
  background-color: #f4f4f4;
  padding: 1rem;
}
</style>
