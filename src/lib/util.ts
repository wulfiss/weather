import { completeWeather } from '$lib/store';
import { validity } from '$lib/store';
// This function takes a city name as a parameter and fetches the weather data from the /api/weather endpoint.
// It then updates the completeWeather store with the weather data.
const getData = async (city: string) => {
	const response = await fetch(`/api/weather?city=${city}`);
	const weather = await response.json();
	console.log(await weather.message);
	if (!(await weather.message)) {
		//check if the api call doesn't return a error mgs, so the UI doesn't get updated, solving the problem of the search not working after a non existent city enter in the search bar.
		completeWeather.set(await weather);
	} else {
		validity.set('bad');
	}
};

const setLocalStorage = (el: string, nameEl: string): void => {
	localStorage.setItem(nameEl, JSON.stringify(el));
};

const checkElExistLocalStorageReturnIt = (elName: string, elValue: string): string => {
	let item: string | null = JSON.parse(localStorage.getItem(elName));
	if (!item) {
		item = elValue;
		setLocalStorage(item, elName);
		return item;
	}
	return item;
};

function formatDate(dateString: string) {
	// Replace space with T separator and create Date object
	const date: Date = new Date(dateString.replace(' ', 'T'));

	// Define options objects for 12-hour and 24-hour clock formats
	//explanation for the next line is down below
	const options12h: Intl.DateTimeFormatOptions = {
		weekday: 'short',
		month: 'short',
		day: 'numeric',
		hour: 'numeric',
		minute: 'numeric',
		hour12: true
	};
	const options24h: Intl.DateTimeFormatOptions = {
		weekday: 'short',
		month: 'short',
		day: 'numeric',
		hour: 'numeric',
		minute: 'numeric',
		hour12: false
	};

	// Format date string in 12-hour clock format with 'a.m.' or 'p.m.'
	const formattedDate12h: string = date.toLocaleDateString('en-US', options12h).replace(' ', ' ');

	// Format date string in 24-hour clock format
	const formattedDate24h: string = date.toLocaleDateString('en-US', options24h) + ' hs';

	// Return array with formatted date strings
	return [formattedDate12h, formattedDate24h];
}

const validateInput = (inputText: string): boolean => {
	const regex = /^[a-zA-Z]{3,}([ ,]*[a-zA-Z]+)*$/; //for this documentation look down
	return regex.test(inputText); // return true or false depending if the input complies with the regex
};

const dateParts = (dateFormated: string, opt: string): string | undefined => {
	const parts: string[] = dateFormated.split(' ');

	if (opt === 'time') {
		const tempTime = `${parts[parts.length - 2]} ${parts[parts.length - 1]}`;
		if (tempTime !== '24:00 hs') {
			return tempTime;
		}

		return '00:00 hs';
	}

	if (opt === 'date') {
		const removeLastComma: string = parts[parts.length - 3].slice(0, -1); //remove last comma 'Fri, Apr 13,' => Fri, Apr 13'
		return `${parts[parts.length - 5]} ${parts[parts.length - 4]} ${removeLastComma}`;
	}
};

export { setLocalStorage, checkElExistLocalStorageReturnIt, formatDate, validateInput, dateParts, getData };

/* const regex = /^[a-zA-Z]{3,}([ ,]*[a-zA-Z]+)*$/;

This regular expression pattern matches strings that:

begin with at least three consecutive alphabets.
are followed by zero or more occurrences of a space or comma (including none) followed by one or more alphabets.
The pattern is composed of the following elements:

^ - Match the start of the string.
[a-zA-Z]{3,} - Match at least three consecutive alphabets.
([ ,]*[a-zA-Z]+)* - Match zero or more occurrences of a space or comma (including none) followed by one or more alphabets. This ensures that optional blank spaces and commas are allowed between letters.
$ - Match the end of the string.
Pattern Breakdown
^ - Match the start of the string.
[a-zA-Z] - Match any alphabet in the English language, regardless of case.
{3,} - Match at least three consecutive occurrences of the previous character class.
([ ,]*[a-zA-Z]+) - Match zero or more occurrences of a space or comma (including none) followed by one or more alphabets.
* - Match zero or more occurrences of the previous group.
$ - Match the end of the string. */

/* options12h: Intl.DateTimeFormatOptions
In TypeScript, you can specify the type of a constant using the const <name>: <type> syntax.
 To specify the type of options12h, we can use the Intl.DateTimeFormatOptions interface provided by TypeScript,}
  which describes the shape of the options object expected by the toLocaleDateString() method.
 */
