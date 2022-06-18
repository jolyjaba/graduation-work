<template>
  <ion-menu content-id="main-content" side="start">
    <ion-header>
      <ion-toolbar>
        <ion-title>Menu</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <ion-item lines="none">
          <ion-icon slot="start" :ios="logInOutline" :md="logInSharp" />
          <ion-label>Bxoд/Регистрация</ion-label>
        </ion-item>

        <ion-item lines="none">
          <ion-icon slot="start" :ios="locateOutline" :md="locateSharp" />
          <ion-label>Город:</ion-label>
          <ion-select value="">
            <ion-select-option value="al">Алматы</ion-select-option>
            <ion-select-option value="nu">Нурсултан</ion-select-option>
            <ion-select-option value="at">Атырау</ion-select-option>
            <ion-select-option value="ak">Актобе</ion-select-option>
            <ion-select-option value="kos">Костанай</ion-select-option>
            <ion-select-option value="kar">Караганды</ion-select-option>
            <ion-select-option value="sem">Семей</ion-select-option>
            <ion-select-option value="urs">Уральск</ion-select-option>
            <ion-select-option value="kok">Кокшетау</ion-select-option>
            <ion-select-option value="tal">Талдыкорган</ion-select-option>
          </ion-select>
        </ion-item>

        <ion-item button href="/scan-page" lines="none">
          <ion-icon slot="start" :ios="qrCodeOutline" :md="qrCodeSharp" />
          <ion-label>Отсканировать QR</ion-label>
        </ion-item>

        <ion-item button lines="none">
          <ion-icon slot="start" :ios="basketOutline" :md="basketSharp" />
          <ion-label>Корзина</ion-label>
        </ion-item>
      </ion-list>

      <ion-list>
        <ion-list-header>Labels</ion-list-header>

        <ion-item v-for="(label, index) in labels" lines="none" :key="index">
          <ion-icon slot="start" :ios="bookmarkOutline" :md="bookmarkSharp" />
          <ion-label>{{ label }}</ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
    <ion-footer>
      <ion-toolbar>
        <ion-row class="ion-justify-content-center">
          <ion-button
            expand="block"
            size="small"
            fill="solid"
            color="secondary"
          >
            rus
          </ion-button>
          <ion-button expand="block" size="small" fill="solid" color="primary">
            kz
          </ion-button>
          <ion-button expand="block" size="small" fill="solid" color="primary">
            eng
          </ion-button>
        </ion-row>
      </ion-toolbar>
    </ion-footer>
  </ion-menu>
</template>

<script setup lang="ts">
import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonFooter,
  IonButton,
  IonRow,
  IonToolbar,
  IonHeader,
  IonTitle,
  IonSelectOption,
  IonSelect
} from "@ionic/vue";
import {
  bookmarkOutline,
  bookmarkSharp,
  logInOutline,
  logInSharp,
  locateOutline,
  locateSharp,
  qrCodeOutline,
  qrCodeSharp,
  basketOutline,
  basketSharp,
} from "ionicons/icons";
const labels = ["Рестораны", "Кафе", "Бары", "Фудкорты", "FAQ", "О нас"];
</script>
