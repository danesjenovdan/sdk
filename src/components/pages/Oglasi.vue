<template>
  <div id="ads-page">
    <p class="jumbo">Ni prav, da se vlada oblikuje na način trgovanja s pozicijami, funkcijami in močjo, ki je cinično zapakirano v sestanke za preverjanje stališč in vsebinsko povezovanje. Če želimo dobro vlado, je treba uveljavljen proces obrniti na glavo in namesto ministrstev za posamezne apetite poiskati vsebinsko najboljše ministrice in ministrice!</p>
    <p class="subjumbo">Če bi vlado sestavljala koalicija civilnodružbenih organizacij, bi kandidate in kandidatke izbirali s pomočjo spodnjih oglasov za delo!</p>
    <div class="major-container dropdown-container">
      <select
        @change="goTo"
        v-model="selectedAd"
      >
        <option
          v-for="(ad, i) in ads"
          :value="i"
        >{{ ad.title }}</option>
      </select>
    </div>
    <div class="major-container">
      <div class="navigation-container">
        <party-button
          v-for="(ad, i) in ads"
          :caption="ad.title"
          :italic="true"
          :big="true"
          :arrowed="true"
          :selected="selectedAd === i"
          @click.native="selectAd(i)"
          :key="ad.image"
        ></party-button>
      </div>
      <div class="ad-container">
        <big-card :image="ads[selectedAd].image">
          <h2 v-if="ads[selectedAd].firstBullets.length > 0">Podroben opis delovnega mesta - ključne naloge:</h2>
          <ul v-if="ads[selectedAd].firstBullets.length > 0">
            <li v-for="bullet in ads[selectedAd].firstBullets" v-html="bullet"></li>
          </ul>
          <h2 v-if="ads[selectedAd].firstBullets.length > 0">Kaj pričakujemo</h2>
          <ul v-if="ads[selectedAd].firstBullets.length > 0">
            <li v-for="bullet in ads[selectedAd].secondBullets" v-html="bullet"></li>
          </ul>
          <h2 v-if="ads[selectedAd].firstBullets.length > 0">Kaj nudimo</h2>
          <ul v-if="ads[selectedAd].firstBullets.length > 0">
            <li v-for="bullet in ads[selectedAd].thirdBullets" v-html="bullet"></li>
          </ul>
          <p v-if="ads[selectedAd].extra !== ''">{{ ads[selectedAd].extra }}</p>
        </big-card>
      </div>
    </div>
    <p class="jumbo">
      Nemogoče je najti kadre, ki bi imeli odgovore na vsa vprašanja in pereče dileme,
      zato bodočega mandatarja ali mandatarko pozivamo, naj prekine trend hitrega sprejemanja
      zakonov z izogibanjem javni razpravi in z nami vzpostavi konstruktiven dialog!
    </p>
    <div class="major-container cta-container">
      <div class="cta">
        <regular-button
          caption="Deli!"
          color="green"
          @click.native="share()"
        ></regular-button>
        <progress-bar
          :goal="1124"
          :current="current"
        ></progress-bar>
      </div>
      <div class="cta-jumbo-container">
        <p class="jumbo-cta">
          Prejšnja vlada je kar <a href="https://www.cnvos.si/stevec-krsitev/" target="_blank">1124 predpisov</a>
          sprejela brez ustreznega posveta s civilno družbo!
        </p>
        <p class="subjumbo-cta">
          Vsak od njih je razlog za deljenje tega spletnega mesta na družbenih omrežjih!
          Skupaj opozorimo prihajajočo vlado, da nam ni vseeno in da nas nihče ne bo utišal!
        </p>
      </div>
    </div>
    <div class="major-container linki">
      <h3>KOALICIJA NEVLADNIH in DRUŽBENOODGOVORNIH ORGANIZACIJ</h3>
      <a
        v-for="org in orgs"
        :href="org.link"
        target="_blank"
        v-if="org.link !== ''"
        v-bind:key="org.id"
      >{{ org.name }}</a>
      <span v-else>{{ org.name }}</span>
    </div>
  </div>
</template>

<script>
import PartyButton from '../PartyButton.vue';
import BigCard from '../BigCard.vue';
import RegularButton from '../RegularButton.vue';
import ProgressBar from '../ProgressBar.vue';
import TheFooter from '../Footer.vue';

import ads from '../../assets/ads.json';
import orgs from '../../assets/orgs.json';
// import og from '../../assets/og.json';

export default {
  name: 'Oglasi',

  components: {
    PartyButton,
    BigCard,
    RegularButton,
    ProgressBar,
  },

  data() {
    return {
      ads: ads.ads,
      selectedAd: this.$route.params.oglasId || 0,
      orgs: orgs.orgs,
      current: 236,
      // og.title,
      // og.text,
      // og.hashtags,
      // og.link,
    };
  },

  methods: {
    selectAd(i) {
      this.selectedAd = i;
      this.$router.push({
        path: `/oglas/${i}`,
      });
    },
    share() {
      TheFooter.methods.fbShare();
    },
    goTo() {
      this.$router.push({
        path: `/oglas/${this.selectedAd}`,
      });
    },
  },

  mounted() {
    this.$http.get('https://graph.facebook.com/?id=https://sestavivlado.si/').then((response) => {
      this.current = response.body.share.share_count + 514 + 39;
    });
  },
};
</script>

<style lang="scss" scoped>
#ads-page {
  width: 100%;
  height: 100%;

  h1 {
    font-family: 'Overpass Mono', monospace;
    font-size: 38px;
    font-weight: 700;
    line-height: 48px;
    color: #070c2f;

    text-align: left;
    max-width: 861px;

    @media (max-width: 992px) {
      font-size: 30px;
      line-height: 40px;
    }
  }

  .jumbo {
    max-width:  800px;
    text-align: left;
    color: #070c2f;
    font-family: "Overpass Mono";
    font-size: 20px;
    font-weight: 700;
    /* Text style for "Ni prav, d" */
    line-height: 40px;
    .light {
      /* Text style for "Če želimo" */
      color: #3a3653;
    }

    @media (max-width: 992px) {
      font-size: 16px;
      line-height: 32px;
    }

    margin-top: 60px;
  }
  .subjumbo {
    /* Text style for "Če bi vlad" */
    color: #7147dd;
    font-size: 38px;
    line-height: 48px;
    text-align: right;
    font-weight: 900;

    max-width: 1000px;
    float: right;

    margin-top: 60px;
    margin-bottom: 60px;

    @media (max-width: 992px) {
      font-size: 30px;
      line-height: 40px;
    }
  }

  .major-container {
    display: flex;
    width: 100%;
  }

  .navigation-container {
    flex: 0 0 auto;
    width: 324px;
    // padding-right: 35px;
    // padding-right: 124px;

    .party-button {
      text-align: left;
      padding-left: 10px;

      height: 40px;
      line-height: 20px;

      padding-top: 4px;
      padding-bottom: 7px;
    }

    @media (max-width: 992px) {
      display: none;
    }
  }

  .dropdown-container {
    display: none;

    select {
      width: 100%;
      margin-bottom: 20px;
    }

    @media (max-width: 992px) {
      display: block;
    }
  }

  .ad-container {
    flex: 3;

    .big-card {
      min-height: 857px;
    }

    h2 {
      margin-top: 0;
      color: #070c2f;
      font-family: 'Barlow', sans-serif;
      font-size: 18px;
      font-weight: 700;
      line-height: 24px;
      text-align: left;

      padding-right: 47px;
      padding-left: 47px;

      &:first-child {
        padding-top: 38px;
      }
    }
    ul, p {
      color: #070c2f;
      font-family: 'Barlow', sans-serif;
      font-size: 18px;
      font-weight: 400;
      line-height: 24px;
      text-align: left;

      padding-left: 30px;
      padding-right: 47px;

      list-style-type: none;

      &:first-of-type {
        li {
          &:nth-child(1),
          &:nth-child(2),
          &:nth-child(3),
          &:nth-child(4),
          &:nth-child(5) {
            padding-right: 200px;

            @media (max-width: 992px) {
              padding-right: 0;
            }
          }
        }
      }

      li {
        background:url('../../assets/arrow.png') no-repeat 0 8px;
        padding-left: 40px;

        &:last-child {
          padding-bottom: 31px;
        }
      }

      @media (max-width: 992px) {
        font-size: 14px;
      }
    }

    p {
      padding-top: 20px;
      padding-right: 150px;
      margin-top: 0;
      padding-top: 350px;
    }
  }

  .cta-container {
    @media (max-width: 992px) {
      display: block;
    }
  }

  .cta {
    flex: 1;
    background-image: url('../../assets/megafon.svg');
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: 60%;

    margin-top: 60px;

    position: relative;

    @media (max-width: 992px) {
      background-size: 200px;
    }

    .regular-button {
      position: absolute;
      right: 0;
      top: 240px;

      @media (max-width: 992px) {
        top: 160px;
      }
    }

    .progress-bar-container {
      position: absolute;
      bottom: 0;
      left: 0;
    }

    @media (max-width: 992px) {
      width: 100%;
      display: block;
      overflow: hidden;
      height: 300px;
    }
  }
  .cta-jumbo-container {
    flex: 1;
    .jumbo-cta {
      max-width: 535px;
      color: #070c2f;
      font-family: 'Overpass Mono', monospace;
      font-size: 38px;
      font-weight: 700;
      line-height: 48px;
      text-align: right;
      float: right;

      margin-bottom: 0;

      @media (max-width: 992px) {
        font-size: 30px;
        line-height: 40px;
      }

      a {
        color: #26a6b5;
      }
    }

    .subjumbo-cta {
      max-width: 479px;
      color: #070c2f;
      font-family: 'Overpass Mono', monospace;
      font-size: 20px;
      font-weight: 700;
      line-height: 34px;

      text-align: right;
      float: right;

      @media (max-width: 992px) {
        font-size: 16px;
        line-height: 32px;
      }
    }

    @media (max-width: 992px) {
      width: 100%;
      display: block;
      overflow: hidden;
    }
  }
  .linki {
    display: block;
    width: 100%;
    text-align: left;
    padding-top: 50px;

    padding-bottom: 40px;

    h3 {
      font-family: 'Overpass Mono', monospace;
      font-size: 24px;
      font-weight: 700;
      width: 100%;
    }

    a, span {
      color: #7147dd;
      width: 80%;
      display: block;
      padding-left: 40px;
      padding-bottom: 20px;
      font-weight: 700;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }

    span:hover {
      text-decoration: none;
    }
  }
}
</style>

<style lang="scss">
  #footer.oglas {
    position: relative;
    width: 100%;
  }

  ul {
    a {
        color: #26a6b5;
      }
  }
</style>
