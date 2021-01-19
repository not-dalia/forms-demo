<template>
  <div class="ph-form">
    <form
      ref="phform"
      name="pre-health"
    >
      <!-- <div class="page-num">Page {{currentPage + 1}} of {{formData.length}}</div> -->
      <ProgressBar
        :progress="(currentQuestion / formData[currentPage].length) * 100"
        :totalPages="formData.length - 1"
        :page="currentPage"
      />
      <Page
        :id="`page-${currentPage}`"
        :page="formData[currentPage]"
        v-model="results"
        v-bind:key="currentPage"
        :current-question="currentQuestion"
      />
      <div class="footer">
        <div class="footer-nav">
          <div class="btn-container prev">
            <button
              id="prev-btn"
              ref="prevbtn"
              v-if="currentPage > 0 || currentQuestion > 0"
              v-on:click="prevPage()"
              type="button"
              tabindex="1"
            >
              <i class="fas fa-caret-left"></i>
              <span style="margin-left: 10px">Back</span>
            </button>
          </div>
          <div class="btn-container next">
            <button
              id="next-btn"
              ref="nextbtn"
              v-if="
                currentPage < formData.length - 1 ||
                currentQuestion < formData[currentPage].length - 1
              "
              v-on:click="nextPage()"
              type="button"
            >
              <span style="margin-right: 10px">Next</span>
              <i class="fas fa-caret-right"></i>
            </button>
          </div>
        </div>
        <!-- <div class="page-num">
          Page {{ currentPage + 1 }} of {{ formData.length }}
        </div> -->
      </div>
    </form>
  </div>
</template>

<script>
import formData from "@/data/formData-pre.js";
import Page from "@/components/Page.vue";
import ProgressBar from "@/components/ProgressBar.vue";

export default {
  name: "PreHealthForm",
  components: {
    Page,
    ProgressBar,
  },
  props: {
    msg: String,
  },
  data() {
    return {
      formData: null,
      currentPage: 0,
      currentQuestion: 0,
      results: {},
    };
  },
  watch: {
    results: {
      handler: function (val, oldVal) {
        // console.log(JSON.stringify(val))
      },
      deep: true,
    },
  },
  created() {
    this.formData = formData;
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
    nextPage() {
      if (
        !(
          this.currentPage < this.formData.length - 1 ||
          this.currentQuestion < this.formData[this.currentPage].length - 1
        )
      )
        return;
      if (this.currentQuestion < this.formData[this.currentPage].length - 1) {
        this.currentQuestion++;
      } else {
        this.currentQuestion = 0;
        this.currentPage++;
      }
      this.scrollToTop();
      // if (this.$refs.nextbtn && this.currentPage == 0) this.$refs.nextbtn.focus()
      // if (this.$refs.prevbtn && this.currentPage == this.formData.length - 1) this.$refs.prevbtn.focus()
    },
    prevPage() {
      if (!(this.currentPage > 0 || this.currentQuestion > 0)) return;
      if (this.currentQuestion > 0) {
        this.currentQuestion--;
      } else {
        this.currentPage--;
        this.currentQuestion = this.formData[this.currentPage].length - 1;
      }
      this.scrollToTop();
    },
  },
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
  // color: white
}

button {
  background: #009688;
  // box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  border: none;
  padding: 20px 30px;
  font-size: 1rem;
  // font-family: canada-type-gibson, Helvetica, Arial, sans-serif;
  border-radius: 50px;
  font-weight: 800;
  cursor: pointer;
  color: white;

  &:hover {
    background: #00695c;
  }
}

.footer {
  .footer-nav {
    max-width: 1000px;
    padding: 0 50px;
    box-sizing: border-box;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .page-num {
    margin: 10px auto;
  }
}

@media only screen and (max-width: 600px) {
  .footer {
    .footer-nav {
      max-width: 100%;
    }

    button {
      // padding: 25px 15px;
    }
  }
}
</style>

