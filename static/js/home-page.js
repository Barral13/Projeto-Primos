

function topCursesLoad() {

    let topCursesResponse

    fetch('https://apisistema3primos.leonardoleonar6.repl.co/top_curses/5')

        .then(response => response.json())

        .then(data => {
            topCursesResponse = data;
            loadTopCurses(topCursesResponse);
        })

        .catch(error => console.error(error));
};



function loadTopCurses(topCursesResponse){
    
    var TagTopCurses = ""

    
    for (var objeto in topCursesResponse){

        

        topCursesResponse.hasOwnProperty(objeto);{

            TagTopCurses += '<div class="box-videos" >'
            TagTopCurses += '<iframe width="100%" height="150" src="'+topCursesResponse[objeto]['link_video']+'" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
            TagTopCurses += '<h4>'+topCursesResponse[objeto]['title']+'</h4>'
            TagTopCurses += '<div class="box-curse-descritions"><p class = "curse-descritions">'+topCursesResponse[objeto]['descrition']+'</p></div>'
            TagTopCurses += '</div>';
            var containerTagTopCurses = document.getElementById("top-curses");
            containerTagTopCurses.innerHTML = TagTopCurses

        }
    }
}


document.addEventListener('DOMContentLoaded', topCursesLoad)