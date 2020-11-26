<template>
  <div class="list">
    <table class="data-table">
      <thead>
        <tr class="list-header">
          <th>
            <a>TODO_PLACEHOLDR</a>
          </th>
          <th>
            <a>TODO_PLACEHOLDR</a>
          </th>
          <th>
            <a>TODO_PLACEHOLDR</a>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr class="list-item">
          <td>TODO_PLACEHOLDR</td>
          <td>TODO_PLACEHOLDR</td>
          <td>TODO_PLACEHOLDR</td>
        </tr>

        <tr class="list-item">
          <td>TODO_PLACEHOLDR</td>
          <td>TODO_PLACEHOLDR</td>
          <td>TODO_PLACEHOLDR</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';

import { DataTableMetaData } from './data-table-meta-data';

export default Vue.extend({
  name: 'MyDataTable',
});
</script>

<style scoped>
.list {
  margin: 0 10px 10px;
  padding: 10px 0;
}

.list table {
  width: 100%;
  border: 1px solid #777;
}

.list .list-item:nth-child(even) {
  background-color: #ececec;
}

.list .list-item:hover {
  cursor: pointer;
  background-color: #e7e7e7;
}

.list .list-item:hover:nth-child(odd) {
  background-color: #b7b7b7;
}

.list .list-item.highlighted,
.list .list-item.highlighted:hover:nth-child(odd) {
  background-color: paleturquoise;
}

.list .list-header a {
  color: #3388ff;
  cursor: pointer;
}

.list .list-header .selected {
  font-weight: bold;
}
</style>
