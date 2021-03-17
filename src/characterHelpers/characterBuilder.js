// This will hold main & helper functions to generate new characters
// This will function the same for wielders and opponents

import leveler from './characterLeveler.js';
import characterClasses from '../dataStores/characterClasses';
import { humanoidRaces, monsterRaces } from '../dataStores/characterRaces';
import randomNumber from '../generalHelpers/randomizer';

const newCharacter = (oldWielder, level) => {

  // choose race
  if (oldWielder.raceType === 'humanoid') {
    // TODO
    // Add map location/ level modifiers once those are implemented
    // Add race variation? If certain races never fight one another &c
    // Add chance of non-monster races
    let newRaceData = monsterRaces[randomNumber(0, monsterRaces.length)];
  } else {
    // TODO
    // Add map location/ level modifiers once those are implemented
    // Add race variation? If certain races never fight one another &c
    // Add chance of monster races
    let newRaceData = humanoidRaces[randomNumber(0, humanoidRaces.length)];
  }

  // TODO choose name
  let characterName = null;

  // choose class
  // TODO currently just pulling first class
  let newClassName = newRaceData.classes[0];
  let newClassData = characterClasses[newClassName];

  // apply new data to create level 0 character
  let characterData = {
    accuracy: newRaceData.accuracy + newClassData.accuracy,
    charClass: newClassData.name,
    damageBonus: newRaceData.damageBonus + newClassData.damageBonus,
    defense: newRaceData.defense + newClassData.defense,
    hp: newRaceData.hp + newClassData.hp,
    level: 0,
    name: characterName,
    race: newRaceData.race,
    raceType: newRaceData.raceType,
    speed: newRaceData.speed + newClassData.speed,
    xp: 0,
  }

  // TODO apply both race and class modifiers to get base stats


  // TODO level up character using characterLeveler
  let characterData = leveler (characterData, level);

  return characterData;
};

export default newCharacter;
