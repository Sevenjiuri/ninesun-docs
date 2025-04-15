# 第一阶段：构建阶段
FROM node:18-alpine AS builder

# 设置工作目录
WORKDIR /app



# 安装依赖
RUN #npm install -g serve

# 复制项目文件
COPY .  .



#部署
FROM nginx:stable-alpine

# 从构建阶段复制打包文件
COPY --from=builder /app/vite/.vitepress/dist /usr/share/nginx/html

# 暴露80端口
EXPOSE 80

# 启动Nginx
CMD ["nginx", "-g", "daemon off;"]