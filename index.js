$(document).ready(() => {

    $("#don").hide();
    $("#dony").hide();
    $("#doni").hide();

    $("#searchmovie").click(()=>{

          getAllData(); 

    })// end get data 

     $("#searchmoviey").click(()=>{

          getAllDatay(); 

    })// end get data 

      $("#searchmoviei").click(()=>{

          getAllDatai(); 

    })// end get data 

  


}); // end of document.ready()

let getAllData = () => {

    let movietitle= $("#inputmovie").val();
   

    
     $.ajax({
        type: 'GET', // request type GET, POST, PUT
        dataType: 'json', // requesting datatype
        url: 'https://www.omdbapi.com/?i=tt3896198&apikey=cc0f49d', // URL of getting data
        success: (data) => { // in case of success response
            
            console.log(data)
        if (movietitle==data.Title){

                        $("#don").show();
               

                $("#movietitle").append(data.Title);
                $("#movietitle").css("color", "black");
               $("#year").append(data.Year);
               $("#rated").append(data.Rated);
               $("#released").append(data.Released);
                $("#runtime").append(data.Runtime);
               $("#genre").append(data.Genre);
               $("#writer").append(data.Writer);
               $("#director").append(data.Director);
               $("#plot").append(data.Plot);
               $("#plot").css("color", "black");
               $("#actors").append(data.Actors);
               $("#actors").css("color", "black");
               $("#lang").append(data.Language);
               $("#country").append(data.Country);
               $("#awards").append(data.Awards);
               
               $("#ratings").append(data.Ratings);
               $("#imdbrating").append(data.imdbRating);
               $("#imdbvotes").append(data.imdbVotes);
               $("#imdbid").append(data.imdbID);
                $("#imdbid").css("color", "black");
               $("#type").append(data.Type);
               $("#dvd").append(data.DVD);
               $("#boxoffice").append(data.BoxOffice);
               $("#production").append(data.Production);
               $("#website").append(data.Website);
               $("#response").append(data.Response);



               let rating= data.Ratings
              
              for (i in rating){

                $("#ratings").append(rating[i].Source);
                $("#ratings").append(rating[i].Values);
                
               }

               if (data.Poster==null){
                let posterurl=data.Poster
            let img= $("<img>").attr("src","imdb.jpg");
                  $("#content").append(img);

               }
            else{
               let posterurl=data.Poster
            let img= $("<img>").attr("src",posterurl);
               $("#content").append(img);
               $("#content").css("background-color", "green");}

             
            
               
              

                
            }

            else{
                    alert("no result found.")
            }

           
        },

        error: (data) => { // in case of error response

            alert("some error occured")

        },

         beforeSend: () => { // while request is processing.

            // you can use loader here.
            console.log("request is being made. please wait")

        },
        complete: () => {

            // what you want to do while request is completed
            console.log("data fetched success")

        },

        timeout:3000 // this is in milli seconds
    
    });



} // end of getAllData

let getAllDatay = () => {

    
    let movieyear= $("#inputyear").val();

    
     $.ajax({
        type: 'GET', // request type GET, POST, PUT
        dataType: 'json', // requesting datatype
        url: 'https://www.omdbapi.com/?i=tt3896198&apikey=cc0f49d', // URL of getting data
        success: (data) => { // in case of success response
            
            console.log(data)
        if (movieyear==data.Year){

                        $("#dony").show();
               

                $("#movietitley").append(data.Title);
                $("#movietitley").css("color", "black");
               $("#yeary").append(data.Year);
               $("#ratedy").append(data.Rated);
               $("#releasedy").append(data.Released);
                $("#runtimey").append(data.Runtime);
               $("#genrey").append(data.Genre);
               $("#writery").append(data.Writer);
               $("#directory").append(data.Director);
               $("#ploty").append(data.Plot);
               $("#ploty").css("color", "black");
               $("#actorsy").append(data.Actors);
               $("#actorsy").css("color", "black");
               $("#langy").append(data.Language);
               $("#countryy").append(data.Country);
               $("#awardsy").append(data.Awards);
              
               $("#ratingsy").append(data.Ratings);
               $("#imdbratingy").append(data.imdbRating);
               $("#imdbvotesy").append(data.imdbVotes);
               $("#imdbidy").append(data.imdbID);
                $("#imdbidy").css("color", "black");
               $("#typey").append(data.Type);
               $("#dvdy").append(data.DVD);
               $("#boxofficey").append(data.BoxOffice);
               $("#productiony").append(data.Production);
               $("#websitey").append(data.Website);
               $("#responsey").append(data.Response);



               let rating= data.Ratings
              
              for (i in rating){

                $("#ratingsy").append(rating[i].Source);
                $("#ratingsy").append(rating[i].Values);
                
               }

               if (data.Poster==null){
                let posterurl=data.Poster
            let img= $("<img>").attr("src","imdb.jpg");
                  $("#contenty").append(img);

               }
            else{
               let posterurl=data.Poster
            let img= $("<img>").attr("src",posterurl);
               $("#contenty").append(img);
                $("#contenty").css("background-color", "yellow");}

             
            
               
              

                
            }

            else{
                    alert("no result found.")
            }

           
        },

        error: (data) => { // in case of error response

            alert("some error occured")

        },

         beforeSend: () => { // while request is processing.

            // you can use loader here.
            console.log("request is being made. please wait")

        },
        complete: () => {

            // what you want to do while request is completed
            console.log("data fetched success")

        },

        timeout:3000 // this is in milli seconds
    
    });



} // end of getAllData

let getAllDatai = () => {

    let movieimdbid= $("#inputimdbid").val();

    
     $.ajax({
        type: 'GET', // request type GET, POST, PUT
        dataType: 'json', // requesting datatype
        url: 'https://www.omdbapi.com/?i=tt3896198&apikey=cc0f49d', // URL of getting data
        success: (data) => { // in case of success response
            
            console.log(data)
        if (movieimdbid==data.imdbID){

                        $("#doni").show();
               

                $("#movietitlei").append(data.Title);
                $("#movietitlei").css("color", "black");
               $("#yeari").append(data.Year);
               $("#ratedi").append(data.Rated);
               $("#releasedi").append(data.Released);
                $("#runtimei").append(data.Runtime);
               $("#genrei").append(data.Genre);
               $("#writeri").append(data.Writer);
               $("#directori").append(data.Director);
               $("#ploti").append(data.Plot);
               $("#ploti").css("color", "black");
               $("#actorsi").append(data.Actors);
               $("#actorsi").css("color", "black");
               $("#langi").append(data.Language);
               $("#countryi").append(data.Country);
               $("#awardsi").append(data.Awards);
               $("#ratingsi").append(data.Ratings);
               $("#imdbratingi").append(data.imdbRating);
               $("#imdbvotesii").append(data.imdbVotes);
               $("#imdbidi").append(data.imdbID);
               $("#imdbidi").css("color", "black");
               $("#typei").append(data.Type);
               $("#dvdi").append(data.DVD);
               $("#boxofficei").append(data.BoxOffice);
               $("#productioni").append(data.Production);
               $("#websitei").append(data.Website);
               $("#responsei").append(data.Response);



               let rating= data.Ratings
              
              for (i in rating){

                $("#ratingsi").append(rating[i].Source);
                $("#ratingsi").append(rating[i].Values);
                
               }

               if (data.Poster==null){
                let posterurl=data.Poster
            let img= $("<img>").attr("src","imdb.jpg");
                  $("#contenti").append(img);

               }
            else{
               let posterurl=data.Poster
            let img= $("<img>").attr("src",posterurl);
               $("#contenti").append(img);
               $("#contenti").css("background-color", "green");


                }

             
            
               
              

                
            }

            else{
                    alert("no result found.")
            }

           
        },

        error: (data) => { // in case of error response

            alert("some error occured")

        },

         beforeSend: () => { // while request is processing.

            // you can use loader here.
            console.log("request is being made. please wait")

        },
        complete: () => {

            // what you want to do while request is completed
            console.log("data fetched success")

        },

        timeout:3000 // this is in milli seconds
    
    });



} // end of getAllData

