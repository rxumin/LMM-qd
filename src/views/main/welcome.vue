<template>
  <a-layout id="components-layout-demo-top-side-2">
        <a-layout>
          <a-layout-content
              :style="{ background: 'rgb(97,189,210)', padding: '24px', margin: 0, height: '110px' }"
          >

            <p class="head" style="font-weight: bold; font-family: Roboto; color: white">
              <img src="../../../public/p1.svg" alt="#">
              iCosmosAI-X</p>
<!--            <router-view></router-view>-->
          </a-layout-content>
        </a-layout>
    <the-header-view></the-header-view>

  <div class="box">
    <div class="box1">
      <div class="welcome">
        <h1 style="color: rgb(232,156,130); font-weight: bold">Welcome to the iCosmosAI-X</h1>
        <div class="content">&nbsp;&nbsp;&nbsp;iCosmosAI-X database contained neoantigen peptide vaccines and antigen peptides for 33 tumor types and was divided into three confidence levels based on set thresholds. In addition, the database integrated a set of predictive analytics tools.</div>
      </div>
      <div class="input">
        <h1 style="color: rgb(232,156,130); font-weight: bold">Database Architecture</h1>
<!--        <a-textarea :rows="4" placeholder="maxlength is 6" :maxlength="6" />-->
        <img src="../../assets/1.png" alt="#" class="p1">
      </div>
      <div class="data">
          <h1 style="color: rgb(232,156,130); font-weight: bold">Data Summary</h1>
          <a-table :columns="columns" :data-source="data" @change="onChange" />
      </div>
    </div>
    <div class=box2>
      <h1 style="color: rgb(232,156,130); font-weight: bold" >Tumor type</h1>
      <table>
        <thead>
        <tr>
          <th>Tumor</th>
          <th>中文名称</th>
          <th>Tumor</th>
          <th>中文名称</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>ACC</td>
          <td>肾上腺皮质癌</td>
          <td>BLCA</td>
          <td>膀胱癌尿路上皮癌</td>
        </tr>
        <tr>
          <td>BRCA</td>
          <td>乳腺浸润癌</td>
          <td>CESC</td>
          <td>宫颈鳞癌和腺癌</td>
        </tr>
        <tr>
          <td>CHOL</td>
          <td>胆囊癌</td>
          <td>COAD</td>
          <td>结肠癌</td>
        </tr>
        <tr>
          <td>DLBC</td>
          <td>弥漫性大B细胞淋巴瘤</td>
          <td>ESCA</td>
          <td>食管癌</td>
        </tr>
        <tr>
          <td>GBM</td>
          <td>多形成性胶质细胞瘤</td>
          <td>HNSC</td>
          <td>头颈鳞状细胞癌</td>
        </tr>
        <tr>
          <td>KICH</td>
          <td>肾嫌色细胞癌</td>
          <td>PRAD</td>
          <td>前列腺癌</td>
        </tr>
        <tr>
          <td>SARC</td>
          <td>肉瘤</td>
          <td>STAD</td>
          <td>胃癌</td>
        </tr>
        <tr>
          <td>THCA</td>
          <td>甲状腺癌</td>
          <td>UCEC</td>
          <td>子宫内膜癌</td>
        </tr>
        <tr>
          <td>UVM</td>
          <td>葡萄膜黑色素瘤</td>
          <td>KIRC</td>
          <td>肾透明细胞癌</td>
        </tr>
        <tr>
          <td>KIRP</td>
          <td>肾乳头状细胞癌</td>
          <td>LAML</td>
          <td>急性髓系细胞样白血病</td>
        </tr>
        <tr>
          <td>LGG</td>
          <td>脑低级别胶质瘤</td>
          <td>LIHC</td>
          <td>肝细胞癌</td>
        </tr>
        <tr>
          <td>LUAD</td>
          <td>肺腺癌</td>
          <td>LUSC</td>
          <td>肺鳞癌</td>
        </tr>
        <tr>
          <td>MESO</td>
          <td>间皮瘤</td>
          <td>OV</td>
          <td>卵巢浆液性囊腺癌</td>
        </tr>
        <tr>
          <td>PAAD</td>
          <td>胰腺癌</td>
          <td>PCPG</td>
          <td>嗜铬细胞瘤和副神经节瘤</td>
        </tr>
        <tr>
          <td>READ</td>
          <td>直肠癌</td>
          <td>SKCM</td>
          <td>皮肤黑色素瘤</td>
        </tr>
        <tr>
          <td>TGCT</td>
          <td>睾丸癌</td>
          <td>THYM</td>
          <td>胸腺癌</td>
        </tr>
        <tr>
          <td>UCS</td>
          <td>子宫肉瘤</td>
        </tr>
        <!-- Add more rows as needed -->
        </tbody>
      </table>
      <div class="map-container">
        <iframe src="/map.html" class="map-iframe" frameborder="0" width="300" height="300" scrolling="no"></iframe>
      </div>
    </div>

    </div>
    <div class="footer">

      <p style=" font-style: italic">Copyright 2023 — HTAPVD. All rights reserved.</p>
      <p style="font-weight: bold;font-style: italic">Powered by Manman Lu, Minrui Xu, Lu Xie</p>
      <a-divider></a-divider>
    </div>
  </a-layout>
</template>
<script>
import { defineComponent } from 'vue';
import TheHeaderView from "@/components/the-header-welcome.vue";

export default defineComponent({
  components: {TheHeaderView},
  setup() {
    const columns = [
      {
        title: 'Tumor',
        dataIndex: 'Tumor',
      },
      {
        title: 'Total peptides',
        dataIndex: 'Totalpeptides',
        sorter: {
          compare: (a, b) => a.Totalpeptides - b.Totalpeptides,
          multiple: false,
        },
      },
      {
        title: 'High Confidence',
        dataIndex: 'HC',
        sorter: {
          compare: (a, b) => a.HC - b.HC,
          multiple: false,
        },
      },
      {
        title: 'Medium Confidence',
        dataIndex: 'MC',
        sorter: {
          compare: (a, b) => a.MC - b.MC,
          multiple: false,
        },
      },
      {
        title: 'Low Confidence',
        dataIndex: 'LC',
        sorter: {
          compare: (a, b) => a.LC - b.LC,
          multiple: false,
        },
      },
    ];
    const data = [
      {
        key: '1',
        Tumor: 'BRCA',
        Totalpeptides: 58389,
        HC: 12025,
        MC: 28669,
        LC: 17695
      },
      {
        key: '2',
        Tumor: 'COAD',
        Totalpeptides: 14168,
        HC: 30412,
        MC: 70082,
        LC: 41186
      },
      {
        key: '3',
        Tumor: 'ESCA',
        Totalpeptides: 65028,
        HC: 13343,
        MC: 31673,
        LC: 20012
      },
      {
        key: '4',
        Tumor: 'GBM',
        Totalpeptides: 44152,
        HC: 9533,
        MC: 21863,
        LC: 12756
      },{
        key: '5',
        Tumor: 'LIHC',
        Totalpeptides: 93259,
        HC: 19527,
        MC: 45471,
        LC: 28261
      },
      {
        key: '6',
        Tumor: 'LUSC',
        Totalpeptides: 219367,
        HC: 49585,
        MC: 106138,
        LC: 63644
      },
      {
        key: '7',
        Tumor: 'OV',
        Totalpeptides: 87168,
        HC: 18071,
        MC: 42406,
        LC: 26691
      },
      {
        key: '8',
        Tumor: 'PAAD',
        Totalpeptides: 56464,
        HC: 11885,
        MC: 27644,
        LC: 10935
      },
      {
        key: '9',
        Tumor: 'READ',
        Totalpeptides: 56464,
        HC: 11885,
        MC: 27644,
        LC: 10935
      },
      {
        key: '10',
        Tumor: 'SKCM',
        Totalpeptides: 252843,
        HC: 58097,
        MC: 123010,
        LC: 71736
      },
      {
        key: '11',
        Tumor: 'STAD',
        Totalpeptides: 44152,
        HC: 9533,
        MC: 21863,
        LC: 12756
      },
      {
        key: '12',
        Tumor: 'HNSC',
        Totalpeptides: 68888,
        HC: 14890,
        MC: 20046,
        LC: 33952
      },
      {
        key: '13',
        Tumor: 'LUAD',
        Totalpeptides: 385621,
        HC: 80040,
        MC: 188174,
        LC: 117407
      },
    ];
    function onChange(pagination, filters, sorter, extra) {
      console.log('params', pagination, filters, sorter, extra);
    }
    return {
      columns,
      data,
      onChange
    };

  },
});



</script>
<style>
.p1{
  width: 1000px;

}
.map-container{

  margin-left: 100px;
}
table:first-child {
  background-color: GhostWhite;
  border-collapse: collapse;
  width: 100%;

}
.ant-table-thead > tr > th{
  text-align: center;
}
th{
  text-align: center;
  padding: 18px;
}
td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;

}

th {
  background-color: #f2f2f2;
}
#components-layout-demo-top-side-2 .head{
  text-align: center;
  margin: 0 auto;
  font-size: 30px;
}
.box1{
  //background-color: dodgerblue;
  float: left;
}
.welcome{
  margin-top: 50px;
  margin-left: 50px;
}
.welcome h1{
  color: darkred;
}
.welcome .content{
  font-family:'sans-serif';
  font-size: 20px;
  width: 1000px;
}
.input{
  //background-color: skyblue;
  margin-left: 50px;
  margin-top: 50px;
}
.input h1{
  color: darkred;
}
.data{
  margin-left: 50px;
  margin-top: 50px;
}
.data h1{
  color: darkred;
}
.box2{
  margin-top: 50px;
  margin-left: 70px;
  //background-color: red;
  float: left;
}
.box2 img{
  width: 550px;
}
.footer{
  //background-color: darkred;
  //margin-left: 50px;
  margin: 0 auto;
  margin-top: 20px;
}
</style>
