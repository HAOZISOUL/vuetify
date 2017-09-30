<template>
  <v-app id="example-3" toolbar>
    <v-navigation-drawer permanent clipped light>
      <v-list>
        <v-list-group v-for="item in items" :value="item.title" v-bind:key="item.title">
          <v-list-tile slot="item" @click="" :to="item.path">
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action v-if="item.items">
              <v-icon>keyboard_arrow_down</v-icon>
            </v-list-tile-action>
          </v-list-tile>
          <v-list-tile v-for="subItem in item.items" v-bind:key="subItem.title" @click="" :to="subItem.path">
            <v-list-tile-content>
              <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-icon>{{ subItem.icon }}</v-icon>
            </v-list-tile-action>
          </v-list-tile>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar class="teal" dark fixed>
      <v-toolbar-title>Toolbar</v-toolbar-title>
    </v-toolbar>
    <main>

      <v-container fluid>
        <router-view></router-view>
        <!--v-router-->
      </v-container>
    </main>
  </v-app>
</template>
<script>
  export default {
    data () {
      return {
        drawer: null,
//        items: [
//          { title: 'Home', icon: 'dashboard', path: 'Start' },
//          { title: 'About', icon: 'question_answer', path: 'Menus' }
//        ],
        items: [
          {
            title: 'Home',
            icon: 'dashboard',
            path: 'Start'
          },
          {
            title: 'About',
            icon: 'question_answer',
            path: 'Menus'
          },
          {
            icon: 'local_activity',
            title: 'Attractions',
            items: [
              { title: 'List Item', path: 'Person' }
            ]
          },
          {
            icon: 'restaurant',
            title: 'Dining',
            active: false,
            items: [
              { title: 'Breakfast & brunch' },
              { title: 'New American' },
              { title: 'Sushi' }
            ]
          },
          {
            icon: 'school',
            title: 'Education',
            items: [
              { title: 'List Item' }
            ]
          },
          {
            icon: 'directions_run',
            title: 'Family',
            items: [
              { title: 'List Item' }
            ]
          },
          {
            icon: 'healing',
            title: 'Health',
            items: [
              { title: 'List Item' }
            ]
          },
          {
            icon: 'content_cut',
            title: 'Office',
            items: [
              { title: 'List Item' }
            ]
          },
          {
            icon: 'local_offer',
            title: 'Promotions',
            items: [
              { title: 'List Item' }
            ]
          }
        ],
        right: null
      }
    }
  }
</script>


