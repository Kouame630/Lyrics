
let initialWidth = window.innerWidth;
const threshold = 770; // The width breakpoint in pixels

window.addEventListener('resize', function() {
  const currentWidth = window.innerWidth;

  // Check if the current width has crossed the threshold from either direction
  if ((initialWidth < threshold && currentWidth >= threshold) || (initialWidth >= threshold && currentWidth < threshold)) {
    window.location.reload();
  }
  
  // Update the initial width for the next comparison
  initialWidth = currentWidth;
});

const menuOpen = document.querySelector('#menu-btn')
const menuClose = document.querySelector('#menu-close')
const navigationMenu = document.querySelector('#navbar')

menuOpen.addEventListener('click', () => {
    menuOpen.classList.add('active')
    menuClose.classList.add('active')
    navigationMenu.classList.add('active')
})

menuClose.addEventListener('click', () => {
    menuOpen.classList.remove('active')
    menuClose.classList.remove('active')
    navigationMenu.classList.remove('active')
})


const nav = document.querySelector("nav");
const navLinks = document.querySelectorAll("#nav-link");
const sections = document.querySelectorAll('section');

document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        root: null, // observe against the viewport
        rootMargin: '0px',
        threshold: 0.5 // highlight when 50% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Remove active class from all links
            navLinks.forEach(link => link.classList.remove('active'));

            // Add active class to the link matching the current section's ID
            const currentId = entry.target.getAttribute('id');
            const activeLink = document.querySelector(`nav a[href="#${currentId}"]`);
            if (activeLink) {
            activeLink.classList.add('active');
            }
        }
        });
    }, observerOptions);

    // Start observing all sections
    sections.forEach(section => {
        observer.observe(section);
    });
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuOpen.classList.remove('active')
        menuClose.classList.remove('active')
        navigationMenu.classList.remove('active')
    });
});

const logo = document.getElementById('logo')

logo.addEventListener('click', () => {
    if (navigationMenu.classList.contains('active')) {
        menuOpen.classList.remove('active')
        menuClose.classList.remove('active')
        navigationMenu.classList.remove('active')
    } else {
        return
    }
})

sections.forEach(section => {
    section.addEventListener('click', () => {
    if (navigationMenu.classList.contains('active')) {
        menuOpen.classList.remove('active')
        menuClose.classList.remove('active')
        navigationMenu.classList.remove('active')
    } else {
        return
    }
})
})
const listeProduit = document.querySelector('#proContainer')
const modalOverlay = document.getElementById('modalOverlay')
const navBar = document.querySelector('nav')
const oderOptions = document.querySelector('#Order')
const hero = document.getElementById('hero')
const features = document.getElementById('feature')
const clients = document.getElementById('client')
const banner = document.getElementById('banner')
const contact = document.getElementById('contacts')
const prod = document.getElementById('product1')

//Tutorial video manouver

const heroText = document.getElementById('text');
const heroTuto = document.getElementById('tuto');
const heroTutoCommand = document.getElementById('command');
const tutoOpen = document.getElementById('open');
const tutoClose = document.getElementById('close');
const tutoVideo = document.getElementById('video')

tutoOpen.addEventListener('click', () => {
    heroTuto.classList.remove('active')
    heroTutoCommand.classList.add('active')
    tutoVideo.classList.add('active')
    tutoOpen.style.display = 'none'
    tutoClose.style.display = 'initial'

    // Source - https://stackoverflow.com/q
    // Posted by Evanss, modified by community. See post 'Timeline' for change history
    // Retrieved 2026-01-14, License - CC BY-SA 3.0

    if (screen.width < 770) {
        heroText.classList.add('active');
    }
    else {
        return; 
    }
})

tutoClose.addEventListener('click', () => {
    heroTuto.classList.add('active')
    heroTutoCommand.classList.remove('active')
    tutoVideo.classList.remove('active')
    tutoOpen.style.display = 'initial'
    tutoClose.style.display = 'none'

    // Source - https://stackoverflow.com/q
    // Posted by Evanss, modified by community. See post 'Timeline' for change history
    // Retrieved 2026-01-14, License - CC BY-SA 3.0

    if (screen.width < 770) {
        heroText.classList.remove('active');
    }
    else {
        return;
    }
})

fetch('Public/produits.json')
.then(response => response.json())
.then(json => {
    for (let i = 0; i < json.Produits.length; i++) {
        const div = document.createElement('div')
        div.className = 'pro'
        div.id = 'Modal'
        listeProduit.appendChild(div)
        const currentproduct = document.createElement('div')
        currentproduct.className = 'current'
        div.appendChild(currentproduct)
        const previous = document.createElement('i')
        previous.className = 'fa-solid fa-circle-arrow-left'
        currentproduct.appendChild(previous)

        const openModalBtns = document.createElement('button')
        openModalBtns.id = 'openModalBtn'
        openModalBtns.innerText = 'Voir details'
        currentproduct.appendChild(openModalBtns)

        openModalBtns.dataset.target = '#Modal'

        const closeModalBtn = document.createElement('span')
        closeModalBtn.id = 'close-btn'
        closeModalBtn.innerHTML = `&times;`
        currentproduct.appendChild(closeModalBtn)

        const next = document.createElement('i')
        next.className = 'fa-solid fa-circle-arrow-right'
        currentproduct.appendChild(next)

        let j = 0
        let currentproductimage = document.createElement('img')
        currentproductimage.src = `/${json.Produits[i].images[j]}`
        currentproductimage.alt = `img`
        const imagecontainer = document.createElement('div')
        imagecontainer.className = 'imagecontain'
        div.appendChild(imagecontainer)
        imagecontainer.appendChild(currentproductimage)
        const descContainer = document.createElement('div')
        imagecontainer.appendChild(descContainer)
        const imagedescription = document.createElement('p')
        imagedescription.innerText= `${json.Produits[i].Desciptions[0]}` 
        descContainer.appendChild(imagedescription)
        // const moreDetails = document.createElement('i')
        // moreDetails.className = 'fa-solid fa-plus'
        // moreDetails.id = 'plus'
        // descContainer.appendChild(moreDetails)

        // const lessDetails = document.createElement('i')
        // lessDetails.className = 'fa-solid fa-minus'
        // lessDetails.id = 'minus'
        // descContainer.appendChild(lessDetails)

      
        openModalBtns.addEventListener('click' , () => {
            let modal = openModalBtns.closest(openModalBtns.dataset.target)
            openModalBtns.classList.add('active')
            closeModalBtn.classList.add('active')
            listeProduit.classList.add('active')
            navBar.classList.add('active')
            hero.classList.add('active')
            features.classList.add('active')
            clients.classList.add('active')
            banner.classList.add('active')
            contact.classList.add('active')
            if (modal == null) return
            modal.classList.add('active')
            // imagedescription.innerText= `  ${json.Produits[i].Desciptions[0]}
            //                                 ${json.Produits[i].Desciptions[1]} 
            //                                 ${json.Produits[i].Desciptions[2]} 
            //                                 ${json.Produits[i].Desciptions[3]}
            //                                 ${json.Produits[i].Desciptions[4]} 
            //                                 ${json.Produits[i].Desciptions[5]} 
            //                                 ${json.Produits[i].Desciptions[6]} 
            //                                 ${json.Produits[i].Desciptions[7]} 
            //                                 ${json.Produits[i].Desciptions[8]}`
            modalOverlay.classList.add('active')
            window.scrollTo({
                top: 0,
                behavior: 'instant'
            });
            document.body.style.overflow = 'hidden'

        })

        currentproductimage.addEventListener('click' , () => {
            let modal = openModalBtns.closest(openModalBtns.dataset.target)
            openModalBtns.classList.add('active')
            closeModalBtn.classList.add('active')
            listeProduit.classList.add('active')
            navBar.classList.add('active')
            hero.classList.add('active')
            features.classList.add('active')
            clients.classList.add('active')
            banner.classList.add('active')
            contact.classList.add('active')
            if (modal == null) return
            modal.classList.add('active')
            // imagedescription.innerText= `  ${json.Produits[i].Desciptions[0]}
            //                                 ${json.Produits[i].Desciptions[1]} 
            //                                 ${json.Produits[i].Desciptions[2]} 
            //                                 ${json.Produits[i].Desciptions[3]}
            //                                 ${json.Produits[i].Desciptions[4]} 
            //                                 ${json.Produits[i].Desciptions[5]} 
            //                                 ${json.Produits[i].Desciptions[6]} 
            //                                 ${json.Produits[i].Desciptions[7]} 
            //                                 ${json.Produits[i].Desciptions[8]}`
            modalOverlay.classList.add('active')
            window.scrollTo({
                top: 0,
                behavior: 'instant'
            });
            document.body.style.overflow = 'hidden'
        })

        closeModalBtn.addEventListener('click', () => {
            let modal = openModalBtns.closest(openModalBtns.dataset.target)
            openModalBtns.classList.remove('active')
            closeModalBtn.classList.remove('active')
            listeProduit.classList.remove('active')
            navBar.classList.remove('active')
            hero.classList.remove('active')
            features.classList.remove('active')
            clients.classList.remove('active')
            banner.classList.remove('active')
            contact.classList.remove('active')
            if (modal == null) return
            modal.classList.remove('active')
            imagedescription.innerText= `${json.Produits[i].Desciptions[0]}`
            modalOverlay.classList.remove('active')
            modal.scrollIntoView({
                behavior: 'auto',
                block: 'start',
                inline: 'start'
            })
            document.body.style.overflow = 'auto'
        })

        modalOverlay.addEventListener('click', () => {
            let modal = openModalBtns.closest(openModalBtns.dataset.target)
            openModalBtns.classList.remove('active')
            closeModalBtn.classList.remove('active')
            listeProduit.classList.remove('active')
            navBar.classList.remove('active')
            hero.classList.remove('active')
            features.classList.remove('active')
            clients.classList.remove('active')
            banner.classList.remove('active')
            contact.classList.remove('active')
            if (modal == null) return
            modal.classList.remove('active')
            imagedescription.innerText= `${json.Produits[i].Desciptions[0]}`
            modalOverlay.classList.remove('active')
            listeProduit.scrollIntoView({
                behavior: 'auto',
                block: 'start',
                inline: 'start'
            })
            document.body.style.overflow = 'auto'
        })


        next.addEventListener('click', (e) => {
            if ( j < json.Produits[i].images.length-1) {
                j++
                currentproductimage.src = `/${json.Produits[i].images[j]}`
            } else if (j = json.Produits[i].images.length-1){
                j = 0
                currentproductimage.src = `/${json.Produits[i].images[j]}`
            }
        })

        previous.addEventListener('click', (e) => {
            if ( j > 0) {
                j--
                currentproductimage.src = `/${json.Produits[i].images[j]}`
            } else if (j = 1){
                j = json.Produits[i].images.length-1
                currentproductimage.src = `/${json.Produits[i].images[j]}`
            }
        })

        const info = document.createElement('div')
        info.className = 'des'
        div.appendChild(info)
        const brand = document.createElement('span')
        brand.innerText = `${json.Produits[i].nom}`
        info.appendChild(brand)
        const desc = document.createElement('h5')
        desc.innerText = `${json.Produits[i].couleur} ${json.Produits[i].capacite}`
        info.appendChild(desc)
        const state = document.createElement('div')
        state.className = 'star'
        info.appendChild(state)
        const star1 = document.createElement('i')
        const star2 = document.createElement('i')
        const star3 = document.createElement('i')
        const star4 = document.createElement('i')
        const star5 = document.createElement('i')

        star1.className = 'fa-solid fa-star'
        star2.className = 'fa-solid fa-star'
        star3.className = 'fa-solid fa-star'
        star4.className = 'fa-solid fa-star'
        star5.className = 'fa-solid fa-star'

        state.appendChild(star1)
        state.appendChild(star2)
        state.appendChild(star3)
        state.appendChild(star4)
        state.appendChild(star5)
        let drawList = document.createElement('option')
        drawList.innerText = `${json.Produits[i].capacite} ${json.Produits[i].nom} ${json.Produits[i].couleur}`
        drawList.setAttribute('value', `${json.Produits[i].capacite} ${json.Produits[i].nom} ${json.Produits[i].couleur}`)
        oderOptions.appendChild(drawList)
    }
})


document.getElementById("whatsAppForm").addEventListener("submit", function (event) {
            event.preventDefault();

            var name = document.getElementById("name").value;
            var phone = document.getElementById("tel").value;
            var order = document.getElementById("Order").value;
            let contact = '+2250151997515'; // add your number ex(+9100000000)

            var encodedMessage = encodeURIComponent(
                "Nom: " + name + "\n" +
                "Phone: " + phone + "\n" +
                "Commande: " + order
            );

            var link;

            // Check if user is on a mobile device
            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                link = `whatsapp://send?phone=${contact}&text=${encodedMessage}`;
            } else { // Desktop device
                link = `https://web.whatsapp.com/send?phone=${contact}&text=${encodedMessage}`;
            }

            window.open(link, '_blank');
});

const otherContacts = document.getElementById('moreChoices')
const wats = document.getElementById('whatsApp')
const others = document.getElementById('profile')
otherContacts.addEventListener('click', () => {
    wats.classList.add('active')
    others.classList.add('active')
})

// const submitbtn = document.querySelector('.sendbtn')

// submitbtn.addEventListener('click', async(e) => {
//     e.preventDefault()

//     const nameInput = document.getElementById('name')
//     const telInput = document.getElementById('tel')
//     const contactsInput = document.getElementById('contacts')
//     const orderInput = document.getElementById('Order')
//     const consentInput = document.getElementById('accept')
    
//     const name = nameInput.value.trim();
//     const tel = telInput.value.trim();
//     const contact = contactsInput.value.trim();
//     const order = orderInput.value;
//     const consent = consentInput.value;

//     if (!name || !tel || !contact || !order || !consent) {
//         alert('Veuillez remplir les informations requises');
//         return;
//     }

//     const formData = {name, tel, contact, order};

//     const apiURL = 'http://localhost:3000/requests'

//     try {
//         const response = await fetch(apiURL, {
//             method: 'POST',
//             body: JSON.stringify(formData),
//         });

//         if (response.ok) {
//             alert('Message envoyer avec succes!');
//             nameInput.value = '';
//             telInput.value = '';
//             contactsInput.value = '';
//             orderInput.value = '';
//         } else {
//             const error = await response.json();
//             alert(`Echec d'envoi de message: ${error.message}`)
//         }
//     } catch (error) {
//         alert(`Une eurreur s'est produite: ${error.message}`);
//     }
// })
