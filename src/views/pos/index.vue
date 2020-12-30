<template>
  <div class="pos">
    <div class="side"><LeftNav /></div>
    <div class="main">
      <el-row class="pos-row">
        <el-col :span="9" class="pos-order">
          <el-tabs>
            <el-tab-pane label="点餐">
              <el-table
                :data="tableData"
                border
                show-summary
                style="width: 100%"
              >
                <el-table-column prop="goodsName" label="商品" />
                <el-table-column prop="count" label="量" width="50" />
                <el-table-column prop="price" label="金额" width="70" />
                <el-table-column label="操作" width="100" fixed="right">
                  <template scope="scope">
                    <el-button type="text" size="small" @click="delGood(scope.row)">删除</el-button>
                    <el-button type="text" size="small" @click="addGood(scope.row)">增加</el-button>
                  </template>
                </el-table-column>
              </el-table>
              <div class="btns">
                <el-button type="warning">挂单</el-button>
                <el-button type="danger" @click="delAllGood">删除</el-button>
                <el-button type="success">结账</el-button>
              </div>
            </el-tab-pane>
            <el-tab-pane label="挂单">
              挂单
            </el-tab-pane>
            <el-tab-pane label="外卖">
              外卖
            </el-tab-pane>
          </el-tabs>
        </el-col>
        <!--商品展示-->
        <el-col :span="15" class="products">
          <section class="goods">
            <div class="goods-title">常用商品</div>
            <div class="goods-list">
              <ul>
                <li v-for="good in oftenGoods" @click="addGood(good)" v-bind:key="good.goodsId">
                  <span>{{ good.goodsName }}</span>
                  <span class="goods-price">￥{{ good.price }}元</span>
                </li>
              </ul>
            </div>
          </section>
          <section class="types">
            <el-tabs>
              <el-tab-pane label="汉堡">
                <ul class="cookList">
                  <li v-for="good in type0Goods" @click="addGood(good)" v-bind:key="good.goodsId">
                    <span class="foodImg"
                      ><img :src="good.goodsImg" width="100%" alt="" /></span>

                    <span class="foodName">{{ good.goodsName }}</span>
                    <span class="foodPrice">￥{{ good.price }}元</span>
                  </li>
                </ul>
              </el-tab-pane>
              <el-tab-pane label="小食">
                <ul class="cookList">
                  <li v-for="good in type1Goods" @click="addGood(good)" v-bind:key="good.goodsId">
                    <span class="foodImg"
                      ><img :src="good.goodsImg" width="100%" alt=""
                    /></span>

                    <span class="foodName">{{ good.goodsName }}</span>
                    <span class="foodPrice">￥{{ good.price }}元</span>
                  </li>
                </ul>
              </el-tab-pane>
              <el-tab-pane label="饮料">
                <ul class="cookList">
                  <li v-for="good in type2Goods" @click="addGood(good)" v-bind:key="good.goodsId">
                    <span class="foodImg"
                      ><img :src="good.goodsImg" width="100%" alt=""
                    /></span>

                    <span class="foodName">{{ good.goodsName }}</span>
                    <span class="foodPrice">￥{{ good.price }}元</span>
                  </li>
                </ul>
              </el-tab-pane>
              <el-tab-pane label="套餐">
                <ul class="cookList">
                  <li v-for="good in type3Goods" @click="addGood(good)" v-bind:key="good.goodsId">
                    <span class="foodImg"
                      ><img :src="good.goodsImg" width="100%" alt=""
                    /></span>

                    <span class="foodName">{{ good.goodsName }}</span>
                    <span class="foodPrice">￥{{ good.price }}元</span>
                  </li>
                </ul>
              </el-tab-pane>
            </el-tabs>
          </section>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import LeftNav from '../../components/pos/leftNav';
import axios from 'axios';

/**
 * 常用商品：https://www.fastmock.site/mock/0bf6a5bae7eab8507e44b56191ddff36/vuepos/oftenGoods
 * 分类商品：https://www.fastmock.site/mock/0bf6a5bae7eab8507e44b56191ddff36/vuepos/typeGoods
 */

export default {
  name: 'Pos',
  components: {
    LeftNav
  },
  data () {
    return {
      totalCount: 0,
      totalMoney: 0,
      tableData: [],
      oftenGoods: [],
      type0Goods: [],
      type1Goods: [],
      type2Goods: [],
      type3Goods: []
    };
  },
  computed: {},
  created () {
    axios
      .get(
        'https://www.fastmock.site/mock/0bf6a5bae7eab8507e44b56191ddff36/vuepos/oftenGoods'
      )
      .then(res => {
        console.log('===get oftenGoods===res===', res);
        this.oftenGoods = res.data.oftenGoods;
      })
      .catch(err => {
        console.log('===get oftenGoods===err===', err);
      });
    axios
      .get(
        'https://www.fastmock.site/mock/0bf6a5bae7eab8507e44b56191ddff36/vuepos/typeGoods'
      )
      .then(res => {
        console.log('===get typeGoods===res===', res);
        this.type0Goods = res.data.data[0];
        this.type1Goods = res.data.data[1];
        this.type2Goods = res.data.data[2];
        this.type3Goods = res.data.data[3];
      })
      .catch(err => {
        console.log('===get oftenGoods===err===', err);
      });
  },
  mounted () {
    console.log(this.tableData);
  },
  methods: {
    // 添加商品到订单列表
    addGood (good) {
      let isHave = false; // 是否已存在该商品
      // 判断要添加的商品是否已经存在于订单列表
      this.tableData.forEach(element => {
        if(element.goodsId === good.goodsId) {
          isHave = true;
        }
      });
      // 如果已存在，只增加数量
      if (isHave) {
        const arr = this.tableData.filter(e => e.goodsId === good.goodsId);
        arr[0].count++;
        console.log('===isHave==', isHave, arr);
      }
      // 如果不存在，添加商品
      if (!isHave) {
        const newGood = {
          goodsId: good.goodsId,
          goodsName: good.goodsName,
          price: good.price,
          count: 1
        };
        this.tableData.push(newGood);
      }
    },
    // 删除一个订单
    delGood (good) {
      console.log('===delGood===', good);
      this.tableData = this.tableData.filter(e => e.goodsId !== good.goodsId);
    },
    // 删除所有订单
    delAllGood () {
      this.tableData = [];
    }
  }
};
</script>

<style scoped>
.pos {
  width: 100vw;
  min-height: 100vh;
  display: flex;
}
.side {
}
.main {
  flex: 1;
  background-color: #eee;
}
.pos-row {
  height: 100%;
}
.pos-order {
  height: 100%;
  background-color: #f9fafc;
  border-right: 1px solid #c0ccda;
}

.btns {
  margin-top: 20px;
}
/* 商品 */
.products {
  height: 100%;
}
.goods-title {
  border-bottom: 1px solid #d3dce6;
  background-color: #f9fafc;
  padding: 10px;
}
.goods-list ul {
  display: flex;
  flex-wrap: wrap;
}
.goods-list ul li {
  list-style: none;
  border: 1px solid #e5e9f2;
  padding: 10px;
  margin: 5px;
  background-color: #fff;
}
.goods-price {
  color: #58b7ff;
}
/* cookList */
.cookList li {
  list-style: none;
  width: 23%;
  border: 1px solid #e5e9f2;
  height: auot;
  overflow: hidden;
  background-color: #fff;
  padding: 2px;
  float: left;
  margin: 2px;
}
.cookList li span {
  display: block;
  float: left;
}
.foodImg {
  width: 40%;
}
.foodName {
  font-size: 18px;
  padding-left: 10px;
  color: brown;
}
.foodPrice {
  font-size: 16px;
  padding-left: 10px;
  padding-top: 10px;
}
</style>
