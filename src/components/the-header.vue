<template>

<!--  <a-layout-header class="header">-->
<!--    <div class="logo">-->
<!--      <router-link to="/welcome" style="color: white; font-size: 18px">-->
<!--        HTAPVD-->
<!--      </router-link>-->
<!--    </div>-->
<!--    <div style="float: right; color: white;">-->
<!--      欢迎使用-->
<!--    </div>-->
    <a-menu
        v-model:selectedKeys="selectedKeys"
        theme="light"
        mode="horizontal"
        :style="{ lineHeight: '64px'}"
    >
      <a-menu-item key="/welcome">
        <router-link to="/welcome">
          <BankOutlined /> &nbsp;首页
        </router-link>
      </a-menu-item>
      <a-menu-item key="/all">
        <router-link to="/all">
          <BarsOutlined /> &nbsp; 查询
        </router-link>
      </a-menu-item>

      <a-menu-item key="/fxgj">
        <router-link to="/fxgj">
          <ForkOutlined /> &nbsp; 分析工具
        </router-link>
      </a-menu-item>
    </a-menu>
<!--  </a-layout-header>-->
</template>

<script>
import {defineComponent, ref, watch} from 'vue';
import router from '@/router'

export default defineComponent({
  name: "the-header-view",
  setup() {
    const selectedKeys = ref([]);

    watch(() => router.currentRoute.value.path, (newValue) => {
      console.log('watch', newValue);
      selectedKeys.value = [];
      selectedKeys.value.push(newValue);
    }, {immediate: true});
    return {
      selectedKeys
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header{
  font-weight: bold;
  font-family: Roboto;
  color: white;
   margin: 0 auto;
}
.logo {
  float: left;
  height: 31px;
  width: 150px;
  color: white;
  font-size: 20px;
}

</style>
