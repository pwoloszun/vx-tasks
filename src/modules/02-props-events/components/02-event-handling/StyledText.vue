<template>
  <div class="styled-text">
    <h3 class="headline mb-0">StyledText</h3>
    <p class="text-h4">TEXT_PLACEHOLDR</p>
    <div>
      <div>
        <input type="checkbox" id="bold" />
        <label for="bold">Bold</label>
      </div>
      <div>
        <input type="checkbox" id="italic" />
        <label for="italic">Italic</label>
      </div>
      <div>
        <input type="checkbox" id="underline" />
        <label for="underline">Underline</label>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

interface CssClassesStruct {
  'make-bold': boolean;
  'add-underline': boolean;
  'my-italic': boolean;
}

export default Vue.extend({
  name: 'StyledText',
  data() {
    return {
      exampleText: 'Lorem ipsum dolorem...',
      isBold: false,
      isItalic: false,
      isUnderline: false,
    };
  },
});
</script>

<style scoped>
.styled-text {
  border: 1px solid #000;
  padding: 18px;
}

.styled-text .make-bold {
  font-weight: bold;
}

.styled-text .add-underline {
  text-decoration: underline;
}

.styled-text .my-italic {
  font-style: italic;
}
</style>
