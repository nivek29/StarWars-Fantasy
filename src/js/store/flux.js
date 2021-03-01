const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			planetas: [],
			personajes: [],
			details: null,
			favoritos: []
		},
		actions: {
			loadPlanetas() {
				fetch("https://www.swapi.tech/api/planets")
					.then(response => response.json())
					.then(response => setStore({ planetas: response.results }));
			},
			loadPersonajes() {
				fetch("https://www.swapi.tech/api/people")
					.then(response => response.json())
					.then(response => setStore({ personajes: response.results }));
			},
			loadDetails(id, selected) {
				if (selected === "planetas") {
					fetch("https://www.swapi.tech/api/planets/" + id)
						.then(response => response.json())
						.then(response => setStore({ details: response.result }));
				}
				if (selected === "personajes") {
					fetch("https://www.swapi.tech/api/people/" + id)
						.then(response => response.json())
						.then(response => setStore({ details: response.result }));
				}
				console.log(getStore().details);
			},
			addFavorite(item) {
				setStore({ favoritos: getStore().favoritos.concat(item) });
				console.log(getStore().favoritos);
			},
			removeFavorite(itemToDelete) {
				const arrayFilter = getStore().favoritos.filter(item => {
					return item.uid != itemToDelete.uid;
				});
				setStore({ favoritos: arrayFilter });
			}
		}
	};
};

export default getState;
