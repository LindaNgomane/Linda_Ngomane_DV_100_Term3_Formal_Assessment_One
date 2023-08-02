// When the document loads
$(document).ready(function(){

    console.log("Hello");
    

    // -----------------------------------------
    // Home Page

    // When the document loads, animate the hero image upwards
    $(".hero-image").animate({top: '-=100px'});

    // -----------------------------------------
    // Browse Page

    // Hide all description text from the plant cards

 $("#descriptionText").hide();


    console.log(ArrayPlant)
    loadPlants()

  }); 

  // When the card is clicked
 
$("#plantsContainer").on("click", ".card", function () {

      // Toggle the price & description text
      $(this).find("#descriptionText").toggle()
      $(this).find("#priceText").toggle()
   
       // Resize the image to fit the additional content
       $(this).find(".card-img-top").toggleClass("small")
   
})

  // -----------------------------------------------
  // Plant Array

const ArrayPlant = [
  {
    name: "Ficus Tree",
    price: 350,
    description: "Graceful and lush, this charming indoor plant boasts glossy, emerald-green leaves that effortlessly brighten any space. Easy to care for and standing at an ideal height, our Ficus Tree is the perfect addition to elevate your interior décor.",
    image: "plant1.png"
  },

  {
    name: "White Sprite Succulent",
    price: 200,
    description: "'White Sprite' is a multi-branching succulent shrub with flattened, finger-like leaves, which are powdery white-green, edged in red and eventually flushed with dull burgundy. Flower stalks carry drooping, bell-shaped flowers in salmon-orange. Cotyledons require a free-draining gritty mix and plenty of sun.",
    image: "plant2 big (1).png"
  },

  {
    name: "Snake Plant",
    price: 400,
    description: "It is a stemless evergreen perennial that, with proper care, will last for many years. In its native habitat, plant foliage may rise to as much as 4' tall, but is often smaller (to 2' tall) on indoor plants. Erect, fleshy, sharply-pointed, sword-shaped leaves are deep green with light gray-green horizontal stripes.",
    image: "snake plant.png"
  },

  {
    name: "Parlour Palm",
    price: 350,
    description: "This rainforest native is a single-trunk palm with a compact habit and handsome arching green pinnate leaves comprised of narrow leaflets. It may bear clusters of yellow flowers in spring if it gets enough light. This palm typically grows to about 4 feet tall indoors but can reach 8 in ideal conditions.",
    image: "plant2 big (3).png"
  },

  {
    name: "Japanese Maple",
    price: 1200,
    description: "Leaves of the species form are oppositely arranged, hand-shaped, 2 to 5 inches long and have 5 or 7 lobes. Leaves emerge in early spring. Summer color is green and autumn color varies from orange to yellow to red to purple. The small, reddish flowers are borne in stalked, umbrella-shaped clusters.",
    image: "plant2 big (4).png"
  }
]


  // load all plants

  function loadPlants(){


    for (let i = 0; i < ArrayPlant.length; i++) {
      const plant = ArrayPlant[i];
      
      console.log(plant)


      //  1 select the plants and add the current array to it
      $("#plantsContainer").append($("#plantCardTemplate").html())

     

      //  2. variable that contains recently added plants

      let currentChild =   $("#plantsContainer").children().eq(i+1)

      // 3 set content for current card from the plants array

    $(currentChild).find("#nameText").text(plant.name)
    $(currentChild).find("#priceText").text("R " + plant.price + ".00")
    $(currentChild).find("#descriptionText").text(plant.description)
    $(currentChild).find(".card-img-top").attr("src", "assets/" + plant.image)

    // 4 hide the description from current card


    $(currentChild).find("#descriptionText").hide()

    }

    // -------------------------------------------------------------------------------


    
 
  }

  
    // Wishlist page

  $("#remove-row1").on("click", "#Remove-button1", function() {
    $("#remove-row1").empty()
  })

  $("#remove-row2").on("click", "#Remove-button2", function() {
    $("#remove-row2").empty()
  })

  $("#remove-row3").on("click", "#Remove-button3", function() {
    $("#remove-row3").empty()
  })

  $("#remove-row4").on("click", "#Remove-button4", function() {
    $("#remove-row4").empty()
  })

