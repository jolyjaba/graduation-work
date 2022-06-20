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
            <img class="product__image" :src="item.photo" :alt="item.photo">
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
              <ion-buttons slot="primary">
                <ion-button @click="onHandleCounter(item, ++item.count)">
                  <ion-icon slot="icon-only" :ios="addCircleOutline" :md="addCircleSharp" />
                </ion-button>
                {{ item.count }}
                <ion-button v-if="item.count > 0" @click="onHandleCounter(item, --item.count)">
                  <ion-icon slot="icon-only" :ios="removeCircleOutline" :md="removeCircleSharp" />
                </ion-button>
              </ion-buttons>
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
  IonIcon,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
} from "@ionic/vue";
import { addCircleOutline, addCircleSharp, removeCircleOutline, removeCircleSharp } from "ionicons/icons";
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
  count: number
}

const route = useRoute()

const items = ref<IProduct[]>([]);

onMounted(async () => {
  const { data } = await api.get<IProduct[]>(`/api/products/${route.params.id}`);
  items.value = data.map(item => ({ ...item, count: 0 }));
});

const onHandleCounter = async (item: IProduct, count: number) => {
  const index = items.value.findIndex(product => product.id === item.id)
  if (index === -1) return
  items.value.splice(index, 1, { ...items.value[index], count })
  const { table, id } = item
  localStorage.setItem('table', String(table))
  await api.post('/api/basket', { productId: id, table, count })
}
</script>

<style scoped>
.product__image {
  width: 100%;
}
</style>