<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button />
        </ion-buttons>
        <ion-title>Заказы</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list v-for="order in orders" :key="order.orderId" inset>
        <ion-list-header> Заказ №{{ order.orderId }} </ion-list-header>

        <ion-item v-for="product in order.products" :key="product.productId">
          <ion-avatar slot="start">
            <img :src="product.photo" />
          </ion-avatar>
          <ion-label>
            <h2>{{ product.name }}</h2>
            <h3>{{ product.description }}</h3>
            <p>{{ product.count }} шт. за {{ order.total }} ₸</p>
          </ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script lang="ts" setup>
import api from "@/api";
import {
  IonPage,
  IonListHeader,
  IonItem,
  IonAvatar,
  IonContent,
  IonList,
  IonLabel,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonTitle,
  IonMenuButton,
} from "@ionic/vue";
import { onMounted, ref } from "vue";
import { IBasketProduct } from "./CartPage.vue";

interface IOrder {
  total: number,
  orderId: number,
  products: IBasketProduct[]
}

interface IOrderResponse {
  orders: IOrder[]
}

const orders = ref<IOrder[]>([])

onMounted(async () => {
  const table = localStorage.getItem('table')
  if (!table) return
  const { data } = await api.get<IOrderResponse>(`/api/order/${table}`)
  orders.value = data.orders
})
</script>