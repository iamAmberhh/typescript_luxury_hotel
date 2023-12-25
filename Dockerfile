# 使用官方的Node.js映像，並指定版本
FROM node:18.16.0

# 更新NPM到指定版本
RUN npm install -g npm@9.5.1

# 設定工作目錄
WORKDIR /app

# 複製專案代碼到映像中
COPY . /app