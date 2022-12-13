<template>
  <div class="page-main">
    <div class="top-content">
      <a-tabs type="card">
        <a-tab-pane :tab="prop.title" key="1"></a-tab-pane>
      </a-tabs>
    </div>
    <div class="page-content">
      <div class="search-content">
        <slot name="search"></slot>
      </div>
      <div class="content">
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { reactive, defineComponent } from 'vue';
import { Tabs, TabPane } from 'ant-design-vue';

export default defineComponent({
  components: {
    'a-tabs': Tabs,
    'a-tab-pane': TabPane
  },
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    const prop = reactive(props);
    return {
      prop
    };
  }
});
</script>



<style lang="less" scoped>

.page-main {
  position: relative;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.top-content {
  position: absolute;
  top: 0px;
  z-index: 999;
  /deep/ .ant-tabs-top > .ant-tabs-nav {
    margin: 0;
  }
  /deep/ .ant-tabs-card.ant-tabs-top > .ant-tabs-nav .ant-tabs-tab-active {
    background-color: #f7f8fa;
    border-right: 1px solid #cacdd4;
    border-bottom: 1px solid #f7f8fa;
    
  }
  /deep/ .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    color: #707a88;
  }
}
.page-content {
  position: absolute;
  top: 39px;
  width: 100%;
  height: calc(100vh - 40px);
  
  z-index: 1;
  display: flex;
  flex-direction: column;
  .search-content {
    display: flex;
    align-items: center;
    padding: 16px 24px;
    background-color: #f7f8fa;
    border-top: 1px solid #cacdd4;
    border-bottom: 1px solid #cacdd4;
    color: #8E96A1;
    /deep/ .ant-picker-range {
      max-width: 342px;
      margin-right: 3%;
    }
    /deep/ .ant-input {
      max-width: 200px;
      margin-right: 3%;
    }
  }
  .content {
    flex: 1;
  }
}
</style>
