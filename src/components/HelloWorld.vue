<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>{{ text }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import { vuexStore } from '../compose';

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;

  get text() {
    return vuexStore.testString;
  }
}
</script>
