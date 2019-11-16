# TODO

Integrate API with a pokedex command

- [ ] No comma for only 2 abilities

General

- [ ] Cooldown on chat commands

Setup

- prettier
- eslint

Battle Game

- [ ] Create ability to enter Tall Grass Mode
- [ ] Add random encounter at any point in a given time frame
- [ ] Create random set of abilites for chat
- [ ] Create pool of pokemon for Boss
- [ ] Create Boss pokemon stats
- [ ] Track chat votes on abilities to use
- [ ] Execute ability
- [ ] Track damage done to boss
- [ ] Conclude the battle and set up next encounter!

# Game Ideas

- Chat boss battle, `!attack <move>`
- Who's that pokemon, image manipulation, image on screen, guess in chat
  - https://github.com/yourdeveloper/node-imagemagick
- Pokemon Trivia
- Guess that pokemon, based on random facts from the api

# Chat Boss Battle Game

## How does battle start?

Chat needs to be in High Grass mode. (allows pokemon battles to happen)
A random point in a ~45 minute time span
Chat encounters a pokemon "A wild \_\_\_ appears!"
Boss pokemon has HP scaled to the number of viewers.
To start boss pokemon will be randomly chosen from a hardcoded pool of pokemon.

## How does chat attack?

Choose from ablity list in chat by number. Vote with `!attack {attack name}`.
Each ability set will be randomly assembled list of 4 attacks
Most popular choice will win

## How do viewers join the battle?

Viewers will work together to vote on actions the Chat will take to battle the boss pokemon.
Anyone can join by voting on Chat's actions

## What happens when the boss pokemon is defeated?

When the boss pokemon's HP reaches 0 the pokemon will be defeated.

## Future features

- Another mode that is difficult with weak abilities and more difficult bosses. (super tall grass mode, tall-er grass mode)
- Chat will be able to capture or get pokemon to battle with
- Chat's defeated pokemon and their stats will be tracked
