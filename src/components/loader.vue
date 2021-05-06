<template>
   <div class="custom-modal-bg" :class="{ 'bg-active': true }">
      <div class="custom-modal" style="background:none!important">
        <ion-card class="modal-card" style="background:none!important">
         
        
          
          

         
           
            <img ref="image" style="height:150px" src="/assets/icon/Envintro-logo.png" alt="" srcset="">
           
          
        </ion-card>
      </div>
    </div>
</template>

<script>
import { imageRotate} from '@/anime'
export default {
    mounted(){
        let image = this.$refs['image']
        imageRotate(image)
    }
}
</script>

<style scoped>
    .custom-modal-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100001;
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: hidden;
  opacity: 0;
  /* transition:visibility 0s opacity 0.5s; */
  transition: visibility 0s linear 300ms, opacity 300ms;
}
.bg-active {
  visibility: visible;
  opacity: 1;
  transition: visibility 0s linear 0s, opacity 300ms;
}
.custom-modal {
  background-color: white;
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 12px;
}
.close-custom-modal {
  position: absolute;

  z-index: 111111;

  right: 10px;
}
.modal-card {
  box-shadow: none !important;
}

.modal-card ion-title {
  color: black;
  margin-bottom: 29px;
  position: relative;
  top: 11px;
}
.modal-card img {
  margin-bottom: 100px !important;
  margin-top: 20px;
}
.modal-card ion-button {
  --background: var(--primary);
  height: 55px;
}
.modal-card ion-icon {
  font-size: 30px;
}

</style>