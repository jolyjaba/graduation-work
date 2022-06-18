<template>
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
</template>

<script lang="ts" setup>
import api from "@/api";
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

const items = ref<any>([])

onMounted(async () => {
    const tableId = localStorage.getItem('table')
    if (!tableId) return
    const data = await api.get(`/api/basket/list/${tableId}`)
    items.value = data
})
</script>