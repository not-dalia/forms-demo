<template>
  <div class="ph-form">
    <form name="pre-health">
      <div class="page-num">Page {{currentPage + 1}} of {{formData.length}}</div>
      <Page :id="`page-${currentPage}`" :page="formData[currentPage]" v-model="results" v-bind:key="currentPage"/>
      <div class="footer">
        <div class="footer-nav">
          <div class="btn-container prev">
            <button id="prev-btn" v-if="currentPage > 0" v-on:click="prevPage()" type="button"><i class="fas fa-caret-left" ></i> <span style="margin-left: 10px;">Previous Page</span></button>
          </div>
          <div class="btn-container next">
            <button id="next-btn" v-if="currentPage < formData.length - 1" v-on:click="nextPage()" type="button"><span style="margin-right: 10px;">Next Page</span> <i class="fas fa-caret-right"></i></button>
          </div>
        </div>
        <div class="page-num">Page {{currentPage + 1}} of {{formData.length}}</div>
      </div>
    </form>
  </div>
</template>

<script>
import formData from "@/data/formData.js";
import Page from "@/components/Page.vue";

export default {
  name: "PreHealthForm",
  components: {
    Page
  },
  props: {
    msg: String
  },
  data() {
    return {
      formData: null,
      currentPage: 0,
      results: {}
    };
  },
  watch: {
    results: {
      handler: function(val, oldVal) {
        // console.log(JSON.stringify(val))
      }, 
      deep: true
    }
  },
  created() {
    this.formData = formData;
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0,0);
    },
    nextPage() {
      this.currentPage++;
      this.scrollToTop();
    },
    prevPage() {
      this.currentPage--;
      this.scrollToTop();
    }
  }
};
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

.ph-form {
  color: white
}

button
  background: #fdc868;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  border: none;
  padding: 25px 30px;
  font-weight: 500;
  font-size: 1rem;
  font-family: canada-type-gibson, Helvetica, Arial, sans-serif;
  font-weight: 500;
  cursor: pointer;

  &:hover
    background: #ffb836

.footer 
  .footer-nav
    max-width 840px
    margin 0 auto
    display: flex;
    flex-direction: row;
    justify-content: space-between;

  .page-num
    margin 10px auto

@media only screen and (max-width: 600px) {
  .footer {
    .footer-nav {
      max-width 100%
    }
    button {
      padding: 25px 15px;
    }
  }
}

</style>

