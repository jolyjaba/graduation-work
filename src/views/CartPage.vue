<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-menu-button />
                </ion-buttons>
                <ion-title>Корзина</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <ion-list inset>
                <ion-card v-for="item in items" :key="item.basketId">
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
                        <ion-buttons slot="primary">
                            <ion-button>
                                <ion-icon slot="icon-only" :ios="addCircleOutline" :md="addCircleSharp" />
                            </ion-button>
                            <ion-button v-if="item.count > 1">
                                <ion-icon slot="icon-only" :ios="removeCircleOutline" :md="removeCircleSharp" />
                            </ion-button>
                            <ion-button expand="block" @click="onRemoveFromBasket(item)">
                                <ion-icon slot="start" :ios="trashBinOutline" :md="trailSignSharp" />
                                Удалить все
                            </ion-button>
                        </ion-buttons>
                    </ion-card-content>
                </ion-card>
            </ion-list>
            <ion-grid>
                <ion-row>
                    <ion-col>
                        <ion-button expand="block">Оформить на сумму {{ price }} ₸</ion-button>
                    </ion-col>
                </ion-row>
            </ion-grid>
        </ion-content>
    </ion-page>
</template>

<script lang="ts" setup>
import api from "@/api";
import {
    IonPage,
    IonGrid,
    IonRow,
    IonCol,
    IonContent,
    IonList,
    IonCard,
    IonHeader,
    IonToolbar,
    IonImg,
    IonIcon,
    IonButtons,
    IonTitle,
    IonText,
    IonMenuButton,
    IonButton,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonCardContent,
} from "@ionic/vue";
import { onMounted, ref } from "vue";
import { addCircleOutline, addCircleSharp, removeCircleOutline, removeCircleSharp, trashBinOutline, trailSignSharp } from "ionicons/icons";

interface IBasketProduct {
    basketId: number
    count: number
    category: string
    description: string
    name: string
    photo: string
    price: number
    productId: number
    table: number
}

interface IBasketResponse {
    products: IBasketProduct[]
    total: number
}

const items = ref<IBasketProduct[]>([])

const price = ref(0)

onMounted(async () => {
    const tableId = localStorage.getItem('table')
    if (!tableId) return
    const { data } = await api.get<IBasketResponse>(`/api/basket/list/${tableId}`)
    items.value = data.products
    price.value = data.total
})

const onRemoveFromBasket = async (item: IBasketProduct) => {
    await api.delete(`/api/basket/all/${item.table}`)
}
</script>