const tarotCards = [
        {
            arriba: 'img/major_arcana_chariot.png',
            reves: 'img/rider-waite-tarot_bg.jpg',
            descripcion: 'Representa la victoria, la fuerza de voluntad y el control.',
            futuro: 'Te espera un viaje lleno de éxitos y logros personales.'
        },
        {
            arriba: 'img/major_arcana_death.png',
            reves: 'img/rider-waite-tarot_bg.jpg',
            descripcion: 'Simboliza el final de un ciclo y el comienzo de uno nuevo, transformación y cambio.',
            futuro: 'Un cambio significativo está en camino, prepárate para una nueva etapa en tu vida.'
        },
        {
            arriba: 'img/major_arcana_devil.png',
            reves: 'img/rider-waite-tarot_bg.jpg',
            descripcion: 'Indica ataduras, adicciones y materialismo.',
            futuro: 'Es momento de liberarte de las ataduras que te impiden avanzar.'
        },
        {
            arriba: 'img/major_arcana_emperor.png',
            reves: 'img/rider-waite-tarot_bg.jpg',
            descripcion: 'Representa autoridad, estructura y control.',
            futuro: 'Tomarás el control de una situación importante y establecerás orden en tu vida.'
        },
        {
            arriba: 'img/major_arcana_empress.png',
            reves: 'img/rider-waite-tarot_bg.jpg',
            descripcion: 'Simboliza la feminidad, la belleza y la abundancia.',
            futuro: 'La abundancia y la creatividad florecerán en tu vida.'
        },
        {
            arriba: 'img/major_arcana_fool.png',
            reves: 'img/rider-waite-tarot_bg.jpg',
            descripcion: 'Indica nuevos comienzos, inocencia y espontaneidad.',
            futuro: 'Un nuevo comienzo lleno de posibilidades se avecina.'
        },
        {
            arriba: 'img/major_arcana_fortune.png',
            reves: 'img/rider-waite-tarot_bg.jpg',
            descripcion: 'Representa el destino, la suerte y los ciclos de la vida.',
            futuro: 'La rueda de la fortuna gira a tu favor, trayendo buena suerte.'
        },
        {
            arriba: 'img/major_arcana_hanged.png',
            reves: 'img/rider-waite-tarot_bg.jpg',
            descripcion: 'Simboliza el sacrificio, la suspensión y la nueva perspectiva.',
            futuro: 'Verás las cosas desde una nueva perspectiva, lo que te permitirá avanzar.'
        },
        {
            arriba: 'img/major_arcana_hermit.png',
            reves: 'img/rider-waite-tarot_bg.jpg',
            descripcion: 'Indica introspección, soledad y guía interior.',
            futuro: 'Un periodo de introspección te llevará a un mayor entendimiento de ti mismo.'
        },
        {
            arriba: 'img/major_arcana_hierophant.png',
            reves: 'img/rider-waite-tarot_bg.jpg',
            descripcion: 'Representa la tradición, la conformidad y la moralidad.',
            futuro: 'Seguirás un camino tradicional que te llevará al éxito.'
        },
        {
            arriba: 'img/major_arcana_judgement.png',
            reves: 'img/rider-waite-tarot_bg.jpg',
            descripcion: 'Simboliza el juicio, la reflexión y el despertar.',
            futuro: 'Un despertar espiritual te guiará hacia una nueva dirección.'
        },
        {
            arriba: 'img/major_arcana_justice.png',
            reves: 'img/rider-waite-tarot_bg.jpg',
            descripcion: 'Indica justicia, verdad y equidad.',
            futuro: 'La justicia prevalecerá en una situación que te preocupa.'
        },
        {
            arriba: 'img/major_arcana_lovers.png',
            reves: 'img/rider-waite-tarot_bg.jpg',
            descripcion: 'Representa el amor, la armonía y las decisiones.',
            futuro: 'Una decisión importante en el amor traerá armonía a tu vida.'
        },
        {
            arriba: 'img/major_arcana_magician.png',
            reves: 'img/rider-waite-tarot_bg.jpg',
            descripcion: 'Simboliza el poder, la habilidad y la concentración.',
            futuro: 'Usarás tus habilidades para manifestar tus deseos.'
        },
        {
            arriba: 'img/major_arcana_moon.png',
            reves: 'img/rider-waite-tarot_bg.jpg',
            descripcion: 'Indica ilusión, miedo y la mente subconsciente.',
            futuro: 'Enfrentarás tus miedos y descubrirás verdades ocultas.'
        },
        {
            arriba: 'img/major_arcana_priestess.png',
            reves: 'img/rider-waite-tarot_bg.jpg',
            descripcion: 'Representa la intuición, el misterio y el conocimiento interior.',
            futuro: 'Tu intuición te guiará hacia respuestas importantes.'
        },
        {
            arriba: 'img/major_arcana_star.png',
            reves: 'img/rider-waite-tarot_bg.jpg',
            descripcion: 'Simboliza la esperanza, la inspiración y la serenidad.',
            futuro: 'La esperanza y la inspiración te llevarán a la serenidad.'
        },
        {
            arriba: 'img/major_arcana_strength.png',
            reves: 'img/rider-waite-tarot_bg.jpg',
            descripcion: 'Indica fuerza, coraje y compasión.',
            futuro: 'Tu fuerza y coraje te ayudarán a superar los desafíos.'
        },
        {
            arriba: 'img/major_arcana_sun.png',
            reves: 'img/rider-waite-tarot_bg.jpg',
            descripcion: 'Representa la felicidad, el éxito y la vitalidad.',
            futuro: 'La felicidad y el éxito están en tu horizonte.'
        },
        {
            arriba: 'img/major_arcana_temperance.png',
            reves: 'img/rider-waite-tarot_bg.jpg',
            descripcion: 'Simboliza el equilibrio, la moderación y la paciencia.',
            futuro: 'El equilibrio y la paciencia te llevarán a la armonía.'
        },
        {
            arriba: 'img/major_arcana_tower.png',
            reves: 'img/rider-waite-tarot_bg.jpg',
            descripcion: 'Indica caos, revelación y despertar repentino.',
            futuro: 'Un despertar repentino traerá cambios significativos.'
        },
        {
            arriba: 'img/major_arcana_world.png',
            reves: 'img/rider-waite-tarot_bg.jpg',
            descripcion: 'Representa la culminación, la realización y el viaje completo.',
            futuro: 'Completarás un ciclo importante y alcanzarás la realización.'
        }
    ];