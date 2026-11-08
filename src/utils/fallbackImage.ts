import handshake from '../assets/transfer-handshake.png';
import breakingNews from '../assets/breaking-news.png';

// Posts without their own heroImage rotate between these illustrations
// (picked from the post id so a given story always gets the same one).
// `contain` = transparent illustration, shown whole on a soft backdrop
// instead of being cropped to the card ratio.
const FALLBACKS = [
	{ src: handshake, contain: false },
	{ src: breakingNews, contain: true },
];

export function pickFallback(id = '') {
	let hash = 0;
	for (const ch of id) hash = (hash * 31 + ch.charCodeAt(0)) >>> 0;
	return FALLBACKS[hash % FALLBACKS.length];
}
