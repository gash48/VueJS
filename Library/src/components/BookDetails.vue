<template>
  <div class="detailsContainer">
    <div class="formControlWrapper" v-for="(setting,index) in fieldSettings" :key="index">
      <label :for="setting.key">{{setting.label}}</label>
      <select
        v-if="setting.type === 'select'"
        :name="setting.key"
        :value="setting.defaultValue"
        @change="inputHandler"
        class="form-control"
      >
        <option value selected>Please Select</option>
        <option v-for="(option,index) in setting.options" :key="index" :value="option">{{option}}</option>
      </select>
      <input
        v-else
        :type="setting.type"
        class="form-control"
        :name="setting.key"
        :value="setting.defaultValue"
        @input="inputHandler"
      >
    </div>
  </div>
</template>


<script>
export default {
  props: ["fieldSettings", "inputHandler"]
};
</script>

<style scoped>
.detailsContainer {
  padding: 20px;
  border: 1px solid #dedede;
  box-shadow: 2px 2px 1px #dedede;
}
.detailsContainer:hover {
  box-shadow: 2px 2px 1px darkslategrey;
}
.formControlWrapper {
  margin: 20px;
}
label {
  width: 100px;
}
.form-control {
  display: inline-block;
  width: 60%;
}
</style>
