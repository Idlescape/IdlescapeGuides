/* eslint-disable react/no-unescaped-entities */
import { Text } from '@chakra-ui/react';
import React from 'react';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { itemsIds } from '../../../utils/itemList';
import { itemIcon, SubHeading, SubHeadingWithIcons } from '../../../utils/NavigationTabsList';

const infoIcon = <AiOutlineInfoCircle />;

function GatheringGuide({ type }: { type: 'mining' | 'foraging' | 'fishing' }) {
	return (
		<div>
			The three basic gathering skills in Idlescape are Mining, Foraging, and Fishing, all of which produce
			various resources used in the other different skills in the game. You can click on the {infoIcon} icon on
			any of the zones to see what kind of resources they provide as well as yield and any specific requirements.
			In order to access the later zones in each skill, you'll need to increase your base level in each skill.
			There are two types of levels for each skill; Your base level, which is increased by doing actions and
			earning experience, and your effective level, which is your base level plus any bonuses from gear and tools.
			Your time per action in each zone can be reduced by increasing your effective level and Enchantments.
			<SubHeadingWithIcons
				icons={[
					itemIcon(itemsIds.bronze_pickaxe),
					itemIcon(itemsIds.bronze_hatchet),
					itemIcon(itemsIds.novice_tacklebox),
				]}
			>
				Tools and Gear
			</SubHeadingWithIcons>
			Each gathering skill has tools, which are Pickaxes for Mining, Axes for Foraging, and Tackle Boxes for
			Fishing which can be Augmented to further increase your effective level. Each gathering skill also has a
			gear set they can benefit from that come pre-enchanted and increase your effective level when Augmented.
			Each skill has a Legendary end game tool, such as the Dwarven Rocksmasher for Mining.
			<SubHeadingWithIcons
				icons={[
					itemIcon(itemsIds.mining_shard),
					itemIcon(itemsIds.foraging_shard),
					itemIcon(itemsIds.fishing_shard),
				]}
			>
				Skilling Shards
			</SubHeadingWithIcons>
			Every five(5) minutes you spend gathering, no matter the zone, will give you a skilling shard for the
			corresponding skill. These shards can be used to craft gear for their respective gathering skill, as well as
			used in Augmenting of the gear. Additionally, they can be used to craft parts for each Skill's Legendary
			Tool.
			<SubHeadingWithIcons
				icons={[itemIcon(itemsIds.geode), itemIcon(itemsIds.birds_nest), itemIcon(itemsIds.sunken_treasure)]}
			>
				Treasure
			</SubHeadingWithIcons>
			Each of the gathering skills has a chance per action to drop an openable treasure box, which are Geodes for
			Mining, Bird Nest's for Foraging, and Sunken Treasures for Fishing. These also have a chance to be a
			Greater/Ancient variant as well, which hold better rewards and parts for each ones respective Legendary
			Tool. The chance to obtain these can be increase with the Enchantment “Naturalist”.
			<SubHeading>Dangerous Encounters</SubHeading>
			The last zone in each gathering skill has a chance per action to give you a Dangerous Encounter. When this
			happens you'll receive a delay to your next action as you fight a monster that differs per zone. Upon a
			successful encounter, you will receive loot from the monster and a reduced delay, however upon failure,
			you'll receive no loot and an increased delay. Your success chance can be raised based on your current gear
			and its augment levels.
			{(type === 'foraging' || type === 'fishing') && (
				<>
					<SubHeading>Nodes</SubHeading>
					Foraging and Fishing work off of a node system. What this means is that your first action in each
					skill will “search for a node” before it starts gathering actions. Once that node is found, you'll
					have a number of actions on that node before it is used up and it will look for a new node. Some
					Foraging nodes and items are hidden behind Enchantments (Like Nature), while some Fishing nodes and
					items are hidden behind Rarity, which can be increased with Tackle Boxes and Bait.
				</>
			)}
			<Text color='gray' fontStyle='oblique'>
				A significant part of this guide was written by Feylos. Thx Feylos {'<3'}
			</Text>
		</div>
	);
}

export default GatheringGuide;
