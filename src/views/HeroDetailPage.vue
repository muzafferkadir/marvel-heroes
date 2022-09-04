<template>
  <div class="center grid custom-grid">
    <vs-row>
      <HeroCard
        :key="character?.id"
        :name="character?.name"
        :thumbnail="character?.thumbnail"
        :description="character?.description"
        :availableSeries="character?.series?.available || 0"
        :returnedSeries="character?.series?.returned || 0"
        :availableStories="character?.stories?.available || 0"
        :returnedStories="character?.stories?.returned || 0"
        :detailedURLs="character?.urls"
      />
      <vs-col
        vs-type="flex"
        vs-justify="center"
        vs-align="center"
        w="8"
        xs="12"
        sm="6"
      >
        <div class="detail-table">
          <vs-table>
            <template #thead>
              <vs-tr>
                <vs-th> Comics (last 10) </vs-th>
              </vs-tr>
            </template>
            <template #tbody>
              <vs-tr :key="comic.title" v-for="comic in comics" :data="comics">
                <vs-td>
                  <span>{{ comic.title }}</span>
                </vs-td>
              </vs-tr>
            </template>
          </vs-table>
        </div>
        <div class="detail-table">
          <vs-table>
            <template #thead>
              <vs-tr>
                <vs-th> Series </vs-th>
              </vs-tr>
            </template>
            <template #tbody>
              <vs-tr
                :key="serie.name"
                v-for="serie in character?.series?.items"
                :data="character?.series"
              >
                <vs-td>
                  <span>{{ serie.name }}</span>
                </vs-td>
              </vs-tr>
            </template>
          </vs-table>
        </div>
        <div class="detail-table">
          <vs-table>
            <template #thead>
              <vs-tr>
                <vs-th> Stories </vs-th>
              </vs-tr>
            </template>
            <template #tbody>
              <vs-tr
                :key="story.name"
                v-for="story in character?.stories?.items"
                :data="character?.stories"
              >
                <vs-td>
                  <span>{{ story.name }}</span>
                </vs-td>
              </vs-tr>
            </template>
          </vs-table>
        </div>
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
import HeroCard from "../components/HeroCard.vue";

export default {
  name: "CharacterDetailPage",
  components: { HeroCard },

  data() {
    return {};
  },

  mounted() {
    this.$store.dispatch("fetchCharacter", { charID: this.charID });
    this.$store.dispatch("fetchCharactersComics", { charID: this.charID });
  },

  computed: {
    charID() {
      return this.$route.params?.id;
    },

    character() {
      return this.$store.state.characterData || null;
    },

    comics() {
      return this.$store.state.charactersComicData || null;
    },
  },
};
</script>

<style scoped>
.custom-grid {
  max-width: 1320px;
  margin: 0 auto;
}

.comic-detail-sticky {
  position: sticky;
  top: 30px;
}

.vs-col {
  padding: 15px;
}

.detail-table {
  background-color: white;
  border-radius: 20px;
  padding: 20px;
  margin-bottom: 30px;
}

.vs-table__th {
  border-radius: 10px !important;
}

.vs-table__td {
  padding: 16px 12px;
}

.vs-table__tr {
  counter-increment: section;
}

.vs-table__tr span {
  position: relative;
}

.vs-table__tr span::before {
  content: "#" counter(section);
  background-color: #e62429;
  color: white;
  display: inline-block;
  padding: 2px 4px;
  border-radius: 6px;
  margin-right: 8px;
}

@media screen and (max-width: 900px) {
  .comic-detail-sticky {
    position: relative;
    top: 0;
  }
}
</style>
