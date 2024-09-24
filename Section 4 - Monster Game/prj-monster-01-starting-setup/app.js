function randomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const initialState = {
  playerHealth: 100,
  monsterHealth: 100,
  currentRound: 0,
  winner: "",
  logMessages: [],
};

const app = Vue.createApp({
  data() {
    return structuredClone(initialState);
  },
  watch: {
    playerHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        this.winner = "draw";
      } else if (value <= 0) {
        this.winner = "monster";
      }
    },
    monsterHealth(value) {
      this.currentRound++;

      if (value <= 0 && this.playerHealth <= 0) {
        this.winner = "draw";
      } else if (value <= 0) {
        this.winner = "player";
      }
    },
  },
  computed: {
    specialAttackAvailable() {
      return this.currentRound % 3 === 0;
    },
  },
  methods: {
    newGame() {
      const state = structuredClone(initialState);
      this.playerHealth = state.playerHealth;
      this.monsterHealth = state.monsterHealth;
      this.currentRound = state.currentRound;
      this.winner = state.winner;
      this.logMessages = state.logMessages;
    },
    attackMonster() {
      const attackValue = randomValue(5, 12);
      this.monsterHealth -= attackValue;
      this.addLogMessage("player", "attack", attackValue);
      this.attackPlayer();
    },
    attackPlayer() {
      const attackValue = randomValue(8, 15);
      this.playerHealth -= attackValue;
      this.addLogMessage("monster", "attack", attackValue);
    },
    specialAttackMonster() {
      const attackValue = randomValue(10, 25);
      this.monsterHealth -= attackValue;
      this.addLogMessage("player", "attack", attackValue);
      this.attackPlayer();
    },
    healPlayer() {
      this.currentRound++;
      const healValue = randomValue(8, 20);
      if (healValue + this.playerHealth > 100) this.playerHealth = 100;
      else this.playerHealth += healValue;
      this.addLogMessage("player", "heal", healValue);
      this.attackPlayer();
    },
    surrender() {
      this.winner = "monster";
    },
    addLogMessage(who, what, value) {
      this.logMessages.unshift({
        actionBy: who,
        actionType: what,
        actionValue: value,
        round: this.currentRound,
      });
    },
  },
});

app.mount("#game");
