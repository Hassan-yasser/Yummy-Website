/// <reference types="../jquery" />
// jQuery cod !!!!!!!!!!!!!!!!!!!!
let DomO = document.querySelector('.openAside')
let DomC = document.querySelector('.closeAside')
DomO.addEventListener('click',function(){
        $('.sideNav').css({'transform': 'translateX(0%)'})
                $('.showE1').animate({top:'0%'},400,function(){
                    $('.showE2').animate({top:'0%'},200,function(){
                        $('.showE3').animate({top:'0%'},200,function(){
                            $('.showE4').animate({top:'0%'},200,function(){
                                $('.showE5').animate({top:'0%'},200,function(){
                                    $('.showE6').animate({top:'0%'},200,function(){
            
                                    })
                                })
                            })
                        })
                    })
                })
            $('.openAside').hide(0)
            $('.closeAside').show(0)

});
DomC.addEventListener('click',function(){
    $('.showE1').animate({top:'100%'},700,function(){
        $('.showE2').animate({top:'100%'},1,function(){
            $('.showE3').animate({top:'100%'},1,function(){
                $('.showE4').animate({top:'100%'},1,function(){
                    $('.showE5').animate({top:'100%'},1,function(){
                        $('.showE6').animate({top:'100%'},1,function(){

                        })
                    })
                })
            })
        })
    })
        $('.sideNav').css('transform', 'translateX(-79%)');
        $('.openAside').show(0)
        $('.closeAside').hide(0)
})
// start cod api js !!!!!!!!!!!!!!!!!!!!!
 async function getRandomData() {
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
    $('.loadingData').fadeOut(100)
    response = await response.json()
    // console.log(response.meals);
    if (response != null ) {
          $('.parent_spinner').fadeOut(500)
          displayRandomData(response.meals)
    }
 }
 getRandomData()
function displayRandomData(term) {
    let cartoona = ''
    for (let i = 0 ; i < term.length ; i ++) {
         cartoona += `
                 <div class="col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-3 meal">
            <div class="item position-relative overflow-hidden rounded-3" onclick="getMealDetails(${term[i].idMeal})">
                 <img src="${term[i].strMealThumb}" class="w-100" alt="">
                 <div class="layer w-100 ps-2 h-100 bg-light position-absolute top-100  text-black d-flex  align-items-center">
                       <h1>${term[i].strMeal}</h1>
                 </div>
            </div>
        </div>
         
         `
    }
    document.querySelector('.meals').innerHTML = cartoona
}
async function getMealDetails(id) {
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    response = await response.json()
    console.log(response.meals);
    if (response != null ) {
          $('.parent_spinner').fadeOut(500)
          id = response.meals
          displayMealDetails(id)
    }
}
function displayMealDetails(term) {
    let cartoona = ' '
    for (let i = 0 ; i < term.length ; i ++) {
        cartoona +=`
                    <div class="col-sm-12 col-md-12 px-5 col-lg-4 ms">
                   <img src="${term[i].strMealThumb}" class="w-100" alt="">
                   <h1 class="text-light">burek</h1>
            </div>
            <div class="col-sm-12 col-md-12 col-lg-8 text-light px-5">
              <h1>Instructions</h1>
              <p>${term[i].strInstructions.split(" ").slice(0,100).join(" ")}</p>
              <h2>Area : ${term[i].strArea}</h2>
              <h2>Category  : ${term[i].strCategory}</h2>
              <span>Recipes  : </span>
              <span class="p-1 bg-info me-1 rounded-2 mb-1">${term[i].strIngredient1}</span><span class="p-1 bg-info rounded-2  me-1 mb-1">${term[i].strIngredient2}</span><span class="p-1 bg-info me-1 rounded-2 mb-1">${term[i].strIngredient3}</span><span class="p-1 rounded-2 bg-info me-1 mb-1">${term[i].strIngredient4}</span><span class="p-1 bg-info me-1 rounded-2 mb-1">${term[i].strIngredient5}</span><span class="p-1 bg-info me-1 rounded-2  mb-1">${term[i].strIngredient6}</span>
              <h1>Tags : <span class=" rounded-2 px-2 py-1 mt-2">${term[i].strTags == null ? 'Chicken' : term[i].strTags}</span></h1>
              <button class="bg-success rounded-2 border-0 text-light px-2 py-1"><a href="${term[i].strSource}">Source</a></button>
              <button class="bg-info rounded-2 border-0 text-light px-2 py-1"> <a href="${term[i].strYoutube}">Youtube</a></button>
            </div>
        `
    }
    document.querySelector('.meals').innerHTML = cartoona
    document.querySelector('.searchInputs').innerHTML = ''
}
// end random data 
// start search data 
const search = document.querySelector('.showE1')
const searchInputs = document.querySelector('.searchInputs')
search.addEventListener('click',()=> {
      console.log('wdawd');
      
    $('.parent_spinner').fadeIn(200,()=>{
        $('.parent_spinner').fadeOut(200,()=>{
            $('.searchInputs').css('display','flex')
            document.querySelector('.meals').innerHTML = ''
        })
    })



})
async function searchByFirstLetters(){
    const SearchByFirstLitter = document.getElementById('SearchByFirstLitter')
    console.log(SearchByFirstLitter.value);
    
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${SearchByFirstLitter.value}`)
    response = await response.json()
    console.log(response.meals);
    if (response != null ) {
          $('.parent_spinner').fadeIn(500,function(){
            $('.parent_spinner').fadeOut(1000,()=>{
                displayRandomData(response.meals) 
            })
          })
    }
 }
async function searchByName(){
    const searchByName = document.getElementById('SearchByname')
    console.log(searchByName.value);
    
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchByName.value}`)
    response = await response.json()
    console.log(response.meals);
    if (response != null ) {
          $('.parent_spinner').fadeIn(500,function(){
            $('.parent_spinner').fadeOut(1000,()=>{
                displayRandomData(response.meals) 
            })
          })
    }
 }
// end search Data 
// start cat Data 
const cat = document.querySelector('.showE2')
cat.addEventListener('click',()=> {
    document.querySelector('.meals').innerHTML = ''
    searchInputs.innerHTML = ''
    $('.parent_spinner').fadeIn(200,()=>{
        $('.parent_spinner').fadeOut(200,()=>{
            getCatData()
        })
    })
})
async function getCatData() {
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
    response = await response.json()
    // console.log(response.meals);
    if (response != null ) {
          $('.parent_spinner').fadeIn(500,function(){
            $('.parent_spinner').fadeOut(1000,()=>{
                displayCat (response.categories)
            })
          })
    }
}
function displayCat(term) {
    let cartoona = ''
    // console.log(term);
    
    for (let i = 0 ; i < term.length ; i ++) {
         cartoona += `
                 <div class="col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-3 meal">
            <div class="item position-relative overflow-hidden rounded-3" onclick="getMealsDetailsCat('${term[i].strCategory.toLowerCase()}')">
                 <img src="${term[i].strCategoryThumb}" class="w-100" alt="">
                 <div class="layer w-100 ps-2 h-100 bg-light position-absolute top-100  text-black text-center  align-items-center">
                       <h1 >${term[i].strCategory}</h1>
                       <p>${term[i].strCategoryDescription.split(" ").slice(0,20).join(" ")}</p>
                 </div>
            </div>
        </div>
         
         `

    }
    document.querySelector('.meals').innerHTML = cartoona
}
async function getMealsDetailsCat(catMeals) {
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${catMeals}`)
    response = await response.json()

    if (response != null ) {
          $('.parent_spinner').fadeIn(1000,function(){
            $('.parent_spinner').fadeOut(1000,()=>{
                displayRandomData(response.meals)
            })
          })
    }
}
// end of cat data 
// start of Area 
const Area = document.querySelector('.showE4')
Area.addEventListener('click',()=> {
    document.querySelector('.meals').innerHTML = ''
    $('.parent_spinner').fadeIn(200,()=>{
        $('.parent_spinner').fadeOut(200,()=>{
            getAreData()
        })
    })
})
async function getAreData() {
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
    response = await response.json()
    // console.log(response.meals);
    if (response != null ) {
          $('.parent_spinner').fadeIn(500,function(){
            $('.parent_spinner').fadeOut(1000,()=>{
                displayArea (response.meals)
            })
          })
    }
}
function displayArea (term) {
    console.log(term);
    
    let cartoona = ''
    // console.log(term);
    
    for (let i = 0 ; i < term.length ; i ++) {
         cartoona += `
                 <div class="col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-3 meal">
            <div class="item position-relative overflow-hidden rounded-3" onclick="getMealsArea('${term[i].strArea.toLowerCase()}')">

                 <div class="text-light text-center  ">
                       <i class="fa-solid fa-house-laptop  fa-4x"></i>
                       <h1 >${term[i].strArea}</h1>
                 </div>
            </div>
        </div>
         
         `

    }
    document.querySelector('.meals').innerHTML = cartoona
}
async function getMealsArea(term) {
    let response = await fetch (`https://www.themealdb.com/api/json/v1/1/filter.php?a=${term}`)
    response = await response.json()
    console.log(response);
    if (response != null ) {
        $('.parent_spinner').fadeIn(500,function(){
          $('.parent_spinner').fadeOut(1000,()=>{
            displayRandomData(response.meals)
          })
        })
  }
}
const ingredient = document.querySelector('.showE3')
ingredient.addEventListener('click',()=> {
    document.querySelector('.meals').innerHTML = ''
    $('.parent_spinner').fadeIn(200,()=>{
        $('.parent_spinner').fadeOut(200,()=>{
            getIData()
        })
    })
})
async function getIData() {
    let response = await fetch (`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
    response = await response.json()
    console.log(response);
    if (response != null ) {
        $('.parent_spinner').fadeIn(500,function(){
          $('.parent_spinner').fadeOut(1000,()=>{
            displayIData(response.meals.slice(0,20))
          })
        })
  }
}
function displayIData(term) {
    let cartoona = ''
    // console.log(term);
    
    for (let i = 0 ; i < term.length ; i ++) {
         cartoona += `
                 <div class="col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-3 meal">
            <div class="item position-relative overflow-hidden rounded-3" onclick="getMealsIng('${term[i].strIngredient}')">

                 <div class="text-light text-center  ">
                       <i class="fa-solid fa-drumstick-bite fa-4x"></i>
                       <h1 >${term[i].strIngredient}</h1>
                      <span class=" text-light ">${term[i].strDescription.split(' ').slice(0,20).join(' ')}</span>
                 </div>
            </div>
        </div>
         
         `

    }
    document.querySelector('.meals').innerHTML = cartoona
}
async function getMealsIng(params) {
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${params}`)
    response = await response.json()
    if (response != null ) {
        $('.parent_spinner').fadeIn(500,function(){
          $('.parent_spinner').fadeOut(1000,()=>{
            displayRandomData(response.meals)
          })
        })
  }
    
}
// end code api js !!!!!!!!!!!!!!!!!!!!!!
//Start code of Validition 
const showE5 = document.querySelector('.showE5')
showE5.addEventListener('click',()=>{
    $('.loadingData').fadeIn(1000)
})
let email = '';
let Name = '';
let phone = '';
let pass = '';
let age = '';
let repass = '';
let Submit = document.querySelector('.submitbtn');
const emailInput = document.getElementById('emailInput')
const nameInput = document.getElementById('nameInput')
const PhoneInput = document.getElementById('PhoneInput')
const PassInput = document.getElementById('PassInput')
const ageInput = document.getElementById('ageInput')
const RepassInput = document.getElementById('RepassInput')
function valid(element){
    if (element.id == 'emailInput') {
        if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(element.value) ==true) {
            $('.emailE').fadeOut(250)
            return email = true
        }
        else {
            $('.emailE').fadeIn(250)
        }
        
    }
    if (element.id == 'nameInput') {
        if (/^[a-zA-Z ]+$/.test(element.value) ==true) {
            $('.NameE').fadeOut(250)
            return Name =true
        }
        else {
            $('.NameE').fadeIn(250)
        }
        
    }
    if (element.id == 'PhoneInput') {
        if (/^01[0-9]{9}$/.test(element.value) ==true) {
            $('.PhoneE').fadeOut(250)
            return phone = true
        }
        else {
            $('.PhoneE').fadeIn(250)
        }
        
    }
    if (element.id == 'PassInput') {
        if (/^[A-Za-z0-9]{8,}$/.test(element.value) ==true) {
            $('.PassE').fadeOut(250)
            return pass = true
        }
        else {
            $('.PassE').fadeIn(250)
        }
        
    }
    return checkall()
}
function validAge(element) {
    if (element.value <= 15) {
        $('.ageE').fadeIn(250)
        return age = true
        
    }
    else {
        $('.ageE').fadeOut(250)
    }
    return checkall()
}
function validRepass (element) {
  
    const PassInput = document.querySelector('#PassInput')
    if (element.value == PassInput.value) {
        $('.RePassE').fadeOut(250)
        return  repass = true
    }
    else {
        $('.RePassE').fadeIn(250)
    }
    return checkall()
} 
function  checkall(){
    if (email && age  && Name  && pass  && repass  && phone  ) {
        Submit.classList.replace('bg-warning-subtle','validBTN')
        return true
    }
    else {
        Submit.classList.replace('validBTN','bg-warning-subtle')
    }
}
Submit.addEventListener('click',function() {
    if (checkall() == true) {
        emailInput.value = ''
        nameInput.value = ''
        PhoneInput.value = ''
        RepassInput.value = ''
        ageInput.value = ''
        PassInput.value = ''
        $('.loadingData').fadeOut(400)
        getRandomData()
        console.log('nice');
    }
})



