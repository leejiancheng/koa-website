"use strict";

import $ from "./jquery-vendor.js";
import "./bootstrap.min";


$(".footer-menu").on("click", ".about-content-open", () => {
	alert("11111");
	return false;
});

$(".footer-menu").on("click", ".newsletter-content-open", () => {
	alert("22222");
	return false;
});

$(".footer-menu").on("click", ".contact-open", () => {
	alert("33333");
	return false;
});

