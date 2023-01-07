module.exports = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  docs: [
    {
      type: 'doc',
      id: 'rules',
      label:'Game Rules',
      className: 'rules-icon'
    },
    {
      type: 'doc',
      id: 'bug-bounty',
      label:'Bug Reports',
      className: 'bug-icon'
    },
    {
      type: 'category', 
      label:'Community Guides',
      className: 'guide-icon',
      items: [
        { type: 'doc', id: 'community-guides/chinese-guide', label: 'Chinese guide', className:'guide-icon' },
        { type: 'doc', id: 'community-guides/community-pony-forest-guide', label: 'Pony\'s Spirit Forest guide', className:'guide-icon' }
      ]
    },
    {
      type: 'category',
      label: 'Guides',
      className:'guide-icon',
      items: [
        {
          type: 'category',
          label: 'Leveling',
          className:'leveling-icon',
          items: [
            { type: 'doc', id: 'guides/leveling/combat1-99', label: 'Combat Lv. 1-99', className:'fexpe-icon' },
            { type: 'doc', id: 'guides/leveling/hero1-35', label: 'Hero Lv. 1-35', className:'clevel-icon' },
            { type: 'doc', id: 'guides/leveling/hero35-60', label: 'Hero Lv. 35-60', className:'clevel-icon' },
          ]
        },
        {
          type: 'category',
          label: 'Raids',
          className:'raids-icon',
          items: [
            { type: 'doc', id: 'guides/raids/lesser-raids', label: 'Lesser', className: 'lesser-icon'},
            { type: 'doc', id: 'guides/raids/namaju', label: 'Namaju', className:'namaju-icon'},
            { type: 'doc', id: 'guides/raids/ibrahim', label: 'Ibrahim', className:'ibrahim-icon'},
            { type: 'doc', id: 'guides/raids/burning-sword-raids', label: 'Burning Sword', className:'burning-icon'},
            { type: 'doc', id: 'guides/raids/elementals-raids', label: 'Elementals', className:'elementals-icon'},
            { type: 'doc', id: 'guides/raids/laurena', label: 'Witch Laurena', className:'laurena-icon'},
            { type: 'doc', id: 'guides/raids/erenia-and-zenas', label: 'Erenia & Zenas', className:'ere-icon' },
            { type: 'doc', id: 'guides/raids/fernon', label: 'Incomplete Fernon', className:'fernon-icon' },
          ]
        },
        {
          type: 'category',
          label: 'SPs Guides',
          className:'spguide-icon',
          items: [
            { type: 'doc', id: 'guides/sp-guides/sp1', label: 'SPs 1', className:'sp1-icon' },
            { type: 'doc', id: 'guides/sp-guides/sp2', label: 'SPs 2', className:'sp2-icon' },
            { type: 'doc', id: 'guides/sp-guides/sp3', label: 'SPs 3', className:'sp3-icon' },
            { type: 'doc', id: 'guides/sp-guides/sp4', label: 'SPs 4', className:'sp4-icon' },
            { type: 'doc', id: 'guides/sp-guides/sp5-to-sp8', label: 'SPs 5/6/7/8', className:'sp5-icon' },  
          ]
        },
        {
          type: 'category',
          label: 'Quests',
          className:'questl-icon',
          items: [
            { type: 'doc', id: 'guides/quests/valhalla-questline', label: 'Valhalla Questline', className:'valhallaquestline-icon' },
            { type: 'doc', id: 'guides/quests/act-5.2-questline', label: 'Act 5.2 Questline', className:'act52questline-icon' },
            { type: 'doc', id: 'guides/quests/act-6.1-questline', label: 'Act 6.1 Questline', className:'q6-1-icon' },
            { type: 'doc', id: 'guides/quests/act-6.2-questline', label: 'Act 6.2 Questline', className:'q6-1-icon' },
            { type: 'doc', id: 'guides/quests/act-6-daily-quests', label: 'Act 6 Daily Quests', className:'dquest-icon' },
          ]
        },
      ]
    },
    {
      type: 'category',
      label: 'Custom Features',
      className: 'custom-icon',
      items: [
        { type: 'doc', id: 'custom-features/achievements', label: 'Achievements', className:'achie-icon' },
        { type: 'doc', id: 'custom-features/bid-system', label: 'Bidding System', className:'biddingsystem-icon' },
        { type: 'doc', id: 'custom-features/hero-shell-system', label: 'Caligor & Hero Shells', className:'cali-icon' },
        { type: 'doc', id: 'custom-features/emotes', label: 'Custom Emotes', className:'poggers-icon' },
        { type: 'doc', id: 'custom-features/gods-altar', label: 'Gods Altar', className:'godaltar-icon' },
        { type: 'doc', id: 'custom-features/loyalty-system', label: 'Loyalty System', className:'loyal-icon' },
        { type: 'doc', id: 'custom-features/map-monster-drop', label: 'Map & Monster Drops', className:'mapmonsterdrop-icon' },
        { type: 'doc', id: 'custom-features/event-notification-system', label: 'Events and Notifications', className:'bell-icon' },
        { type: 'doc', id: 'custom-features/npc-buffers', label: 'NPC Buffer', className:'npcbuff-icon' },
        { type: 'doc', id: 'custom-features/pet-upgrading', label: 'Pet Upgrading', className:'petup-icon' },
        { type: 'doc', id: 'custom-features/pocket-dimensions', label: 'Pocket Dimension', className:'pocket-icon' },
        { type: 'doc', id: 'custom-features/raid-report', label: 'Raid Report Window', className:'raidreport-icon' },
        { type: 'doc', id: 'custom-features/trophy-system', label: 'Trophy System', className:'trophy-icon' },
        { type: 'doc', id: 'custom-features/warp-system', label: 'Warp System', className:'warp-icon' },
        { type: 'doc', id: 'custom-features/wings-swapper', label: 'Wings Swapper', className:'wingsswapper-icon'},
        { type: 'doc', id: 'custom-features/rainbow-battle', label: 'Rainbow Battle', className:'rbb-icon'},
        { type: 'doc', id: 'custom-features/option-window', label: 'Custom Options Window', className:'custom-icon'},
      ]
    },
    {
      type: 'category',
      label: 'List',
      className:'list-icon',
      items: [
        {
          type: 'category',
          label: 'SP Cards ',
          className: 'sp-icon',
          items: [
            { type: 'doc', id: 'information/sp-cards/swordsman', label: 'Swordsman ', className:'swordman-icon' },
            { type: 'doc', id: 'information/sp-cards/archer', label: 'Archer', className:'archer-icon' },
            { type: 'doc', id: 'information/sp-cards/mage', label: 'Mage', className:'mage-icon' },
          ]
        },
        { type: 'doc', id: 'guides/crafting/act-6-fairies-craft', label: 'Fairies', className:'fairy-icon' },
        { type: 'doc', id: 'information/raidboxes', label: 'Raidboxes ', className: 'boxes-icon' },
        { type: 'doc', id: 'guides/features/act-6-passives', label: 'Passives', className:'pasiv-icon' },
        { type: 'doc', id: 'information/mounts', label: 'Mounts', className:'vehi-icon' },
        { type: 'doc', id: 'information/psp', label: 'Partner Specialist', className:'partner-icon' },
        { type: 'doc', id: 'information/pets' , label: 'Pets', className:'pets-icon' },
        { type: 'doc', id: 'information/costumes', label: 'Costumes', className:'costume-icon' },
        { type: 'doc', id: 'information/reputation', label: 'Reputation', className: 'reputation-icon' },
        { type: 'doc', id: 'information/weaponskins', label: 'Weapon Skins', className:'wskin-icon' },
        { type: 'doc', id: 'information/wings-rework' , label:'Wings ', className: 'wings-icon', },
        { type: 'doc', id: 'information/equipment-act62-rework' , label:'Equipment', className:'equi-icon'  },
        { type: 'doc', id: 'information/titles', label: 'Titles ', className:'title-icon' },
      ]
    },
    {
      type: 'category',
      className: 'info-icon',
      label: 'Information',
      items: [
        { type: 'doc', id: 'qol/upgrades' , label: 'Equipment Upgrade', className: 'equpgrade-icon' },
        { type: 'doc', id: 'guides/crafting/sp-upgrade' , label: 'SP Upgrade & Perfection', className: 'spupgrade-icon' },
        { type: 'doc', id: 'information/shells', label: 'Shell Options', className: 'shell-icon' },
        { type: 'doc', id: 'qol/mass-crafting', label: 'Mass Crafting', className:'cella-icon' },
        { type: 'doc', id: 'information/items-sale-price', label: 'Item Sale Prices', className:'gold-icon' },
        { type: 'doc', id: 'qol/npc-shops', label: 'NPC Shops', className:'npcshop-icon' },
      ]
    },
    {
      type: 'category',
      label: 'Drops',
      className: 'drop-icon',
      items: [
        {
          type: 'category',
          className:'idrop-icon',
          label: 'Item drops',
          items: [
            {
              type: 'autogenerated',
              dirName: 'drops/items'
            }
          ]
        },
        {
          type: 'category',
          label: 'Map drops',
          className:'imap-icon',
          items: [
            {
              type: 'autogenerated',
              dirName: 'drops/maps'
            }
          ]
        },
      ]
    },
    {
      type: 'category',
      className: 'act7-icon',
      label: 'Act7 Exclusive',
      items: [
        {
          type: 'category',
          label: 'Raids',
          className: 'raids-icon',
          items: [
            { type: 'doc', id: 'guides/raids/carno-raids', label: 'Beast King Carno', className: 'carno-icon' },
            { type: 'doc', id: 'guides/raids/kirollas-raids', label: 'Spirit King Kirollas', className: 'kirollas-icon' },
            { type: 'doc', id: 'guides/raids/belial-raids', label: 'Demon God Belial', className: 'belial-icon' },
            { type: 'doc', id: 'guides/raids/paimon', label: 'Evil Overlord Paimon', className: 'paimon-icon' }
          ]
        },
        {
          type: 'category',
          label: 'Quests',
          className: 'questl-icon',
          items: [
            { type: 'doc', id: 'guides/quests/act-7.1-questline', label: 'Act 7.1 Questline', className:'mainquest-icon' },
            { type: 'doc', id: 'guides/quests/act-7.2-questline', label: 'Act 7.2 Questline', className:'mainquest-icon' },
            { type: 'doc', id: 'guides/quests/act-7.1-daily-quests', label: 'Act7 Daily Quests', className:'dailyquest-icon' },
          ]
        },
        { type: 'doc', id: 'guides/leveling/hero50-60', label: 'Act7 Leveling Guide', className: 'clevel-icon' },
        { type: 'doc', id: 'guides/act7-equipment', label: 'Act7 Equipment Crafting', className: 'a7craft-icon' },
        { type: 'doc', id: 'release-reworks/equipment-act71-rework', label: 'Act7 Equipment Rework', className: 'equi-icon' },
        { type: 'doc', id: 'guides/features/act7-achievements', label: 'Act7 Achievements', className: 'a7achievements-icon' },
        { type: 'doc', id: 'information/runes', label: 'Runes ', className: 'runes-icon' },
        { type: 'doc', id: 'information/tattoos', label: 'Tattoos', className: 'tattoos-icon' },
        { type: 'doc', id: 'guides/features/celestialS', label: 'Celestial Spire', className: 'celestialS-icon' },
      ]
    }
  ]

};
