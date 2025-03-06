# 个人网站

这是一个使用HTML、CSS和JavaScript构建的个人网站，展示了个人的科研经历、实习经验、教育背景以及生活点滴。

## 如何通过GitHub Pages部署此网站

要将此网站部署到GitHub Pages并获得一个公开的网址，请按照以下步骤操作：

1. **创建GitHub账号**（如果还没有）
   - 访问 [GitHub](https://github.com) 并注册一个账号

2. **创建新的仓库**
   - 登录GitHub后，点击右上角的"+"图标，选择"New repository"
   - 将仓库命名为 `username.github.io`（将"username"替换为您的GitHub用户名）
   - 保持仓库为公开（Public）
   - 点击"Create repository"

3. **上传网站文件**
   - 将此文件夹中的所有文件上传到新创建的仓库
   - 您可以通过GitHub网页界面上传，或使用Git命令行

4. **启用GitHub Pages**
   - 在仓库页面，点击"Settings"
   - 滚动到"GitHub Pages"部分
   - 在"Source"下拉菜单中，选择"main branch"（或"master branch"）
   - 点击"Save"

5. **访问您的网站**
   - 几分钟后，您的网站将在 `https://username.github.io` 上线（将"username"替换为您的GitHub用户名）

## 本地预览

您可以通过以下方式在本地预览网站：

```bash
python -m http.server 8000
```

然后在浏览器中访问 `http://localhost:8000`

## 自定义域名（可选）

如果您拥有自己的域名，您可以将其配置为指向您的GitHub Pages网站：

1. 在您的域名提供商的DNS设置中，添加以下记录：
   - 类型: A
   - 主机: @
   - 值: 185.199.108.153
   - 值: 185.199.109.153
   - 值: 185.199.110.153
   - 值: 185.199.111.153

2. 在您的GitHub仓库中创建一个名为`CNAME`的文件，内容为您的域名（例如：`example.com`）

3. 在仓库的"Settings" > "Pages"中，在"Custom domain"字段输入您的域名并保存

## 更新网站

要更新您的网站，只需编辑相应的文件并将更改推送到GitHub仓库即可。GitHub Pages将自动更新您的网站。