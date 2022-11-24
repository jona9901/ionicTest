<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Tab 1</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-grid>
        <ion-row>
          <ion-col>
            <div>CLAVES</div>
          </ion-col>
          <ion-col>
            <div>DATOS</div>
          </ion-col>
        </ion-row>
        <ion-row v-for="(item, index) in listaClaves" :key="index">
          <ion-col>
            <div>{{listaKeys[index]}}</div>
          </ion-col>
          <ion-col>
            <div>{{item.status}}</div>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent } from 'vue';
import { getDatabase, ref, onValue } from "firebase/database";
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol } from '@ionic/vue';

export default  defineComponent({
  name: 'Tab1Page',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonGrid, IonRow, IonCol },
  data() {
    return {
      listaClaves: [{ status: "", usuario: "" }],
      listaKeys: [],
    };
  },

  mounted() {
    const db = getDatabase();
    const starCountRef = ref(db, "claves/");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      var cont = 0
      snapshot.forEach(element => {
        this.listaKeys[cont]=element.key
        this.listaClaves[cont] = element.toJSON()
        cont++
      });
    });
    console.log("lista de claves", this.listaCaves)
    }
});


</script>

<style>
  ion-col > div {
    background-color: #c5a4a4;
    border: solid 1px #ddd;
    padding: 10px;
    text-align: center;
  }
</style>
