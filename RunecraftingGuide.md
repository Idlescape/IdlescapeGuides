```ts
const runecraftingSkill = usePlayerField('skills').runecrafting;
const runecraftingEquipment = usePlayerField('skillEquipmentStats').runecrafting;
const effectiveLevel = runecraftingSkill.level + runecraftingSkill.masteryLevel + runecraftingEquipment;
const runeCount = 1 + effectiveLevel / 20;
const floored = Math.floor(runeCount);
const chanceForNext = runeCount - floored;
```

Runecrafting is the art of creating runes using rune slates and essence gathered from doing activities
within the game. You can see how to earn certain essences by hovering over each essence, while rune slates
are primarily gained from Mining.
<br />
Every 30 levels you have in Runecrafting will increase the amount of runes made per action by 1. This is
also increased by 1 when you consume a talisman for the first time.
<br />
You have a base rune crafting amount of {floored} runes per action, with a{' '}
{formatNumber(chanceForNext * 100)}% chance to craft an extra.
<br />
Each rune crafted is worth 25 experience. Without any additional factors, you will earn at least{' '}
{floored * 25} experience per action.

## Essence and Runes
In order to create runes, one must gather essence. Essence is earned at a base rate of 3 per action, which
can be increased to 9 once you find and consume a talisman. However, some actions have multipliers to the
amount of essence they reward, depending on other factors.

## Talismans itemIcon(itemsIds.unstable_talisman)
Talismans can be found by opening up a Geode, Bird's Nest, Sunken Treasure, or a Satchel from Combat. The
first time you consume a talisman, you'll triple your passive essence gained, afterwards, anytime you
consume a talisman, it'll reward you with a random amount of Essence between 35k to 50k based on the type of talisman consumed.
Talismans can be also crafted with an Unstable Talisman and 50k Essence, making Essence sellable.

## Cloth Weaving itemIcon(itemsIds.imbued_cloth)
Runecrafting can additionally create Imbued Cloth, which requires Aquatic Fibers gathered from Fishing.
Cloth Weaving is not affected by standard Runecrafting Enchants, other than Efficiency and Haste. Rarely
when weaving cloth, you'll find Ancient Cloth Fragments, which can be used to craft an Abandoned Academy
Scroll. This is a solo gathering dungeon that will scale off your Fishing and Runecrafting levels.

## Affixing
Affixing gives you the ability to add additional stats to your items to further enhance your playstyles to a
certain degree. In order to affix an item, you'll need runic dust matching the same rarity of the item you are
attempting to affix, which can be obtained via research or combat.
Once you have applied affixes, you can reroll them using more dust and gear scrap; obtained from research failures, in
an attempt to get highier values on your rolls. When you reroll, you are given the option of either keeping your new roll
or keeping your old rolls. If you are happy with a roll you currently have but want to reroll a different affix, you can 
lock the affix you wish to keep and reroll the others by simply clicking on them.

<p color='gray' fontStyle='oblique'>
	A significant part of this guide was written by Feylos. Thx Feylos {'<3'}
</p>
