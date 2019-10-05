let testNav = document.querySelector('.nav-list');
let slideButton = document.querySelector('#slideButton');
let burger = document.querySelector('.burger');


burger.addEventListener('click', slideTestDiv);

function slideTestDiv() {
    testNav.classList.toggle('nav-clicked')
}



let firstLi = document.querySelectorAll('.nav-list>ul>li')[0];
let secondLi = document.querySelectorAll('.nav-list>ul>li')[1];

let subMenu1 = document.querySelector('#subMenu1');
let subMenu2 = document.querySelector('#subMenu2');

firstLi.addEventListener('click', expandlistItems01);
secondLi.addEventListener('click', expandlistItems02);


function addlistItems1() {

    let servicesSubMenu = ['Tax Advisory',
        'Accounting Services', 'Payroll & HR Support',
        'Internal Audit, Risk and ...',
        'Business Registration and<br>',
        'Regulatory Compliance',
        'Softwares and Business Applications'
    ];


    let servicesHref = [
        '/taxAdvisory',
        '/accounting',
        '/payrollAndHr',
        '/internalAudit',
        '/businessRegistration',
        '/regulationComp',
        '/softwaresAndBusiness'
    ]

    for (let i = 0; i < servicesSubMenu.length; i++) {
        let li = document.createElement('LI');
        let a = document.createElement('A');
        a.href = servicesHref[i];
        a.innerHTML = servicesSubMenu[i];
        li.appendChild(a);
        subMenu1.appendChild(li);
        // li.textContent = servicesSubMenu[i];
    }
}

function addlistItems2() {

    let servicesSubMenu = ['HR Softwares', 'Accounting', 'Payroll']
    let servicesHref = [
        '/HrSoftwares',
        '/Accounting',
        '/payrollSoftwares',
    ]


    for (let i = 0; i < servicesSubMenu.length; i++) {
        let li = document.createElement('LI');
        let a = document.createElement('A');
        a.href = servicesHref[i];
        a.innerHTML = servicesSubMenu[i];
        li.appendChild(a);
        li.textContent = servicesSubMenu[i];
        subMenu2.appendChild(li);
    }
}

addlistItems1();
// addlistItems2();



function expandlistItems01() {
    /*  let toggleSign = document.getElementById('toggleSign');
     if (toggleSign.textContent == '+') {
         toggleSign.textContent = '-'
     } else {
         toggleSign.textContent = '+'
     } */
    console.log('Hello');
    subMenu1.classList.toggle("expandServicesList");
    console.log(subMenu1)
    // subMenu1.classList.add('expandFirstList');
}

function expandlistItems02() {
    /*  let toggleSign = document.getElementById('toggleSign');
     if (toggleSign.textContent == '+') {
         toggleSign.textContent = '-'
     } else {
         toggleSign.textContent = '+'

     } */
    console.log('Hello');
    subMenu2.classList.toggle("expandFirstList");
    console.log(subMenu1)
    // subMenu1.classList.add('expandFirstList');
}
// console.log(subMenu1['data-open'])