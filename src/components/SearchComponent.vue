<template>
  <div class="container-lg py-4">
    <select name="category" id="category">
      <option value="category">select category</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "SearchComponent",
};
</script>

<style lang="scss" scoped>
select {
  padding: 0.5rem;
  border-radius: 5px;
}
</style>
