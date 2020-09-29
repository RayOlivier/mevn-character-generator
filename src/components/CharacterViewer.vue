<template>
  <div class="character-viewer">
    <h1>Character Viewer</h1>
    <p v-for="(character, index) in characters" v-bind:key="index">{{ character.name }} is a {{ character.profession }}!</p>
    <button v-on:click="getCharacters">Refresh Characters</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "CharacterViewer",
  data: function() {
    return {
      characters: null
    };
  },
  methods: {
    getCharacters: function() {
      axios.get("http://localhost:3000/characters").then(response => (this.characters = response.data));
    }
  },
  mounted: function() {
    this.getCharacters();
  }
};
</script>

<style scoped></style>
