import "../scss/main.scss";

import moment from "moment";

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

const firstName = "Iza";
const age = 27;

console.log(firstName);
console.log(age);

const emptyParagraph = document.querySelector(".section__paragraph--js");

const greet = (firstName, age) => {
	console.log(`Hej , nazywam się ${firstName} i mam ${age} lat `);
};

greet("Iza", age);

function createContent(querySelectorContent, content) {
	const element = document.querySelector(querySelectorContent);
	if (element) {
		element.innerHTML = content;
	}
}

createContent(".section__paragraph--js", "Zanim to zapamiętam to miną wieki!");

function helloWorld() {
	console.log("Witaj świecie!");
}
helloWorld();

const goodbye = (firstName, age) => {
	console.log(
		`Żegnam się z Wami, dziękuję, że byliście ${firstName}, ${age}`
	);
};

goodbye("Iza", age);

const button = document.querySelector(".action--js");

button.addEventListener("click", () => {
	const heading = document.querySelector(".section__header--js");
	heading.innerHTML = `Hej! Nazywam się Iza  i mam 27 lat.`;
});

const hamburger = document.querySelector(".hamburger--js");

hamburger.addEventListener("click", () => {
	const nav = document.querySelector(".navigation--js");
	nav.classList.toggle("navigation--open");
});

const startOfDay = moment().startOf("day").fromNow();

const timePlaceholder = document.querySelector(".time--js");

timePlaceholder.innerHTML = startOfDay;

fetch('https://api.github.com/users/izabelazmujdzin/repos?sort=created&direction=asc')
.then(resp => resp.json())
.then(resp => {
	for (let repo of resp) {
	const {name, html_url} = repo;
	const repositoryList = document.querySelector('.list--js');
	const myTemplate = `<li>
		${name} <a href="${html_url}" title="link do repozytorium ${name} na githubie">link do githba</a>
	</li>`;
	repositoryList.innerHTML += myTemplate;
}
})
.catch(error => {
	console.log('nie udało się pobrać');
})