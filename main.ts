import { DOMParser } from 'jsr:@b-fuze/deno-dom';

const parser = new DOMParser();

const followersHtml = parser.parseFromString(Deno.readTextFileSync('./followers_1.html').toString(), 'text/html');
const followingHtml = parser.parseFromString(Deno.readTextFileSync('./following.html').toString(), 'text/html');

const followers: string[] = [];
const following: string[] = [];

for (const i of followersHtml.getElementsByClassName('_a706')[0].children)
	followers.push(i.children[0].children[0].children[0].children[0].textContent);

for (const i of followingHtml.getElementsByClassName('_a706')[0].children)
	following.push(i.children[0].children[0].children[0].children[0].textContent);

console.log("People that follow you that you don't follow back: ");
followers.forEach((x) => {
	if (!following.includes(x)) console.log(x);
});

console.log("\nPeople that you follow that don't follow you back: ");
following.forEach((x) => {
	if (!followers.includes(x)) console.log(x);
});
