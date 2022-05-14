const text = {
  english: {
    navInitText: "Home",
    navWorkText: "Work",
    navLinksText: "Links",
    navContactText: "Contact",
    hello: "Hello There!, I'm ",
    intro: "I'm a web developer interested in building modern web sites",
    invite: "I invite you to know my work",
    proyectLink: "See proyect",
    nameTitle: "Name",
    emailTitle: "E-mail",
    subjectTitle: "Subject",
    sendButton: "Send",
    aboutText:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit facere iusto adipisci doloremque harum aliquam pariatur doloribus deserunt quo velit nihil dolore",
    rights: "All rights reserved © 2022 Vega Dev",
  },
  spanish: {
    navInitText: "Inicio",
    navWorkText: "Trabajo",
    navLinksText: "Enlaces",
    navContactText: "Contacto",
    hello: "Hola!, soy ",
    intro:
      "Soy un desarrollador web interesado en construir sitios web modernos",
    invite: "Te invito a conocer mi trabajo",
    proyectLink: "Ver proyecto",
    nameTitle: "Nombre",
    emailTitle: "Correo electronico",
    subjectTitle: "Asunto",
    sendButton: "Enviar",
    aboutText:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit facere iusto adipisci doloremque harum aliquam pariatur doloribus deserunt quo velit nihil dolore",
    rights: "Todo los derechos reservados © 2022 Vega Dev",
  },
};

const elements = {
  navInitText: document.querySelector(".nav-init-text"),
  navWorkText: document.querySelector(".nav-work-text"),
  navLinksText: document.querySelector(".nav-link-text"),
  navContactText: document.querySelector(".nav-contact-text"),
  hello: document.querySelector(".hello"),
  intro: document.querySelector(".intro"),
  invite: document.querySelector(".invite"),
  proyectLink: document.querySelector(".proyect-link"),
  linksTitle: document.querySelector(".links-title"),
  contactTitle: document.querySelector(".contact-title"),
  nameTitle: document.querySelector(".name-title"),
  emailTitle: document.querySelector(".email-title"),
  subjectTitle: document.querySelector(".subject-title"),
  sendButton: document.querySelector(".send-button"),
  aboutText: document.querySelector(".about-text"),
  fLinksTitle: document.querySelector(".f-links-title"),
  fcontactTitle: document.querySelector(".f-contact-title"),
  rights: document.querySelector(".rights-text"),
  fHomeLink: document.querySelector(".f-home-link"),
  fWorkLink: document.querySelector(".f-work-link"),
  fLinksLink: document.querySelector(".f-links-link"),
  fContactLink: document.querySelector(".f-contact-link"),
};

const translateButton = document.querySelector(".translate-button");

translateButton.addEventListener("click", () => {
  translateButton.classList.toggle("en");
  if (translateButton.classList.contains("en")) {
    elements.navInitText.textContent = text.spanish.navInitText;
    elements.navWorkText.textContent = text.spanish.navWorkText;
    elements.navLinksText.textContent = text.spanish.navLinksText;
    elements.navContactText.textContent = text.spanish.navContactText;
    elements.hello.textContent = text.spanish.hello;
    elements.intro.textContent = text.spanish.intro;
    elements.invite.textContent = text.spanish.invite;
    elements.proyectLink.textContent = text.spanish.proyectLink;
    elements.linksTitle.textContent = text.spanish.navLinksText;
    elements.contactTitle.textContent = text.spanish.navContactText;
    elements.nameTitle.textContent = text.spanish.nameTitle;
    elements.emailTitle.textContent = text.spanish.emailTitle;
    elements.subjectTitle.textContent = text.spanish.subjectTitle;
    elements.sendButton.value = text.spanish.sendButton;
    elements.aboutText.textContent = text.spanish.aboutText;
    elements.fLinksTitle.textContent = text.spanish.navLinksText;
    elements.fcontactTitle.textContent = text.spanish.navContactText;
    elements.rights.textContent = text.spanish.rights;
    elements.fHomeLink.textContent = text.spanish.navInitText;
    elements.fWorkLink.textContent = text.spanish.navWorkText;
    elements.fLinksLink.textContent = text.spanish.navLinksText;
    elements.fContactLink.textContent = text.spanish.navContactText;
  } else {
    elements.navInitText.textContent = text.english.navInitText;
    elements.navWorkText.textContent = text.english.navWorkText;
    elements.navLinksText.textContent = text.english.navLinksText;
    elements.navContactText.textContent = text.english.navContactText;
    elements.hello.textContent = text.english.hello;
    elements.intro.textContent = text.english.intro;
    elements.invite.textContent = text.english.invite;
    elements.proyectLink.textContent = text.english.proyectLink;
    elements.linksTitle.textContent = text.english.navLinksText;
    elements.contactTitle.textContent = text.english.navContactText;
    elements.nameTitle.textContent = text.english.nameTitle;
    elements.emailTitle.textContent = text.english.emailTitle;
    elements.subjectTitle.textContent = text.english.subjectTitle;
    elements.sendButton.value = text.english.sendButton;
    elements.aboutText.textContent = text.english.aboutText;
    elements.fLinksTitle.textContent = text.english.navLinksText;
    elements.fcontactTitle.textContent = text.english.navContactText;
    elements.rights.textContent = text.english.rights;
    elements.fHomeLink.textContent = text.english.navInitText;
    elements.fWorkLink.textContent = text.english.navWorkText;
    elements.fLinksLink.textContent = text.english.navLinksText;
    elements.fContactLink.textContent = text.english.navContactText;
  }
});
