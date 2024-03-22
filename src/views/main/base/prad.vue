<template>
  <p>
    <a-space>
      <a-button type="primary" @click="handleQuery()">刷新</a-button>
      <a-button type="primary" @click="onAdd">按条件查询</a-button>
<!--      <div class="div1">-->
<!--        <p>可供查询的条件：</p>-->
<!--      </div>-->
      <div>
        <a-tag color="orange" class="div2">MHC</a-tag>
        <a-tag color="red" class="div2">Peptide</a-tag>
        <a-tag color="blue" class="div2">mutation</a-tag>
        <a-tag color="purple" class="div2">gene</a-tag>
        <a-tag color="cyan" class="div2">confidence</a-tag>
      </div>
    </a-space>
  </p>
  <a-table :dataSource="stations"
           :columns="columns"
           :pagination="pagination"
           @change="handleTableChange"
           :loading="loading">
    <template #bodyCell="{ column, record }">
      <template v-if="column.dataIndex === 'operation'">
        <a-space>
          <a-popconfirm
              title="删除后不可恢复，确认删除?"
              @confirm="onDelete(record)"
              ok-text="确认" cancel-text="取消">
            <a style="color: red">删除</a>
          </a-popconfirm>
          <a @click="onEdit(record)">编辑</a>
        </a-space>
      </template>
    </template>
  </a-table>
  <a-modal v-model:visible="visible" title="选取条件查询（不需要查询的为空）" @ok="handleOk"
           ok-text="确认" cancel-text="取消">
    <a-form :model="station" :label-col="{span: 4}" :wrapper-col="{ span: 20 }">
      <a-form-item label="MHC">
        <a-input v-model:value="station.mhc" />
      </a-form-item>
      <a-form-item label="Peptide">
        <a-input v-model:value="station.peptide"/>
      </a-form-item>
      <a-form-item label="Mutation">
        <a-input v-model:value="station.mutation"/>
      </a-form-item>
      <a-form-item label="Gene">
        <a-input v-model:value="station.gene"/>
      </a-form-item>
      <a-form-item label="Confidence">
        <a-input v-model:value="station.confidence"/>
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script>
import { defineComponent, ref, onMounted, watch } from 'vue';
import {notification} from "ant-design-vue";
import axios from "axios";
import {pinyin} from "pinyin-pro";
export default defineComponent({
  name: "station-view",
  setup() {
    const visible = ref(false);
    let station = ref({
      mhc: undefined,
      peptide: undefined,
      mutation: undefined,
      gene: undefined,
      confidence: undefined,
      page: undefined,
      size: undefined
    });
    const stations = ref([]);
    // 分页的三个属性名是固定的
    const pagination = ref({
      total: 0,
      current: 1,
      pageSize: 30,
    });
    let loading = ref(false);
    const columns = [
      {
        title: 'Cancer',
        dataIndex: 'cancer',
        key: 'Cancer',
      },
    {
      title: 'MHC',
      dataIndex: 'mhc',
      key: 'mhc',
    },
    {
      title: 'Peptide',
      dataIndex: 'peptide',
      key: 'peptide',
    },
    {
      title: 'Aff.nM.',
      dataIndex: 'affNm',
      key: 'Aff_nM_',
    },
    {
      title: 'X.Rank_EL',
      dataIndex: 'xrankEl',
      key: 'X_Rank_EL',
    },
    {
      title: 'BindLevel',
      dataIndex: 'bindlevel',
      key: 'bindlevel',
    },
    {
      title: 'gene',
      dataIndex: 'gene',
      key: 'gene',
    },
    {
      title: 'AAc',
      dataIndex: 'aac',
      key: 'AAc',
    },
    {
      title: 'mut_pos',
      dataIndex: 'mutPos',
      key: 'mut_pos',
    },
    {
    title: 'cDNA',
    dataIndex: 'cdna',
    key: 'cDNA',
    },
    {
    title: 'mutation',
    dataIndex: 'mutation',
    key: 'mutation',
    },
    {
    title: 'identity',
    dataIndex: 'identity',
    key: 'identity',
    },
    {
    title: 'wt_Peptide',
    dataIndex: 'wtPeptide',
    key: 'wtPeptide',
    },
    {
      title: 'comMut_peptide',
      dataIndex: 'commutPeptide',
      key: 'comMut_peptide',
    },
    {
      title: 'GRAVY',
      dataIndex: 'gravy',
      key: 'GRAVY',
    },
    {
      title: 'charge',
      dataIndex: 'charge',
      key: 'charge',
    },
    {
      title: 'length',
      dataIndex: 'length',
      key: 'length',
    },
    {
      title: 'immuno_score',
      dataIndex: 'immunoScore',
      key: 'immuno_score',
    },
      {
        title: 'qseq',
        dataIndex: 'qseq',
        key: 'qseq',
      },
      {
        title: 'sacc',
        dataIndex: 'sacc',
        key: 'sacc',
      },
      {
        title: 'sseq',
        dataIndex: 'sseq',
        key: 'sseq',
      },
      {
        title: 'evalue',
        dataIndex: 'evalue',
        key: 'evalue',
      },
      {
        title: 'pident',
        dataIndex: 'pident',
        key: 'pident',
      },
      {
        title: 'confidence',
        dataIndex: 'confidence',
        key: 'confidence',
      },
      {
        title: 'Sample_mut16',
        dataIndex: 'sampleMut16',
        key: 'Sample_mut16',
      },
      {
        title: 'Exp_Avg',
        dataIndex: 'expAvg',
        key: 'Exp_Avg',
      },
      {
        title: 'blast_length',
        dataIndex: 'blastLength',
        key: 'blast_length',
      }

    ];

    // http://pinyin-pro.cn/
    watch(() => station.value.name, ()=>{
      if (Tool.isNotEmpty(station.value.name)) {
        station.value.namePinyin = pinyin(station.value.name, { toneType: 'none'}).replaceAll(" ", "");
        station.value.namePy = pinyin(station.value.name, { pattern: 'first', toneType: 'none'}).replaceAll(" ", "");
      } else {
        station.value.namePinyin = "";
        station.value.namePy = "";
      }
    }, {immediate: true});

    const onAdd = () => {
      station.value = {};
      visible.value = true;
    };

    const onEdit = (record) => {
      station.value = window.Tool.copy(record);
      visible.value = true;
    };

    const onDelete = (record) => {
      axios.delete("/business/admin/station/delete/" + record.id).then((response) => {
        const data = response.data;
        if (data.success) {
          notification.success({description: "删除成功！"});
          handleQuery({
            page: pagination.value.current,
            size: pagination.value.pageSize,
          });
        } else {
          notification.error({description: data.message});
        }
      });
    };

    const handleOk = () => {
      loading.value = true;
      station.value.page = 1
      station.value.size = 30
      axios.post("/PRAD/queryByCondition", station.value).then((response) => {
        let data = response.data;
        // console.log('查询的',data)
        if (data.success) {
          notification.success({description: "查询成功！"});
          stations.value = data.content.list;
          visible.value = false;
          loading.value = false;
          pagination.value.current = 1;
          pagination.value.total = data.content.total;
          // handleQuery({
          //   page: pagination.value.current,
          //   size: pagination.value.pageSize
          // });
        } else {
          notification.error({description: data.message});
        }
      });
    };


    const handleQuery = (param) => {
      if (!param) {
        param = {
          page: 1,
          size: pagination.value.pageSize
        };
      }
      loading.value = true;
      axios.get("/PRAD/queryByCancer", {
        params: {
          page: param.page,
          size: param.size
        }
      }).then((response) => {
        loading.value = false;

        let data = response.data;
        if (data.success) {
          stations.value = data.content.list;
          // console.log(data.content.list)
          // 设置分页控件的值
          pagination.value.current = param.page;
          pagination.value.total = data.content.total;
        } else {
          notification.error({description: data.message});
        }
      });
    };

    const handleTableChange = (pagination) => {
      // console.log("看看自带的分页参数都有啥：" + pagination);
      handleQuery({
        page: pagination.current,
        size: pagination.pageSize
      });
    };

    onMounted(() => {
      handleQuery({
        page: 1,
        size: pagination.value.pageSize
      });
    });

    return {
      station,
      visible,
      stations,
      pagination,
      columns,
      handleTableChange,
      handleQuery,
      loading,
      onAdd,
      handleOk,
      onEdit,
      onDelete
    };
  },
});
</script>
<style>
  .div2{
    font-size: 18px;
  }
</style>