const accCards = document.querySelectorAll(".faq-accordion-card-item")

accCards.forEach((accCard) => {
	accCard.addEventListener("click", () => {
		if (accCard.classList.contains("active")) {
			accCard.classList.remove("active")
		} else {
			const accCardsActive = document.querySelectorAll(".active")
			accCardsActive.forEach((accCardActive) => {
				accCardActive.classList.remove("active")
			})
			accCard.classList.toggle("active")
		}
	})
})
