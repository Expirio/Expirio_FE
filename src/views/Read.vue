<template>
  <v-container class="home">
    <v-layout align-center justify-center grow>
      <v-flex xs12 sm6 md5 lg4 xl-3 pt-3>
        <ReadSecretWithHash v-if="param" :hash="param"/>
        <ReadSecretWithPass v-if="!param"/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
// @ is an alias to /src
import ReadSecretWithPass from '@/components/ReadSecretWithPass.vue';
import ReadSecretWithHash from '@/components/ReadSecretWithHash.vue';

export default {
  name: 'readSecretPage',
  data() {
    return {
      param: null,
      type: 'pass',
    };
  },
  components: {
    ReadSecretWithPass,
    ReadSecretWithHash,
  },
  created() {
    this.param = this.$route.params && this.$route.params.hash ? this.$route.params.hash : null;
  },
};
</script>
