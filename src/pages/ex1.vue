<template>
  <div>
      <button class="btn btn-primary" @click="presentIt"> present it</button>
    <div class="panel" v-show="show" ref="panel">
    <h1>Header</h1>
    <p hide-on-bottom>Content</p>
  </div>
  </div>
</template>
<script>
import { CupertinoPane } from "cupertino-pane";
export default {
  data() {
    return {
      settings: {
        //   fitHeight:true,
        initialBreak:'bottom',
          
          
          bottomClose: true,
          
          
          
          
        //   onBackdropTap: () => bulletin.destroy({animate: true})
        // });
      },
      drawer: {},
      show:false
    };
  },
  mounted() {
    let elem = this.$refs['panel']
    let height = window.getComputedStyle(elem)
    height = height.getPropertyValue('height');
    console.log(height)
  },
  methods: {
      presentIt(){
          
          this.drawer = new CupertinoPane(".panel", this.settings);
    setTimeout(() => this.drawer.present({ animate: true }));
      },
    presentDrawer() {
      this.drawer.present({ animate: true });
    },
    destroyDrawer() {
      this.drawer.destroy({ animate: true });
    },
    hideDrawer() {
      this.drawer.hide();
    },
    isHiddenDrawer() {
      console.log(this.drawer.isHidden());
    },
  },
};
</script>
<style></style>
