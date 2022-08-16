



const secondSection = document.getElementById('second-place');

// secondSection.style.textAlign = 'center';

secondSection.classList.add('text-center');

// secondSection.classList.remove('second-section');

//where to add the element

const playlist = document.getElementById('another-skill');

// what to be added 

const li = document.createElement('li');

li.innerText = 'Tumi bondhu sadakala';

// 3. add the child

playlist.appendChild(li);




/// Adding an extra section

// 1. Where to added

const extraSection = document.getElementById('main-container');

// console.log(extraSection);

// 2. What to be added

const h1 = document.createElement('h1');

h1.innerText = 'Going for shopping';

extraSection.appendChild(h1);

const ul = document.createElement('ul');

extraSection.appendChild(ul);


const li1 = document.createElement('li');

li1.innerText = 'Buy a rolex watch';

ul.appendChild(li1);

const li3 = document.createElement('li');

li3.innerText = 'Motorcycle';

ul.appendChild(li3);

const li2 = document.createElement('li');

li2.innerText = 'Calculator';

ul.appendChild(li2);

const li4 = document.createElement('li');

li4.innerText = 'Buy a Sony-DSLR';

ul.appendChild(li4);

const sections2 = document.querySelectorAll('section');
for (const section of sections2) {
    section.style.border = ' 2px solid red';

    section.style.backgroundColor = 'darkgray'

    section.style.marginTop = '10px'

    section.style.padding = '10px'

    section.style.borderRadius = '10px'

    // section.style.textAlign = 'center'

    section.style.textShadow = " blue"
}





// set inner html directly

const sectionDress = document.createElement('section');

sectionDress.innerHTML = `

<h1>My dress Collection </h1>

<ul>

  <li>pent</li>
  <li>lungi</li>
  <li>shirt</li>
  <li>shoes</li>
</ul>

`




extraSection.appendChild(sectionDress);

const sections = document.querySelectorAll('section');
for (const section of sections) {
    section.style.border = ' 2px solid red';

    section.style.backgroundColor = 'darkgray'

    section.style.marginTop = '10px'

    section.style.padding = '10px'

    section.style.borderRadius = '10px'

    // section.style.textAlign = 'center'

    section.style.textShadow = " blue"
}








