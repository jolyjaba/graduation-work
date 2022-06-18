<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button />
        </ion-buttons>
        <ion-title>Main</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <div>
        <header id="header" class="header">
          <div class="container1">
            <div class="nav"></div>
            <div class="offer">
              <p class="p1">
                Незаменимый помощник для тех, кто не любит ждать официанта
              </p><br>
              <p class="p2">
                Отсканируйте qr-код вашего кафе и закажите еду без чьей-либо
                помощи в несколько кликов. Действуй!
              </p>
            </div>
          </div>
        </header>
        <div class="main">
          <div class="container1">
            <br>
            <div class="w"><p>Как пользоваться:</p></div>
            <div class="blocks">
              <div class="block">
                <div class="first">
                  <h1>1</h1>
                  <p>Регистрация</p>
                </div>
                <div class="part2">
                  <div class="second">
                    <p class="s">
                      Чтобы в полной мере воспользоваться нашим приложением,
                      зарегистрируйтесь и внесите некоторые изменения
                    </p>
                  </div>
                  <div class="butt">
                    <button class="aa">Перейти на сайт</button>
                  </div>
                </div>
              </div>
              <div class="block">
                <div class="first">
                  <h1>2</h1>
                  <p>Камера</p>
                </div>
                <div class="part2">
                  <div class="second">
                    <p class="s">
                      Вы можете увидеть полное меню вашего кафе, войдя в камеру
                      своего смартфона и отсканировав QR-код вашего кафе
                    </p>
                  </div>
                  <div class="butt">
                    <button>Перейти на сайт</button>
                  </div>
                </div>
              </div>
              <div class="block">
                <div class="first">
                  <h1>3</h1>
                  <p>Заказ</p>
                </div>
                <div class="part2">
                  <div class="second">
                    <p class="s">
                      После входа в меню выберите нужные блюда, положите их в
                      корзину и, наконец, нажмите кнопку ЗАКАЗАТЬ.
                    </p>
                  </div>
                  <div class="butt">
                    <button id="btn">Перейти на сайт</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer>
          <div class="container3">
            <p>Наши контакты</p>
            <div class="ee">
              <div class="qq">
                <a href="#">+7 (775) 914 - 86 46</a
                ><br />
              </div>
              <div class="qq">
                <a href="#">qr-order.kz</a><br />
              </div>
              <div class="qq">
                <a href="#">г.Алматы, ул. Толе би, д. 135</a><br />
              </div>
              <div class="qqq">
                <a href="#">с 10:00 до 20:00</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts" setup>
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/vue";
</script>

<style scoped>
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0px;
}

button {
	margin-left: 400px;
	border: none;
	color: white;
	border-radius: 26px;
	text-align: center;
	text-decoration: none;
	display: inline-block;
	font-size: 16px;
	margin: 4px 2px;
	cursor: pointer;
	background-color: #FFFFFF;
	width: 316px;
	height: 56px;
	color: #111111;
	font-family: 'Roboto', sans-serif;
	letter-spacing: 0.1em;
}

#container a {
  text-decoration: none;
}
/* 
@import url(https://cdnjs.cloudflare.com/ajax/libs/myscript/4.1.3/fonts/stix/STIXIntegralsD-Regular.otf);
@import url(https://cdnjs.cloudflare.com/ajax/libs/myscript/4.1.2/fonts/stix/STIXIntegralsD-Regular.otf); */
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

.block {
  flex-direction: column;
}

.container1 {
  width: 200px;
  margin: 20px;
  padding: 0;
}
.nav img {
  width: 203.03px;
  height: 31.15px;
}
.header {
  background: url("https://weproject.media/upload/medialibrary/936/936d80706ce04d9b71ae127df856d4c5.jpeg")
    no-repeat center top / cover;
  height: 600px;
  padding-top: 8px;
  margin: 0;
}

.p1 {
  margin-top: 283px;
  margin-left: -15px;
  width: 340px;
  height: 84px;
  display: flex;
  font-size: 22px;
  text-align: center;
  line-height: 97.69%;
  align-items: flex-end;
  letter-spacing: 0.1em;
  font-style: normal;
  font-weight: normal;
  font-family: 'STIXIntegralsD',sans-serif;
}
.p2 {
  font-family: 'STIXIntegralsD',sans-serif;
  margin-top: 38px;
  margin-left: -15px;
  font-size: 20px;
  width: 360px;
  padding-bottom: 150px;
  font-style: normal;
  font-weight: normal;
  line-height: 97.69%;
  text-align: center;
  letter-spacing: 0.1em;
}
.first h1{
	width: 130px;
	height: 281px;
	font-family: 'Square721 BT';
	font-style: normal;
	font-weight: bold;
	font-size: 200px;
	line-height: 140.69%;
	margin: 0;
	margin-left: -30px;
	margin-top: -60px;
	background: linear-gradient(to bottom, rgba(255, 255, 255, 1),
	rgba(255, 255, 255, 0));
	-webkit-text-fill-color: transparent;
	-webkit-background-clip: text;
	position: absolute;
	z-index: 1;
	align-items: flex-end;
	letter-spacing: 0.1em;
}
.offer {
  margin-top: -150px;
}

.offer img {
  width: 100px;
  height: 94px;
  margin-left: 130px;
  margin-top: -100px;
}
.container3 a {
	text-decoration: none;
	color: white;
	margin-left: 20px;
	font-size: 24px;
	padding-left: 0;
	line-height: 140.69%;
}

.container3 p{
	color: #FFFFFF;
	margin: 0;
	padding-top: 0px;
	font-size: 50px;
	letter-spacing: 0.1em;
	font-style: normal;
	font-weight: bold;
	line-height: 140.69%;
	font-family: 'STIXIntegralsD',sans-serif;
	padding-bottom: 30px;
}

.container3{
	width: 700px;
	margin: 0 140px;
	color: #FFFFFF;
	margin-top: 45px;
	font-family: 'STIXIntegralsD',sans-serif;
	padding-bottom: 150px;
}

footer{
	background-color: black;
	font-family: 'STIXIntegralsD';
	border-top: 1px solid #898989;
  /* height: 300px; */
}
.w {
  margin-top: 26px;
  padding-top: 26px;
  font-size: 26px;
  letter-spacing: 0.1em;
  line-height: 140.69%;
  text-align: center;
  width: 310px;
  height: 37px;
  margin-left: 20px;
}

.first h1 {
  width: 70px;
  height: 141px;
  font-size: 100px;
  margin-left: 10px;
  margin-top: 16px;
}

.first p {
  font-size: 24px;
  width: 360px;
  height: 34px;
  letter-spacing: 0.1em;
  align-items: flex-end;
  margin-right: -30px;
  padding-top: 140px;
  line-height: 140.69%;
}
.second img {
  display: none;
}
button {
  margin-top: 58px;
  margin-left: 15px;
  padding: 0;
  width: 343px;
  height: 50px;
}

.aa {
  margin-top: 80px;
}

.container3 {
  width: 300px;
  margin: 0;
  padding: 0;
  font-weight: bold;
}
.butt {
  margin-left: -28px;
  margin-bottom: 10px;
  padding: 0;
}
.w {
  margin: -26px;
  padding: 0;
}
.block {
  padding: 0;
  margin: 0;
}

.part2 {
  margin: 0;
  padding: 0;
}

.s {
  margin-top: 60px;
  padding: 0;
  width: 20px;
  font-size: 20px;
  width: 300px;
  height: 100px;
  margin-left: 14px;
  font-style: normal;
  font-weight: normal;
  display: flex;
}
.container3 p {
  padding: 0;
  font-size: 26px;
  width: 249px;
  height: 37px;
  margin-bottom: 23px;
  letter-spacing: 0.1em;
  margin-left: 20px;
}
.container3 a {
  font-size: 16px;
}
.br {
  display: none;
}
.container3 {
  width: 300px;
  height: 210px;
  margin: 0;
  padding: 0;
  color: #ffffff;
  margin-top: 20px;
  font-family: "STIXIntegralsD", sans-serif;
  padding-bottom: 69px;
}
#btn {
  margin-bottom: 80px;
}

.qq {
  padding-left: 20px;
  margin-bottom: 10px;
}
.qqq {
  padding-left: 20px;
  margin-top: 0px;
}
</style>
