(function(Gallery) {
	var galleryTimer, galleryMode;

	Gallery.step = function (items, iterations) {
		var length = items.length,
			ptr = 0,
			loops = 0;

		return function () {
			if (iterations > 0 && loops === iterations) {
				return;
			}
			items[ptr].className = "inactive";
			if (ptr === length - 1) {
				loops++;
				if (iterations === 0 || loops < iterations) {
					ptr = 0;
				}
			} else {
				ptr++;
			}
			items[ptr].className = "active";
		};
	};

	Gallery.start = function (galleryNode, contextNode) {
		contextNode = contextNode || document.body.firstChild;
		galleryMode = galleryNode.dataset.mode || 'normal';

		if (galleryMode === 'full-screen') {
			// FIXME remove depenency on Reveal, have a callback? function
			// that will get a root node to move full screen slides to (ie. slidesNode)

			// for full screen mode we need to: 
			// - take the gallery out of the flow and insert it before "slides"
			// - hide slides
			// - make it full screen

			var placeholder = document.createElement("div");
			placeholder.id = "gallery-placeholder";
			galleryNode.parentNode.replaceChild(placeholder, galleryNode);

			if (contextNode.parentNode) {
				contextNode.parentNode.insertBefore(galleryNode, contextNode);
			}
		}

		var items = Array.prototype.slice.apply(galleryNode.querySelectorAll("li"));
		items.forEach(function (item, index) {
			if (index === 0) {
				item.className = "active";
			} else {
				item.className = "inactive";
			}
			var label = item.querySelector("label");
			var img = item.querySelector("img");

			if (galleryMode === 'full-screen') {
				img.style.display = "none";
				item.style.backgroundImage = "url(" + img.src + ")";
			} else {
				img.style.display = "";
			}

			if (!label && img.attributes.alt) {
				label = document.createElement("label");
				label.innerHTML = img.attributes.alt.value;
				item.appendChild(label);
			}
		});

		var iterations = galleryNode.dataset.iterations ? +galleryNode.dataset.iterations : 1;
		var interval = (galleryNode.dataset.interval || 1) * 1000;
		galleryTimer = setInterval(Gallery.step(items, iterations), interval);
	};

	// FIXME Gallery.stop should take elem and root nodes as well
	Gallery.stop = function (galleryNode, contextNode) {
		clearInterval(galleryTimer);

		if (galleryMode === "full-screen") {
			// - put the gallery back where it was
			var placeholder = document.getElementById("gallery-placeholder");
			placeholder.parentNode.replaceChild(galleryNode, placeholder);

			var items = Array.prototype.slice.apply(galleryNode.querySelectorAll("li"));
			items.forEach(function (item, index) {
				var img = item.querySelector("img");
				item.style.backgroundImage = "";
				img.style.display = "";
			});
		}
	};
})(window.Gallery = window.Gallery || {});(function() {
	if( typeof window.addEventListener === 'function' ) {
		var slidesNode = document.querySelector(".slides");
		Reveal.addEventListener("slidechanged", function (event) {
	    console.log(event)
			var galleryNode = event.previousSlide.querySelector('.gallery') || document.querySelector('.reveal > .gallery');
			if (galleryNode) {
				Gallery.stop(galleryNode, slidesNode);
			}

			galleryNode = event.currentSlide.querySelector('.gallery');
			if (galleryNode) {				
				Gallery.start(galleryNode, slidesNode);
			}

		});

		// during initial load
		if (Reveal.getCurrentSlide()) {
			var galleryNode = Reveal.getCurrentSlide().querySelector('.gallery');
			if (galleryNode) {
				Gallery.start(galleryNode, slidesNode);
			}
		}
	}
})();