<template>
  <div id="footer">
    <div id="footershare-container">
      <span>Povej naprej!</span>
      <share-button
        icon="fb"
        @click.native="fbShare()"
      ></share-button>
      <share-button
        icon="tw"
        @click.native="twShare()"
      ></share-button>
      <share-button
        icon="mail"
        @click.native="mailShare()"
      ></share-button>
    </div>
  </div>
</template>

<script>
import ShareButton from './ShareButton';

export default {
  name: 'TheFooter',

  components: { ShareButton },

  data() {
    return {
      title: 'Povolilna kombinatorika',
      text: 'Zavrnimo povolilno trgovanje s pozicijami, fokus naj bo na vsebinah in kompetencah!',
      hashtags: '#sestavivlado',
      link: '',
    };
  },

  mounted() {
    this.$http.post('https://djnd.si/yomamasofat/', { fatmama: document.location.href, }).then((response) => {
      this.link = response;
    });
  },

  methods: {
    fbShare() {
      const url = `https://www.facebook.com/dialog/feed?app_id=833917570125908&redirect_uri=${encodeURIComponent(document.location.href)}&link=${encodeURIComponent(document.location.href)}&ref=responsive`;
      window.open(url, '_blank');
    },
    twShare() {
      const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(this.text + ' ' + this.hashtags + ' ' + this.link)}`;
      window.open(url, '_blank');
    },
    mailShare() {
      const url = `mailto:?subject=${encodeURIComponent(this.title)}&body=${this.text} ${encodeURIComponent(this.link)}`;
      window.open(url, '_blank');
    },
  },
};
</script>

<style lang="scss" scoped>
#footer {
  background: #ffffff;
  width: 100%;
  height: 91px;

  color: #7147dd;
  font-family: 'Barlow', sans-serif;
  font-size: 26px;
  font-weight: 700;
  text-transform: uppercase;

  line-height: 91px;

  #footershare-container {
    width: 100%;
    height: 91px;
    display: block;
    position: relative;
    overflow: hidden;
    text-align: center;

    span {
      display: inline-block;
      margin: auto;
      position: relative;
      // float: left;
    }

    button {
      display: inline-block;
      position: relative;
      // float: left;
      vertical-align: middle;
      top: -2px;
    }
  }
}
</style>
