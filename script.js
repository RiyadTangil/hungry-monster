
const mealInput = document.getElementById('search-text');

//###################get search result of meal#########################
function getMeal() {
    let mealDetails = document.getElementById("meal-details");
    let mealDiv = document.getElementById("meal-div");
    const mealInputText = mealInput.value;
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${mealInputText}`)
        .then(res => res.json())
        .then(data => displayMeals(data))


    const displayMeals = meal => {
        if (meal.meals) {
            mealDetails.style.display="none"

            mealsDiv = document.getElementById('meal-div');
            meal.meals.forEach(mealList => {
                const mealDiv = document.createElement('div');
                mealDiv.className = "meal-container";
                const mealInfo = `
               <img onclick="mealDetails('${mealList.idMeal}')" src = "${mealList.strMealThumb}">
                <h3 onclick="mealDetails('${mealList.idMeal}')">${mealList.strMeal}</h3>`
                mealDiv.innerHTML = mealInfo;
                mealsDiv.appendChild(mealDiv);
            });
        }
        else {
           
            let html = `<h1>No meal found!</h1>`
            mealDetails.innerHTML = html;
            mealDetails.style.display = "block"
            mealDiv.style.display="none"


        }


    }
}

//################### get details info of meal######################
const mealDetails = id => {

    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    fetch(url)
        .then(res => res.json())
        .then(data => renderMealInfo(data.meals))
}

const renderMealInfo = meal => {
    const mealDetails = document.getElementById("meal-details");
    meal = meal[0];

    let html = `
    <button onclick="displayNone()">x</button>
        <h2>${meal.strMeal}</h2>
        
        <p>${meal.strCategory}</p>
        <div>
            <h3>Instructions:</h3>
            <p>${meal.strInstructions}</p>
        </div>
        <div>
            <img src = "${meal.strMealThumb}" alt = "">
        </div>
        <div>
            <a href = "${meal.strYoutube}" target = "_blank">Watch Video</a>
        </div>
    `;

    mealDetails.innerHTML = html;
    const mealInfoOpener = document.getElementById('meal-details');
    mealInfoOpener.style.display = "block"

}

//####################info remover########################

function displayNone() {
    document.getElementById("meal-details").style.display = "none";
}


