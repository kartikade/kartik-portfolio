// stiky and scroll navbar
window.onscroll = function() {myFunction()};

var header = document.getElementById("sticky-nav");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}





function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();


// type writer effect
const textEl = document.querySelector(".typing");

const words = ["Backend Developer", "Frontend Developer"].map((word) => word + ".");

let wordIndex = 0;
let charIndex = 0;

let addingChars = true;
let shouldWait = false;

let currentWord = words[wordIndex];

const updateCurrWord = () => {
	wordIndex++;

	if (wordIndex === words.length) wordIndex = 0;

	currentWord = words[wordIndex];
};

const addChar = () => {
	let currChar = currentWord[charIndex];

	const char = document.createElement("span");

	char.innerText = currChar;
	char.classList.add("char");

	textEl.appendChild(char);

	charIndex++;

	if (charIndex === currentWord.length) {
		charIndex--;
		addingChars = false;
		shouldWait = true;
	}
};

const removeChar = () => {
	const char = textEl.lastElementChild;

	textEl.removeChild(char);

	charIndex--;

	if (charIndex < 0) {
		charIndex++;
		addingChars = true;
		updateCurrWord();
	}
};

const runTypewriter = () => {
	const operation = addingChars ? addChar : removeChar;

	operation();

	let timeout = addingChars ? 200 : 100;

	if (shouldWait) {
		timeout = 1000;
		shouldWait = false;
	}

	setTimeout(runTypewriter, timeout);
};

setTimeout(runTypewriter, 1500);

// type writer effect-2
const textEl1 = document.querySelector(".typing-2");

const words1 = ["Backend Developer", "Frontend Developer"].map((word) => word + ".");

let wordIndex1 = 0;
let charIndex1 = 0;

let addingChars1 = true;
let shouldWait1 = false;

let currentWord1 = words1[wordIndex1];

const updateCurrWord1 = () => {
	wordIndex1++;

	if (wordIndex1 === words1.length) wordIndex1 = 0;

	currentWord1 = words1[wordIndex];
};

const addChar1 = () => {
	let currChar = currentWord1[charIndex1];

	const char = document.createElement("span");

	char.innerText = currChar;
	char.classList.add("char");

	textEl1.appendChild(char);

	charIndex1++;

	if (charIndex1 === currentWord1.length) {
		charIndex1--;
		addingChars1 = false;
		shouldWait1 = true;
	}
};

const removeChar1 = () => {
	const char = textEl1.lastElementChild;

	textEl1.removeChild(char);

	charIndex1--;

	if (charIndex1 < 0) {
		charIndex1++;
		addingChars1 = true;
		updateCurrWord1();
	}
};

const runTypewriter1 = () => {
	const operation = addingChars1 ? addChar1 : removeChar1;

	operation();

	let timeout = addingChars1 ? 200 : 100;

	if (shouldWait1) {
		timeout = 1000;
		shouldWait1 = false;
	}

	setTimeout(runTypewriter1, timeout);
};

setTimeout(runTypewriter1, 1500);

// form validation
const form = document.getElementById('form');
const username = document.getElementById('name');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const message = document.getElementById('message');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const subjectValue = subject.value.trim();
    const messageValue = message.value.trim();

    if(usernameValue === '') {
        setError(username, 'name is required');
    } else {
        setSuccess(username);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if(subjectValue === '') {
        setError(subject, 'subject is required');
    } else if (subjectValue.length < 8 ) {
        setError(subject, 'subject is required.')
    } else {
        setSuccess(subject);
    }

    if(messageValue === '') {
        setError(message, 'please send your message');
    } else if (messageValue !== messageValue) {
        setError(message, "please send your message");
    } else {
        setSuccess(message);
    }

};


