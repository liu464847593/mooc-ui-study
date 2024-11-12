<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Demo/>
    <m-card img-src="java.png" summary="剑指Java面试-off直通车 百度资深面试官授课"/>
    <br>
    <m-card img-src="c.png" summary="C语言系统化精讲 重塑编程思想 打造坚实的开发基础">
      <template v-slot:footer>
        <div class="footer">
          <div class="level">中级 528人报名</div>
          <div class="price">￥299.00</div>
        </div>
      </template>
    </m-card>
    <br>
    <m-card img-src="spring.png" :width="370" :img-height="90">
      Spring Cloud Alibaba微服务从入门到进阶
      <template v-slot:footer>
        <div class="footer-spring">
          <div class="level">4步骤 6门课</div>
          <div class="price">10965收藏</div>
        </div>
      </template>
    </m-card>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.footer{
  padding: 8px;
  font-size: 12px;
  text-align: left;
}
.level{
  color: #9199A1;
  margin-bottom: 8px;
}
.price{
  color: #F01414;
}
.footer-spring{
  display: flex;
  justify-content: space-between;
  padding: 0 8px;
  font-size: 12px;
}
</style>
