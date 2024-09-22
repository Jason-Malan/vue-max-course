function randomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      currentRound: 0,
    };
  },
  watch: {
    monsterHealth() {
      this.currentRound++;
    },
  },
  computed: {
    specialAttackAvailable() {
      return this.currentRound % 3 === 0;
    },
  },
  methods: {
    attackMonster() {
      this.monsterHealth -= randomValue(5, 12);
      this.attackPlayer();
    },
    attackPlayer() {
      this.playerHealth -= randomValue(8, 15);
    },
    specialAttackMonster() {
      this.monsterHealth -= randomValue(10, 25);
      this.attackPlayer();
    },
    healPlayer() {
      this.currentRound++;
      const healValue = randomValue(8, 20);
      if (healValue + this.playerHealth > 100) this.playerHealth = 100;
      else this.playerHealth += healValue;
      this.attackPlayer();
    },
  },
});

app.mount("#game");
