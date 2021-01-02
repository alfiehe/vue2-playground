import Vue from 'vue';
const eventHub = new Vue();

Vue.mixin({
  data: function () {
    return {
      eventHub: eventHub,
      eventNames: []
    };
  },
  methods: {
    $bindEvent (eventName, handler) {
      this.eventNames.push(eventName);
      this.eventHub.$on(eventName, handler);
    }
  },
  beforeDestroy () {
    for (let name of this.eventNames) {
      this.eventHub.$off(name);
    }
  }
});
module.exports = eventHub;
