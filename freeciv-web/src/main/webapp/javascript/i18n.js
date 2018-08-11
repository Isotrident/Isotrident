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

var freeciv_strings = {
en: {
  translation: {
  "start_game": "Start Game",
  "customize_game" : "Customize game",
  "player_name" : "Player name",
  "turn_done" : "Turn Done",
  "messages" : "Messages",
  "world_map" : "World Map",
  "units" : "Units"
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
  "pick_nation" : dec("&#x56FD;&#x5BB6;"),
  "welcome_text" : dec("&#x6B22;&#x8FCE;&#x6765;&#x5230;&#x6587;&#x660E;"),
  "map" : dec("&#x5730;&#x56FE;"),
  "government" : dec("&#x653F;&#x5E9C;"),
  "research" : dec("&#x7814;&#x7A76;"),
  "nations" : dec("&#x56FD;&#x5BB6;"),
  "cities" : dec("&#x57CE;&#x5E02;"),
  "options" : dec("&#x8BBE;&#x7F6E;"),
  "help" : dec("&#x5E2E;&#x5E2E;&#x6211;"),
  "turn_done" : dec("&#x5B8C;&#x6210;&#x4E86;"),
  "messages" : dec("&#x6D88;&#x606F;"),
  "world_map" : dec("&#x4E16;&#x754C;&#x5730;&#x56FE;"),
  "units" : dec("&#x5355;&#x4F4D;")
  }
  }

};


/**************************************************************************
 Initialize i18n
**************************************************************************/
function init_i18n()
{
  lang = get_language();


  i18next.init({
    lng: lang,
    debug: true,
    resources: freeciv_strings, function(err, t) {
    // initialized and ready to go!
    }
  });

  if (lang == 'cn') {
    $("#freeciv_logo").css("background","#444 url(/static/images/brand_cn.png)");
    $("#freeciv_logo").css("width","213px");
    //$("#freeciv_logo").css("margin-top","30px");

    $('body').css("font-size","110%");

    $("#start_game_button").text(i18next.t('start_game'));
    $("#load_game_button").text(i18next.t('load_game'));
    $("#pick_nation_button").text(i18next.t('pick_nation'));
    $("#pregame_settings_button").hide();
    //$("#pregame_buttons").css("margin-top", "40px");
    //$("#pregame_options").css("background", "black");

    $("#map_tab").children().first().first().text(i18next.t("map"));
    $("#civ_tab").children().first().first().text(i18next.t("government"));
    $("#tech_tab").children().first().first().text(i18next.t("research"));
    $("#players_tab").children().first().first().text(i18next.t("nations"));
    $("#cities_tab").children().first().first().text(i18next.t("cities"));
    $("#opt_tab").children().first().first().text(i18next.t("options"));
    $("#hel_tab").children().first().first().text(i18next.t("help"));


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
