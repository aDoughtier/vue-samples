import express from 'express';
const router = express.Router();
router.get("/api/v1/common/config", (req, res) => {
  res.json({
    "api_key": "1234567890",
    "api_secret": "abcdefghijklmnopqrstuvwxyz",
    "api_host": "https://api.example.com",
    "api_port": "443",
    "api_version": "v1",
    "api_timeout": "30000",
    "api_retry": "3",
    "api_retry_interval": "1000",
    "api_retry_max_interval": "60000",
    "api_retry_backoff_factor": "2",
  })
})
router.get("/api/v1/common/route-menu", (req, res) => {
  res.json({
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
        text: "首页",
        icon: "shouye1"
      },
      {
        path: "/home",
        text: "首页",
        icon: "shouye1"
      }
    ]
  })
})
export default router