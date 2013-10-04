ig.module( 'game.levels.test1' )
.requires( 'impact.image','game.entities.example','game.entities.target' )
.defines(function(){
LevelTest1=/*JSON[*/{"entities":[{"type":"EntityExample","x":36,"y":102},{"type":"EntityExample","x":88,"y":102},{"type":"EntityTarget","x":8,"y":4},{"type":"EntityTarget","x":28,"y":20}],"layer":[{"name":"collision","width":30,"height":20,"linkWithCollision":false,"visible":1,"tilesetName":"","repeat":false,"preRender":false,"distance":"1","tilesize":8,"foreground":false,"data":[[1554,1554,1554,1554,1554,1554,1554,1554,1554,1554,1554,1554,1554,1554,1554,1554,1554,1554,1554,1554,1554,1554,1554,1554,1554,1554,1554,1554,1554,1554],[1554,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1554],[1554,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1554],[1554,1643,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1554],[1554,1643,1643,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1554],[1554,0,1643,1643,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1554],[1554,0,0,1643,1643,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1554],[1554,0,0,0,0,0,1643,1643,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1554],[1554,0,0,0,0,0,1643,1643,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1554],[1554,0,0,0,0,0,0,0,1643,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1554],[1554,0,0,0,0,0,0,0,1643,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1554],[1554,0,0,0,0,0,0,0,0,1643,0,0,0,0,0,0,0,0,1643,0,0,0,0,0,0,0,0,0,0,1554],[1554,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1554],[1554,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1554],[1554,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1554],[1554,0,0,0,1643,1643,1643,1643,1643,1643,1643,1643,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1554],[1554,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1554],[1554,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1554],[1554,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1643,1643,1643,1643,1643,1643,0,0,0,0,0,0,1554],[1554,1554,1554,1554,1554,1554,1554,1554,1554,1554,1554,1554,1554,1554,1554,1554,1554,1554,1554,1554,1554,1554,1554,1554,1554,1554,1554,1554,1554,1554]]},{"name":"main","width":30,"height":20,"linkWithCollision":false,"visible":1,"tilesetName":"media/04b03.font.png","repeat":false,"preRender":false,"distance":"1","tilesize":8,"foreground":false,"data":[[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],[2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[2,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[2,3,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[2,0,3,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[2,0,0,3,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[2,0,0,0,0,0,8,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[2,0,0,0,0,0,3,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[2,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[2,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[2,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,2],[2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[2,0,0,0,3,3,3,3,3,3,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,3,3,3,3,0,0,0,0,0,0,2],[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]]}]}/*]JSON*/;
LevelTest1Resources=[new ig.Image('media/04b03.font.png')];
});