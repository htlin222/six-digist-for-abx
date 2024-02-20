// https://six-abx.netlify.app/.netlify/functions/hello

exports.handler = async event => {
  // 获取当前 UTC 时间
  const now = new Date();
  
  // 转换为台北时区时间，台北时区为 UTC+8
  const taipeiTime = new Date(now.getTime() + 8 * 60 * 60 * 1000);
  
  // 计算月份和日期的单个数字之和
  const month = taipeiTime.getMonth() + 1; // getMonth() 返回的月份从 0 开始
  const date = taipeiTime.getDate();
  const dateSum = [...(month.toString() + date.toString())].reduce((sum, digit) => sum + parseInt(digit, 10), 0);
  
  // 获取当前小时并计算其单个数字之和
  const hour = taipeiTime.getHours();
  const hourSum = [...hour.toString()].reduce((sum, digit) => sum + parseInt(digit, 10), 0);
  
  // 生成一个 0 到 99 之间的随机数
  const randomNum = Math.floor(Math.random() * 100);
  
  // 格式化输出字符串
  const result = `${dateSum.toString().padStart(2, '0')}${hourSum.toString().padStart(2, '0')}${randomNum.toString().padStart(2, '0')}`;
  
  return {
    statusCode: 200,
    body: result,
  };
};
