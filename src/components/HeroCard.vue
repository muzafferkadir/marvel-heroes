<template>
  <vs-col
    vs-type="flex"
    vs-justify="center"
    vs-align="center"
    w="4"
    xs="12"
    sm="6"
    class="comic-detail-sticky"
  >
    <vs-card>
      <template #text>
        <h5>{{ name }}</h5>
        {{ description }}
      </template>
      <template #img>
        <img
          v-if="thumbnail"
          :src="`${thumbnail.path}.${thumbnail.extension}`"
          class="img-fluid"
          :alt="name"
          loading="lazy"
        />
      </template>
      <template #interactions>
        <vs-tooltip>
          <vs-button flat danger class="btn-chat" shadow primary>
            <ph-books :size="16" />
            <span class="series-info"> {{ availableSeries }} </span>
          </vs-button>
          <template #tooltip> {{ availableSeries }} available series </template>
        </vs-tooltip>
        <vs-tooltip>
          <vs-button flat danger class="btn-chat" shadow primary>
            <ph-book-bookmark :size="16" />
            <span class="series-info"> {{ returnedSeries }} </span>
          </vs-button>
          <template #tooltip>
            {{ returnedSeries }} series are returned
          </template>
        </vs-tooltip>
        <vs-tooltip>
          <vs-button flat danger class="btn-chat" shadow primary>
            <ph-quotes :size="16" />
            <span class="series-info"> {{ availableStories }} </span>
          </vs-button>
          <template #tooltip>
            {{ availableStories }} available stories
          </template>
        </vs-tooltip>
        <vs-tooltip>
          <vs-button flat danger class="btn-chat" shadow primary>
            <ph-book-open :size="16" />
            <span class="series-info"> {{ returnedStories }} </span>
          </vs-button>
          <template #tooltip>
            {{ returnedStories }} stories are returned
          </template>
        </vs-tooltip>
      </template>
    </vs-card>
    <div v-if="detailedURLs" class="d-flex mt-2">
      <vs-button
        v-for="data in detailedURLs"
        :key="data.type"
        icon
        :href="data.url"
        :color="$defaultColor"
      >
        <ph-link :size="16" />
        {{ data.type | capitalize }}
      </vs-button>
    </div>
  </vs-col>
</template>

<script>
import {
  PhBooks,
  PhQuotes,
  PhBookOpen,
  PhBookBookmark,
  PhLink,
} from "phosphor-vue";

export default {
  components: {
    PhQuotes,
    PhBooks,
    PhBookOpen,
    PhBookBookmark,
    PhLink,
  },
  props: {
    thumbnail: Object,
    name: String,
    description: {
      type: String,
      default: "No available description",
    },
    availableSeries: Number,
    returnedSeries: Number,
    availableStories: Number,
    returnedStories: Number,
    detailedURLs: Array,
  },
};
</script>

<style lang="scss">
.vs-card {
  max-width: 100% !important;
  & h5 {
    margin-top: 20px;
  }

  & .series-info {
    font-size: 16px;
    display: inline-block;
    margin-left: 8px;
  }

  & svg {
    opacity: 0.5;
  }

  .vs-card__interactions {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  & .vs-tooltip-content {
    & .vs-button {
      &:hover,
      &:focus {
        background-color: #e62429;
        color: white;
      }
    }
  }
}
</style>
