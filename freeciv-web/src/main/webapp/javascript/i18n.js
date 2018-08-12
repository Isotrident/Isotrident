/**********************************************************************
    Freeciv-web - the web version of Freeciv. http://play.freeciv.org/
    Copyright (C) 2009-2018  The Freeciv-web project

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.

***********************************************************************/

var lang = "en";  // valid values are:  'en', 'cn'

var is_i18n_init = false;

var freeciv_strings = {
en: {
  translation: {
  "start_game": "Start Game",
  "customize_game" : "Customize game",
  "player_name" : "Player name",
  "turn_done" : "Turn Done",
  "messages" : "Messages",
  "world_map" : "World Map",
  "units" : "Units",
  "researching" : "Researching",

  }
},

cn: {
  translation: {
  "start_game": dec("&#x5F00;&#x59CB;&#x6E38;&#x620F;"),
  "customize_game" : dec("&#x5B9A;&#x5236;"),
  "welcome_title" : dec("&#x6B22;&#x8FCE;&#x6765;&#x5230;&#x6587;&#x660E;"),
  "welcome_message" : dec("&#x6B22;&#x8FCE;&#x6765;&#x5230;&#x6587;&#x660E;&#x3002; &#x8F93;&#x5165;&#x4F60;&#x7684;&#x540D;&#x5B57;&#x3002;"),
  "player_name" : dec("&#x540D;&#x79F0;"),
  "load_game" : dec("&#x52A0;&#x8F7D;&#x6E38;&#x620F;"),
  "pick_nation" : dec("&#x9009;&#x62E9;&#x56FD;&#x5BB6;"),
  "welcome_text" : dec("&#x6B22;&#x8FCE;&#x6765;&#x5230;&#x6587;&#x660E;"),
  "map" : dec("&#x5730;&#x56FE;"),
  "government" : dec("&#x653F;&#x5E9C;"),
  "research" : dec("&#x7814;&#x7A76;"),
  "nations" : dec("&#x56FD;&#x5BB6;"),
  "cities" : dec("&#x57CE;&#x5E02;"),
  "options" : dec("&#x8BBE;&#x7F6E;"),
  "help" : dec("&#x5E2E;&#x52A9;"),
  "turn_done" : dec("&#x5B8C;&#x6210;&#x4E86;"),
  "messages" : dec("&#x6D88;&#x606F;"),
  "world_map" : dec("&#x4E16;&#x754C;&#x5730;&#x56FE;"),
  "units" : dec("&#x5355;&#x4F4D;"),
  "year" : dec("&#x5E74;"),
  "Alphabet":dec("&#x5B57;&#x6BCD;"),
  "Ceremonial Burial":dec("&#x846C;&#x793C;"),
  "Pottery":dec("&#x9676;&#x5668;"),
  "Masonry":dec("&#x77F3;&#x5DE5;"),
  "Horseback Riding":dec("&#x9A91;&#x672F;"),
  "Bronze Working":dec("&#x9752;&#x94DC;"),
  "Warrior Code":dec("&#x6218;&#x58EB;&#x4EE3;&#x7801;"),
  "Writing":dec("&#x5199;&#x4F5C;"),
  "Code of Laws":dec("&#x6CD5;&#x5F8B;"),
  "Mysticism":dec("&#x795E;&#x79D8;&#x4E3B;&#x4E49;"),
  "Mathematics":dec("&#x6570;&#x5B66;"),
  "Map Making":dec("&#x5730;&#x56FE;"),
  "Polytheism":dec("&#x591A;&#x795E;&#x6559;"),
  "The Wheel":dec("&#x8F6E;"),
  "Currency":dec("&#x8D27;&#x5E01;"),
  "Iron Working":dec("&#x94C1;"),
  "Literacy":dec("&#x8BFB;&#x5199;&#x80FD;&#x529B;"),
  "Trade":dec("&#x8D38;&#x6613;"),
  "Monarchy":dec("&#x5E1D;&#x5236;"),
  "Astronomy":dec("&#x5929;&#x6587;&#x5B66;"),
  "Seafaring":dec("&#x822A;&#x6D77;&#x7684;"),
  "Construction":dec("&#x65BD;&#x5DE5;"),
  "The Republic":dec("&#x5171;&#x548C;&#x56FD;"),
  "Philosophy":dec("&#x54F2;&#x5B66;"),
  "Navigation":dec("&#x5BFC;&#x822A;"),
  "Engineering":dec("&#x5DE5;&#x7A0B;"),
  "Feudalism":dec("&#x5C01;&#x5EFA;"),
  "Bridge Building":dec("&#x6865;"),
  "Banking":dec("&#x94F6;&#x884C;&#x4E1A;"),
  "Medicine":dec("&#x533B;&#x5B66;"),
  "University":dec("&#x5927;&#x5B66;"),
  "Physics":dec("&#x7269;&#x7406;"),
  "Monotheism":dec("&#x4E00;&#x795E;&#x6559;"),
  "Invention":dec("&#x53D1;&#x660E;"),
  "Chivalry":dec("&#x9A91;&#x58EB;&#x6C14;&#x6982;"),
  "Economics":dec("&#x7ECF;&#x6D4E;&#x5B66;"),
  "Chemistry":dec("&#x5316;&#x5B66;"),
  "Democracy":dec("&#x6C11;&#x4E3B;"),
  "Theory of Gravity":dec("&#x91CD;&#x529B;"),
  "Steam Engine":dec("&#x84B8;&#x6C7D;&#x673A;"),
  "Sanitation":dec("&#x536B;&#x751F;"),
  "Magnetism":dec("&#x78C1;&#x6027;"),
  "Theology":dec("&#x795E;&#x5B66;"),
  "Gunpowder":dec("&#x706B;&#x836F;"),
  "Atomic Theory":dec("&#x539F;&#x5B50;&#x7406;&#x8BBA;"),
  "Explosives":dec("&#x70B8;&#x836F;"),
  "Railroad":dec("&#x94C1;&#x8DEF;"),
  "Metallurgy":dec("&#x51B6;&#x91D1;"),
  "Leadership":dec("&#x9886;&#x5BFC;"),
  "Industrialization":dec("&#x5DE5;&#x4E1A;&#x5316;"),
  "Electricity":dec("&#x7535;&#x529B;"),
  "Conscription":dec("&#x5F81;&#x5175;"),
  "The Corporation":dec("&#x516C;&#x53F8;"),
  "Communism":dec("&#x5171;&#x4EA7;&#x4E3B;&#x4E49;"),
  "Steel":dec("&#x94A2;"),
  "Refrigeration":dec("&#x51B7;&#x85CF;"),
  "Tactics":dec("&#x7B56;&#x7565;"),
  "Genetic Engineering":dec("&#x57FA;&#x56E0;&#x5DE5;&#x7A0B;"),
  "Refining":dec("&#x7CBE;&#x5236;"),
  "Espionage":dec("&#x95F4;&#x8C0D;"),
  "Electronics":dec("&#x7535;&#x5B50;&#x4EA7;&#x54C1;"),
  "Guerilla Warfare":dec("&#x6E38;&#x51FB;&#x6218;"),
  "Machine Tools":dec("&#x673A;&#x68B0;&#x5DE5;&#x5177;"),
  "Amphibious Warfare":dec("&#x4E24;&#x6816;&#x6218;&#x4E89;"),
  "Combustion":dec("&#x71C3;&#x70E7;"),
  "Miniaturization":dec("&#x5FAE;&#x578B;&#x5316;"),
  "Automobile":dec("&#x6C7D;&#x8F66;"),
  "Flight":dec("&#x98DE;&#x884C;"),
  "Mass Production":dec("&#x5927;&#x91CF;&#x751F;&#x4EA7;"),
  "Mobile Warfare":dec("&#x79FB;&#x52A8;&#x6218;&#x4E89;"),
  "Radio":dec("&#x65E0;&#x7EBF;&#x7535;"),
  "Recycling":dec("&#x56DE;&#x6536;"),
  "Nuclear Fission":dec("&#x6838;&#x88C2;&#x53D8;"),
  "Labor Union":dec("&#x5DE5;&#x4F1A;"),
  "Computers":dec("&#x7535;&#x8111;"),
  "Advanced Flight":dec("&#x9AD8;&#x7EA7;&#x98DE;&#x884C;"),
  "Nuclear Power":dec("&#x6838;&#x7535;"),
  "Robotics":dec("&#x673A;&#x5668;&#x4EBA;"),
  "Rocketry":dec("&#x706B;&#x7BAD;"),
  "Combined Arms":dec("&#x8054;&#x5408;&#x6B66;&#x5668;"),
  "Space Flight":dec("&#x822A;&#x5929;"),
  "Laser":dec("&#x6FC0;&#x5149;"),
  "Plastics":dec("&#x5851;&#x6599;"),
  "Environmentalism":dec("&#x73AF;&#x5883;&#x4FDD;&#x62A4;&#x8BBA;"),
  "Superconductors":dec("&#x8D85;&#x5BFC;&#x4F53;"),
  "Fusion Power":dec("&#x878D;&#x5408;&#x529B;&#x91CF;"),
  "Stealth":dec("&#x9690;&#x5F62;"),
  "researching" : dec("&#x7814;&#x7A76;"),
  "Research Goal" : dec("&#x76EE;&#x6807;"),
  "Show city" : dec("&#x663E;&#x793A;&#x57CE;&#x5E02;"),
  "Build city" : dec("&#x5EFA;&#x8BBE;&#x57CE;&#x5E02;"),
  "Auto explore" : dec("&#x63A2;&#x7D22;"),
  "Unit goto" : dec("&#x53BB;"),
  "Tile info" : dec("&#x5730;&#x56FE;&#x4FE1;&#x606F;"),
  "Sentry" : dec("&#x54E8;&#x5175;"),
  "Wait" : dec("&#x7B49;&#x5F85;"),
  "Disband" : dec("&#x89E3;&#x6563;"),
  "Ok" : dec("&#x597D;"),
  "Cancel" : dec("&#x53D6;&#x6D88;"),
  "Build New City" : dec("&#x5EFA;&#x8BBE;&#x65B0;&#x57CE;&#x5E02;"),
  "What should we call our new city?" : dec("&#x65B0;&#x57CE;&#x5E02;&#x540D;&#x79F0;"),
  "Nations of the World" : dec("&#x4E16;&#x754C;&#x5404;&#x56FD;"),
  "Your cities" : dec("&#x4F60;&#x7684;&#x57CE;&#x5E02;"),
  "Game options" : dec("&#x6E38;&#x620F;&#x8BBE;&#x7F6E;")




  }
  }

};


/**************************************************************************
 Initialize i18n
**************************************************************************/
function init_i18n()
{
  lang = get_language();


  if (!is_i18n_init) {

    if (lang == 'cn') {
      // created with https://github.com/i18next/i18next-gettext-converter
      $.ajax({
          async: false,
          url: "/translations/zh_CN.js",
          dataType: "script"
      });
      freeciv_strings['cn']['translation'] = $.extend(freeciv_strings['cn']['translation'], lang_zn);
    }


    i18next.init({
      lng: lang,
      debug: (location.host == 'localhost'),
      resources: freeciv_strings, function(err, t) {
      // initialized and ready to go!
      }
    });
    is_i18n_init = true;
  }
  if (lang == 'cn') {
    $("#freeciv_logo").css("background","#444 url(/static/images/brand_cn.png)");
    $("#freeciv_logo").css("width","213px");
    //$("#freeciv_logo").css("margin-top","30px");

    $('body').css("font-size","115%");
    if (is_small_screen()) {
      $('#tabs').css("font-size","90%");
      $(".ui-tabs-anchor").css("padding", "3px");
    }

    $("#start_game_button").text(i18next.t('start_game'));
    $("#load_game_button").text(i18next.t('load_game'));
    $("#pick_nation_button").text(i18next.t('pick_nation'));
    $("#your_cities").text(i18next.t("Your cities"))
    $("#game_options").text(i18next.t("Game options"))

    $("#pregame_settings_button").hide();
    //$("#pregame_buttons").css("margin-top", "40px");
    //$("#pregame_options").css("background", "black");
    $("#tech_color_help").hide();

    $("#map_tab").children().first().first().text(i18next.t("map"));
    $("#civ_tab").children().first().first().text(i18next.t("government"));
    $("#tech_tab").children().first().first().text(i18next.t("research"));
    $("#players_tab").children().first().first().text(i18next.t("nations"));
    $("#cities_tab").children().first().first().text(i18next.t("cities"));
    $("#opt_tab").children().first().first().text(i18next.t("options"));
    $("#hel_tab").children().first().first().text(i18next.t("help"));

    $("#revolution_button").text(i18next.t("Revolution"));
    $("#taxrates_button").text(i18next.t("Tax Rates"));
    $("#wonders_report").text(i18next.t("Wonders"));
    $("#top_cities_report").text(i18next.t("Top _Five Cities"));
    $("#demography_report").text(i18next.t("_Demographics"));
    $("#spaceship_report").text(i18next.t("_Spaceship"));


  }



}


/**************************************************************************
  Determine Freeciv-web language.
**************************************************************************/
function get_language()
{
  var url = document.location.href;
  if (url.indexOf("localhost") >= 0 || url.indexOf("wenming.io") >= 0) {
    return "cn";
  } else {
    return "en";
  }

}
