# mooc-ui-study 组件库

### 快速开始

#### 1.安装组件库

```bash
npm i mooc-ui-study
```
#### 2.引入组件库
> 在 main.js 中引入组件库

```javascript
// 全部引入
import 'mooc-ui-study/dist/css/index.css'
import MUI from "mooc-ui-study";
Vue.use(MUI);

// 按需引入
import 'mooc-ui-study/dist/css/demo.css'
import { Demo } from "mooc-ui-study";
Vue.use(Demo);

```
