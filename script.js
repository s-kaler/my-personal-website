var buttons = document.getElementsByClassName("buttons");

for (var i = 0; i < buttons.length; ++i){
    buttons[i].onclick = displayDescription(buttons[i]);
}


function displayDescription(id) {
    var descriptionBox = document.getElementById('description');
    var descHeader = document.getElementById("desc-header");
    if(id === "b0"){
        descHeader.textContent = "Göbekli Tepe";
        descHeader.height = "40px";
        descriptionBox.innerHTML = `<p>Göbekli Tepe is the oldest known human construction in the world. It was built between 11,000 and 12,000 years ago and is located in southeastern Turkey.  The site was occupied at its peak from 9,600 BCE to 8,200 BCE.  The name Göbekli Tepe translates to "potbelly hill" in Turkish.</p> 
        <p>The site is made up of a number of T-shaped limestone megaliths. Some of these pillars are over 16 feet (5 meters) in height and weigh as much as 50 tons. The pillars are arranged in circular formations.</p>
        <p>The site is a reminder of humanity's capacity to create impressive structures.  he site was constructed during the Pre-Pottery Neolithic period of Southwest Asia. This era began at the close of the last Ice Age and represents the origins of village life. The site was excavated in 1994.</p>
        <p>Bones found at the site suggest that the hill was used for ritual sacrifices and feasts.  Klaus Schmidt believed that Göbekli Tepe was a stone-age mountain sanctuary. He suggested that it was a central location for a cult of the dead.</p>`
        ;
    }
    else if(id === "b1"){
        descHeader.textContent = "Uruk";
        descHeader.height = "40px";
        descriptionBox.innerHTML = `<p>Uruk was the first major city in Sumer, built in the 5th century BC. It was one of the largest Sumerian settlements and most important religious centers in Mesopotamia. Uruk was continuously inhabited from about 5000 BC up to the 5th century AD. </p>
        <p>Uruk is best known as the birthplace of writing. It was a center of Sumerian religion, a polytheistic faith that featured many gods. Uruk had ziggurats to honor two of the more important deities of the Sumerian pantheon, Inanna and Anu. It also housed the sacred enclosure of Eanna, another deity. </p>
        <p>Uruk was a true city dominated by monumental mud-brick buildings decorated with mosaics of painted clay cones embedded in the walls. It was also known for its extraordinary works of art. Uruk was founded by King Enmerkar c. 4500 BCE. It was excavated in 1850, 1854, 1902, 1912–1913, 1928–1939, 1953–1978, 2001–2002, and 2016–present. </p>
        <p>Uruk is also the setting for the ancient Near Eastern epic poem, The Epic of Gilgamesh. The epic was written on clay tablets in cuneiform around 2150 BCE. It tells the story of Gilgamesh, the semi-divine king of Uruk. </p>`
        ;
    }
    else if(id === "b2"){
        descHeader.textContent = "Mehrgarh";
        descHeader.height = "40px";
        descriptionBox.innerHTML = `<p>Mehrgarh is a Neolithic site in Pakistan that was occupied from 7000 to 2600 BC. It is the earliest known site in South Asia with evidence of farming and herding. The site is located on the Kachi plain of Balochistan, Pakistan, on the main route between Afghanistan and the Indus Valley. </p>
        <p>Mehrgarh is considered one of the most important Neolithic sites in archaeology. It is thought to be a precursor to the Indus Valley Civilization. The discovery of Mehrgarh shed light on the development of agricultural technologies and agrarian lifestyles of the ancient Stone Age people of South Asia. </p>
        <p>Mehrgarh was influenced by the Neolithic culture of the Near East. Similarities include domesticated wheat varieties, early farming, pottery, and other archaeological artifacts. 
        The Rind tribe bulldozed the Mehrgarh site during a feud with the Raisani tribe. The site was under Raisani control, but the Rind tribe also had claims over it. </p>`
        ;
    }
    else if(id === "b3"){
        descHeader.textContent = "Tell es-Sultan";
        descHeader.height = "40px";
        descriptionBox.innerHTML = `<p>Tell es-Sultan is an archaeological site in the West Bank, about 10 km north of the Dead Sea and 2 km north of modern-day Jericho. The site is also known as Tel Jericho or the Mound of Jericho. It was inhabited from the 10th millennium BCE and has been called "the oldest town in the world". </p>
        <p>Tell es-Sultan was one of the largest and most flourished Canaanite city-states in Palestine. During the Bronze ages, it became a distinguished fortified urban center. The site is notable for its role in the history of Levantine archaeology. </p>
        <p>The site was excavated between 1907–1909 and in 1911 by Ernst Sellin and Carl Watzinger. They found the remains of two walls which they initially suggested supported the biblical account of the Battle of Jericho. </p>
        <p>Tell es-Sultan is also known as the "Sultan's Hill". </p>`;
    }
    else if(id === "b4"){
        descHeader.textContent = "Teotihuacan";
        descHeader.height = "40px";
        descriptionBox.innerHTML = `<p>Teotihuacan is an ancient Mesoamerican city located in a valley in Central Mexico. The city was settled as early as 400 B.C. and became the most powerful and influential city in the region by 400 A.D.. It was the largest city in the Western Hemisphere before the 1400s. Teotihuacan is famous for its pyramids and residential compounds. </p>
        <p> The Pyramid of the Sun is the largest structure in Teotihuacan and the second largest in Mesoamerica. It is also the third largest pyramid in the world. The original purpose of the Pyramid of the Sun is unknown, though archaeologists believe it originally had an altar on top of the pyramid. </p>
        <p>Teotihuacan was a multi-ethnic city with distinct quarters occupied by Otomi, Totonac, Zapotec, Mixtec, Maya, and Nahua peoples. </p>
        <p>Teotihuacan was designated a UNESCO World Heritage Site in 1987. </p>`;
    }
    else if(id === "home"){
        descHeader.textContent = "";
        descHeader.height = "0px";
        descriptionBox.innerHTML = `<p class="paragraph"> Human history on our planet started millions of years ago when the first apes stood on their hind legs and became bipedal. Scientists believe that humans split from their ancestors almost ten million years ago. However, modern humans, known as <i>Homo Sapiens</i>, are said to have only emerged two hundred thousand years ago.</p>
        <p class="paragraph"> Those first humans are believed to have exited Africa at different times, due to different circumstances. Today, evidence can be found all over the world of our ancestors' adventures. Still, we wonder how our world came to be the way it is today. Ancient humans travelled and settled as groups and we are still finding new archeological sites of their earlist settlements.</p>
        <p class="paragraph"> Modern civilizations grew out of these prehistoric settlements. We define a civilization as a complex society with structure, organization, and a system of communication. We can consider other elements as part of our modern understanding of civilization, like agriculture, religion, economics, etc. Some settlements we will look at will give us a better understand of how modern civilizations came to be.</p>`
        ;
    }
}


/*

var selector = "sel";
var box;
for (var i = 0; i < 5; ++i){
    selector = "sel" + i;
    console.log(selector);
    box = document.getElementById(selector);
    console.log(box);
    box.addEventListener('mouseenter', highlightBorder());
    box.addEventListener('mouseenter', unhighlightBorder());
}

function highlightBorder(bdItem) {
        bdItem.style.border = "4px solid rgb(218, 165, 32)";
        console.log("hovered");
}
function unhighlightBorder(bdItem) {
        bdItem.style.borderRadius = "0px none rgba(0,0,0,0)";
        console.log("unhovered");
}
*/
/*
var selectors = getElementsByClassName("selections");
selectors.forEach(box => {
    box = document.body(div);
    console.log(box);
    box.addEventListener('mouseenter', function() { box.style.border = "4px solid rgb(218, 165, 32)"; console.log("hovered");});
    box.addEventListener('mouseleave', function() { box.style.border = "0px transparent rgba(0,0,0,0)"});
});
*/