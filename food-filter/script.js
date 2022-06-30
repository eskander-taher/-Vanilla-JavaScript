const list = document.getElementById('list')
const select = document.getElementById('select');


const foods = [
    {
        catogry: 'eggs',
        name: 'Eggs Beauregard',
        photo: `https://res.cloudinary.com/sagacity/image/upload/c_crop,h_764,w_1144,x_296,y_808/c_limit,dpr_auto,f_auto,fl_lossy,q_80,w_1200/untitled-94_qcgvth.jpg`
    },
    {
        catogry: 'eggs',
        name: 'Eggs Benedict',
        photo: `https://www.simplyrecipes.com/thmb/sbJgr1qI929xM6KZlx_i2Xv4BzI=/1600x1124/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2010__04__eggs-benedict-horiz-a-1600-6f8850c8046b412b940fb1d657a5ba9a.jpg`
    },
    {
        catogry: 'meat',
        name: 'Alambre',
        photo: `https://cdn.britannica.com/42/182642-050-DE746024/Alambre.jpg`
    },
    {
        catogry: 'meat',
        name: 'Bakso',
        photo: `https://factsofindonesia.com/wp-content/uploads/2018/02/bakso-237x300.jpg`
    },
    {
        catogry: 'chicken',
        name: 'Murg Malaiwala',
        photo: `https://c.ndtvimg.com/2020-01/sqo94ev8_chicken_625x300_21_January_20.jpg`
    },
    {
        catogry: 'chicken',
        name: 'Chicken Chettinad',
        photo: `https://www.indianhealthyrecipes.com/wp-content/uploads/2013/01/chicken-chettinad-recipe.jpg`
    }
]

foods.forEach(food => {
    let item = `<div class="item"><h2>${food.name}</h2><img src="${food.photo}" alt=""></div>`
    list.innerHTML += item
})

select.addEventListener('change', () => {
    list.innerHTML = ''

    if (select.value == 'all') {
        foods.forEach(food => {
            let item = `<div class="item"><h2>${food.name}</h2><img src="${food.photo}" alt=""></div>`
            list.innerHTML += item
        })
    }

    const newList = foods.filter(food => {
        return food.catogry == select.value
    })

    newList.forEach(food => {
        let item = `<div class="item"><h2>${food.name}</h2><img src="${food.photo}" alt=""></div>`
        list.innerHTML += item
    })

})