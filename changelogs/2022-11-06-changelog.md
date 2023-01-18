---
title: Changelog - 06/11/2022
slug: 2022-11-06-changelog
authors:
  - name: Jundi
    title: Wiki Manager
    image_url: https://avatars.githubusercontent.com/u/102407130?s=400
tags: [halloween, event, balance, infrastructure]
hide_table_of_contents: false
---

import BCard from "../src/components/bcard";
import ItemIcon from "../src/components/itemicon";


> 06/11/2022 - 16:30 (15:30 ST)     
> Server Version: 2.37.0    
> Client Version: 1.191.0   

## General
- Ranked Rainbow Battle is live. You can read details [here](/custom-features/rainbow-battle)
- Enabled Weapon Costumes and Costume Wings to be added to the Bidding System. 
- Halloween Event has ended. Following items are removed from game:
  - Black Pumpkin Sweet
  - Yellow Pumpkin Sweet
  - Spooky Tarot Card [Dracula]
  - Spooky Tarot Card [Scarecrow]
  - Spooky Tarot Card [Ghost]
  - Foxy's Raid Seal
  - Jack O'Lantern's Seal
  - Foxy's Wonder Chest
  - Jack's Mystery Box
  - Halloween Costume Scroll (Event)
  - Bag of Sweets

## Balances
- Gave soft defense to Rainbow Mandra.
- [Rainbow Blessing]:
  - <BCard>PvP attack power is increased by 10% during the Rainbow Battle.</BCard>
  - <BCard>Movement speed is increased by 2 -> 1 during the Rainbow Battle.</BCard>
- Increased the cooldown of shared AoE buffs from 30s to 60s.

### Demon Hunter <ItemIcon iconId="2655" width="25px"/> 
- [Vengeful Spirit Pendulum]:
  - <font color="#fd4949">[REMOVE]</font> <BCard>All dodges are increased by (Player Level x2).</BCard>
  - <font color="orange">[NEW]</font> <BCard>Up to level 4 there is a 15% change of never getting a bad effect.</BCard>
- [Weak Berserk Spirit]:
  - <font color="#fd4949">[REMOVE]</font> <BCard>Shadow element is increased by (Player Level x1).</BCard>
  - <font color="orange">[NEW]</font> <BCard>Movement speed is increased by 1.</BCard>
  - <font color="orange">[NEW]</font> <BCard>Damage dealt in PvP is increased by 5%.</BCard>
- [Berserk Spirit]:
  - <font color="#fd4949">[REMOVE]</font> <BCard>Shadow element is increased by (Player Level x2).</BCard>
  - <font color="orange">[NEW]</font> <BCard>Movement speed is increased by 1.</BCard>
  - <font color="orange">[NEW]</font> <BCard>Damage dealt in PvP is increased by 10%.</BCard>
- [Strong Berserk Spirit]:
  - <font color="#fd4949">[REMOVE]</font> <BCard>Shadow element is increased by (Player Level x3).</BCard>
  - <font color="orange">[NEW]</font> <BCard>Damage dealt in PvP is increased by 15%.</BCard>

### Ranger <ItemIcon iconId="903" width="25px"/>
- [Rapid]:
  - <BCard>Non-elemental damage received is decreased by 15% -> 10%.</BCard>
  
### Fire Cannoneer <ItemIcon iconId="2545" width="25px"/>
- [Explosive Enhancement]:
  - <BCard>Non-elemental damage received is decreased by 15% -> 10%.</BCard>

### Scout <ItemIcon iconId="2589" width="25px"/>
- [Weak Mandra Poison]:
  - <BCard>Duration: 12s -> 8s</BCard>
- Falcon Nosedive:
  - <BCard>Cool time: 7s -> 10s</BCard>
- Rotating Arrow - Highest Level:
  - <BCard>Cool time: 7s -> 10s</BCard>

### Gladiator <ItemIcon iconId="2544" width="25px"/>
- Hunting Horn:
  - <BCard>Cool time: 16s -> 20s</BCard>
- [Enormously Shaky Status]:
  - <BCard>There is a 100% chance that damage received from melee attacks is increased by 20% -> 15%.</BCard>

### Death Reaper <ItemIcon iconId="2654" width="25px"/>
- Death Approaches:
  - <BCard>Cool time: 12s -> 16s</BCard>

## Infrastructure notable changes
- We have changed our CDN infrastructure so you guys would not suffer from being a lot of people downloading at the same time, for the moment it's a bit slower for people that got more than 500Mbps at home