<template>
  <div class="center grid custom-grid">
    <vs-row>
      <HeroCard
        v-for="character in characters"
        :key="character.id"
        :name="character.name"
        :thumbnail="character.thumbnail"
        :availableSeries="character.series?.available || 0"
        :returnedSeries="character.series?.returned || 0"
        :availableStories="character.stories?.available || 0"
        :returnedStories="character.stories?.returned || 0"
        @click.native="goCharacterDetail(character)"
      />
    </vs-row>
  </div>
</template>

<script>
import HeroCard from "../components/HeroCard.vue";
export default {
  name: "HomePage",
  components: { HeroCard },

  data() {
    return {
      pageLimitSize: 30,
    };
  },

  methods: {
    goCharacterDetail(character) {
      const detailURL = `/details/${character.id}`;
      this.$router.push(detailURL);
    },

    getFirstList() {
      if (!this.characters.length || this.characters.length === 0)
        this.$store.dispatch("fetchCharactersList", {
          limit: this.pageLimitSize,
        });
    },

    infiniteScrollHandler() {
      window.onscroll = () => {
        const scrollOffset = Math.max(
          window.pageYOffset,
          document.documentElement.scrollTop,
          document.body.scrollTop
        );

        const bottomOfWindow =
          scrollOffset + window.innerHeight >=
          document.documentElement.offsetHeight;

        if (bottomOfWindow && this.$route.name === "Home") {
          this.$store.dispatch("fetchCharactersList", {
            limit: this.pageLimitSize,
            offset: this.characters?.length || 0,
          });
        }
      };
    },
  },

  mounted() {
    this.getFirstList();
    this.infiniteScrollHandler();
  },

  computed: {
    characters() {
      return this.$store.state.characterList || null;
    },
  },
};
</script>

<style>
.custom-grid {
  max-width: 1320px;
  margin: 0 auto;
}

.vs-col {
  padding: 15px;
}
</style>
