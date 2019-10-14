<template>
  <div class="page" :value="value" ref="page">
    <div v-for="(section, i) in page" v-bind:key="`section-${i}`" class="section">
      <div class="title">{{section.title}}</div>
      <div class="separator"></div>
      <div class="description" v-if="section.description">{{section.description}}</div>
      <FormElement v-for="(q, j) in section.questions" v-bind:key="`form-el-${i}-${j}`" :formel="q" v-model="value[q.name]"/>
    </div>
  </div>
</template>

<script>
import formData from '@/data/formData.js'
import FormElement from '@/components/FormElement.vue'
export default {
  name: 'Page',
  props: ['page', 'value'], 
  components: {
    FormElement
  },
  data () {
    return {
      formData: null, 
      currentPage: 0,
      result: null,
      defaultValues: {}
    }
  },
  mounted () {
    this.formData = formData
    if (this.$attrs.value != null) this.defaultValues = {...this.$attrs.value} 
  },
  watch: {
    defaultValues: {
      handler: function (val, oldVal) {
        this.$emit('input', this.defaultValues)
      },
      deep: true
    }, 
    value: {
      handler: function (val, oldVal) {
        //console.log('result changed to: ' + val)
      },
      deep: true
    }
  },
  methods: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
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

.section {
  background white
  padding 20px
  max-width 800px
  margin 25px auto
  filter drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.16))
  color: #555;
}

.title {
  font-weight: 500;
  font-size: 1.4rem;
  text-align: left;
  color: #51b1a7;
}

.separator {
  height: 1px;
  width: 100%;
  border-top: 2px dashed #51B1A7;
  margin: 10px 0;
}

.description {
  font-weight: 300;
  font-size: 1rem;
  text-align: left;
  color: #565656;
  margin-bottom: 15px;
  white-space: pre-line;
}

@media only screen and (max-width: 600px)  {
  .section {
    background white
    padding 15px
    max-width 100%
    margin 25px auto
    filter drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.16))
    color: #555;
  }
}

</style>
