var database={
    "menu":{
        "dropdown":{
            "value":{
                "Bola Sepak":["#bolasepak"],
                "Raket Bulu Tangkis":["#raket"],
                "Bola Basket":["#bolabasket"],
                "toko online":["#tokoonline"]
            }
        },
        "link":{
            "value":{
                "home":["#1"],
                "bola sepak":["#2"],
                "bola basket":["#3"],
                "toko online":["#4"]
            }
        },
    },
    "feature":[
        ["fas fa-award fa-3x","Di Jamin Keasiliannya","Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum nesciunt, voluptates rem corrupti necessitatibus at sit sapiente optio error, atque fugiat cupiditate quos. Corrupti velit rem repellendus nihil minus placeat?"],
        ["fas fa-landmark fa-3x","Di Jamin Barang Asli","Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor illo alias amet ad quae temporibus officia laboriosam officiis ipsam doloribus vitae in nostrum enim corporis quasi aperiam, sint cupiditate eius!"],
        ["fas fa-lock fa-3x","Di Jamin Barang Asli","Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium quae quod vitae laboriosam nemo! Ducimus, placeat! Molestiae quo aperiam officiis id voluptatibus, illum iusto dolores pariatur natus a! Esse, exercitationem?"]
    ]
}

// ****************************** Dropdown Menu

var menu_dropdown_temp="";
var menu_dropdown_key=Object.keys(database.menu.dropdown.value);
for(x=0;x<menu_dropdown_key.length;x++){
    menu_dropdown_temp+=`<a class="dropdown-item" href="`+database.menu.dropdown.value[menu_dropdown_key[x]]+`">`+menu_dropdown_key[x]+`</a>`
}
$('#menu_dropdown').html(menu_dropdown_temp);

// ***************************** Link Menu

var menu_link_temp="";
var menu_link_key=Object.keys(database.menu.link.value);
for(x=0;x<menu_link_key.length;x++){
    menu_link_temp+=`<li id="link" class="nav-item">
    <a class="nav-link"href="`+database.menu.link.value[menu_link_key[x]]+`">`+menu_link_key[x]+
    
    `</a>
    </li>`;
}
$('#menu_link').append(menu_link_temp);

// ************************* Feature

var feature_temp="";

for(x=0;x<database.feature.length;x++){
    feature_temp+=`<div class="col-lg-4 col-sm-4">
    <i class="`+database.feature[x][0]+`" style="color: silver;"></i>
    <h3 class="h5 mt-3">`+database.feature[x][1]+`</h3>
    <p>`+database.feature[x][2]+`</p>
    </div>`;
}
$('#feature').html(feature_temp);

