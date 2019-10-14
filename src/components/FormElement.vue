<template>
  <div class="form-element" :class="{ 'sub-element' : subelement }" :value="value" ref="formElement" >
    <Separator v-if="formel.type==='separator'" />
    <TextField v-if="formel.type==='text'" :eldata="formel" v-model="elementValue"/>
    <TextArea v-if="formel.type==='long-text'" :eldata="formel" v-model="elementValue"/>
    <DateField v-if="formel.type==='date'" :eldata="formel" v-model="elementValue"/>
    <RadioGroup v-if="formel.type==='radio'" :eldata="formel" v-model="elementValue"/>
    <CheckboxGroup v-if="formel.type==='checkbox'" :eldata="formel" v-model="elementValue"/>
    <Section v-if="formel.type==='section'" :eldata="formel" v-model="elementValue"/>
  </div>
</template>

<script>
import { Separator, TextField, TextArea, DateField, RadioGroup, CheckboxGroup, Section } from "@/components/formElements/index.js";
export default {
  name: "FormElement",
  props: ["formel", "subelement", "value"],
  components: {
    Separator,
    TextField,
    TextArea,
    DateField,
    RadioGroup,
    CheckboxGroup,
    Section
  },
  data() {
    return {
      elementValue: this.value
    };
  },
  mounted() {

  },
  methods: {},
  watch: {
    elementValue: {
      handler: function (val, oldVal) {
        this.$emit('input', val)
      },
      deep: true
    },
    value: {
      handler: function (val, oldVal) {
        this.elementValue = val
      },
      deep: true
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.separator {
  height: 1px;
  width: 95%;
  border-top: 2px dashed #51b1a7;
  margin: 10px auto;
}

.form-element {
  padding: 5px 20px 10px 20px;
}

.form-element.sub-element {
  padding: 5px 0 10px 0;
}

@media only screen and (max-width: 600px)  {
  .form-element {
    padding: 5px 10px 10px 10px;
  }
}
</style>
