const recipes = [
    {
        id: 1,
        name: "Omelette",
        ustensiles: [
            {
                id: 1,
                name: "Saladier"
            },
            {
                id: 2,
                name: "Poêle"
            }
        ],
        ingredients: [
            {
                id: 1,
                name: "Oeufs"
            },
            {
                id: 2,
                name: "Lardons"
            },
            {
                id: 3,
                name: "Sel"
            },
            {
                id: 4,
                name: "Poivre"
            }
        ],
        link: "https://www.niquetamère.fr"
    },
    {
        id: 2,
        name: "Oeuf au plat",
        ustensiles: [
            {
                id: 1,
                name: "Poêle"
            }
        ],
        ingredients: [
            {
                id: 1,
                name: "Oeufs"
            },
            {
                id: 2,
                name: "Huile"
            },
        ],
        link: "http://www.vousetesbeau.com"
    },
]

module.exports = recipes