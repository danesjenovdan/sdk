<template>
  <div id="builder">
    <div id="party-buttons">
      <party-button
        v-for="party in parties"
        :key="party.acronym"
        :caption="party.acronym"
        :selected="selectedParties.indexOf(party.acronym) !== -1"
        @click.native="clickParty(party)"
      ></party-button>
    </div>
    <div id="dz-container">
      <d-z-vec :num-highlighted="numHighlighted"></d-z-vec>
    </div>
    <div id="info-container">
      <p
        v-if="numHighlighted < 46"
        id="prompt"
      >{{ prompt }}</p>
      <p v-else id="prompt">To je sicer dovolj za sestavo vlade, <strong>ampak ...</strong></p>
      <div
        v-if="numHighlighted > 45"
        class="tiny-card-container"
      >
        <tiny-card
          :imgSrc="chosenParties[0].loserImg"
          :caption="chosenParties[0].loserText"
        ></tiny-card>
        <tiny-card
          :imgSrc="chosenParties[1].loserImg"
          :caption="chosenParties[1].loserText"
        ></tiny-card>
      </div>
      <div
        v-if="numHighlighted > 45"
        class="button-container"
      >
        <regular-button
          caption="Poskusi znova"
          @click.native="clear"
          color="green"
        ></regular-button>
        <regular-button
          caption="Poskusi drugače"
          @click.native="flipAndGo"
        ></regular-button>
      </div>
    </div>
  </div>
</template>

<script>
import PartyButton from './PartyButton.vue';
import DZVec from './DZ.vue';
import TinyCard from './TinyCard.vue';
import RegularButton from './RegularButton.vue';
import dz from '../assets/dz.json';

export default {
  name: 'Builder',

  components: { PartyButton, DZVec, TinyCard, RegularButton },

  data() {
    return {
      numHighlighted: 0,
      parties: dz.parties.map((party) => {
        const theparty = party;
        return {
          acronym: theparty.acronym,
          seats: theparty.seats,
          selected: false,
          loserImg: theparty.loserImg,
          loserText: theparty.loserText,
        };
      }),
      selectedParties: [],
      chosenParties: [],
    };
  },

  computed: {
    prompt() {
      switch (this.numHighlighted) {
        case 0:
          return 'Izberi stranke, ki bi po tvojem lahko sestavile koalicijo.';
        default:
          return this.numHighlighted > 45 ? 'REZULTAT' : 'To je premalo za sestavo koalicije.';
      }
    },
  },

  methods: {
    clickParty(party) {
      const index = this.selectedParties.indexOf(party.acronym);
      if (index === -1) {
        this.selectedParties.push(party.acronym);
        this.numHighlighted += party.seats;
      } else {
        this.selectedParties.splice(index, 1);
        this.numHighlighted -= party.seats;
      }

      if (this.numHighlighted > 45) {
        this.chooseParties();
      }
    },
    chooseParties() {
      const firstindex = Math.floor(Math.random() * this.selectedParties.length);
      const secondindex = Math.floor(Math.random() * this.selectedParties.length);
      console.log(firstindex, secondindex);
      if (firstindex !== secondindex) {
        this.chosenParties = this.parties.filter((party) => {
          return (party.acronym === this.selectedParties[firstindex])
          || (party.acronym === this.selectedParties[secondindex]);
        });
      } else {
        this.chooseParties();
      }
    },

    clear() {
      this.numHighlighted = 0;
      this.selectedParties = [];
    },

    flipAndGo() {
      document.getElementsByTagName('body')[0].className += ' rotate';
      // document.getElementsByTagName('body')[0].style.transform = 'rotate(180deg)';
      setTimeout(() => {
        this.$router.push({ path: 'oglas/0' });
      }, 1350);

      setTimeout(() => {
        document.getElementsByTagName('body')[0].className = '';
      }, 2000);
    },
  },
};
</script>

<style lang="scss" scoped>
  #builder {
    display: flex;
    padding-top: 40px;
    #party-buttons {
      flex: 1;
    }

    .regular-button {
      margin-bottom: 10px;
    }

    #dz-container {
      flex: 3;

      padding: 20px;

      text-align: center;
      svg {
        max-height: 347px;
      }

      @media (max-width: 992px) {
        display: none;
      }
    }
    #info-container {
      flex: 3;

      .tiny-card-container {
        width: 100%;
        display: flex;

        @media (max-width: 768px) {
          flex-wrap: wrap;

          .tiny-card {
            margin: 0;
          }
        }
      }

      @media (max-width: 768px) {
        margin-left: 20px;
      }
    }

    #prompt {
      max-width: 400px;
      text-align: left;
      color: #070c2f;
      font-family: 'Barlow', sans-serif;
      font-size: 24px;
      font-weight: 300;
      line-height: 30px;

      margin-top: 0;

      strong {
        font-weight: 700;
      }
    }

    .button-container {
      width: 100%;
      text-align: left;
      position: relative;
      margin-top: 20px;
    }
  }
</style>

<style lang="scss">
.rotate {
  transition: all 1.5s ease-in;
  transform: rotate(360deg);

  #footer {
    display: none;
  }
}
</style>
