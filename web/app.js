Vue.config.devtools = true;

var Node = Vue.component('Node', {
  template: `
    <span>{{ name }}</span>
  `,
  props: [
    'name',
  ]
});

var Group = Vue.component('Group', {
  template: `
    <span>Group {{ id }}</span>
  `,
  props: [
    'id',
  ]
})

var app = new Vue({
    el: '#app',
    data: function() {
      return {
        isLoading: true,
        loadingMessage: "Loading...",
        currentTab: "nodes",
        nodes: {},
        groups: {},
      }
    },
    mounted: function() {
      var me = this;
      axios.get('http://localhost:8888/nodes.json').then(function(response) {
        me.nodes = response.data;
        if (me.isLoading) {
          me.currentTab = "groups";
          me.isLoading = false;
        }
      });
      axios.get('http://localhost:8888/groups.json').then(function(response) {
        me.groups = response.data;
        if (me.isLoading) {
          me.currentTab = "nodes";
          me.isLoading = false;
        }
      });
    },
    methods: {
      showNodes: function() {
        this.currentTab = "nodes";
      },
      showGroups: function() {
        this.currentTab = "groups";
      }
    }
  });
