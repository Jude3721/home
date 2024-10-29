<template>
  <div class="section">
    <div class="typewriter">
      <p id="typewriter-text fc-ffffff">
        JD KIM PORTFOLIO
      </p>
    </div>
    <div class="visual">
      <div class="dim"></div>
      <video autoplay muted loop>
        <source src="../../assets/images/video/section1_vis.mp4">
      </video>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const fullText = "안녕하세요, 타자기 효과입니다!";
const displayedText = ref("");
const index = ref(0);
const isTyping = ref(true);

const type = () => {
  if (index.value < fullText.length) {
    displayedText.value += fullText.charAt(index.value);
    index.value++;
    setTimeout(type, 100); // 각 글자 사이의 시간 (100ms)
  } else {
    isTyping.value = false; // 타이핑이 끝나면 커서 제거
  }
};

onMounted(() => {
  type(); // 컴포넌트가 마운트되면 타이핑 시작
});
</script>

<style scoped lang="scss">
.visual{
  position:relative;
  width:100%; height:100%;
  overflow: hidden;

  .dim{
    position: absolute;
    left:0;top:0;
    background-color:rgba(0,0,0,0.6);
    width:100%; height:100%;
  }
  video{
    height:100%;
  }

}

$typewriter-caret: '|';
$typewriter-caret-color: #fff; // 커서 색상

.typewriter {
    position:absolute;
    display: inline-block;
    width: fit-content;
    overflow: hidden; // 텍스트가 보이지 않도록
    border-right: 0.1em solid $typewriter-caret-color; // 커서 효과
    white-space: nowrap; // 텍스트가 줄 바꿈되지 않도록
    animation: typing 4s steps(30, end), blink-caret 0.75s step-end infinite;
    z-index:10;

    p {
        font-size: 2rem;
        margin: 0; // 기본 마진 제거
    }
}

@keyframes typing {
    from {
        width: 0; // 처음에는 텍스트가 보이지 않음
    }
    to {
        width: 100%; // 텍스트가 완전히 보이도록
    }
}

@keyframes blink-caret {
    50% {
        border-color: transparent; // 커서 깜빡임 효과
    }
}

</style>