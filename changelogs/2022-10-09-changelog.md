---
title: Changelog - 09/10/2022
slug: 2022-10-09-changelog
authors:
  - name: Protect
    title: Wiki Maintainer
    image_url: https://avatars.githubusercontent.com/u/75447510?s=400&u=6611d243cb33099270ad8c0cb66a5e659009bd08&v=4
tags: [changelog, changes, fixes, balance,]
hide_table_of_contents: false
---

import BCard from "../src/components/bcard";
import ItemIcon from "../src/components/itemicon";   

> 09/10/2022 - 19:45 (17:45 ST) <br/>
> Server Version: 2.22.0 <br/>
> Client Version: 1.168.0 <br/>

## Changes
- Increased the number of deputies for Families from 2 to 5.
- Reduced the base cooldown for SP/PSP transformation from 30 to 10 seconds.
- Reduced starting level of Act5.2 quests from 90 to 85.
- Reduced level required for A5 equipment from 90/92/95 to 85/88/90.
- Added Act5.2 raid seals to Mysterious Monk's shop for 500k each.
- Added recipe to alchemists for 3x Divine Recovery Potion using 10x Cylloan Spring Water.
- Added "Up to level 10 there is a 90% chance of never getting a bad effect." to Guardians in Glacernon.
- Caligor will now get [Caligor's Armour] after taking the first hit.
- [Caligor's Armour]:
  - 10Lv. Buff, 120 seconds
  - There is a 100% chance that damage from all attacks is reduced by 90%.
- Reduced the amount of common mobs in Champion Instant Combat, added/increased lesser bosses as compensation. This should help with "Out of memory" bugs that players face in Instant Combat.
- Increased chance of gathering to 100% for: Wheat, Daisy, Iris, Well(s), Big Red Flower
- Reduced Earthworm's chance of causing [Paralysis] from 15% to 5%.
- Reduced required amount of monsters killed and items dropped for many main quests.
- Removed second and third "Complete Ibrahim raid" quests from Valhalla 2.

## Balance
- Changed the calculation for "The chance of receiving a critical hit is increased/decreased by X%." effects from basic substraction to relative decreasing.
- Reverted "Non-elemental damage inflicted is increased/decreased" effect into original "Attack is increased/decreased". They will now stack with "Increased Overall Attack" option from shells. The affected stuff is as listed:
  - Class-specific Titles
  - "Fatal Bleeding" Debuff
  - "Neurotoxin" Debuff from Snake Venom Tattoo
  - "Cower" Tattoo
  - "Attack Stance" Tattoo
  - "Lion Claws" Tattoo
  - "Wolf Power" Rune
  - C60 Main Weapon Debuffs
- Readjusted the stats of Attack SL for 100~120 points:
  - 105 Attack: +1050 -> +1075 Attack
  - 110 Attack: +1100 -> +1150 Attack, +85 -> +90 Hitrate, +50 -> +80 Critical Damage, +25 -> +30 Attack Power
  - 115 Attack: +1150 -> +1250 Attack
  - 120 Attack: +1200 -> +1350 Attack, +85 -> +100 Hitrate, +8 -> +10 Critical Chance, +30 -> +40 Attack Power

## Fixes
- Fixed NosMates being unable to attack enemy players in Act4.
- Fixed cooldown issues with group Pocket Dimensions.
- Fixed Minion Snowman dying instantly against reflect effects.
- Fixed PSPs not having correct cooldown for transformation after using a skill with high cooldown.
