<template>
  <div class="home">
    <el-row>
      <el-col :span="24">
        <el-button type="primary" @click="$_loadData">
          主要按钮
        </el-button>
        <el-button type="success" @click="$_handleUseDecorator">
          成功按钮
        </el-button>
        <el-button type="info">
          信息按钮
        </el-button>
        <el-button type="warning">
          警告按钮
        </el-button>
        <el-button type="danger">
          危险按钮
        </el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { Row, Col, Button } from 'element-ui'
// 使用装饰器
import { confirm } from '@/decorator'

// 使用日期工具类
import { format, DATE_FMT } from '@/utils/date'

// 接口
import { getDemoData } from '@/api/home'

export default {
  name: 'Home',
  components: { elRow: Row, elCol: Col, elButton: Button },
  data() {
    return {
      currentDate: format(new Date(), DATE_FMT)
    }
  },
  created() {},
  methods: {
    @confirm('这是通过装饰器添加的确认信息', '提示')
    $_handleUseDecorator() {
      console.log(`
        你还可以使用
        @alert 提示框
        @throttle 函数节流
        @debounce 函数防抖
        更多装饰器正在完善中
      `)
    },
    // 加载数据
    async $_loadData() {
      const loading = this.$loading()
      try {
        let { data } = await getDemoData({
          user_name: 'lalalal2414214',
          user_pwd: '12312414124'
        })
        console.log(data, 999)
      } catch (error) {
        console.error(error)
      } finally {
        loading.close()
      }
    }
  }
}
</script>
<style lang="less" scoped>
.home {
  /** 审查元素，这个样式会转换为 font-size: 4.267vw; */
  font-size: 16px;
}
</style>
