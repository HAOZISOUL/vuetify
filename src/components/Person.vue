<template>
  <v-card>
    <v-card-content>
      <v-data-table
        v-bind:headers="headers"
        v-bind:items="items"
        v-bind:search="search"
        v-model="selected"
        selected-key="name"
        select-all
        class="elevation-1"
      >
        <template slot="headerCell" scope="props">
          <span v-tooltip:bottom="{ 'html': props.header.text }">
            {{ props.header.text }}
          </span>
        </template>
        <template slot="items" scope="props">
          <td>
            <v-checkbox
              primary
              hide-details
              v-model="props.selected"
            ></v-checkbox>
          </td>
          <td>{{ props.item.name }}</td>
          <td class="text-xs-left">{{ props.item.id }}</td>
          <!--<td class="text-xs-right">{{ props.item.name }}</td>-->
          <td class="text-xs-left">{{ props.item.age }}</td>
          <td class="text-xs-left">{{ props.item.sex | sexFilter }}</td>
          <td class="text-xs-left">{{ props.item.phone }}</td>
        </template>
      </v-data-table>
      <v-layout row justify-center>
        <v-btn primary @click="edit">新增</v-btn>
        <v-btn secondary @click="edit">修改</v-btn>
        <v-btn secondary @click="remove">删除</v-btn>
      </v-layout>
      </v-card-content>
  </v-card>
</template>
<script>
  export default {
    data () {
      return {
        search: '',
        selected: [],
        headers: [
          {
            text: '姓名',
            align: 'left',
            sortable: true,
            value: 'name'
          },
          { text: 'ID', align: 'left', value: 'id' },
//          { text: '姓名', value: 'name' },
          { text: '年龄', align: 'left', value: 'age' },
          { text: '性别', align: 'left', value: 'sex' },
          { text: '手机', align: 'left', value: 'phone' }
        ],
        items: []
      }
    },
    beforeRouteEnter (to, from, next) {
      next(vm => {
        console.log('loadding data..')
        vm.$http.get('/static/person.json').then(response => {
          console.log('loaded.')
          vm.items = response.body
        })
      })
    },
    filters: {
      sexFilter: function (i) {
        return {'1': '女', '0': '男'}[i]
      }
    }

  }
</script>
