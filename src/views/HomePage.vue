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
    getFirstList() {
      if (!this.characters.length || this.characters.length === 0)
        this.$store.dispatch("fetchCharactersList", {
          limit: this.pageLimitSize,
        });
    },
  },

  mounted() {
    this.getFirstList();
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
