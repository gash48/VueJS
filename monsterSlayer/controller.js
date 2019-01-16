const ATTACKDAMAGELIMIT = 20;
const HEALLIMIT = 40;
const initialPlayersHealth = 100;
const playerName = "Drax";
const opponentName = "Thanos";

const CSSCLASS = {
  playerLog: "playerMessageColor",
  opponentLog: "opponentMessageColor",
  healthGood: "healthGood",
  healthPoor: "healthPoor",
  healthBad: "healthBad",
  healthAvg: "healthAvg"
};

const monsterApp = new Vue({
  el: "#gameContainer",
  data: {
    player: {
      name: playerName,
      health: initialPlayersHealth
    },
    opponent: {
      name: opponentName,
      health: initialPlayersHealth
    },
    gameIsRunning: false,
    logsArr: [],
    initialPlayersHealth: initialPlayersHealth
  },
  watch: {
    "player.health": function(value) {
      if (value <= 0) {
        this.gameLost(this.player.name);
      }
    },
    "opponent.health": function(value) {
      if (value <= 0) {
        this.gameLost(this.opponent.name);
      }
    }
  },
  methods: {
    healthChangeOnAttack(attackPower = 1) {
      const calculatePlayerDamage = this.getRandomHealOrDamage(
        ATTACKDAMAGELIMIT * attackPower
      );
      const calculateOpponentDamage = this.getRandomHealOrDamage(
        ATTACKDAMAGELIMIT * attackPower
      );

      this.player.health -= calculateOpponentDamage;
      this.opponent.health -= calculatePlayerDamage;

      this.logsArr.push(
        {
          name: this.player.name,
          damage: calculateOpponentDamage,
          class: CSSCLASS.playerLog
        },
        {
          name: this.opponent.name,
          damage: calculatePlayerDamage,
          class: CSSCLASS.opponentLog
        }
      );
    },
    healthChangeOnHeal() {
      const calculatePlayerHeal = this.getRandomHealOrDamage(HEALLIMIT);
      const calculateOpponentHeal = this.getRandomHealOrDamage(HEALLIMIT);

      this.player.health =
        this.player.health + calculatePlayerHeal > this.initialPlayersHealth
          ? this.initialPlayersHealth
          : this.player.health + calculatePlayerHeal;
      this.opponent.health =
        this.opponent.health + calculateOpponentHeal > this.initialPlayersHealth
          ? this.initialPlayersHealth
          : this.opponent.health + calculateOpponentHeal;
    },
    attack() {
      this.healthChangeOnAttack(1);
    },
    specialAttack() {
      this.healthChangeOnAttack(2);
    },
    healPlayers() {
      this.healthChangeOnHeal();
    },
    getRandomHealOrDamage(numLimit) {
      return Math.floor(Math.random() * numLimit);
    },
    applyDamageClass(health) {
      const parsedHealth = parseInt(health, 10);
      if (parsedHealth > 80) {
        return CSSCLASS.healthGood;
      } else if (parsedHealth > 60 && parsedHealth <= 80) {
        return CSSCLASS.healthAvg;
      } else if (parsedHealth > 30 && parsedHealth <= 60) {
        return CSSCLASS.healthPoor;
      }
      return CSSCLASS.healthBad;
    },
    gameLost(playerName) {
      alert(`${playerName} Lost. Try Again ?`);
      this.resetGame();
    },
    resetGame() {
      if (confirm(`Are You Sure ?`)) {
        this.player.health = initialPlayersHealth;
        this.opponent.health = initialPlayersHealth;
        this.gameIsRunning = false;
      }
    }
  }
});
