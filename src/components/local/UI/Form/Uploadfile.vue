<template>
  <div class="group-file">
    <p class="g-text">PNG, GIF, WEBP, MP4 or MP3. Max 100mb</p>
    <base-button route="" mode="new_Btn more-btn">Upload File</base-button>
    <br />
    <input type="file" name="upload" id="upload-btn" required />
  </div>
</template>
<style scoped>
.group-file {
  text-align: center;
  padding: 30px;
  border: 2px dashed rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  margin-bottom: 30px;
}
#upload-btn {
  display: none;
}
</style>