var app = new Vue({
    el: '#app',
    data: function() {
      return {
        isLoading: true,
        loadingMessage: "Loading...",
        currentTab: "nodes",
      }
    },
    mounted: function() {
      var me = this;
      axios.get('http://localhost:8888/nodes.json').then(function(response) {
        me.setData(response);
        me.nodes = response;
        if (this.isLoading) {
          currentTab = "groups";
          isLoading = false;
        }
      });
      axios.get('http://localhost:8888/groups.json').then(function(response) {
        me.groups = response;
        if (this.isLoading) {
          currentTab = "nodes";
          isLoading = false;
        }
      });
    },
  });
