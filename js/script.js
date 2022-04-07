// Created by: Logan Rodriguez
// Created on: Apr 2022
// This file contains the JS functions for index.html

function calculateArea() {
  //function for finding area and perimeter

  //get their base from the text field
  let Base = parseInt(document.getElementById("base").value)
	// get their height from the text field
  let Height = parseInt(document.getElementById("height").value)
  let Top = parseInt(document.getElementById("top").value)
  let Area = (Base + Top) * Height / 2
  
  // display information back to user
  document.getElementById('answer').innerHTML = "Your trapezoid has an area of " + Area + "cm²"
}
