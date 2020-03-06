<style lang="scss">
.logo {
  user-select: none;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 20px;
  width: 195px;
  cursor: pointer;

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
  }

  p {
    height: 20px;
    line-height: 20px;
    width: 105px;
    color: $color-text-1;
    font-size: 20px;
    white-space: nowrap;
    overflow: hidden;
    letter-spacing: 2px;
    animation: typing 500ms steps(10, end);
    opacity: 0.75;
  }

  @keyframes typing {
    from {
      width: 0;
    }
  }
}
</style>

<template>
  <div class="logo">
    <img src="https://m1.calibur.tv/icon.png-sharejpg200" alt="logo" />
    <p>calibur.tv</p>
  </div>
</template>

<script>
export default {
  name: 'Logo'
}
</script>
