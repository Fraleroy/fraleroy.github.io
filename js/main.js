// Functions for each action-command.

function aide(){
  return "<h2><span style=\"color:#eb926d;\">Aide :</span></h2><table>\
  <tr>\
    <td>entièrement</td>\
    <td>Renvoie tout ce qu'il faut savoir !</td>\
  </tr>\
  <tr>\
    <td>à-propos</td>\
    <td>A propos de moi.</td>\
  </tr>\
  <tr>\
    <td>savoir-faire</td>\
    <td>Mes \"skills\".</td>\
  </tr>\
  <tr>\
    <td>trad-mc</td>\
    <td>[Projet] : Traduction de Minecraft en Bourguignon-Morvandiau du Nord.</td>\
  </tr>\
  <tr>\
    <td>rickroll</td>\
    <td>Never Gonna Give You Up.</td>\
  </tr></table>";
  /*
  <tr>\
    <td>contact</td>\
    <td>How to get in touch with John Smith</td>\
  </tr>\
  <tr>\
    <td>cv</td>\
    <td>Download John Smith's CV</td>\
  </tr>\
  */
}
/*
function contact(){
  return "<h2><span style=\"color:#cc6666;\">Contact:</span></h2><table>\
  <tr>\
    <td>Email</td>\
    <td><a href=\"mailto:john.smith@emailprovider.com\">john.smith@emailprovider.com</a></td>\
  </tr>\
  <tr>\
    <td>Telephone</td>\
    <td><a href=\"tel:+45-657-56234\">+45-657-56234</a></td>\
  </tr>\
  <tr>\
    <td>Address</td>\
    <td>John Smith</td>\
  </tr>\
  <tr>\
    <td> </td>\
    <td>205 Autumn Street</td>\
  </tr>\
  <tr>\
    <td> </td>\
    <td>5472</td>\
  </tr>\
  <tr>\
    <td> </td>\
    <td>London</td>\
  </tr>\
  <tr>\
    <td> </td>\
    <td>UK</td>\
  </tr></table>";
}
*/
function savoirfaire(){
  return "<h2><span style=\"color:#81a2be;\">Savoir-faire :</span></h2><table>\
  <tr>\
    <td>Photoshop</td>\
    <td>▰▰▰▰▰▰▱▱▱▱ 60%</td>\
  </tr>\
  <tr>\
    <td>HTML</td>\
    <td>▰▰▰▰▰▱▱▱▱▱ 50%</td>\
  </tr>\
  <tr>\
    <td>Premiere Pro</td>\
    <td>▰▰▰▰▰▰▰▰▱▱ 80%</td>\
  </tr>\
  </table>";
}

function apropos(){
  return "<p>Je suis un futur Ingénieur Informaticien !</p>";
}
/*
function cv(){
  return "<span style=\"color:#8abeb7;\"><h2>CV:</h2></span><p>\tDownload from <a href=\"src/cv.pdf\" target=\"_blank\" style=\"text-decoration: underline;\">here</a>.</p>";
}
*/
function credits(){
  return "<p>Built by <a href=\"https://www.github.com/CedArctic\" target=\"_blank\"><i class=\"fab fa-github\"></i> CedArctic</a></p>";
}

function tradmc(){
  return "<span style=\"color: #b5bd68;\"><h2>Trad MC :</h2></span><ul>\
  <li><p>Une traduction de Minecraft en patois Bourguignon-Morvandiau du Nord : <a href=\"https://github.com/Fraleroy/bmn_fr\" target=\"_blank\"><i class=\"fab fa-github\"></i> bmn_fr</a></p></li>\
  </ul>";
}

function rickroll(){
  return "<p>We're no strangers to love<br>\
    You know the rules and so do I<br>\
    A full commitment's what I'm thinking of<br>\
    You wouldn't get this from any other guy<br>\
    <br>\
    I just wanna tell you how I'm feeling<br>\
    Gotta make you understand<br>\
    <br>\
    Never gonna give you up<br>\
    Never gonna let you down<br>\
    Never gonna run around and desert you<br>\
    Never gonna make you cry<br>\
    Never gonna say goodbye<br>\
    Never gonna tell a lie and hurt you<br>\
    <br>\
    We've known each other for so long<br>\
    Your heart's been aching, but<br>\
    You're too shy to say it<br>\
    Inside, we both know what's been going on<br>\
    We know the game and we're gonna play it<br>\
    <br>\
    And if you ask me how I'm feeling<br>\
    Don't tell me you're too blind to see<br>\
    <br>\
    Never gonna give you up<br>\
    Never gonna let you down<br>\
    Never gonna run around and desert you<br>\
    Never gonna make you cry<br>\
    Never gonna say goodbye<br>\
    Never gonna tell a lie and hurt you<br>\
    <br>\
    Never gonna give you up<br>\
    Never gonna let you down<br>\
    Never gonna run around and desert you<br>\
    Never gonna make you cry<br>\
    Never gonna say goodbye<br>\
    Never gonna tell a lie and hurt you<br>\
    <br>\
    (Ooh, give you up)<br>\
    (Ooh, give you up)<br>\
    Never gonna give, never gonna give<br>\
    (Give you up)<br>\
    Never gonna give, never gonna give<br>\
    (Give you up)<br>\
    <br>\
    We've known each other for so long<br>\
    Your heart's been aching, but<br>\
    You're too shy to say it<br>\
    Inside, we both know what's been going on<br>\
    We know the game and we're gonna play it<br>\
    <br>\
    I just wanna tell you how I'm feeling<br>\
    Gotta make you understand<br>\
    <br>\
    Never gonna give you up<br>\
    Never gonna let you down<br>\
    Never gonna run around and desert you<br>\
    Never gonna make you cry<br>\
    Never gonna say goodbye<br>\
    Never gonna tell a lie and hurt you<br>\
    <br>\
    Never gonna give you up<br>\
    Never gonna let you down<br>\
    Never gonna run around and desert you<br>\
    Never gonna make you cry<br>\
    Never gonna say goodbye<br>\
    Never gonna tell a lie and hurt you<br>\
    <br>\
    Never gonna give you up<br>\
    Never gonna let you down<br>\
    Never gonna run around and desert you<br>\
    Never gonna make you cry<br>\
    Never gonna say goodbye<br>\
    Never gonna tell a lie and hurt you</p>";
}

// Main Function
function commandProcessor(e){

  //Check if the enter key is pressed
  if(e.keyCode == 13){

    //Clear the area where info will be printed
    document.getElementById('injected').innerHTML= "";

    //Get user input
    var txtInput = document.getElementById('txtBox').value;

    //Select what info to print according to command
    if(txtInput == "aide"){
      document.getElementById('injected').innerHTML=aide();
    }else if (txtInput=="entièrement") {
      document.getElementById('injected').innerHTML=apropos() + "\n\n\n" + savoirfaire() + "\n\n\n" + links(); // + "\n\n\n" + contact() + "\n\n\n" + cv()
    }else if (txtInput == "à-propos") {
      document.getElementById('injected').innerHTML=apropos();
    }/*else if (txtInput == "contact") {
      document.getElementById('injected').innerHTML=contact();
    }else if (txtInput == "cv") {
      document.getElementById('injected').innerHTML=cv();
    }*/else if (txtInput=="savoir-faire") {
      document.getElementById('injected').innerHTML=skills();
    }else if (txtInput=="trad-mc") {
      document.getElementById('injected').innerHTML=tradmc();
    }else if (txtInput == "rickroll") {
      var win = window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", '_blank');
      win.focus();
      document.getElementById('injected').innerHTML=rickroll();
    }else if (txtInput == "crédits") {
      document.getElementById('injected').innerHTML=credits();
    }else{
      document.getElementById('injected').innerHTML = aide();
    }

    //Clear input text box
    document.getElementById('txtBox').value= "";
  }
}
