<template>
  <Suspense>
    <template #fallback> loading... </template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-menu-button />
          </ion-buttons>
          <ion-title>Products</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <ion-list inset>
          <ion-card v-for="item in items" :key="item.id">
            <ion-img :src="item.photo" />
            <ion-card-header>
              <ion-card-subtitle>{{ item.category }}</ion-card-subtitle>
              <ion-card-title>{{ item.name }}</ion-card-title>
            </ion-card-header>
            <ion-card-content>
              {{ item.description }}
              <br />
              <ion-text color="primary" class="price">
                {{ item.price }} ₸
              </ion-text>
              <ion-button class="aa">
                <ion-icon slot="start" :ios="cartOutline" :md="cartSharp" />
                add
              </ion-button>
            </ion-card-content>
          </ion-card>
        </ion-list>
      </ion-content>
    </ion-page>
  </Suspense>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonContent,
  IonList,
  IonButton,
  IonHeader,
  IonToolbar,
  IonText,
  IonButtons,
  IonTitle,
  IonMenuButton,
  IonImg,
  IonIcon,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
} from "@ionic/vue";
import { cartOutline, cartSharp } from "ionicons/icons";
import axios from "axios";
import { useRoute } from "vue-router";
import { onMounted, ref, defineProps } from "vue";

const route = useRoute();
const $axios = axios.create({
  baseURL: "http://localhost:8080",
});

interface IProduct {
  id: number;
  name: string;
  description: string;
  category: string;
  price: number;
  photo: string;
}

const items = ref<IProduct[]>([]);

defineProps<{ id: string }>()

onMounted(async () => {
  const { data } = await $axios.get(route.path);
  items.value = data;
});
</script>

<style scoped>
.aa {
  position: absolute;
  left: 200px;
  bottom: 10px;
}

.price {
  color: rgb(0, 0, 0);
  font-size: 24px;
  font-weight: 400;
}
</style>
