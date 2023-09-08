/* eslint-disable react/no-unescaped-entities */
import { Text } from '@chakra-ui/react';
import React from 'react';
import { usePlayerField } from '../../../../hooks/hooks';
import { itemsIds } from '../../../../utils/itemList';
import { itemIcon, SubHeading, SubHeadingWithIcons } from '../../../../utils/NavigationTabsList';
import { formatNumber } from '../../../../utils/StringFormatter';

function RunecraftingGuide() {
	const runecraftingSkill = usePlayerField('skills').runecrafting;
	const runecraftingEquipment = usePlayerField('skillEquipmentStats').runecrafting;
	const effectiveLevel = runecraftingSkill.level + runecraftingSkill.masteryLevel + runecraftingEquipment;
	const runeCount = 1 + effectiveLevel / 20;
	const floored = Math.floor(runeCount);
	const chanceForNext = runeCount - floored;
	return (
		<>
			Runecrafting is the art of creating runes using Rune Slates and Essence gathered from doing activities
			within the game. You can see how to earn certain essences by hovering over each essence, while Rune Slates
			are primarily gained from Mining. You also gain 1 Runecrafting Shard for every five minutes you spend doing
			actions.
			<br />
			Every 20 levels you have in Runecrafting will increase the amount of Runes made per action by 1. This is
			also increased by 1 when you consume a Talisman for the first time.
			<br />
			You have a base rune crafting amount of {floored} runes per action, with a{' '}
			{formatNumber(chanceForNext * 100)} chance to craft an extra.
			<br />
			Each Rune crafted is worth 25 experience. Without any additional Factors, you will earn at least{' '}
			{floored * 25} experience per action.
			<SubHeading>Essence and Runes</SubHeading>
			In order to create runes, one must gather essence. Essence is earned at a base rate of 3 per action, which
			can be increased to 9 once you find and consume a Talisman. However, some actions have multipliers to the
			amount of essence they reward, depending on other factors.
			<SubHeadingWithIcons icons={[itemIcon(itemsIds.unstable_talisman)]}>Talismans</SubHeadingWithIcons>
			Talisman's can be found by opening up a Geode, Bird's Nest, Sunken Treasure, or a Satchel from Combat. The
			first time you consume a Talisman, you'll triple your passive essence gained, afterwards, anytime you
			consume a Talisman, it'll reward you with a random amount of Essence based on the type of Talisman consumed.
			Talisman's can be also crafted with an Unstable Talisman and some Essence, making Essence sellable.{' '}
			<SubHeadingWithIcons icons={[itemIcon(itemsIds.imbued_cloth)]}>Cloth Weaving</SubHeadingWithIcons>
			Runecrafting can additionally create Imbued Cloth, which requires Aquatic Fibers gathered from Fishing.
			Cloth Weaving is not affected by standard Runecrafting Enchants, other than Efficiency and Haste. Rarely
			when weaving cloth, you'll find Ancient Cloth Fragments, which can be used to craft an Abandoned Academy
			Scroll. This is a solo Gathering Dungeon that will scale off your Fishing and Runecrafting levels.
			<Text color='gray' fontStyle='oblique'>
				A significant part of this guide was written by Feylos. Thx Feylos {'<3'}
			</Text>
		</>
	);
}

export default RunecraftingGuide;
