window.onload = function() {
particlesJS("particles", {
	particles: {
		number: {
			value: 200,
			density: {
				enable: true,
				value_area: 800
			}
		},
		color: {
			value: ["#BD10E0", "#B8E986", "#50E3C2", "#FFD300", "#E86363"]
		},
		shape: {
			type: "circle",
			stroke: {
				width: 0,
				color: ["#BD10E0", "#B8E986", "#50E3C2", "#FFD300", "#E86363"]
			},
			polygon: {
				nb_sides: 5
			},
			image: {
				src: "img/github.svg",
				width: 100,
				height: 100
			}
		},
		opacity: {
			value: 0.8,
			random: false,
			anim: {
				enable: false,
				speed: 1,
				opacity_min: 0.1,
				sync: false
			}
		},
		size: {
			value: 8.017060304327615,
			random: true,
			anim: {
				enable: true,
				speed: 40,
				size_min: 0.1,
				sync: false
			}
		},
		line_linked: {
			enable: true,
			distance: 150,
			color: "#ffffff",
			opacity: 0.4,
			width: 1
		},
		move: {
			enable: true,
			speed: 3,
			direction: "none",
			random: false,
			straight: false,
			out_mode: "bounce",
			bounce: false,
			attract: {
				enable: false,
				rotateX: 600,
				rotateY: 1200
			}
		}
	},
	interactivity: {
		detect_on: "canvas",
		events: {
			onhover: {
				enable: true,
				mode: "repulse"
				// mode: "bubble"
				// mode: "grab"
			},
			onclick: {
				enable: true,
				mode: "push"
			},
			resize: true
		},
		modes: {
			grab: {
				distance: 200,
				line_linked: {
					opacity: 1
				}
			},
			bubble: {
				distance: 200,
				size: 40,
				duration: 2,
				opacity: 8,
				speed: 3
			},
			repulse: {
				distance: 100,
				duration: 0.4
			},
			push: {
				particles_nb: 4
			},
			remove: {
				particles_nb: 2
			}
		}
	},
	retina_detect: true
});

function changeTextColor() {
	const textContainer = document.getElementById("text");
	const words = textContainer.innerText.split(" ");

	const coloredWords = words.map((word) => {
		const randomColor = getRandomColor();
		return `<span style="color: ${randomColor};">${word}</span>`;
	});

	textContainer.innerHTML = coloredWords.join(" ");
}

function getRandomColor() {
	const letters = "0123456789ABCDEF";
	let color = "#";
	for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

setInterval(changeTextColor, 500);

}