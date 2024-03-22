<template>
  <a-layout-sider width="200" style="background: #fff">
    <a-menu
        v-model:selectedKeys="selectedKeys"
        mode="inline"
        :style="{ height: '100%', borderRight: 0 }"
    >

      <a-menu-item key="/all">
        <router-link to="/all">
          <MenuUnfoldOutlined /> &nbsp; 总体查询
        </router-link>
      </a-menu-item>

      <a-menu-item key="/syyz">
        <router-link to="/syyz">
          <MenuUnfoldOutlined /> &nbsp;实验验证靶点库
        </router-link>
      </a-menu-item>

      <a-menu-item key="/lczl">
        <router-link to="/lczl">
          <MenuUnfoldOutlined /> &nbsp;临床治疗靶点库
        </router-link>
      </a-menu-item>

      <a-sub-menu>
        <template #title>
          <span>
            <UnorderedListOutlined />
            候选预测靶点库
          </span>
        </template>
        <a-menu-item key="/acc">
          <router-link to="/base/acc">
            <MenuUnfoldOutlined /> &nbsp; ACC查询
          </router-link>
        </a-menu-item>

        <a-menu-item key="/blca">
          <router-link to="/base/blca">
            <MenuUnfoldOutlined /> &nbsp; BLCA查询
          </router-link>
        </a-menu-item>

        <a-menu-item key="/brca">
          <router-link to="/base/brca">
            <MenuUnfoldOutlined /> &nbsp; BRCA查询
          </router-link>
        </a-menu-item>

        <a-menu-item key="/cesc">
          <router-link to="/base/cesc">
            <MenuUnfoldOutlined /> &nbsp; CESC查询
          </router-link>
        </a-menu-item>

        <a-menu-item key="/chol">
          <router-link to="/base/chol">
            <MenuUnfoldOutlined /> &nbsp; CHOL查询
          </router-link>
        </a-menu-item>

        <a-menu-item key="/coad">
          <router-link to="/base/coad">
            <MenuUnfoldOutlined /> &nbsp; COAD查询
          </router-link>
        </a-menu-item>

        <a-menu-item key="/dlbc">
          <router-link to="/base/dlbc">
            <MenuUnfoldOutlined /> &nbsp; DLBC查询
          </router-link>
        </a-menu-item>

        <a-menu-item key="/esca">
          <router-link to="/base/esca">
            <MenuUnfoldOutlined /> &nbsp; ESCA查询
          </router-link>
        </a-menu-item>

        <a-menu-item key="/gbm">
          <router-link to="/base/gbm">
            <MenuUnfoldOutlined /> &nbsp; GBM查询
          </router-link>
        </a-menu-item>

        <a-menu-item key="/kich">
          <router-link to="/base/kich">
            <MenuUnfoldOutlined /> &nbsp; KICH查询
          </router-link>
        </a-menu-item>

        <a-menu-item key="/kirc">
          <router-link to="/base/kirc">
            <MenuUnfoldOutlined /> &nbsp; KIRC查询
          </router-link>
        </a-menu-item>

        <a-menu-item key="/kirc">
          <router-link to="/base/kirc">
            <MenuUnfoldOutlined /> &nbsp; KIRP查询
          </router-link>
        </a-menu-item>

        <a-menu-item key="/laml">
          <router-link to="/base/laml">
            <MenuUnfoldOutlined /> &nbsp; LAML查询
          </router-link>
        </a-menu-item>

        <a-menu-item key="/hnsc">
          <router-link to="/base/hnsc">
            <MenuUnfoldOutlined /> &nbsp; HNSC查询
          </router-link>
        </a-menu-item>

        <a-menu-item key="/lihc">
          <router-link to="/base/lihc">
            <MenuUnfoldOutlined /> &nbsp; LIHC查询
          </router-link>
        </a-menu-item>

        <a-menu-item key="/luad">
          <router-link to="/base/luad">
            <MenuUnfoldOutlined /> &nbsp; LUAD查询
          </router-link>
        </a-menu-item>

        <a-menu-item key="/lusc">
          <router-link to="/base/lusc">
            <MenuUnfoldOutlined /> &nbsp; LUSC查询
          </router-link>
        </a-menu-item>

        <a-menu-item key="/meso">
          <router-link to="/base/meso">
            <MenuUnfoldOutlined /> &nbsp; MESO查询
          </router-link>
        </a-menu-item>

        <a-menu-item key="/ov">
          <router-link to="/base/ov">
            <MenuUnfoldOutlined /> &nbsp; OV查询
          </router-link>
        </a-menu-item>

        <a-menu-item key="/paad">
          <router-link to="/base/paad">
            <MenuUnfoldOutlined /> &nbsp; PAAD查询
          </router-link>
        </a-menu-item>

        <a-menu-item key="/prad">
          <router-link to="/base/prad">
            <MenuUnfoldOutlined /> &nbsp; PRAD查询
          </router-link>
        </a-menu-item>

        <a-menu-item key="/read">
          <router-link to="/base/read">
            <MenuUnfoldOutlined /> &nbsp; READ查询
          </router-link>
        </a-menu-item>

        <a-menu-item key="/skcm">
          <router-link to="/base/skcm">
            <MenuUnfoldOutlined /> &nbsp; SKCM查询
          </router-link>
        </a-menu-item>

        <a-menu-item key="/stad">
          <router-link to="/base/stad">
            <MenuUnfoldOutlined /> &nbsp; STAD查询
          </router-link>
        </a-menu-item>

        <a-menu-item key="/uvm">
          <router-link to="/base/uvm">
            <MenuUnfoldOutlined /> &nbsp; UVM查询
          </router-link>
        </a-menu-item>


      </a-sub-menu>




    </a-menu>
  </a-layout-sider>
</template>

<script>
import {defineComponent, ref, watch} from 'vue';
import router from "@/router";

export default defineComponent({
  name: "the-sider-view",
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

</style>
