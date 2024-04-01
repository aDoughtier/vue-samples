import express from 'express';
import menuData from '../json/menu.json' assert { type: "json" }
const router = express.Router();

router.get("/api/v1/common/config", (req, res) => {
  res.status(200)
  res.json({
    data: {
      "baseUrl": "http://localhost:5173",
      "api_secret": "abcdefghijklmnopqrstuvwxyz",
      "api_host": "https://api.example.com",
      "api_port": "443",
      "api_version": "v1",
      "api_timeout": "30000",
      "api_retry": "3",
      "api_retry_interval": "1000",
      "api_retry_max_interval": "60000",
      "api_retry_backoff_factor": "2",
    },
    message: "success"
  })
})
router.get("/api/v1/common/route-menu", async (req, res) => {
  await new Promise((resolve) => setTimeout(() => {
    resolve()
  }, 1000));
  res.send({
    data: {
      userInfo: {
        "userId": "1234567890",
        "userName": "John Doe",
        "userRole": "admin",
        "userEmail": "johndoe@example.com",
        "userPhone": "1234567890",
        "userStatus": "active",
        "userCreatedAt": "2022-01-01T00:00:00Z",
        "userUpdatedAt": "2022-01-01T00:00:00Z"
      },
      //用于渲染菜单
      menu: [
        {
          path: "/home",
          text: "引言",
          icon: "shouye"
        },
        {
          path: "/vue",
          text: "vue介绍与使用",
          icon: "Vue",
          children: menuData.vue.map(item => ({
            path: `/vue/${item.slice(0, 3)}`,
            text: item
          }))
        },
        {
          path: "/router",
          text: "vue-router介绍与使用",
          icon: "router",
          children: menuData["vue-router"].map(item => ({
            path: `/router/${item.slice(0, 3)}`,
            text: item
          }))
        },
        {
          path: "/pinia",
          text: "pinia介绍与使用",
          icon: "zhuangtaiguanli",
          children: menuData.pinia.map(item => ({
            path: `/router/${item.slice(0, 3)}`,
            text: item
          }))
        }
      ]
    },
    message: "success"
  })
}

)
export default router
