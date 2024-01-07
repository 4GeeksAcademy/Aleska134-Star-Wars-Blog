const getState = ({ getStore, getActions, setStore }) => {
	return {
	  store: {
		people: [],
		vehicles: [],
		planets: [],
		favorites: [
			{
			name: "FIRST",
			background: "white",
			initial: "white"
		},
		{
			"name": "Luke Skywalker",
			"height": "172",
			"mass": "77",
			"hair_color": "blond",
			"skin_color": "fair",
			"eye_color": "blue",
			"birth_year": "19BBY",
			"gender": "male",
			"category" : "people"
		},

	],
	  },
	  actions: {
		loadData: () => {
		  const store = getStore();
		  fetch("https://swapi.dev/api/people/")
			.then((res) => res.json())
			.then((data) => setStore({ people: data.results }))
			.catch((err) => console.error(err));
  
		  fetch("https://swapi.dev/api/vehicles/")
			.then((res) => res.json())
			.then((data) => setStore({ vehicles: data.results }))
			.catch((err) => console.error(err));
  
		  fetch("https://swapi.dev/api/planets/")
			.then((res) => res.json())
			.then((data) => setStore({ planets: data.results }))
			.catch((err) => console.error(err));
		},
	  },
	};
  };
  
  export default getState;
  