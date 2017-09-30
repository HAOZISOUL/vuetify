<!--<template>-->
<!--<div id="app">-->
<!--&lt;!&ndash;<img src="./assets/logo.png">&ndash;&gt;-->
<!--<router-view></router-view>-->
<!--</div>-->
<!--</template>-->

<!--<script>-->
<!--export default {-->
<!--name: 'app'-->
<!--}-->
<!--</script>-->

<!--<style>-->
<!--#app {-->
<!--font-family: 'Avenir', Helvetica, Arial, sans-serif;-->
<!-- -webkit-font-smoothing: antialiased;-->
<!-- -moz-osx-font-smoothing: grayscale;-->
<!--text-align: center;-->
<!--color: #2c3e50;-->
<!--margin-top: 60px;-->
<!--}-->
<!--</style>-->

<template>
  <v-app id="example-3" toolbar>
    <v-navigation-drawer permanent clipped light>
      <v-list dense class="pt-0">
        <v-list-tile v-for="item in items" :key="item.title" @click="" :to="item.path">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
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
              { title: 'List Item' }
            ]
          },
          {
            icon: 'restaurant',
            title: 'Dining',
            active: true,
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


