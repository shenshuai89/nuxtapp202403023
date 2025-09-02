// 导入nuxt.config.js 配置文件的 baseURL
const config = {
  app: {
    baseURL: import.meta.env.BASE_URL,
  },
};



export const loadScriptClient = async () => {
  const baseUrl = config.app.baseURL.replace(/\_nuxt\//, '');

  const script1 = document.createElement('script');
  script1.src = baseUrl + 'assets/js/core.min.js';
  script1.async = false;
  document.body.appendChild(script1);

  const script2 = document.createElement('script');
  script2.src = baseUrl + 'assets/js/script.js';
  script2.async = false;
  document.body.appendChild(script2);

//   const script3 = document.createElement('script');
//   script3.src = baseUrl + 'assets/js/bootstrap.min.js';
//   script3.async = false;
//   document.body.appendChild(script3);


};