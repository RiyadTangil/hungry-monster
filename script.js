//##############getting HTML element #######################
const mealInput = document.getElementById('display-text');

function getMeal(){
    const mealInputText = mealInput.value;
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${mealInputText}`)
        .then(res => res.json())
        .then(data => displayMeal(data))
        
       

        const displayMeal = meal =>{
             mealsDiv = document.getElementById('meal-div');
            meal.meals.forEach(mealList => { 
                console.log(mealList);
                
                const mealDiv= document.createElement('div');
                mealDiv.className = "mealClass";
                 
                const mealInfo = `
               <img onclick="mealDetails('${mealList.strMeal}')" src = "${mealList.strMealThumb}">
                <h3>${mealList.strMeal}</h3>`
                mealDiv.innerHTML = mealInfo;
                mealsDiv.appendChild(mealDiv);

               
                
            });
            
        }
        
        
}
const  mealDetails =name =>{
     const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772`
     fetch(url)
     .then(res => res.json())
     .then(data => renderMealInfo(data.meals))
}

const renderMealInfo = meal =>{
const mealInfo= document.getElementById("meal-details");
console.log(meal);
    meal = meal[0];
   
    let html = `
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

    mealInfo.innerHTML= html;
}


