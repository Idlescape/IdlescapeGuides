/* eslint-disable react/no-unescaped-entities */
import { Text } from '@chakra-ui/react';
import React from 'react';
import { itemsIds } from '../../../../utils/itemList';
import { itemIcon, SubHeading, SubHeadingWithIcons } from '../../../../utils/NavigationTabsList';

function SmithingGuide() {
	return (
		<>
			Smithing is the art of taking ores earned from mining and refining them into bar form, which then can be
			used for crafting and augmenting purposes. Of course to use any of the forges, you'll need heat which can be
			obtained from logs, coal and any other burnable item found. There are a total of three forges: The City
			Forge, The Dwarven Forge, and the Volcanic Forge. Each one has their own special modifiers on what theyd'll
			do when smithing products.
			<SubHeadingWithIcons icons={[itemIcon(itemsIds.heat)]}>Intensity</SubHeadingWithIcons>
			Intensity is how hot you want to run the forge and can be increased or decreased by the slider. The higher
			the intensity is, the more heat and ores will be required in order to process an action. Certain bars can
			only be processed at certain intensities as well.
			<SubHeading>Forge Differences</SubHeading>
			<ul>
				<li>
					The City Forge, when at higher intensity, will be quicker at the cost of more heat and ore. The
					Beginner Forge.
				</li>
				<li>
					The Dwarven Forge, when at higher intensity, will give more experience and a chance to increase
					yield per action at the cost of more time per action. The Forge to use if you want more experience
					per action.
				</li>
				<li>
					The Volcanic Forge, when at higher intensity, will give drastically more yield per action, at the
					cost of far more heat, ore, and time. The Forge to use if you want more yield from your ores.
				</li>
			</ul>
			Starting out, youd'll be using the City Forge exclusively till you are high enough level to access the
			Dwarven and Volcanic forges. From there, you can freely switch which forge you want by clicking on it.
			<SubHeadingWithIcons icons={[itemIcon(itemsIds.scroll_of_refining)]}>Refining</SubHeadingWithIcons>
			Refining is a special Enchantment that can be used with Smithing to give you a chance per action to acquire
			additional items depending on the forge currently being used. All of the forges have a chance to give gems,
			while the City and Dwarven have a chance of giving ores back. However, rarely while smelting at the Volcanic
			Forge, one can obtain Core Fragments. These can be further smelted down into Core Ingots and then crafted
			into Dwarven Research Keys, a Gathering Dungeon that scales off your Mining and Smithing levels.
			<Text color='gray' fontStyle='oblique'>
				A significant part of this guide was written by Feylos. Thx Feylos {'<3'}
			</Text>
		</>
	);
}

export default SmithingGuide;
