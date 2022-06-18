<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Scan Qr</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">{{ $route.params.id }}</ion-title>
        </ion-toolbar>
      </ion-header>
      <qr-stream @decode="onDecode" />
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from "@ionic/vue";
import { QrStream } from "vue3-qr-reader";
import { useRouter } from "vue-router";

const router = useRouter();

const onDecode = (decodedString: string) => {
  console.log(decodedString);
  if (decodedString) {
    const id = decodedString.split('/').pop()
    router.push({ name: 'Products', params: { id } });
  }
};
</script>
