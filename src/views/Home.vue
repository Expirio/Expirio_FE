<template>
  <v-container class="home">
    <v-layout align-center justify-center grow>
      <v-flex xs12 sm8 md6 sm4 pt-3>
        <v-tabs v-model="active" grow>
          <v-tab key="request" ripple>{{ $t('message.tabs.requestSecret') }}</v-tab>
          <v-tab key="write" ripple>{{ $t('message.tabs.writeSecret') }}</v-tab>
          <v-tab-item key="request">
            <RequestSecret class="mt-2"/>
          </v-tab-item>
          <v-tab-item key="write">
            <WriteSecret class="mt-2"/>
          </v-tab-item>
        </v-tabs>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
// @ is an alias to /src
import WriteSecret from '@/components/WriteSecret.vue';
import RequestSecret from '@/components/RequestSecret.vue';

export default {
  name: 'home',
  components: {
    WriteSecret,
    RequestSecret,
  },
  data() {
    return {
      type: 'requestSecret',
      active: null,
    };
  },
};
</script>
