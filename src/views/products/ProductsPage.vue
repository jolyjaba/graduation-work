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
              <ion-text color="dark">
                <h3>{{ item.description }}</h3>
              </ion-text>
              <ion-text color="dark">
                <h1>{{ item.price }} ₸</h1>
              </ion-text>
              <ion-button expand="block" @click="onAddToBasket(item)">
                <ion-icon slot="start" :ios="cartOutline" :md="cartSharp" />
                Добавить
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
import { onMounted, ref } from "vue";
import api from "@/api";
import { useRoute } from "vue-router";

interface IProduct {
  id: number
  name: string
  description: string
  category: string
  price: number
  photo: string
  table: number
}

const route = useRoute()

const items = ref<IProduct[]>([]);

onMounted(async () => {
  const { data } = await api.get<IProduct[]>(`/api/products/${route.params.id}`);
  items.value = data;
});

const onAddToBasket = async (item: IProduct) => {
  const { table, id } = item
  localStorage.setItem('table', String(table))
  await api.post('/api/basket', { productId: id, table })
}
</script>
