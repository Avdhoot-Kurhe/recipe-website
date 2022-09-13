
let getData=async(url)=>{
        let res=await fetch(url);
        let data= await res.json()
        console.log(data)
        return data
};

// idMeal: "52795"
// strArea: "Indian"
// strCategory: "Chicken"
// strCreativeCommonsConfirmed: null
// strDrinkAlternate: null
// strImageSource: null
// strIngredient1: "Chicken"
// strIngredient2: "Onion"
// strIngredient3: "Tomatoes"
// strIngredient4: "Garlic"
// strIngredient5: "Ginger paste"
// strIngredient6: "Vegetable oil"
// strIngredient7: "Cumin seeds"
// strIngredient8: "Coriander seeds"
// strIngredient9: "Turmeric powder"
// strIngredient10: "Chilli powder"
// strIngredient11: "Green chilli"
// strIngredient12: "Yogurt"
// strIngredient13: "Cream"
// strIngredient14: "fenugreek"
// strIngredient15: "Garam masala"
// strIngredient16: "Salt"
// strIngredient17: ""
// strIngredient18: ""
// strIngredient19: ""
// strIngredient20: ""
// strInstructions: "Take a large pot or wok, big enough to cook all the chicken, and heat the oil in it. Once the oil is hot, add sliced onion and fry them until deep golden brown. Then take them out on a plate and set aside.\r\nTo the same pot, add the chopped garlic and sauté for a minute. Then add the chopped tomatoes and cook until tomatoes turn soft. This would take about 5 minutes.\r\nThen return the fried onion to the pot and stir. Add ginger paste and sauté well.\r\nNow add the cumin seeds, half of the coriander seeds and chopped green chillies. Give them a quick stir.\r\nNext goes in the spices – turmeric powder and red chilli powder. Sauté the spices well for couple of minutes.\r\nAdd the chicken pieces to the wok, season it with salt to taste and cook the chicken covered on medium-low heat until the chicken is almost cooked through. This would take about 15 minutes. Slowly sautéing the chicken will enhance the flavor, so do not expedite this step by putting it on high heat.\r\nWhen the oil separates from the spices, add the beaten yogurt keeping the heat on lowest so that the yogurt doesn’t split. Sprinkle the remaining coriander seeds and add half of the dried fenugreek leaves. Mix well.\r\nFinally add the cream and give a final mix to combine everything well.\r\nSprinkle the remaining kasuri methi and garam masala and serve the chicken handi hot with naan or rotis. Enjoy!"
// strMeal: "Chicken Handi"
// strMealThumb: "https://www.themealdb.com/images/media/meals/wyxwsp1486979827.jpg"
// strMeasure1: "1.2 kg"
// strMeasure2: "5 thinly sliced"
// strMeasure3: "2 finely chopped"
// strMeasure4: "8 cloves chopped"
// strMeasure5: "1 tbsp"
// strMeasure6: "¼ cup"
// strMeasure7: "2 tsp"
// strMeasure8: "3 tsp"
// strMeasure9: "1 tsp"
// strMeasure10: "1 tsp"
// strMeasure11: "2"
// strMeasure12: "1 cup"
// strMeasure13: "¾ cup"
// strMeasure14: "3 tsp Dried"
// strMeasure15: "1 tsp"
// strMeasure16: "To taste"
// strMeasure17: ""
// strMeasure18: ""
// strMeasure19: ""
// strMeasure20: ""
// strSource: ""
// strTags: null
// strYoutube: "https://www.youtube.com/watch?v=IO0issT0Rmc"


let append=(data, container) => {
    data.forEach((el) => {    
        let div=document.createElement("div")
    
        let image=document.createElement("img")
        image.src=el.strMealThumb
    
        let title=document.createElement("h2")
        title.innerText=el.strMeal

        let ind=document.createElement("h4")
        ind.innerText="Basic Ingredient: "

        let p1=document.createElement("p")
        p1.innerText=el.strIngredient1+"  - "+el.strMeasure1
        
        let p2=document.createElement("p")
        p2.innerText=el.strIngredient2+"  - "+el.strMeasure2

        let p3=document.createElement("p")
        p3.innerText=el.strIngredient3+"  - "+el.strMeasure3

        let p4=document.createElement("p")
        p4.innerText=el.strIngredient4+"  - "+el.strMeasure4

        let p5=document.createElement("p")
        p5.innerText=el.strIngredient5+"  - "+el.strMeasure5

        let p6=document.createElement("p")
        p6.innerText=el.strIngredient6+"  - "+el.strMeasure6

        let p7=document.createElement("p")
        p7.innerText=el.strIngredient7+"  - "+el.strMeasure7

        let p8=document.createElement("p")
        p8.innerText=el.strIngredient8+"  - "+el.strMeasure8
        
        let p9=document.createElement("p")
        p9.innerText=el.strIngredient9+"  - "+el.strMeasure9

        let p10=document.createElement("p")
        p10.innerText=el.strIngredient10+"  - "+el.strMeasure10

        let p11=document.createElement("p")
        p11.innerText=el.strIngredient11+"  - "+el.strMeasure11

        let p12=document.createElement("p")
        p12.innerText=el.strIngredient12+"  - "+el.strMeasure12

        let p13=document.createElement("p")
        p13.innerText=el.strIngredient13+"  - "+el.strMeasure13

        let p14=document.createElement("p")
        p14.innerText=el.strIngredient14+"  - "+el.strMeasure14


        let p15=document.createElement("p")
        p15.innerText=el.strIngredient15+"  - "+el.strMeasure15

        let p16=document.createElement("p")
        p16.innerText=el.strIngredient16+"  - "+el.strMeasure16

        let inst=document.createElement("h4")
        inst.innerHTML="Instructions"

        let p17=document.createElement("p")
        p17.innerText=el.strInstructions  
        
        let p18=document.createElement("a");
        p18.innerHTML="Youtube Video"
        p18.href=el.strYoutube

        div.append(title,image,ind,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,inst,p17,p18)
        container.append(div)
    });
    }




export{getData,append};