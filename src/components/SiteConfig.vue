<template>
  <div class="settings-container">
    <h2>Color Config</h2>
    <div class="setting-item">
      <label>Primary Background Color:</label>
      <input type="color" v-model="primaryBgColor" />
    </div>
    <div class="setting-item">
      <label>Secondary Background Color:</label>
      <input type="color" v-model="secondaryBgColor" />
    </div>
    <div class="setting-item">
      <label>Primary Font Color:</label>
      <input type="color" v-model="primaryColor" />
    </div>
    <div class="setting-item">
      <label>Secondary Font Color:</label>
      <input type="color" v-model="secondaryColor" />
    </div>
    <div>
    <button @click="resetToDefault">Default - Dark</button>
    <button @click="resetToDefaultLight">Default - Light</button>
    </div>
    <br>
    <h2>About</h2>
    <div class="about">
      <div class="info-container">
        <div class="info-section">
          <h3>Info</h3>
          <p>
            しまナビ ver.3.0.0<br>
            最終更新 2025/03/15
          </p>
        </div>
        <div class="info-section">
          <h3>謝辞：引用元サイト様</h3>
          <p>
            <a href="https://mi.bus-navigation.jp/" target="_blank" rel="noopener noreferrer">まつえ・いずもバスナビ</a><br>
            <a href="https://www.train-guide.westjr.co.jp/" target="_blank" rel="noopener noreferrer">JR西日本 列車走行位置</a><br>
            <a href="https://trafficinfo.westjr.co.jp/" target="_blank" rel="noopener noreferrer">JR西日本 列車運行情報</a>
          </p>
        </div>
      </div>
      <h3>Question</h3>
      <a href="http://www.dmlp.org/legal-guide/linking-copyrighted-materials'" target="_blank" rel="noopener noreferrer">iframeでの引用は著作権侵害にあたらないという見解</a>
      のもとに運営していますが，引用元サイト運営者様からの通知が行われた場合，即時掲載を取り下げさせていただきます．<br>
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScJBs2MtkN0TSHsbkOo3eh1B8EmyC2-l5oDMPJ1PWeWyynBwQ/viewform?embedded=true">読み込んでいます…</iframe>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted} from 'vue';

// デフォルトカラー
const defaultColors = {
  primaryBgColor: '#00acd1',
  secondaryBgColor: '#000000',
  primaryColor: '#ffffff',
  secondaryColor: '#ffffff'
};

// ユーザー設定の背景色を管理
const primaryBgColor = ref(defaultColors.primaryBgColor);
const secondaryBgColor = ref(defaultColors.secondaryBgColor);
const primaryColor = ref(defaultColors.primaryColor);
const secondaryColor = ref(defaultColors.secondaryColor);

// カラー適用関数
const applyColors = () => {
  document.documentElement.style.setProperty('--primary-bg-color', primaryBgColor.value);
  document.documentElement.style.setProperty('--secondary-bg-color', secondaryBgColor.value);
  document.documentElement.style.setProperty('--primary-color', primaryColor.value);
  document.documentElement.style.setProperty('--secondary-color', secondaryColor.value);
};

// 設定をローカルストレージに保存
watch([primaryBgColor, secondaryBgColor, primaryColor, secondaryColor], ([newPrimaryBgColor, newSecondaryBgColor, newPrimaryColor, newSecondaryColor]) => {
  localStorage.setItem('primaryBgColor', newPrimaryBgColor);
  localStorage.setItem('secondaryBgColor', newSecondaryBgColor);
  localStorage.setItem('primaryColor', newPrimaryColor);
  localStorage.setItem('secondaryColor', newSecondaryColor);
  applyColors();
});

// 保存された設定をロード
onMounted(() => {
  primaryBgColor.value = localStorage.getItem('primaryBgColor') || defaultColors.primaryBgColor;
  secondaryBgColor.value = localStorage.getItem('secondaryBgColor') || defaultColors.secondaryBgColor;
  primaryColor.value = localStorage.getItem('primaryColor') || defaultColors.primaryColor;
  secondaryColor.value = localStorage.getItem('secondaryColor') || defaultColors.secondaryColor;
  applyColors();
});

// デフォルトに戻す
const resetToDefault = () => {
  primaryBgColor.value = defaultColors.primaryBgColor;
  secondaryBgColor.value = defaultColors.secondaryBgColor;
  primaryColor.value = defaultColors.primaryColor;
  secondaryColor.value = defaultColors.secondaryColor;
  localStorage.removeItem('primaryBgColor');
  localStorage.removeItem('secondaryBgColor');
  localStorage.removeItem('primaryColor');
  localStorage.removeItem('secondaryColor');
  applyColors();
};

const resetToDefaultLight = () => {
  primaryBgColor.value = defaultColors.primaryBgColor;
  secondaryBgColor.value = defaultColors.secondaryColor;
  primaryColor.value = defaultColors.primaryColor;
  secondaryColor.value = defaultColors.secondaryBgColor;
  localStorage.removeItem('primaryBgColor');
  localStorage.removeItem('secondaryBgColor');
  localStorage.removeItem('primaryColor');
  localStorage.removeItem('secondaryColor');
  applyColors();
};
</script>

<style scoped>
h2{
  font-size: 24px;
}
.settings-container {
  padding: 20px;
}
.setting-item {
  display: flex;
  align-items: center;
  margin: 3px 10px 0px 10px;
}
label {
  flex: 1;
}
input[type="color"] {
  width: 60px;
  height: 30px;
  border: none;
  cursor: pointer;
}
button {
  margin: 10px;
  padding: 8px 15px;
  font-size: 14px;
  font-family: "Poppins", "Kosugi", "Helvetica Neue", "Helvetica", "Hiragino Sans", "Hiragino Kaku Gothic ProN", "Meiryo", sans-serif;
  border: none;
  cursor: pointer;
  background-color: #555;
  color: #fff;
  transition: background-color 0.3s;
}
button:hover {
  background-color: #000;
}
.about {
  margin: 5px 0px 0px 10px;
}
.info-container {
  display: flex;
  justify-content: space-between;
  gap: 0px;
  flex-wrap: nowrap;
}
.info-section {
  flex: 1;

}
a {
  color: #607d8b;
}
iframe {
  position: relative;
  height: 300px;
}
</style>
