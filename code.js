var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["2607bbf4-2359-43e3-9b17-98ec41711cd1","04b78540-d6df-453f-b182-032a8ff16c55","6305015a-7c95-490e-bcbe-7cca6e1019a3","7aac9e8a-07bc-441a-9220-8485c51e23af","ddcfea62-58ed-476a-8ef9-1459c0929be9","2e5b8e05-f526-4a83-b7b2-54ada3746d6e","c88b923a-6817-49a4-83ac-3077077ab7b2","5640ed0f-1760-4661-9c7c-ac380a5b2ca0","762c46d4-80ab-4884-b2e9-fa87c7b78b44","eaba1fb5-a167-475b-9dd3-57df86e0aa39"],"propsByKey":{"2607bbf4-2359-43e3-9b17-98ec41711cd1":{"name":"background","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"bBjdh83Mq2o60a4ldiSiQpBTBfur_C7U","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/2607bbf4-2359-43e3-9b17-98ec41711cd1.png"},"04b78540-d6df-453f-b182-032a8ff16c55":{"name":"sword","sourceUrl":null,"frameSize":{"x":394,"y":394},"frameCount":4,"looping":true,"frameDelay":12,"version":"H6prmb_DFNV0jLT1XM_E8IixJv3EBTBQ","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":788,"y":788},"rootRelativePath":"assets/04b78540-d6df-453f-b182-032a8ff16c55.png"},"6305015a-7c95-490e-bcbe-7cca6e1019a3":{"name":"bomb","sourceUrl":null,"frameSize":{"x":400,"y":444},"frameCount":1,"looping":true,"frameDelay":12,"version":"vhaG95ukBhQnXyH5CqBioLDahgjDfsGP","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":444},"rootRelativePath":"assets/6305015a-7c95-490e-bcbe-7cca6e1019a3.png"},"7aac9e8a-07bc-441a-9220-8485c51e23af":{"name":"fruit2","sourceUrl":null,"frameSize":{"x":420,"y":341},"frameCount":1,"looping":true,"frameDelay":12,"version":"euGzybxjuJhyER5TAr.5QG5N4igM_l6m","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":420,"y":341},"rootRelativePath":"assets/7aac9e8a-07bc-441a-9220-8485c51e23af.png"},"ddcfea62-58ed-476a-8ef9-1459c0929be9":{"name":"fruit3","sourceUrl":null,"frameSize":{"x":250,"y":569},"frameCount":1,"looping":true,"frameDelay":12,"version":"4IYuqU94TrXpiptL0Ci1fOhNRctJfKXu","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":280,"y":637},"rootRelativePath":"assets/ddcfea62-58ed-476a-8ef9-1459c0929be9.png"},"2e5b8e05-f526-4a83-b7b2-54ada3746d6e":{"name":"fruit4","sourceUrl":null,"frameSize":{"x":400,"y":510},"frameCount":1,"looping":true,"frameDelay":12,"version":"4Sz2ECqnP7S65zvbRPSY7g80tqp7Z_RX","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":510},"rootRelativePath":"assets/2e5b8e05-f526-4a83-b7b2-54ada3746d6e.png"},"c88b923a-6817-49a4-83ac-3077077ab7b2":{"name":"fruit5","sourceUrl":null,"frameSize":{"x":450,"y":406},"frameCount":1,"looping":true,"frameDelay":12,"version":"felK6GfqVPFlVdGTCXWS4VobwpTrKVt9","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":450,"y":406},"rootRelativePath":"assets/c88b923a-6817-49a4-83ac-3077077ab7b2.png"},"5640ed0f-1760-4661-9c7c-ac380a5b2ca0":{"name":"game over","sourceUrl":"assets/api/v1/animation-library/gamelab/wZWNaEUr6KGawJDGuiwH.tDqkf4X3qSe/category_video_games/textGameOver.png","frameSize":{"x":412,"y":78},"frameCount":1,"looping":true,"frameDelay":2,"version":"wZWNaEUr6KGawJDGuiwH.tDqkf4X3qSe","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":412,"y":78},"rootRelativePath":"assets/api/v1/animation-library/gamelab/wZWNaEUr6KGawJDGuiwH.tDqkf4X3qSe/category_video_games/textGameOver.png"},"762c46d4-80ab-4884-b2e9-fa87c7b78b44":{"name":"game Ready","sourceUrl":"assets/api/v1/animation-library/gamelab/plOmgtOBGPyQ.xCGlkLSCQ8RzDoTR3LI/category_video_games/textGetReady.png","frameSize":{"x":400,"y":73},"frameCount":1,"looping":true,"frameDelay":2,"version":"plOmgtOBGPyQ.xCGlkLSCQ8RzDoTR3LI","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":73},"rootRelativePath":"assets/api/v1/animation-library/gamelab/plOmgtOBGPyQ.xCGlkLSCQ8RzDoTR3LI/category_video_games/textGetReady.png"},"eaba1fb5-a167-475b-9dd3-57df86e0aa39":{"name":"fruit1","sourceUrl":null,"frameSize":{"x":350,"y":419},"frameCount":1,"looping":true,"frameDelay":12,"version":"i5FmRV4XMg_ab6McGd2R3oxcbHEyaoha","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":350,"y":419},"rootRelativePath":"assets/eaba1fb5-a167-475b-9dd3-57df86e0aa39.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var background = createSprite(200, 200);
background.setAnimation("background");

var sword = createSprite(100, 300);
sword.setAnimation("sword");
sword.scale = 0.25;

var fruitGroup = createGroup();
var bombGroup = createGroup();

var score = 0;
gameState = "start";

var gameready = createSprite(200, 200);
gameready.setAnimation("game Ready");
var gameover = createSprite(200, 175);
gameover.setAnimation("game over");
gameover.visible = false;

function Score() {
  if (sword.isTouching(fruitGroup)) {
    playSound("assets/category_swish/arrow_fly_pass_by_1.mp3", false);
    score = score+1;
    fruitGroup.destroyEach();
  }
}

function GameOver() {
  if (sword.isTouching(bombGroup)) {
    gameState = "end";
    playSound("assets/category_explosion/8bit_explosion.mp3", false);
    fruitGroup.destroyEach();
    bombGroup.destroyEach();
  }
}

function SpawnFruits() {
  if (World.frameCount%45 === 0) {
    
    var fruit = createSprite(random(25,375,-10));
    fruit.setAnimation('fruit'+randomNumber(1, 5));
    fruit.scale = 0.20;
    fruit.velocityY = 10+(score/6);
    
    fruitGroup.add(fruit);
     }
  
  }

function SpawnBomb() {
  if (World.frameCount%83 === 0) {
    
    var bomb = createSprite(random(25,375,-10));
    bomb.setAnimation("bomb");
    bomb.scale = 0.20;
    bomb.velocityY = 10+score/10;
    
    bombGroup.add(bomb);
     }
  
  }

function draw() {
  
  console.log(World.frameCount)
  drawSprites();

  if (gameState==="start") {
    gameready.visible = true;
    gameover.visible = false;
    sword.visible = false;
    
    if (World.frameCount%50===0) {
     gameState = "play";
     gameready.visible = false;
     sword.visible = true;
    }
    
  }
  
  if (gameState==="play") {
    
  sword.visible = true;
  sword.x = World.mouseX;
  sword.y = World.mouseY;
  
  SpawnFruits();
  SpawnBomb();
  Score();
  GameOver();
  
  textSize(30);
  fill("white");
  text("score:"+score, 300, 30);
  }
  
  if (gameState==="end") {
    sword.visible = false;
    gameover.visible = true;
    
    textSize(30);
    fill("white");
    text("score:"+score, 150, 250);
    fill("white");
    text("press r to restart", 100, 280);
    
    if (keyDown("r")) {
      gameState = "start";
      score = 0;
      fruitGroup.destroyEach();
      bombGroup.destroyEach();
    }
  }
  
  
}










// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
