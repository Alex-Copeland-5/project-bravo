document.addEventListener("DOMContentLoaded", () => {
    console.log("document succesfully loaded, baby");

    document.getElementById('draggable-x');

    $('.drag').draggable({ snap: "#cell",
        revert: "invalid"

    });


    //class of each of your grids...
    $( ".box" ).droppable({
        drop: function( event, ui ) {
        //Logs what id the dropped element is in.
        console.log($(this).attr("id"));  

        //check function()-
        //programitally add aa new X/O in the box. 


        }
      });
    });


    //function checkWin(){ ... if X is in 1-2-3 , 
    //easy version ... only way to win. is row 1. }

    //take turns? ADV. 