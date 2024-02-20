exports.handler = async event => {
  // 獲取當前 UTC 時間
  const now = new Date();
  
  // 轉換為台北時區時間，台北時區為 UTC+8
  const taipeiTime = new Date(now.getTime() + 8 * 60 * 60 * 1000);
  
  // 計算月份和日期的和
  const dateSum = taipeiTime.getMonth() + 1 + taipeiTime.getDate();
  
  // 獲取當前小時並計算和
  const hour = taipeiTime.getHours();
  const hourSum = Math.floor(hour / 10) + (hour % 10);
  
  // 生成一個0到99之間的隨機數
  const randomNum = Math.floor(Math.random() * 100);
  
  // 格式化輸出字符串
  const result = `${dateSum.toString().padStart(2, '0')}${hourSum.toString().padStart(2, '0')}${randomNum.toString().padStart(2, '0')}`;
  
  return {
    statusCode: 200,
    body: result,
  };
};
