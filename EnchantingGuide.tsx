/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { itemIcon, SubHeading, SubHeadingWithIcons } from '../../../../utils/NavigationTabsList';
import { Text } from '@chakra-ui/react';
import { itemsIds } from '../../../../utils/itemList';

function EnchantingGuide() {
	return (
		<>
			<Text fontStyle='oblique'>
				The augmenting interface is a bit clunky. It's on our list to rework this. Stay tuned!
			</Text>
			Enchanting comes with three different uses: Scrollcrafting, Augmenting, and Enchanting, which can be
			switched between at any time using the tabs. Scrollcrafting and Enchanting go hand in hand together while
			Augmenting is how you increase the power of items, at a risk.
			<SubHeadingWithIcons icons={[itemIcon(itemsIds.lesser_magic_tome)]}>Magic Tomes</SubHeadingWithIcons>
			Your effective enchanting level can be increased by crafting Magic Tomes. They come in different tiers and
			each tier consumes the previous tier during crafting. Check out the Skilling Tab in Crafting to get find
			their required resources.
			<SubHeadingWithIcons icons={[itemIcon(itemsIds.scroll_of_the_shrimp_lord)]}>
				Scrollcrafting
			</SubHeadingWithIcons>
			Scrollcrafting allows you to create enchanted scrolls, which you can then put on your gear. Each enchanted
			scroll requires one Scroll, Silver from Mining, and a variety of Runes from Runecrafting. Each scroll has a
			success chance, which can be increased by increasing your Enchanting level. Upon failure to make a scroll,
			you will lose any resources used in the attempt. You can filter what type of enchantments you want by
			clicking on the gear filters at the top.
			<SubHeading>Enchanting</SubHeading>
			After you've made some scrolls, this is where you'd go to apply them on your applicable gear. Gear can only
			hold so many enchantments, as denoted by the circle enchantment slots on any given item (if it has any).
			Starting gear can usually only hold one enchantment while late game gear can have anywhere from six to
			eight. You can overwrite enchantments in items with a different one. You can disenchant an enchanted item by
			clicking on it and clicking "Disenchant".
			<SubHeading>Augmenting</SubHeading>
			You can further enhance any gear you obtain here, by increasing its augmentation level at a cost of some
			resources. Every augmentation attempt has a success chance which increases with your effective enchanting
			level. Higher augments have a higher risk to fail. If the augmentation fails it will{' '}
			<Text as='b' color='red'>
				destroy the input item and the used resources.
			</Text>
			<SubHeading>Soulbinding</SubHeading>
			Soulbinding is a safe alternative to Augmenting. To start you need to select the item and "Soulbind" it. The
			item then collects experience while you use it, which will increase its Soulbounding level. There is no cap
			on the Soulbinding level, but it takes progressively longer to level it up the higher the level becomes. In
			return soulbound items can be augmented up to their Soulbinding level with a 100% success chance. Every
			three levels you Augment an soulbound item, you'll need a base copy of said item, which also increases by
			one every three levels after (One base item at level 3, two base items at level 6, three at level 9, and so
			forth). However there is a cap on how high you can augment a soulbound item, which is 3 + 1 for every 10
			levels of your Effective Enchanting Level. (So at Effective level 170, you can enchantment an item up to
			level 3+(170/10) = 20, even if the Soulbinding level of the item is higher.)
			<Text color='gray' fontStyle='oblique'>
				A significant part of this guide was written by Feylos. Thx Feylos {'<3'}
			</Text>
		</>
	);
}

export default EnchantingGuide;
