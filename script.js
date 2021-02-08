
const mealInput = document.getElementById('search-text');
//###################get search result of meal#########################
function getMeal() {
    const mealInputText = mealInput.value;
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${mealInputText}`)
        .then(res => res.json())
        .then(data => displayMeals(data))

    const displayMeals = meal => {

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
    console.log(meal);
    meal = meal[0];

    let html = `
    <button onclick="displayNone()">x</button>
        <h2 class = "recipe-title">${meal.strMeal}</h2>
        
        <p class = "recipe-category">${meal.strCategory}</p>
        <div class = "recipe-instruct">
            <h3>Instructions:</h3>
            <p>${meal.strInstructions}</p>
        </div>
        <div class = "recipe-meal-img">
            <img src = "${meal.strMealThumb}" alt = "">
        </div>
        <div class = "recipe-link">
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


