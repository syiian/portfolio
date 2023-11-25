/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}


/*=============== CHANGE BACKGROUND HEADER ===============*/
const bgHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('bg-header') 
                       : header.classList.remove('bg-header')
}
window.addEventListener('scroll', bgHeader)


/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

//=======LANGUAGE======//
const translations = {
    'en': {
      home: 'Home',
      about: 'About Me',
      work: 'Work',
      contact: 'Contact',
      profession: 'Versatile Web, Visual, and Graphic Designer',
      cv: 'Download CV',
      servicessectiontitle: 'I offer you',
      worksectiontitle: 'My Most Recent Work',
      servicestitle: 'Web Developer',
      servicestitle2: 'Web Designer',
      servicestitle3: 'UI/UX Interfaces',
      servicestitle4: 'Graphic Design',
      servicesdescription: 'Web development with expertise in HTML, CSS, and JavaScript. Meticulously honing every line of code, I architect sites that seamlessly blend functionality, aesthetics, and performance. Committed to staying abreast of industry trends.',
      servicesdescription2: 'From responsive layouts to user-centric navigation, each project is a testament to precision and innovation. Elevate your online presence with websites that leave a lasting impression and drive meaningful engagement.',
      servicesdescription3: 'Crafting elevated digital experiences through meticulous UI/UX design. I merge strategic thinking with creative precision to ensure intuitive interfaces that resonate with users. Enhance your online impact with designs that not only captivate visually but also operate flawlessly..',
      servicesdescription4: 'Dive into the world of Graphic Design with me. From crafting sleek logos to designing impactful social media posts, I specialize in creating visuals that resonate. Elevate your brand presence with simplicity and professionalism.',
      servicesbutton: 'Know More',
      servicesmodaltitle: 'Main Features',
      servicesmodalitem: 'Proficient in crafting responsive and visually appealing websites.',
      servicesmodalitem2: 'Expertise in HTML, CSS, and JavaScript for dynamic and interactive user experiences.',
      servicesmodalitem3: 'Committed to optimizing website performance and ensuring a smooth user journey.',
      servicesmodalitem4: 'Skilled in creating captivating and user-friendly interface designs.',
      servicesmodalitem5: 'Proficient in graphic design tools like Figma, Photoshop, and Illustrator.',
      servicesmodalitem6: 'Committed to enhancing user experience through thoughtful and aesthetically pleasing web designs.',
      servicesmodalitem7: 'Proficient in user interface design principles and usability testing.',
      servicesmodalitem8: 'Dedicated to creating digital interfaces that seamlessly merge form and function for optimal user satisfaction.',
      servicesmodalitem9: 'Dedicated in crafting intuitive and engaging user experiences.',
      servicesmodalitem10: 'Specialized in creating visually compelling and brand-aligned graphics.',
      servicesmodalitem11: 'Proficient in designing diverse visual assets, including logos, posters, flyers, banners, and social media content.',
      servicesmodalitem12: "Committed to delivering impactful and eye-catching designs that elevate your brand's identity.",
      mcsubtitle: 'Website Concept',
      chsubtitle: 'Culture & History Website Concept',
      pwsubtitle: 'Portfolio Website Concept',
      404: '404 Landing Page',
      retroclock: 'Retroclock Design Idea',
      jblwc: 'JBL Website Concept',
      testimonialsectiontitle: 'Testiomonials',
      lindadesc: '',
      justinadesc: '',
      person3desc: '',
      contactsectiontitle: "Let's Talk, Feel free to message me",
      aboutdescription: "I'm a modern designer fluent in the languages of the web: HTML, CSS, JS, and skilled in Figma, GitHub, Photoshop, Illustrator, and InDesign. Beyond digital landscapes, I craft visual stories, designing not just websites but also giving life to books and modern social media designs. My main focus is creating an engaging User Experience and better flow.",
      aboutsectiontitle: 'Behind the Scenes',
      contactsectiontitle: "Let's Talk",
      messagesus: 'Your message',
      message: 'Message',
      firstname: 'First Name',
      sendmessage: 'Send Message',
      skill: 'My Skills Are',

    },
    'ro': {
      home: 'Acasă',
      about: 'Despre mine',
      work: 'Proiecte',
      contact: 'Contactează-mă',
      profession: 'Web, Visual și Graphic Designer Versatil',
      cv: 'Descarcă CV',
      servicessectiontitle: 'Iți ofer ție',
      worksectiontitle: 'Cele mai recente proiecte',
      servicestitle: 'Developer Web',
      servicestitle2: 'Designer Web',
      servicesdescription: 'Dezvoltare web cu experiență în HTML, CSS și JavaScript. Am perfecționat cu meticulozitate fiecare linie de cod și am creat site-uri care îmbină perfect funcționalitatea, estetica și performanța. Sunt la curent cu tendințele noi apărute.',
      servicesdescription2: 'De la layout-uri receptive la navigare centrată pe utilizator, fiecare proiect este o dovadă de precizie și inovație. Ridicați prezența dvs. online cu site-uri web care lasă o impresie de durată și conduc la un angajament semnificativ.',
      servicesdescription3: 'Crearea de experiențe digitale elevate prin intermediul unui design UI/UX meticulos. Îmbin gândirea strategică cu precizia creativă pentru a asigura interfețe intuitive care să rezoneze cu utilizatorii. Îmbunătățiți impactul online cu designuri care nu numai că vă captivează vizual, ci și funcționează fără probleme...',
      servicesdescription4: 'Scufundă-te cu mine în lumea designului grafic. De la crearea de logo-uri elegante până la conceperea de postări de impact în social media, sunt specializată în crearea de elemente vizuale care rezonează. Ridicați prezența brandului dvs. cu simplitate și profesionalism.',
      servicesbutton: 'Află mai multe',
      servicesmodaltitle: 'Caracteristici Principale',
      servicesmodalitem: '"Proeficient în crearea de site-uri web receptive și atractive din punct de vedere vizual.',
      servicesmodalitem2: 'Expertiza în HTML, CSS și JavaScript pentru experiențe dinamice și interactive pentru utilizatori.',
      servicesmodalitem3: 'Angajamentul de a optimiza performanța site-ului web și de a asigura o călătorie fără probleme pentru utilizatori.',
      servicesmodalitem4: 'Abilități în crearea de interfețe captivante și ușor de utilizat.',
      servicesmodalitem5: 'Cunoașterea instrumentelor de design grafic precum Figma, Photoshop și Illustrator.',
      servicesmodalitem6: 'Implicat să îmbunătățesc experiența utilizatorului prin designuri web atente și plăcute din punct de vedere estetic.',
      servicesmodalitem7: 'Cunoașterea principiilor de proiectare a interfeței cu utilizatorul și a testelor de uzabilitate.',
      servicesmodalitem8: 'Dedicată creării de interfețe digitale care îmbină perfect forma și funcția pentru o satisfacție optimă a utilizatorului.',
      servicesmodalitem9: 'Dedicat în crearea de experiențe intuitive și captivante pentru utilizatori.',
      servicesmodalitem10: 'Specializat în crearea de grafice atractive din punct de vedere vizual.',
      servicesmodalitem11: 'Serios în proiectarea de diverse active vizuale, inclusiv logo-uri, afișe, pliante, bannere și conținut pentru rețelele sociale.',
      servicesmodalitem12: 'Implicat să livrez modele de impact și atractive, care să ridice identitatea mărcii dumneavoastră.',
      mcsubtitle: 'Concept de Website',
      chsubtitle: 'Istoie & Cultură Concept de Website',
      pwsubtitle: 'Concept Web de Portofoliu',
      404: 'Pagină de destinație 404',
      retroclock: 'Ceas Retro Design',
      jblwc: 'JBL Concept de Website',
      testimonialsectiontitle: 'Mărturii',
      lindadesc: '',
      justinadesc: '',
      person3desc: '',
      contactsectiontitle: 'Haide să vorbim, contactează-mă!',
      aboutdescription: 'Sunt un designer modern fluent limbajele web: HTML, CSS, JS, și priceput în Figma, GitHub, Photoshop, Illustrator și InDesign. Dincolo de peisajele digitale, creez povești vizuale, proiectând nu doar site-uri web, ci și dând viață cărților și designurilor moderne de social media. Principalul meu obiectiv este crearea unei experiențe de utilizator captivante și un flux mai bun.',
      aboutsectiontitle: 'În Culisele Scenei',
      contactsectiontitle: 'Hai să vorbim',
      message: 'Mesaj',
      messagesus: 'Mesajul tău',
      firstname: 'Numele',
      sendmessage: 'Trimite Mesajul',
      skill: 'Aptitudinile Mele Sunt',
    }
  };
  
  function updateLanguage(language) {
    const elements = document.querySelectorAll('.translate');
  
    elements.forEach(element => {
      const key = element.getAttribute('data-translate-key');
      if (key && translations[language][key]) {
        element.textContent = translations[language][key];
      }
    });
  }
  

  const languageButton = document.getElementById('language-button');

  languageButton.addEventListener('click', () => {
    // Toggle between 'en' and 'ro' languages
    const currentLanguage = document.documentElement.lang || 'en';
    const newLanguage = currentLanguage === 'en' ? 'ro' : 'en';
  
    // Update the HTML lang attribute
    document.documentElement.lang = newLanguage;
  
    // Update the text content
    updateLanguage(newLanguage);
  });
  