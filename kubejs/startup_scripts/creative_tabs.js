// priority: 110
//   __   ___   _    _  _ ___ _    ___ ___   _      _____
//   \ \ / /_\ | |  | || | __| |  / __|_ _| /_\    /__  /
//    \ V / _ \| |__| __ | _|| |__\__ \| | / _ \     / /
//     \_/_/ \_\____|_||_|___|____|___/___/_/ \_\   /_/
//

/**
 * @file Creative Mode Tab modifications for Valhelsia 7.
 * @copyright Valhelsia Inc 2024
 * 
 * Note: Adding things to creative mode tabs also makes them visible in item viewers.
 */

StartupEvents.modifyCreativeTab('minecraft:tools_and_utilities', event => {
  event.add('minecraft:bundle'); // Hidden by default unless using the experimental datapack.
});
