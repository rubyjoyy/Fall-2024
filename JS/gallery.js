// A $( document ).ready() block.
$( document ).ready(function() {
    //console.log( "ready!" );

    $("#galleryIMED1316").nanogallery2({
     
        thumbnailHeight:  "auto",
        thumbnailWidth:   "450",
        thumbnailBoarderVertical: "0" ,
        thumbnailBoarderHorizontal: "0",
        thumbnailLabel: { 
            position:"overImageOnBottom" ,
            display: false
        },
thumbnailHoverEffect2: "imageScaleIn80|imageSepiaOff|LabelApper75",
thumbnailGutterWidth: 20,
thumbnailGutterHeight: 20,
thumbnailAlignment: "center",
thumbnailOpenImage: true



      });



});