
exports.action = function(data, callback, config, SARAH){
  
  if (!data || !data.body){ return callback({}); }
  
  var info = '';
  var menu = data.body['3'].trim();
  var btn  = data.body['4'];
  console.log(menu, btn, data.body);
  if (menu == 'Blink' && btn == 1){
    console.log('blink');
    SARAH.call('blink', {'color':'FF0000'});
  } 
  else if (menu == 'Blink' && btn == 2){
    SARAH.call('blink', {'color':'FF00FF'});
  }
  else if (menu == 'Blink' && btn == 3){
    SARAH.call('blink', {'color':'0000FF'});
  }
  else if (menu == 'Blink' && btn == 4){
    SARAH.call('blink', {'color':'000000'});
  }
  // Callback
  var msg  = '{ "1" : "Bouton 1 ->\\n\\nBouton 2 ->\\n'+info+'\\n\\nBouton 3 ->" }';
  callback({'tts' : msg});
} 
