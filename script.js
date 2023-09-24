// Challenge 1.1: Access the HTML section element with the id "container" using the getElementbyId method and change the background color of it.
var cha1_1 = document.getElementById("container")
// Challenge 1.2: Access the div with the id "header" using the querySelector method and change the text content to "These are the DOM Methods".
var cha1_2 = document.querySelector("#header")
cha1_2.innerHTML = "These are the DOM Methods"
// Challenge 1.3: Access all the elements with the class "dom-methods" using the method getElementsByClassName and change the text color to "red". Hint: Use for loop
var cha1_3 = document.getElementsByClassName("dom-methods")
for (let i = 0; i < cha1_3.length; i++) {
    cha1_3[i].style.color = "red"
    
}
// Challenge 1.4: Access all the elements with the class "dom-methods" using the method querySelectorAll and change the font size to 20px". Hint: Use for loop
var cha1_4 = document.querySelectorAll(".dom-methods")
for (let i = 0; i < cha1_4.length; i++) {
    cha1_4[i].style.fontSize = "20px"
}
// Challenge 2.1: Create a new element <div> and append it to the body tag and append the string "Division" inside the newly created <div> using textContent.
var body = document.querySelector("body")
var div = document.createElement("div")
div.textContent = "Division"
body.appendChild(div)

// Challenge 2.2: Add id "main" using setAttribute method to the newly created <div> element. Print the id "main" using the getAttribute method.
div.setAttribute("id","main")
console.log(div.getAttribute("id"));
// Challenge 2.3: Add the text content "This is a division" inside the div with id "main" using innerHTML.
var main = document.getElementById("main")
main.innerHTML = "This is a division"
// Challenge 2.4: Create a new element <p> and append it to the div with id "main" and append the string "This is a paragraph tag" inside the <p> tag using the innerText.
// Hint: First access the id "main" using document.getElementById and then append the new element <p> tag.
var p  = document.createElement('p')
p.innerHTML = "This is a paragraph tag"
main.appendChild(p)

// Challenge 2.5: Remove the class "footer" using classList and add the new class "dom-method-footer". If your footer text color changes to aqua blue you are right.
var footer = document.querySelector(".footer")
footer.classList.remove("footer")
footer.classList.add("dom-method-footer")
// Challenge 2.6: Set the color of the <p> text as red using DOM manipulation.
// cha2_6 = document.querySelectorAll("p")
// cha2_6.style.color = "red"
p.style.color = "red"
// Challenge 2.7: Remove the div with a class "copyright" using the removeAttribute method.
var cha2_7 = document.querySelector(".copyright")
cha2_7.removeAttribute("class")
