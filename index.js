class ViewportWatcher {
	constructor(elements, options = {}) {
		const inViewportClass = options.inViewportClass || 'in-viewport';
		const once = options.once !== undefined ? options.once : true;
		const rootMargin = options.rootMargin || '0px 0px 0px 0px';
		const threshold = options.threshold || 0;

		this.observer = new IntersectionObserver((entries, observer) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add(inViewportClass);

					if (once) {
						observer.unobserve(entry.target);
					}

					return;
				}

				if (!once) {
					entry.target.classList.remove(inViewportClass);
				}
			});
		}, { rootMargin, threshold });

		this.add(elements);
	}

	createArray(elements) {
		return elements instanceof HTMLElement ? [elements] : [...elements];
	}

	add(elements) {
		this.createArray(elements).forEach((element) => this.observer.observe(element));
	}

	remove(elements) {
		this.createArray(elements).forEach((element) => this.observer.unobserve(element));
	}
}
