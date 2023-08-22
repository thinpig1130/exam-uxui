<script setup>
const intro = ref(null)
const currentTime = ref(null)

function introHide() {
  intro.value.classList.add("hide")
}

function updateTime() {
  const now = new Date();
  const hours = formatTime(now.getHours());
  const minutes = formatTime(now.getMinutes());
  currentTime.value = `${hours}:${minutes}`;
}
function formatTime(value) {
  return value < 10 ? `0${value}` : value;
}

onMounted(()=>{
  updateTime();
  // 1초마다 현재 시간을 업데이트합니다.
  setInterval(() => {
    updateTime();
  }, 1000);
})
</script>

<template>
  <div class="iphone14">
    <div class="camera"><span></span></div>
    <header class="header">
      <div class="clock">{{currentTime}}</div>
      <div class="icon_group">
        <i class="data"><span></span><span></span><span></span></i>
        <i>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 14 14">
            <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="7" cy="10.94" r="1.31"/>
              <path d="M4.53 8a3.49 3.49 0 0 1 5 0M2.36 6.31a6.55 6.55 0 0 1 9.29 0"/>
              <path d="M.5 4.45a9.19 9.19 0 0 1 13 0"/>
            </g>
          </svg>
        </i>
        <i>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 14 14">
            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                  d="M13.5 5.5A.5.5 0 0 0 13 5h-1V4a1 1 0 0 0-1-1H1.5a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1H11a1 1 0 0 0 1-1V9h1a.5.5 0 0 0 .5-.5Zm-10.25 0v3m3-3v3m3-3v3"/>
          </svg>
        </i>
      </div>
    </header>
    <div class="main">
      <div class="intro" ref="intro">
        <p class="txt1">안녕하세요.</p>
        <p class="txt2"><span class="day">2023. 08</span> Portfolio </p>
        <p class="start_btn" @click="introHide"><span>Start</span></p>
      </div>
      <div class="main_inner">
        메인 이너
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>

        ggg

      </div>
    </div>
  </div>
</template>

<style>
.hide {
  opacity: 0 !important;
  visibility: hidden !important;
}

.iphone14 {
  margin: 20px auto;
  position: relative;
  width: 393px;
  height: 852px;
  border: 8px solid #dcd6c2;
  border-radius: 50px;
  background: #fff;
  box-shadow: 0 0 40px rgba(0, 0, 0, .5);

  &::before {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    content: '';
    width: 100%;
    height: 100%;
    border: 4px solid #6b5d3d;
    border-radius: 49px;
  }
}

.camera {
  position: absolute;
  left: 50%;
  top: 22px;
  transform: translateX(-50%);
  width: calc(100% / 3);
  height: 34.5px;
  z-index: 9999999999;
  border-radius: 100px;
  background: #000;

  > span {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 50%;
    border: 2px solid #1e213d;
    width: 12px;
    height: 12px;
    background: #101941;

    &::before {
      position: absolute;
      content: '';
      width: 4px;
      height: 4px;
      background: #fff;
      border-radius: 50%;
      left: 50%;
      top: 0;
      transform: translateX(calc(-50% - 1px));
      opacity: .25;
      filter: blur(1px);
    }

    &::after {
      position: absolute;
      content: '';
      width: 4px;
      height: 4px;
      background: #fff;
      border-radius: 50%;
      left: 50%;
      bottom: 0;
      transform: translateX(calc(-50% + 1px));
      opacity: .5;
      filter: blur(1px);
    }
  }
}

.header {
  width: 100%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 22px;
  width: calc(100% - 20px);
  height: 34.5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 100;

  .clock {
    width: calc(100% / 3);
    font-size: 16px;
    font-weight: 500;
    text-align: center;
  }

  .icon_group {
    display: flex;
    justify-content: center;
    width: calc(100% / 3);
    gap: 10px;

    > i {
      width: 20px;

      > svg {
        width: 100%;
        transform: scale(.9);
      }

      &.data {
        position: relative;

        > span {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          content: '';
          width: 1.1px;
          height: 5px;
          background: #000;

          &:nth-child(1) {
            left: calc(50% - 5px);
          }

          &:nth-child(2) {
            height: 7px;
            top: calc(50% - 1px);
          }

          &:nth-child(3) {
            left: calc(50% + 5px);
            height: 9px;
            top: calc(50% - 2px);
          }

        }
      }
    }
  }
}

.main {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 44px;
  border: 10px solid #000;
  overflow-y: scroll;
  padding-top: 60px;

  &::-webkit-scrollbar {
    width: 0;
  }

  .intro {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    font-weight: 700;
    font-size: 36px;
    background: #f7f7f7;
    transition: all .7s ease;
    opacity: 1;
    visibility: initial;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 10000;

    .txt1 {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      content: '';
      animation: intro_txt1 4000ms linear forwards;
      animation-delay: 1000ms;
      animation-timing-function: ease;
      opacity: 0;
      visibility: hidden;
    }

    .txt2 {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      content: '';
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 10px;
      animation: intro_txt2 4000ms linear forwards;
      animation-delay: 5500ms;
      animation-timing-function: ease;
      opacity: 0;
      visibility: hidden;

      .day {
        font-size: 24px;
        opacity: .75;
      }
    }

    .start_btn {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 150px;
      height: 150px;
      font-size: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 150px;
      transition: all .3s ease;
      animation: intro_end 4000ms linear forwards;
      animation-delay: 10000ms;
      animation-timing-function: ease;
      opacity: 0;
      cursor: pointer;

      > span {
        position: relative;

        &::before {
          position: absolute;
          left: 50%;
          top: calc(100% + 5px);
          transform: translate(-50%, 0);
          content: '';
          width: 0;
          height: 3px;
          background: #000;
          transition: all .3s ease;
        }
      }

      &:hover {
        > span::before {
          width: 100%;
        }
      }
    }
  }

  .main_inner {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    padding: 60px 20px 0;
  }
}

@keyframes intro_txt1 {
  0% {
    opacity: 0;
    visibility: hidden;
  }
  50% {
    opacity: 1;
    visibility: inherit;
  }
  100% {
    opacity: 0;
    visibility: hidden;
  }
}

@keyframes intro_txt2 {
  0% {
    opacity: 0;
    visibility: hidden;
  }
  50% {
    opacity: 1;
    visibility: inherit;
  }
  100% {
    opacity: 0;
    visibility: hidden;
  }
}

@keyframes intro_end {
  0% {
    opacity: 0;
    visibility: hidden;
  }
  100% {
    opacity: 1;
    visibility: inherit;
  }
}

.header {

}

/* .main .intro a:hover{background: linear-gradient(145deg, #dedede, #ffffff); box-shadow:  20px 20px 60px #d2d2d2, -20px -20px 60px #ffffff;} */


</style>