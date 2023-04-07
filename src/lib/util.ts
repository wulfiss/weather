const setLocaStorage = (el: string, nameEl: string): void => {
	localStorage.setItem(nameEl, JSON.stringify(el));
};

const checkElExistLocalStorageReturnIt = (elName: string, elValue: string): string => {
	let item: string | null = JSON.parse(localStorage.getItem(elName));
	if (!item) {
		item = elValue;
		setLocaStorage(item, elName);
		return item;
	}
	return item;
};

const updateStoreWithLocalStorage = (name, store) => {
	const getLocalValue = JSON.parse(localStorage.getItem(name));
	return store.set(getLocalValue);
};

const validateInput = (inputText: string): boolean => {
	const regex = /^[a-zA-Z]{3,}([ ,]*[a-zA-Z]+)*$/; //for this documentation look down
	return regex.test(inputText); // return true or false depending if the input complies with the regex
};

export { setLocaStorage, checkElExistLocalStorageReturnIt, updateStoreWithLocalStorage, validateInput };

/* const Arr = () => {
	const arrBooks = JSON.parse(localStorage.getItem('arrBooks'));
	return {
		arrBooks
	};
};

const arrToJson = function checkIfTheArrExistInTheLocalStorageAndPushNewBookIfNotCreateANewOne(book) {
	let { arrBooks } = Arr();

	if (!arrBooks) {
		arrBooks = [];
	}
	arrBooks.push(book);
	localStorage.clear();

	return localStorage.setItem('arrBooks', JSON.stringify(arrBooks));
}; */

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
