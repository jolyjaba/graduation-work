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
                        <ion-buttons slot="end">
                            <ion-button @click="onHandleCounter(item, ++item.count)">
                                <ion-icon slot="icon-only" :ios="addCircleOutline" :md="addCircleSharp" />
                            </ion-button>
                            {{ item.count }}
                            <ion-button @click="onHandleCounter(item, --item.count)" v-if="item.count > 0">
                                <ion-icon slot="icon-only" :ios="removeCircleOutline" :md="removeCircleSharp" />
                            </ion-button>
                            <ion-button v-if="item.count > 1" expand="block" @click="onRemoveProductFromBasket(item)">
                                Убрать все
                            </ion-button>
                        </ion-buttons>
                    </ion-card-content>
                </ion-card>
            </ion-list>
            <ion-grid v-if="price">
                <ion-row>
                    <ion-col>
                        <ion-button @click="onRedirectToOrder" expand="block">
                            Оформить на сумму {{ price }} ₸
                        </ion-button>
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
import { addCircleOutline, addCircleSharp, removeCircleOutline, removeCircleSharp } from "ionicons/icons";
import { useRouter } from "vue-router";

export interface IBasketProduct {
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

const fetchProductsFromBasket = async () => {
    const tableId = localStorage.getItem('table')
    if (!tableId) return
    const { data } = await api.get<IBasketResponse>(`/api/basket/list/${tableId}`)
    items.value = data.products
    price.value = data.total
}

onMounted(async () => {
    await fetchProductsFromBasket()
})

const onHandleCounter = async (item: IBasketProduct, count: number) => {
    const { productId, table } = item
    await api.post('/api/basket', { productId, table, count })
    await fetchProductsFromBasket()
}

const onRemoveProductFromBasket = async (item: IBasketProduct) => {
    const { basketId } = item
    await api.delete(`/api/basket/${basketId}`)
    await fetchProductsFromBasket()
}

const router = useRouter()

const onRedirectToOrder = async () => {
    try {
        const table = localStorage.getItem('table')
        if (!table) return
        await api.post(`/api/place-order-basket-products/${table}`)
        router.push('/order')
    } catch (error) {
        console.error(error);
    }
}
</script>