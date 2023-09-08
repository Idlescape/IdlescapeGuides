import { Text } from '@chakra-ui/react';
import React from 'react';
import { itemsIds } from '../../../../utils/itemList';
import { itemIcon, SubHeading, SubHeadingWithIcons } from '../../../../utils/NavigationTabsList';

function CookingGuide() {
	return (
		<>
			Cooking is a somewhat complex skill that requires a bit of messing around with ingredients to get a solid
			grasp on, however it is a very useful skill to help supply you with all your food and potion needs. In order
			to start, one would throw some ingredients into their cooking pot, such as one carrot and one shrimp in
			order to make a dish/meal. The listed ingredients above will make a Kebab +0, which is a decent food option
			starting out. The +0 comes from the size of ingredients added, which can be improved by adding more of the
			same ingredients. You also get +1 for every 30 effective cooking levels.
			<br />
			You will also obtain one cooking shard for every 5 minutes spent cooking, which can be used towards The
			Golden Spoon, the Legendary Cooking tool.
			<SubHeading>Difficulty and Size</SubHeading>
			On each ingredient, there is a difficulty and size rating. Difficulty is how complex a dish is made by
			adding it to the pot, which in turn makes the success rate lower and the time to cook higher. The higher
			your effective level, the more complex dishes one can make. Size on the other hand, is the size of the
			ingredients Tag, such as three Vegetables for a Pumpkin or Two Meat and Fish for a Raw Trout. These play a
			hand in recipes such as the Kebab mentioned above which requires at least one Veggie and one Meat to create.
			You can make a stronger level of Kebabs by doing 1x Pumpkin and 1x Raw Tuna which would come out as a higher
			quality. Another Decent but advanced food is 1x Raw Beef, Raw Chicken and Raw Trout which would be Meat
			Roast. These are just some examples, there are many other recipes that can be found with some
			Experimentation or asking some fellow players.
			<SubHeadingWithIcons icons={[itemIcon(itemsIds.empty_large_vial)]}>Alchemy</SubHeadingWithIcons>
			While meals are mainly for healing in combat, Alchemy is mainly for Buffs. Some ingredients have certain
			Buffs on them, such as Inferno on Pepper. These can be made into potions, which disregard the Type of an
			Ingredient. They instead use Alchemy Size and Normal Size in its creation. Of course, to make a potion, one
			will need a vial which can be crafted using some sand and heat, then the targeted buff item, then you can
			increase the amount of stacks the potion will give, as well as the potent it is, by adding more Alchemy Size
			to it, however it will become increasing more difficult to create a potion the more complex it is.
			<SubHeadingWithIcons icons={[itemIcon(itemsIds.greater_ladle), itemIcon(itemsIds.chefs_hat)]}>
				Gear
			</SubHeadingWithIcons>
			A useful tool for cooking is a Ladle, which can be obtained from Goblins in Combat. There are few different
			types of base ladles, but they are the same, the searing ladle being an exception which is earned from the
			Goblin Settlement Dungeon. When augmented, they’ll increase your effective cooking level as well as give you
			a few hidden levels of haste when equipped. These can be enchanted with some useful enchantments, such as
			Master Chef to help you with your cooking. Another useful piece of equipment is a Chefs Hat, which is also
			obtained from the Goblin Settlement Dungeon. It comes with three Enchantment Slots and will increase your
			effective cooking level when Augmented.
			<Text color='gray' fontStyle='oblique'>
				A significant part of this guide was written by Feylos. Thx Feylos {'<3'}
			</Text>
		</>
	);
}

export default CookingGuide;
