<template>
  <div v-if="isLoading" class="global-loading">
    <div class="preloader">
      <div class="preloader-logo"><img src="/assets/images/logo-default-109x27.png" alt="" width="109" height="27" srcset="/assets/images/logo-default-109x27.png 2x"/>
      </div>
      <div class="preloader-body">
        <div id="loadingProgressG">
          <div class="loadingProgressG" id="loadingProgressG_1"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const isLoading = ref(true)

// 监听 Nuxt 应用准备就绪
onNuxtReady(() => {
  // Hydration 完成，隐藏 loading
  isLoading.value = false
})

// 可选：添加一个超时，防止因错误导致 loading 一直不消失
onMounted(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 5000) // 5秒后强制隐藏
})
</script>

<style scoped>
.global-loading {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #f0f2f5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  font-family: Arial, sans-serif;
}
.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>