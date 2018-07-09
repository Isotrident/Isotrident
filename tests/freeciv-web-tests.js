/********************************************************************** 
 CasperJS tests for Freeciv-web.
***********************************************************************/

casper.options.waitTimeout = 20000;
casper.options.viewportSize = {width: 1024, height: 768};

casper.on('remote.message', function(message) {
    this.echo('JavaScript console: ' + message);
});

casper.test.begin('Test of Tomcat8 running on localhost port 8080.', 2, function suite(test) {
    casper.start("http://localhost:8080/", function() {
        test.assertHttpStatus(200);
        test.assertTitleMatch(/Freeciv-web/, 'Freeciv-web title is present');
    });

    casper.run(function() {
        test.done();
    });
});


casper.test.begin('Test of Freeciv-proxy on port 7001.', 2, function suite(test) {
    casper.start("http://localhost:7001/status", function() {
        test.assertHttpStatus(200);
        test.assertTextExists('Freeciv WebSocket Proxy Status', 
                              'Test that Freeciv-proxy contains expected text.');
    });

    casper.run(function() {
        test.done();
    });
});


casper.test.begin('Test of Freeciv-web frontpage on localhost port 80 (nginx).', 3, function suite(test) {
    casper.start("http://localhost", function() {});

    casper.waitForText("Freeciv-web", function() {
       test.assertHttpStatus(200);
       test.assertTitleMatch(/Freeciv-web/, 'Freeciv-web title is present');
       test.assertExists('#single-button');
    });

    casper.run(function() {
        test.done();
    });
});

casper.test.begin('Test that game list is responding.', 4, function suite(test) {
    casper.start("http://localhost/game/list", function() {
        test.assertHttpStatus(200);
        test.assertExists('#single-player-tab', 'Test that game-list contains expected tabs.');
        test.assertExists('#multi-player-tab', 'Test that game-list contains expected tabs.');
        test.assertExists('#play-by-email-tab', 'Test that game-list contains expected tabs.');
    });

    casper.run(function() {
        test.done();
    });
});


casper.test.begin('Test of Freeciv-web frontpage', 3, function suite(test) {
    casper.start("http://localhost", function() {
      casper.wait(5000, function() {
        test.assertHttpStatus(200);
        test.assertTitleMatch(/Freeciv-web/, 'Freeciv-web title is present');
        test.assertExists('#single-button');
      });
    });

    casper.run(function() {
        test.done();
    });
});

casper.test.begin('Test starting new Freeciv-web game', 10, function suite(test) {
    casper.start("http://localhost/webclient/?action=new", function() {
        test.assertHttpStatus(200);
        test.assertTitleMatch(/Freeciv-web/, 'Freeciv-web title is present');
    });

    casper.waitForSelector('#username_req', function() {
        this.echo("Captured screenshot to be saved as screenshot-1.png");
        this.capture('screenshot-1.png', undefined, {
          format: 'png',
          quality: 100 
        });

    });

    casper.then(function() {
      this.echo("Filling in username in new game dialog.");
      this.sendKeys('#username_req', 'CasperJS', {reset : true});
    });

    casper.thenEvaluate(function() {
      /* Starting new game automatically from Javascript.*/
      dialog_close_trigger = "button";
      if (validate_username()) {
        $("#dialog").dialog('close');
        setTimeout("pregame_start_game();", 3000);
      }
    });

    casper.waitForText("World map", function() {
      this.echo("Captured screenshot to be saved as screenshot-2.png");
      this.capture('screenshot-2.png', undefined, {
        format: 'png',
        quality: 100 
      });
     });

    casper.then(function() {
      this.echo("Checking that JavaScript objects in browser memory are as expected.");

      test.assertEval(function() {
            return tileset['u.settlers'].length == 5 && tileset['f.shield.england'].length == 5;
      }, "Checks that tileset contains settlers and english flag.");

      test.assertEval(function() {
            return map['xsize'] > 0 
            && map['ysize'] > 0 
            && tiles[5]['x'] >= 0 
            && tiles[5]['y'] >= 0
            && tiles[5]['terrain'] != null;
      }, "Checks properties of map and tiles.");


      test.assertEval(function() {
            return techs[1] != null 
            && techs[1]['name'] != null
            && techs[1]['name'].length > 0
            && techs[1]['num_reqs'] > 0
            && techs[1]['req'].length == 2 
            && techs[1]['req'][0] > 0 
            && techs[1]['req'][1] > 0;
      }, "Checks some properties of the tech object.");

      test.assertEval(function() {
            return players[0] != null && players[0]['name'].length > 0 
            && players[0]['username'].length > 0
            && players[0]['playerno'] >= 0
            && nations[players[0]['nation']]
            && players[0]['love'].length > 0
            && players[0]['is_ready'] == true
      }, "Checks some properties of the player object.");

      test.assertEval(function() {
            return game_info['turn'] == 1 
            && game_info['year'] == -4000
            && game_info['timeout'] == 0
            && game_info['gold'] > 0
            && game_info['aifill'] > 0;
      }, "Checks some properties of the game_info object.");

      test.assertEval(function() {
            return server_settings['size']['val'] > 0;
      }, "Checking some server settings.");

      test.assertEval(function() {
            return unit_types[0]['name'].length > 0
                   && unit_types[0]['helptext'].length > 0
                   && unit_types[0]['graphic_str'].length > 0
      }, "Checks some properties of the unit_types object.");

  
      test.assertEval(function() {
            return nations[0]['adjective'].length > 0
            && nations[0]['graphic_str'].length > 0;
      }, "Checks some properties of the nations object.");

    });

    casper.run(function() {
        test.done();
    });
});

casper.test.begin('Test pregame settings dialog ruleset switcher',
                  3, function suite(test) {
  casper.start("http://localhost/webclient/?action=new");

  casper.waitForSelector('#username_req', function() {
    this.echo("Filling in username in new game dialog.");
    this.sendKeys('#username_req', 'CasperJS');

    this.echo("Selecting to customize game in new game dialog.");
    this.clickLabel("Customize Game");
  });

  casper.waitForSelector('#pregame_settings_button', function() {
    this.echo("Opening pre game settings dialog.");
    this.click('#pregame_settings_button');
  });

  casper.waitForSelector('#ruleset', function() {
    this.echo("Loading webperimental.");
  });

  casper.thenEvaluate(function() {
    /* Change to webperimental. */
    $('#ruleset').val('webperimental').change();
  });

  casper.waitFor(
        function() {
          return this.evaluate(function() {
            return "Webperimental" == ruleset_control['name'];
          });
        },
        function() {
          test.pass("Loaded webperimental.");
        });

  casper.wait(1000, function() {
    this.echo("Loading civ2civ3.");
  });

  casper.thenEvaluate(function() {
    /* Change to civ2civ3. */
    $('#ruleset').val('civ2civ3').change();
  });

  casper.waitFor(
        function() {
          return this.evaluate(function() {
            return "Civ2Civ3 ruleset" == ruleset_control['name'];
          });
        },
        function() {
          test.pass("Loaded civ2civ3.");
        });

  casper.wait(1000, function() {
    this.echo("Loading classic.");
  });

  casper.thenEvaluate(function() {
    /* Change to classic. */
    $('#ruleset').val('classic').change();
  });

  casper.waitFor(
        function() {
          return this.evaluate(function() {
            return "Classic ruleset" == ruleset_control['name'];
          });
        },
        function() {
          test.pass("Loaded classic.");
        });

  casper.run(function() {
    test.done();
  });
});

casper.test.begin('Test auto generated manual text extraction.',
                  1, function suite(test) {
  casper.start("http://localhost/man/classic7.html", function() {
    test.assertHttpStatus(200);
  });

  casper.run(function() {
    test.done();
  });
});
