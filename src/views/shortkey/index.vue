<template>
  <div class="shortkey">
    <h1>Shortkey</h1>
    <button v-shortkey="['meta', 's']" @shortkey="onKeyPress">commond + s</button>
    <div class="arrow">
      <div class="arrow-control">
      <button class="arrow-up" v-shortkey="['arrowup']" @shortkey="onKeyPress">&#8679;</button>
      <button class="arrow-right" v-shortkey="['arrowright']" @shortkey="onKeyPress">&#8680;</button>
      <button class="arrow-down" v-shortkey="['arrowdown']" @shortkey="onKeyPress">&#8681;</button>
      <button class="arrow-left" v-shortkey="['arrowleft']" @shortkey="onKeyPress">&#8678;</button>
      </div>
    </div>
    <div class="active">
      <div class="active-text">Key: <strong>{{activeKey}}</strong></div>
      <div class="active-text">KeyCode: <strong>{{activeKeyCode}}</strong></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'shortkey',
  data () {
    return {
      activeKey: 'null',
      activeKeyCode: 'null',
    };
  },
  methods: {
    onKeyPress (e) {
      console.log('===onKeyPress===', e.target, e);
      e.target.focus();
      // alert('保存吗');
    },
  },
  mounted () {
    // 监听按键
    this._keyListener = (e) => {
      // console.log('===e===', e);
      this.activeKey = e.key;
      this.activeKeyCode = e.keyCode;
    };
    document.addEventListener('keydown', this._keyListener.bind(this));
  },
  beforeDestroy () {
    document.removeEventListener('keydown', this._keyListener);
  }
};
</script>

<style scoped>
.active {
  margin: 15px;
  padding: 15px;
  border: 1px solid #ddd;
}
.active-text {
  font-size: 20px;
}
.active-text strong {
  font-weight: bold;
  color: red;
}
.active-text + .active-text {
  margin-top: 10px;
}
.arrow {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 15px;
  padding: 15px;
  border: 1px solid #ddd;
}
.arrow-control {
  position: relative;
  width: 110px;
  height: 110px;
}
.arrow-control > button {
  position: absolute;
  width: 50px;
  height: 50px;
  font-size: 25px;
}
.arrow-up {
  top:0;
  left: 50%;
  margin-left: -25px;
}
.arrow-down {
  bottom:0;
  left: 50%;
  margin-left: -25px;
}
.arrow-left {
  left:-30px;
  top: 50%;
  margin-top: -25px;
}
.arrow-right {
  right:-30px;
  top: 50%;
  margin-top: -25px;
}
</style>
