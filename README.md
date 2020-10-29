# dva learn

## 初始环境搭建

```bash
dva new dva-learn
cd dva-learn
npm start
```

---

## dva/router 路由

### 路由组件

- Router
- Route
- Switch
- Link

```js
import { Router, Route, Switch, Link } from 'dva/router';
```

### 添加路由

1. 创建一个路由页面组件 `routes/UserPage.js`

```js
import React from 'react';
import { connect } from 'dva';

function Index() {
    return <h1>User Page</h1>
}

export default connect()(Index);
```

2. 在 `router.js` 引入页面组件

```js
import UserPage from './routes/UserPage';

<Route path="/user" exact component={UserPage} />
```
3. 访问 http://localhost:8000/#/user 

### 路由跳转
