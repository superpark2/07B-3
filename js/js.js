        var idx = 0;
        setInterval(function () {
          $('.slidelist>img')
            .eq(idx)
            .animate({ top: '-300px' }, 400)
            .animate({ top: '300px' }, 0);
          idx == 2 ? (idx = 0) : idx++;
          $('.slidelist>img').eq(idx).animate({ top: 0 }, 400);
        }, 1800);


        $(document).ready(function(){
          $(".menubox ul").mouseover(function(){
            $(".menubox ul li ul li").show();
          });
          $(".menubox ul").mouseleave(function(){
            $(".menubox ul li ul li").hide();
          })
        })

        $(document).ready(function(){
          $(".menubox ul li ul li").hide();
        })

        const modal = document.querySelector('.modal');
        const btnOpenModal=document.querySelector('.modalopen');

        btnOpenModal.addEventListener("click", (event) => {
        event.stopPropagation();
            modal.style.display="flex";
        });
        
        $(document).on('click',function(){
        $('.modal').hide();
        })

        $(document).ready(function(){
          $(".gallbox img").mouseover(function(){
            $(this).css("opacity","0.5");
          });
          $(".gallbox img").mouseleave(function(){
            $(this).css("opacity","1")
          })
        })

        $(document).ready(function(){
          $("table tr").mouseover(function(){
            $(this).css("background-color","rgba(0,0,0,0.3)");
          });
          $("table tr").mouseleave(function(){
            $(this).css("background-color","rgb(255,255,255)");
          })
        })

        $(document).ready(function(){
          $(".menubox ul li ul li").mouseover(function(){
            $(this).addClass("selected");
          });
          $(".menubox ul li ul li").mouseleave(function(){
            $(this).removeClass("selected");
          })
        })