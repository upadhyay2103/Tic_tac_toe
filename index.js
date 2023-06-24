var count=0;
var mat=[];
var xcount=0;
var ocount=0

for(var i=0;i<3;i++)
{
    mat[i]=[]
    for(var j=0;j<3;j++)
    {
        mat[i][j]=-1;
    }
}


$(".cont").click(function()
{
   var char=$(this).attr("id");
   $("#"+char).addClass("clicked");
   setTimeout(function()
   {
    $("#"+char).removeClass("clicked");
   },100);
   if(count%2===0)
   {
       $("#"+char).html("<img src='images/close.png' height='150px' width='150px'>");
       count++;
       xcount++;
       check_case(char,1);
   }
   else
   {
      $("#"+char).html("<img src='images/oval.png' height='150px' width='150px'>");
      count++;
      ocount++;
      check_case(char,0);
   }

   if(xcount>=3 || ocount>=3)
   {
     check_answer();
   }
});

function check_case(char,ind)
{
    switch(char)
    {
        case "one":
            if(mat[0][0]==-1)
            {
               mat[0][0]=ind;
            }
            else{
                alert("you can't change existing part")
            }
            break;

        case "two":
            if(mat[0][1]==-1)
            {
               mat[0][1]=ind;
            }
            else{
                alert("you can't change existing part")
            }
            break;

        case "three":
            if(mat[0][2]==-1)
            {
               mat[0][2]=ind;
            }
            else{
                alert("you can't change existing part")
            }
            break;

        case "four":
            if(mat[1][0]==-1)
            {
               mat[1][0]=ind;
            }
            else{
                alert("you can't change existing part")
            }
            break;

        case "five":
            if(mat[1][1]==-1)
            {
               mat[1][1]=ind;
            }
            else{
                alert("you can't change existing part")
            }
            break;

        case "six":
            if(mat[1][2]==-1)
            {
               mat[1][2]=ind;
            }
            else{
                alert("you can't change existing part")
            }
            break;

        case "seven":
            if(mat[2][0]==-1)
            {
               mat[2][0]=ind;
            }
            else{
                alert("you can't change existing part")
            }
            break;

        case "eight":
            if(mat[2][1]==-1)
            {
               mat[2][1]=ind;
            }
            else{
                alert("you can't change existing part")
            }
            break;

        case "nine":
            if(mat[2][2]==-1)
            {
               mat[2][2]=ind;
            }
            else{
                alert("you can't change existing part")
            }
            break;
    }
}

function check_answer()
{
    if(mat[0][0]==1 && mat[1][1]==1 && mat[2][2]==1)
    {
        var audio=new Audio("sounds/win.mp3");
        audio.play();
        $(".heading").text("Player X won! , press any key to restart");
    }
    else if(mat[0][0]==0 && mat[1][1]==0 && mat[2][2]==0)
    {
        var audio=new Audio("sounds/win.mp3");
        audio.play();
        $(".heading").text("Player O won! , press any key to restart");
    }

    if(mat[0][2]==1 && mat[1][1]==1 && mat[2][0]==1)
    {
        var audio=new Audio("sounds/win.mp3");
        audio.play();
        $(".heading").text("player X won! , press any key to restart");
    }
    else if(mat[0][2]==0 && mat[1][1]==0 && mat[2][0]==0)
    {
        var audio=new Audio("sounds/win.mp3");
        audio.play();
        $(".heading").text("Player O won! , press any key to restart");
    }

    for(var i=0;i<3;i++)
    {
        if(mat[i][0]==1 && mat[i][1]==1 && mat[i][2]==1)
        {
            var audio=new Audio("sounds/win.mp3");
            audio.play();
            $(".heading").text("Player X won! , press any key to restart");
        }
        else if(mat[i][0]==0 && mat[i][1]==0 && mat[i][2]==0)
        {
            var audio=new Audio("sounds/win.mp3");
            audio.play();
            $(".heading").text("Player O won! , press any key to restart");
        }
    }

    for(var i=0;i<3;i++)
    {
        if(mat[0][i]==1 && mat[1][i]==1 && mat[2][i]==1)
        {
            var audio=new Audio("sounds/win.mp3");
            audio.play();
            $(".heading").text("Player X won! , press any key to restart");
        }
        else if(mat[0][i]==0 && mat[1][i]==0 && mat[2][i]==0)
        {
            var audio=new Audio("sounds/win.mp3");
            audio.play();
            $(".heading").text("Player O won! , press any key to restart");
        }
    }

    $(document).keydown(function()
    {
       location.reload();
    });
    return;
} 