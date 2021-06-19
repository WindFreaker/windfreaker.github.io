// all of this should be considered depricated
// the only browswer without preferse-color-scheme support across both PC and mobile is Internet Explorer
// Internet Explorer is not and should never be considered something worth supporting

function switchTheme() {

	var value = document.getElementById("themeSwitch").checked ? "enabled" : "disabled";
	window.localStorage.setItem("dark-mode", value);
	document.documentElement.setAttribute("dark-mode", value);

}

function PCScheck() {

	if (window.matchMedia("(prefers-color-scheme)").media === "not all") {
		console.warn("Browser does not support system theme detection. A theme selector has been added to the webpage.");
		document.getElementById("themeSwitch").hidden = false;
		return false;
	}

	return true;

}

function loadTheme() {

	if (!PCScheck()) {
		if (window.localStorage.getItem("dark-mode") === null) window.localStorage.setItem("dark-mode", false);
		if (window.localStorage.getItem("dark-mode") === "enabled") document.getElementById("themeSwitch").checked = true;
		switchTheme();
	}

}